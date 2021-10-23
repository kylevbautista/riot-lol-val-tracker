import { handleResponse, handleError } from "./apiUtils";
const url = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";

export function getSummonerbyName(name) {
  return fetch(url).then(handleResponse).catch(handleError);
}
