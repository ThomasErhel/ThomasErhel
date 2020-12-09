import p5 from "p5.js";
import Octocat from "octocat.js";

let octocat;
const UbuntuDesktop = "https://ubuntu.com/download/"

p5.setup = () => {
  createCanvas(300, 300);
  background(221, 72, 20);
  octocat = new Octocat();

  octocat.setPuddleColor("#DD4814")
  octocat.setAccessory("UbuntuDesktop")
  octocat.setEyes("Starstruck")
  octocat.setMouth("Starstruck")
  octocat.setProp("Guitar")
  octocat.setTop("T-shirt")
  octocat.setHair("Short dreadlocks")
  octocat.setHeadgear("Fedora")
  octocat.ascii()
};

p5.draw = () => {
  octocat.randomize("hairColor")
  octocat.draw();
};
