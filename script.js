"use strict";

let k100 = document.querySelector(".wynikRzutu");
const akcjeD1B = document.querySelector(".opcjaDef1.blok");
const akcjeD1P = document.querySelector(".opcjaDef1.paro");
const akcjeD1U = document.querySelector(".opcjaDef1.unik");
const akcjeD2B = document.querySelector(".opcjaDef2.blok");
const akcjeD2P = document.querySelector(".opcjaDef2.paro");
const akcjeD2U = document.querySelector(".opcjaDef2.unik");

const michButDef = [akcjeD1B, akcjeD1P, akcjeD1U];

let rozpMichu;

console.log(michButDef);

//nowa runda
let restart = function () {
  k100.textContent = 0;
  michButDef.classList.add("hidden");
  console.log(akcjeD1B);
  console.log(restart);
};

// btnNew.addEventListener("click", function () {
//   console.log("Klikasz");
// });

restart();
console.log("very yes i");
