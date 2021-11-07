import { handleResponse, handleError } from "./apiUtils";
const baseUrl =
  "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
const apiKey = "RGAPI-e0c88b9c-8172-4bd0-915c-664741f89cd0";
//const apiKey = process.env.REACT_APP_RIOT_API;

// Get summoner data given a name
export function byName(name) {
  // to avoid es-lint error using template literal instead of classic string concatenation
  let url = `${baseUrl}${name}?api_key=${apiKey}`;
  return fetch(url).then(handleResponse).catch(handleError);
}

// Get 20 most recent match id's for a summoner given a summoner's puuid
export function getMatchIds(puuid) {
  let baseUrl =
    "https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/";
  let url = `${baseUrl}${puuid}/ids?start=0&count=20&api_key=${apiKey}`;
  return fetch(url).then(handleResponse).catch(handleError);
}

// Get the match details for a given match id
export function getMatchData(matchId) {
  let baseUrl = "https://americas.api.riotgames.com/lol/match/v5/matches/";
  let url = `${baseUrl}${matchId}?api_key=${apiKey}`;
  return fetch(url).then(handleResponse).catch(handleError);
}

export function getRank(encryptedId) {
  let baseUrl =
    "https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/";
  let url = `${baseUrl}${encryptedId}?api_key=${apiKey}`;
  return fetch(url).then(handleResponse).catch(handleError);
}

export function getLeaderBoards() {
  let baseUrl =
    "https://na1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5";
  let url = `${baseUrl}?api_key=${apiKey}`;
  return fetch(url).then(handleResponse).catch(handleError);
}
