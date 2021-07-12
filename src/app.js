/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
window.onload = function() {
  let btn = document.querySelector(".btn");
  let heart = document.querySelectorAll(".type");
  var symbol = ["&hearts;", "&spades;", "&clubs;", "&diams;"];
  let divCard = document.querySelector(".div");
  let num = document.querySelector(".num");

  let randomCard = () => {
    let randomCardNumber = Math.floor(Math.random() * 12) + 1;
    let randomsuit = symbol[Math.floor(Math.random() * symbol.length)];

    heart.forEach(e => {
      if (randomsuit == "&hearts;") {
        e.innerHTML = `♥ `;
        e.style.color = "red";
      } else if (randomsuit == "&spades;") {
        e.innerHTML = `♣`;
        e.style.color = "black";
      } else if (randomsuit == "&clubs;") {
        e.innerHTML = `♠ `;
        e.style.color = "black";
      } else if (randomsuit == "&diams;") {
        e.innerHTML = `♦ `;
        e.style.color = "red";
      }
    });

    if (randomCardNumber === 11) {
      num.innerHTML = "J";
    } else if (randomCardNumber === 12) {
      num.innerHTML = "Q";
    } else if (randomCardNumber === 13) {
      num.innerHTML = "K";
    } else {
      num.innerHTML = `${randomCardNumber}`;
    }
  };

  randomCard();

  btn.addEventListener("click", () => {
    randomCard();
  });

  setTimeout(randomCard, 2000);

  let inpHeigh = prompt("Heigh of the card?");
  let inpWidth = prompt("Width of the card");
  divCard.style.width = inpWidth + "px";
  divCard.style.height = inpHeigh + "px";
  //ode here
  console.log("Hello Rigo from the console!");
};
