// nitroguy.json

export type Social = {
  type: string,
  alternameName?: string,
  link?: string,
  address?: string,
  username?: string,
  icon: string
}

export type NitroGuy = {
  socials: { [socialType: string]: Social }
}

// song_data.json

export type Links = {
  [linkType: string]: {
    type: string,
    link: string,
    link2?: string,
  }
}

export type Collection = {
  name: string,
  description?: string,
  releaseDate?: string,
  coverLink?: string,
  streamLinks?: Links,
  isFormalCollection: boolean
}

export type Song = {
  name: string,
  nameParenthesesLinebreak?: boolean,
  description: string,
  releaseDate: string,
  genre: string,
  coverLink: string,
  downloadLinks: Links,
  streamLinks: Links,
  collection: string,
  isrc?: string,
  recordLabel?: string
}

export type CollectionIncludingSongs = {
  name: string,
  songs: { [songName: string]: Song }
  description?: string,
  releaseDate?: string,
  coverLink?: string,
  streamLinks?: Links,
  isFormalCollection: boolean
}

export type SongData = {
  format: {
    releaseDate: string
  },
  collections: { [collectionName: string]: Collection },
  songs: { [songName: string]: Song }
}

export function isSong (listing: Song|Collection): listing is Song
{
  return (listing as Song).collection !== undefined;
}

export function getCollectionsIncludingSongs (collections: { [collectionName: string]: Collection }, songs: { [songName: string]: Song }): { [collectionName: string]: CollectionIncludingSongs }
{
  const collectionsIncludingSongs: { [collectionName: string]: CollectionIncludingSongs } = {};
  for (const collectionName in collections)
  {
    const collection = collections[collectionName];
    collectionsIncludingSongs[collectionName] = {
      name: collection.name,
      songs: {},
      description: collection.description,
      releaseDate: collection.releaseDate,
      coverLink: collection.coverLink,
      streamLinks: collection.streamLinks,
      isFormalCollection: collection.isFormalCollection
    };
  }
  for (const songName in songs)
  {
    const song = songs[songName];
    if (song.collection in collectionsIncludingSongs)
    {
      collectionsIncludingSongs[song.collection].songs[song.name] = song;
    }
  }
  return collectionsIncludingSongs;
}

export function safeName (title: string): string
{
  return title.toLowerCase().replaceAll("(", "").replaceAll(")", "").replaceAll(".", "").replaceAll(" ", "_").replaceAll("&", "-");
}

export function listingLink (listing: Collection|CollectionIncludingSongs|Song): string
{
  return "/" + (isSong(listing) ? "songs" : "collections") + "/" + safeName(listing.name);
}

export function getRealNames (songData: SongData): { [safeName: string]: string }
{
  const realNames: { [safeName: string]: string } = {};
  for (const collectionName in songData.collections)
  {
    const collection = songData.collections[collectionName];
    realNames[safeName(collection.name)] = collection.name;
  }
  for (const songName in songData.songs)
  {
    const song = songData.songs[songName];
    realNames[safeName(song.name)] = song.name;
  }
  return realNames;
}
