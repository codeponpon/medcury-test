function songDecoder(str) {
  return str.toUpperCase().replace(/(WUB)+/g, ' ').trim();
}

module.exports = songDecoder;
