/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["Sith Lord", "Boddy", "mailman", "skunk", "driver"];
  let action = [
    "cut my",
    "kicked my",
    "crushed my",
    "bit my",
    "yelled at my",
    "stared at my",
    "stole my"
  ];
  let possession = ["homework", "lightsaber", "car", "nose", "beard"];
  let where = [
    "in my dream",
    "on my yard",
    "at the zoo",
    "on my neck",
    "on my car",
    "in my house"
  ];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let posIndx = Math.floor(Math.random() * possession.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subIndx] +
    " " +
    action[actIndx] +
    " " +
    possession[posIndx] +
    " " +
    where[whereIndx]
  );
};
