import { v4 as randomID } from "uuid";
import soundfile1 from "./music/man i is.mp3";
import soundfile2 from "./music/Four Five Seconds.mp3";
import soundfile3 from "./music/wishing well.mp3";
import soundfile4 from "./music/nights.mp3";

function musicAPI() {
  return [
    {
      name: "man i is",
      cover:
        "https://shifter.sapo.pt/wp-content/uploads/2020/08/100000x100000-999-scaled.jpg",
      artist: "Logic",
      audio: soundfile1,
      color: ["#ee6110", "#202521"],
      id: randomID(),
      active: true,
    },
    {
      name: "Four Five Seconds",
      cover:
        "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-183092-B8J7XMxCIAADoDZ.jpg",
      artist: "Rihanna | Kanye West | Paul McCartney",
      audio: soundfile2,
      color: ["#2e2e2e", "#d4d4d4"],
      id: randomID(),
      active: false,
    },
    {
      name: "Wishing Well",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/f/f6/Juice_Wrld_-_Legends_Never_Die.png",
      artist: "Juice WRLD",
      audio: soundfile3,
      color: ["#F26389", "#504073"],
      id: randomID(),
      active: false,
    },
    {
      name: "Nights",
      cover:
        "https://assets.teenvogue.com/photos/57d314fc6e37b7ac60cf41b3/1:1/w_462,h_462,c_limit/ccc0894094b9a3cbb47a45ec0c69b1f0.1000x1000x1.jpg",
      artist: "Frank Ocean",
      audio: soundfile4,
      color: ["#d58b67", "#4b6d46"],
      id: randomID(),
      active: false,
    },
  ];
}
export default musicAPI;
