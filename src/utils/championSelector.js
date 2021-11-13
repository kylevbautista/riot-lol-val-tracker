import * as Champions from "../assets/images/index";
import shib from "../components/leagueResults/shib_coin.png";

export function getChampion(name) {
  switch (name) {
    case "Ahri":
      return Champions.Ahri;
    case "Aatrox":
      return Champions.Aatrox;
    case "Akali":
      return Champions.Akali;
    case "Alistar":
      return Champions.Alistar;
    case "Amumu":
      return Champions.Amumu;
    case "Anivia":
      return Champions.Anivia;
    case "Annie":
      return Champions.Annie;
    case "Ashe":
      return Champions.Ashe;
    case "AurelionSol":
      return Champions.AurelionSol;
    case "Azir":
      return Champions.Azir;
    case "Bard":
      return Champions.Bard;
    case "Blitzcrank":
      return Champions.Blitzcrank;
    case "Braum":
      return Champions.Braum;
    case "Brand":
      return Champions.Brand;
    case "Caitlyn":
      return Champions.Caitlyn;
    case "Cassiopeia":
      return Champions.Cassiopeia;
    case "Camille":
      return Champions.Camille;
    case "Chogath":
      return Champions.Chogath;
    case "Corki":
      return Champions.Corki;
    case "Darius":
      return Champions.Darius;
    case "Diana":
      return Champions.Diana;
    case "Draven":
      return Champions.Draven;
    case "DrMundo":
      return Champions.DrMundo;
    case "Ekko":
      return Champions.Ekko;
    case "Elise":
      return Champions.Elise;
    case "Evelyn":
      return Champions.Evelynn;
    case "Ezreal":
      return Champions.Ezreal;
    case "Fiddlesticks":
      return Champions.Fiddlesticks;
    case "Fiora":
      return Champions.Fiora;
    case "Fizz":
      return Champions.Fizz;
    case "Galio":
      return Champions.Galio;
    case "Gangplank":
      return Champions.Gangplank;
    case "Garen":
      return Champions.Garen;
    case "Gnar":
      return Champions.Gnar;
    case "Gragas":
      return Champions.Gragas;
    case "Graves":
      return Champions.Graves;
    case "Hecarim":
      return Champions.Hecarim;
    case "Heimerdinger":
      return Champions.Heimerdinger;
    default:
      return shib;
  }
}
