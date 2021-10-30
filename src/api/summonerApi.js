import { handleResponse, handleError } from "./apiUtils";
const baseUrl =
  "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
const apiKey = "RGAPI-f29d84ce-f44c-4cb5-9f96-240bfe968a76";

export function byName(name) {
  // to avoid es-lint error using template literal instead of classic string concatenation
  let url = `${baseUrl}${name}?api_key=${apiKey}`;
  return fetch(url).then(handleResponse).catch(handleError);
}

export function getMatchIds(puuid) {
  let baseUrl =
    "https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/";
  let url = `${baseUrl}${puuid}/ids?start=0&count=20&api_key=${apiKey}`;
  return fetch(url).then(handleResponse).catch(handleError);
}

export function getMatchData(matchId) {
  let baseUrl = "https://americas.api.riotgames.com/lol/match/v5/matches/";
  let url = `${baseUrl}${matchId}?api_key=${apiKey}`;
  return fetch(url).then(handleResponse).catch(handleError);
}
