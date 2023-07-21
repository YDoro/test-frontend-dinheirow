export interface MarvelCharacterResponse {
  code?: number;
  status?: string;
  copyright?: string;
  attributionText?: string;
  attributionHTML?: string;
  data?: MarvelCharacterDataContainer;
  etag?: string;
}
interface MarvelCharacterDataContainer {
  offset?: number;
  limit?: number;
  total?: number;
  count?: number;
  results?: Array<MarvelCharacter>;
}
interface MarvelCharacter {
  id?: number;
  name?: string;
  description?: string;
  modified?: Date;
  resourceURI?: string;
  urls?: Array<MarvelUrl>;
  thumbnail?: MarvelImage;
  comics?: MarvelComicList;
  stories?: MarvelStoryList;
  events?: MarvelEventList;
  series?: MarvelSeriesList;
}
interface MarvelUrl {
  type?: string;
  url?: string;
}

interface MarvelImage {
  path?: string;
  extension?: string;
}
interface MarvelComicList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: Array<MarvelComicSummary>;
}
interface MarvelComicSummary {
  resourceURI?: string;
  name?: string;
}
interface MarvelStoryList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: Array<MarvelStorySummary>;
}
interface MarvelStorySummary {
  resourceURI?: string;
  name?: string;
  type?: string;
}
interface MarvelEventList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: Array<MarvelEventSummary>;
}
interface MarvelEventSummary {
  resourceURI?: string;
  name?: string;
}
interface MarvelSeriesList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: Array<MarvelSeriesSummary>;
}
interface MarvelSeriesSummary {
  resourceURI?: string;
  name?: string;
}
