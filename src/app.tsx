const { Player } = Spicetify;

import * as rym from './rym';

import { sleep, log } from './utils';

let lastTrack: string;

let ratingContainer: HTMLAnchorElement;
let infoContainer: HTMLElement | null;

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
  const id = Player.data.playback_id;
  if (id == lastTrack) return;

  // current playing song name & artist container
  infoContainer = document.querySelector('div.main-trackInfo-container');
  if (!infoContainer) return;

  clearRating();

  lastTrack = id;

  // get track information
  const { title, album_title, artist_name } = Player.data.track.metadata;
  if (!title || !album_title || !artist_name) return;

  // get rating & show under track
  try {
    const rating = await rym.fetchRYMData(title, artist_name, album_title);
    if (id != lastTrack) {
      // changed song already -_-
      return;
    }

    log('Got rating', rating);

    // create rating element
    ratingContainer = document.createElement('a');
    ratingContainer.className = 'ellipsis-one-line';
    ratingContainer.style.color = 'var(--spice-extratext)';
    ratingContainer.style.fontSize = '11px';
    if (!rating.enoughData) ratingContainer.style.opacity = '0.5';

    ratingContainer.href = rating.link;

    ratingContainer.innerText = `${rating.rating} (${rating.ratings} ratings)`;

    if (rating.ratingType != 'Single')
      ratingContainer.innerText += ` (${rating.ratingType.toLowerCase()})`;

    if (rating.bolded) ratingContainer.style.fontWeight = 'bold';

    infoContainer.appendChild(ratingContainer);
  } catch (e: any) {
    if (e instanceof rym.ApiError) {
      log('Failed to get RYM rating:', e.message);
      log(e);
    } else {
      log('Unknown error', e);
    }
  }
}

export default async function main() {
  while (!Spicetify.CosmosAsync || !Spicetify.showNotification)
    await sleep(500);

  Player.addEventListener('songchange', update);
  Player.addEventListener('onprogress', update);
}
