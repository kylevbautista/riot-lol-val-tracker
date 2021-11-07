import { handleResponse, handleError } from "./apiUtils";
const apiKey = process.env.REACT_APP_RIOT_API;

export function getContent() {
  let baseUrl = "https://na.api.riotgames.com/val/content/v1/contents";
  let url = `${baseUrl}?api_key=${apiKey}`;
  return fetch(url).then(handleResponse).catch(handleError);
}
export function getLeaderBoards(actid) {
  let baseUrl =
    "https://na.api.riotgames.com/val/ranked/v1/leaderboards/by-act/";
  let url = `${baseUrl}${actid}?size=200&startIndex=0&api_key=${apiKey}`;
  return fetch(url).then(handleResponse).catch(handleError);
}
