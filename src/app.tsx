const { Player } = Spicetify;

import { sleep } from './utils';

const RATE_LIMIT_SECONDS = 15;

let showedNotification = false;
let lastTrack: string;
let lastQuery: number;

let ratingContainer: HTMLAnchorElement;
let infoContainer: HTMLElement | null;

class ApiError extends Error {
  constructor(message: string) {
    super(message);
  }
}

async function fetchRYMData(song: string, album: string, artist: string) {
  const params = Object.entries({
    song,
    album,
    artist,
  })
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');

  const res = await Spicetify.CosmosAsync.get(
    `http://localhost:4755/get-rating?${params}`
  );

  if (res.error) throw new ApiError(res.message);

  return res;
}

function clearRating() {
  if (infoContainer && ratingContainer) {
    try {
      infoContainer.removeChild(ratingContainer);
    } catch (e) {}
  }
}

async function update() {
  if (!Player.data.playback_id || !Player.data?.track?.metadata) return;

  // check if new song
  if (Player.data.playback_id == lastTrack) return;

  // current playing song name & artist container
  infoContainer = document.querySelector('div.main-trackInfo-container');
  if (!infoContainer) return;

  clearRating();

  // check rate limit
  const now = Date.now();
  if (now - lastQuery < RATE_LIMIT_SECONDS * 1000) return;

  lastTrack = Player.data.playback_id;
  lastQuery = now;

  // get track information
  const { title, album_title, artist_name } = Player.data.track.metadata;
  if (!title || !album_title || !artist_name) return;

  // get rating & show under track
  try {
    const rating = await fetchRYMData(title, album_title, artist_name);
    if (Player.data.playback_id != lastTrack) {
      // changed song already -_-
      return;
    }

    console.log('RYM rating', rating);

    // create rating element
    ratingContainer = document.createElement('a');
    ratingContainer.className = 'ellipsis-one-line';
    ratingContainer.style.color = 'var(--spice-extratext)';
    ratingContainer.style.fontSize = '11px';
    if (!rating.enoughData) ratingContainer.style.opacity = '0.5';
    ratingContainer.href = rating.link;

    ratingContainer.innerText = `${rating.rating} (${rating.ratings} ratings)`;
    if (!rating.isSingle) ratingContainer.innerText += ' (album)';
    if (rating.bolded) ratingContainer.style.fontWeight = 'bold';

    infoContainer.appendChild(ratingContainer);
    showedNotification = false;
  } catch (e: any) {
    if (e instanceof ApiError) {
      console.log('Failed to get RYM rating', e.message);
      showedNotification = false;
    } else {
      console.log('RateYourMusic API not running');

      if (!showedNotification) {
        Spicetify.showNotification('RateYourMusic API not running');
        showedNotification = true;
      }
    }
  }
}

async function rym() {
  while (!Spicetify.CosmosAsync || !Spicetify.showNotification)
    await sleep(500);

  Player.addEventListener('songchange', update);
  Player.addEventListener('onprogress', update);
}

export default rym;
