import cheerio from 'cheerio';

import { fetch, log, matchLower } from './utils';

export class ApiError extends Error {
  constructor(message: string) {
    super(message);
  }
}

interface Song {
  title: string;
  artist: string;
  album: string;
}

async function getArtistPage(song: Song) {
  // use duckduckgo to find the artist page since it's more accurate than rym's search bar
  const url = `https://duckduckgo.com/?q=%5Csite%3Arateyourmusic.com%20${encodeURIComponent(song.artist)}`;
  const res = await fetch(url);

  // parse body to get redirect url
  const reg = /\?uddg=(.*?)&rut=/;
  const rymUrl = decodeURIComponent(res.body.match(reg)[1]);

  return rymUrl;
}

function parseRYMData($: any, elem: any) {
  const link = elem.find('a').first().attr('href');
  const bolded = elem.children().first().is('b');

  const release = elem.parent().parent();

  const ratingElem = release.find('.disco_avg_rating').first();
  const enoughData = $(ratingElem).hasClass('enough_data');
  const rating = ratingElem.text();
  const ratings = release.find('.disco_ratings').first().text();

  return {
    link: `https://rateyourmusic.com${link}`,
    ratings,
    enoughData,
    rating,
    bolded,
  };
}

async function getRating(rymUrl: string, song: Song) {
  const res = await fetch(rymUrl);

  const $ = cheerio.load(res.body);

  const rating_types = [
    ['#disco_type_i', 'Single', song.title],
    ['#disco_type_s', 'Album', song.album],
    ['#disco_type_e', 'EP', song.album],
    ['#disco_type_m', 'Mixtape', song.album],
    ['#disco_type_c', 'Compilation', song.album],
    ['#disco_type_l', 'Live Album', song.album],
  ];

  for (const [selector, ratingType, search] of rating_types) {
    const matches = $(selector)
      .find('div.disco_mainline')
      .filter((i, e) => matchLower($(e).text().trim(), search));

    if (matches.length > 0) {
      return {
        ...parseRYMData($, matches),
        ratingType,
      };
    }
  }

  throw new ApiError("Couldn't find the song or album in the artist's page");
}

export async function fetchRYMData(
  title: string,
  artist: string,
  album: string
) {
  const song: Song = {
    title,
    artist,
    album,
  };

  // fix feat.
  song.title = song.title.split('(feat.)')[0];
  song.title = song.title.split(' - feat.')[0];
  song.title = song.title.split(' feat.')[0];

  // fix remasters
  song.title = song.title.split(' - Remastered')[0];
  song.album = song.album.split(' - Remastered')[0];

  // get artist url
  const rymUrl = await getArtistPage(song);
  log('Got artist page', rymUrl);

  // get rating
  return getRating(rymUrl, song);
}
