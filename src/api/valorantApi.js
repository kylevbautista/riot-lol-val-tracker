import { handleResponse, handleError } from "./apiUtils";
const apiKey = "RGAPI-6ece03d9-a40a-4732-b1c0-e06438a89594";
//const apiKey = process.env.REACT_APP_RIOT_API;

export const getContent = async () => {
  try {
    let baseUrl = "https://na.api.riotgames.com/val/content/v1/contents";
    let url = `${baseUrl}?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await handleResponse(response);
    return data;
  } catch (err) {
    handleError(err);
  }
};
export const getLeaderBoards = async (actid) => {
  try {
    let baseUrl =
      "https://na.api.riotgames.com/val/ranked/v1/leaderboards/by-act/";
    let url = `${baseUrl}${actid}?size=200&startIndex=0&api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await handleResponse(response);
    return data;
  } catch (err) {
    handleError(err);
  }
};
