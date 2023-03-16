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
    link: string
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
  description: string,
  releaseDate: string,
  genre: string,
  coverLink: string,
  downloadLinks: Links,
  streamLinks: Links,
  collection: string
}

export type SongData = {
  format: {
    releaseDate: string
  },
  collections: { [collectionName: string]: Collection },
  songs: { [songName: string]: Song }
}
