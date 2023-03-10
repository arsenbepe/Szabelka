"use strict";

let k100 = document.querySelector(".wynikRzutu");
const akcjeD1B = document.querySelector(".opcjaDef1.blok");
const akcjeD1P = document.querySelector(".opcjaDef1.paro");
const akcjeD1U = document.querySelector(".opcjaDef1.unik");
const akcjeD2B = document.querySelector(".opcjaDef2.blok");
const akcjeD2P = document.querySelector(".opcjaDef2.paro");
const akcjeD2U = document.querySelector(".opcjaDef2.unik");
const akcjeO1C = document.querySelector(".opcjaOff1.cie");
const akcjeO1P = document.querySelector(".opcjaOff1.pch");
const akcjeO1K = document.querySelector(".opcjaOff1.kop");
const akcjeO2C = document.querySelector(".opcjaOff2.cie");
const akcjeO2P = document.querySelector(".opcjaOff2.pch");
const akcjeO2K = document.querySelector(".opcjaOff2.kop");
let wiadRzu = document.querySelector(".wiadRzutu");
let wiadAtt = document.querySelector(".procOff");
let wiadDef = document.querySelector(".procDef");
const michImg = document.querySelector(".wolodImg");
const btnMich = document.querySelector(".dropbtn");
const turl = document.querySelector(".turlaj");
const nowa = document.querySelector(".restart");

const michButDef = [akcjeD1B, akcjeD1P, akcjeD1U];
const michButOff = [akcjeO1C, akcjeO1K, akcjeO1P];
const bohButDef = [akcjeD2B, akcjeD2P, akcjeD2U];
const bohButOff = [akcjeO2C, akcjeO2K, akcjeO2P];

// let michal buttony (dekBut, dekoBut), bohun buttony (bekBut, bekoBut), assignmenty dla gracza aktywnego i postaci (michal, boh, aktywny);
let dekBut, dekoBut, bekBut, bekoBut, michal, boh, aktywny;
let graczAkt = 1;
const graTrwa = true;

console.log(michButDef);

//nowa runda
let restart = function () {
  k100.textContent = 0;
  for (const dekBut of michButDef) {
    dekBut.classList.add("hidden");
  }
  for (const bekoBut of bohButOff) {
    bekoBut.classList.add("hidden");
  }
  btnMich.classList.add("ramka");
  wiadRzu.textContent = " ";
  wiadAtt.textContent = " ";
  wiadDef.textContent = " ";
  console.log(restart);
};

let rundaNew = function () {
  wiadAtt.textContent = " ";
  wiadDef.textContent = " ";
};

turl.addEventListener("click", function () {
  const k100 = Math.trunc(Math.random() * 100) + 1;
  console.log(k100);
  wiadRzu.textContent = `Gracz wyrzucił ${k100}`;
  rundaNew();
});

nowa.addEventListener("click", function () {
  restart();
});

// btnNew.addEventListener("click", function () {
//   console.log("Klikasz");
// });

restart();
