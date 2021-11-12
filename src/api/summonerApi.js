import { handleResponse, handleError } from "./apiUtils";
const baseUrl =
  "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
const apiKey = "RGAPI-4fa39b17-6571-430f-9056-7f25b5543eeb";
//const apiKey = process.env.REACT_APP_RIOT_API;

// Get summoner data given a name
export const byName = async (name) => {
  try {
    let url = `${baseUrl}${name}?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await handleResponse(response);
    return data;
  } catch (err) {
    handleError(err);
  }
};

// Get 20 most recent match id's for a summoner given a summoner's puuid
export const getMatchIds = async (puuid) => {
  try {
    let baseUrl =
      "https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/";
    let url = `${baseUrl}${puuid}/ids?start=0&count=20&api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await handleResponse(response);
    return data;
  } catch (err) {
    handleError(err);
  }
};

// Get the match details for a given match id
export const getMatchData = async (matchId) => {
  try {
    let baseUrl = "https://americas.api.riotgames.com/lol/match/v5/matches/";
    let url = `${baseUrl}${matchId}?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await handleResponse(response);
    return data;
  } catch (err) {
    handleError(err);
  }
};

export const getRank = async (encryptedId) => {
  try {
    let baseUrl =
      "https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/";
    let url = `${baseUrl}${encryptedId}?api_key=${apiKey}`;
    const response = fetch(url);
    const data = await handleResponse(response);
    return data;
  } catch (err) {
    handleError(err);
  }
};

export const getLeaderBoards = async () => {
  try {
    let baseUrl =
      "https://na1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5";
    let url = `${baseUrl}?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await handleResponse(response);
    return data;
  } catch (err) {
    handleError(err);
  }
};
