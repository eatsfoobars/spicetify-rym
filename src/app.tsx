const { Player } = Spicetify;

import { sleep } from './utils';

const RATE_LIMIT_SECONDS = 15;

let lastTrack: string;
let lastQuery: number;

let ratingContainer: HTMLAnchorElement;
let infoContainer: HTMLElement | null;

async function fetchRYMData(song: string, album: string, artist: string) {
  const params = Object.entries({
    song,
    album,
    artist,
  })
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');

  return Spicetify.CosmosAsync.get(
    `http://localhost:4755/get-rating?${params}`
  );
}

function clearRating() {
  if (infoContainer && ratingContainer) {
    try {
      infoContainer.removeChild(ratingContainer);
    } catch (e) {}
  }
}

async function onProgress() {
  if (!Player.data.playback_id || !Player.data?.track?.metadata) return;

  // check if new song
  if (Player.data.playback_id == lastTrack) return;

  // check rate limit
  const now = Date.now();
  if (now - lastQuery < RATE_LIMIT_SECONDS * 1000) return;

  lastTrack = Player.data.playback_id;
  lastQuery = now;

  // get track information
  const { title, album_title, artist_name } = Player.data.track.metadata;
  if (!title || !album_title || !artist_name) return;

  // current playing song name & artist container
  infoContainer = document.querySelector('div.main-trackInfo-container');
  if (!infoContainer) return;

  clearRating();

  // get rating & show under track
  try {
    const rating = await fetchRYMData(title, album_title, artist_name);
    console.log('rym rating', rating);

    // create rating element
    ratingContainer = document.createElement('a');
    ratingContainer.className = 'ellipsis-one-line';
    ratingContainer.style.color = 'var(--spice-extratext)';
    ratingContainer.style.fontSize = '11px';
    ratingContainer.href = rating.link;

    ratingContainer.innerText = `${rating.rating} (${rating.ratings} ratings)`;
    if (!rating.isSingle) ratingContainer.innerText += ' (a)';
    if (rating.bolded) ratingContainer.style.fontWeight = 'bold';

    infoContainer.appendChild(ratingContainer);
  } catch (e) {
    console.log('failed to get rym rating', e);
  }
}

async function rym() {
  while (!Spicetify.CosmosAsync || !Spicetify.showNotification)
    await sleep(500);

  Player.addEventListener('onprogress', onProgress);
}

export default rym;
