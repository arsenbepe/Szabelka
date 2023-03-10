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
const btnBoh = document.querySelector(".dropbtnR");
const turl = document.querySelector(".turlaj");
const nowa = document.querySelector(".restart");
let hpMich = document.querySelector(".hp1");
let hpBoh = document.querySelector(".hp2");
let hpki = document.querySelector(".hp");
const pasekMi = document.querySelector(".miHP");
const pasekBo = document.querySelector(".boHP");
let stamMi = document.querySelector(".miSP");
let stamBo = document.querySelector(".boSP");

document
  .getElementById("jurHP")
  .setAttribute("style", "display:block;width:100%");

document
  .getElementById("wolodHP")
  .setAttribute("style", "display:block;width:100%");

//bede chcial to rozpisac na konkretne przyciski zeby bylo przejrzyscie ale na wszelki wypadek dodalem arraye // walic przyciski optymalizacja przez redukcje i chuj
const michButDef = [akcjeD1B, akcjeD1P, akcjeD1U];
const michButOff = [akcjeO1C, akcjeO1K, akcjeO1P];
const bohButDef = [akcjeD2B, akcjeD2P, akcjeD2U];
const bohButOff = [akcjeO2C, akcjeO2K, akcjeO2P];

// let michal buttony (dekBut, dekoBut), bohun buttony (bekBut, bekoBut), assignmenty dla gracza aktywnego i postaci (michal, boh, aktywny)
let dekBut,
  dekoBut,
  bekBut,
  bekoBut,
  michal,
  boh,
  aktywny,
  atak,
  obrona,
  rzut,
  atOb;
let zycMi = 100;
let zycBo = 100;
let graTrwa = true;
let aktywny1 = true;
let aktywny2 = false;
let staminaMi = 100;
let staminaBo = 100;
let atSt = 0;
let obSt = 0;

//nowa runda
let restart = function () {
  k100.textContent = 0;
  for (const dekBut of michButDef) {
    dekBut.classList.add("hidden");
  }
  for (const bekoBut of bohButOff) {
    bekoBut.classList.add("hidden");
  }
  for (const dekBut of michButOff) {
    dekBut.classList.remove("hidden");
  }
  for (const bekoBut of bohButDef) {
    bekoBut.classList.remove("hidden");
  }
  btnMich.classList.add("ramka");
  btnBoh.classList.remove("ramka");
  zycMi = 100;
  zycBo = 100;
  staminaMi = 100;
  staminaBo = 100;
  graTrwa = true;
  aktywny1 = true;
  aktywny2 = false;

  document.getElementById("jurHP").style.width = `${zycBo}%`;
  pasekBo.textContent = `${zycBo}HP`;
  document.getElementById("wolodHP").style.width = `${zycMi}%`;
  pasekMi.textContent = `${zycMi}HP`;
  document.getElementById("jurSP").style.width = `${staminaBo}%`;
  document.getElementById("wolodSP").style.width = `${staminaMi}%`;

  turl.classList.remove("hidden");

  wiadRzu.textContent = " ";
  wiadAtt.textContent = " ";
  wiadDef.textContent = " ";
};

restart();

let rundaNew = function () {
  turl.classList.remove("hidden");
  wiadAtt.textContent = " ";
  wiadDef.textContent = " ";
  for (const dekBut of michButDef) {
    dekBut.classList.toggle("hidden");
  }
  for (const bekoBut of bohButOff) {
    bekoBut.classList.toggle("hidden");
  }
  for (const bekBut of bohButDef) {
    bekBut.classList.toggle("hidden");
  }
  for (const dekoBut of michButOff) {
    dekoBut.classList.toggle("hidden");
  }
  btnMich.classList.toggle("ramka");
  btnBoh.classList.toggle("ramka");
  if (aktywny1 === true) {
    aktywny1 = false;
  } else {
    aktywny1 = true;
  }

  if (aktywny2 === true) {
    aktywny2 = false;
  } else {
    aktywny2 = true;
  }

  if (staminaMi <= 0) {
    for (const dekBut of michButDef) {
      dekBut.classList.add("hidden");
    }
    for (const dekoBut of michButOff) {
      dekoBut.classList.add("hidden");
    }

    atak = 0;
    obrona = 0;

    atSt = 0;
    obSt = 0;
  }

  if (staminaBo <= 0) {
    for (const bekBut of bohButDef) {
      bekBut.classList.add("hidden");
    }
    for (const bekBut of bohButDef) {
      bekBut.classList.add("hidden");
    }
    atak = 0;
    obrona = 0;

    atSt = 0;
    obSt = 0;
  }

  if (zycMi <= 0) {
    wiadRzu.textContent = `Ma??y rycerz pad?? na wznak! Dziki je??dziec wygrywa!`;

    for (const dekBut of michButDef) {
      dekBut.classList.add("hidden");
    }
    for (const bekoBut of bohButOff) {
      bekoBut.classList.add("hidden");
    }
    for (const bekBut of bohButDef) {
      bekBut.classList.add("hidden");
    }
    for (const dekoBut of michButOff) {
      dekoBut.classList.add("hidden");
    }
    turl.classList.add("hidden");
  }

  if (zycBo <= 0) {
    wiadRzu.textContent = `Dziki je??dziec pad?? na wznak! Ma??y rycerz wygrywa!`;

    for (const dekBut of michButDef) {
      dekBut.classList.add("hidden");
    }
    for (const bekoBut of bohButOff) {
      bekoBut.classList.add("hidden");
    }
    for (const bekBut of bohButDef) {
      bekBut.classList.add("hidden");
    }
    for (const dekoBut of michButOff) {
      dekoBut.classList.add("hidden");
    }
    turl.classList.add("hidden");
  }

  if (staminaMi && staminaBo <= 0) {
    for (const dekBut of michButDef) {
      dekBut.classList.add("hidden");
    }
    for (const bekoBut of bohButOff) {
      bekoBut.classList.add("hidden");
    }
    for (const dekBut of michButOff) {
      dekBut.classList.remove("hidden");
    }
    for (const bekoBut of bohButDef) {
      bekoBut.classList.remove("hidden");
    }
    btnMich.classList.add("ramka");
    btnBoh.classList.remove("ramka");
    staminaMi = 100;
    staminaBo = 100;
  }
};

//okreslam parametry opcji ofensywnych i defensywnych
nowa.addEventListener("click", function () {
  restart();
});

akcjeO1C.addEventListener("click", function () {
  atak = 70;
  wiadAtt.textContent = `Szansa Ataku ${atak}%  za 4 pkt kondycji`;
  atSt = 4;
});

akcjeO1P.addEventListener("click", function () {
  atak = 50;
  wiadAtt.textContent = `Szansa Ataku ${atak}%  za 2 pkt kondycji`;
  atSt = 2;
});

akcjeO1K.addEventListener("click", function () {
  atak = 90;
  wiadAtt.textContent = `Szansa Ataku ${atak}%  za 6 pkt kondycji`;
  atSt = 6;
});

akcjeO2C.addEventListener("click", function () {
  atak = 70;
  wiadAtt.textContent = `Szansa Ataku ${atak}%  za 4 pkt kondycji`;
  atSt = 4;
});

akcjeO2P.addEventListener("click", function () {
  atak = 50;
  wiadAtt.textContent = `Szansa Ataku ${atak}%  za 2 pkt kondycji`;
  atSt = 2;
});

akcjeO2K.addEventListener("click", function () {
  atak = 90;
  wiadAtt.textContent = `Szansa Ataku ${atak}%  za 6 pkt kondycji`;
  atSt = 6;
});

akcjeD1B.addEventListener("click", function () {
  obrona = 40;
  wiadDef.textContent = `Atak pomniejszony ${obrona}%  za 3 pkt kondycji`;
  obSt = 3;
});

akcjeD1P.addEventListener("click", function () {
  obrona = 20;
  wiadDef.textContent = `Atak pomniejszony ${obrona}%  za 1 pkt kondycji`;
  obSt = 1;
});

akcjeD1U.addEventListener("click", function () {
  obrona = 60;
  wiadDef.textContent = `Atak pomniejszony ${obrona}%  za 5 pkt kondycji`;
  obSt = 5;
});

akcjeD2B.addEventListener("click", function () {
  obrona = 40;
  wiadDef.textContent = `Atak pomniejszony ${obrona}%  za 3 pkt kondycji`;
  obSt = 3;
});

akcjeD2P.addEventListener("click", function () {
  obrona = 20;
  wiadDef.textContent = `Atak pomniejszony ${obrona}%  za 1 pkt kondycji`;
  obSt = 1;
});

akcjeD2U.addEventListener("click", function () {
  obrona = 60;
  wiadDef.textContent = `Atak pomniejszony ${obrona}% za 5 pkt kondycji`;
  obSt = 5;
});

//TUTAJ JEST RZUT!!!
turl.addEventListener("click", function () {
  const rzut = Math.trunc(Math.random() * 100) + 1;
  k100.textContent = `${rzut}`;
  console.log(k100);
  atOb = atak - obrona;
  console.log(atOb);
  if (aktywny1 === true) {
    staminaMi = staminaMi - atSt;
    console.log(staminaMi);
    staminaBo = staminaBo - obSt;
    console.log(staminaBo);
    document.getElementById("jurSP").style.width = `${staminaBo}%`;
    document.getElementById("wolodSP").style.width = `${staminaMi}%`;
  } else {
    staminaMi = staminaMi - obSt;
    console.log(staminaMi);
    staminaBo = staminaBo - atSt;
    console.log(staminaBo);
    document.getElementById("jurSP").style.width = `${staminaBo}%`;
    document.getElementById("wolodSP").style.width = `${staminaMi}%`;
  }
  if (atOb > rzut) {
    wiadRzu.textContent = `Gracz wyrzuci?? ${rzut} TRAFIENIE!!! Przeciwnik krwawi jak ??winia!`;
    if (aktywny1 === true) {
      zycBo = zycBo - 5;
      document.getElementById("jurHP").style.width = `${zycBo}%`;
      pasekBo.textContent = `${zycBo}HP`;
    } else {
      zycMi = zycMi - 5;
      document.getElementById("wolodHP").style.width = `${zycMi}%`;
      pasekMi.textContent = `${zycMi}HP`;
    }
  } else {
    wiadRzu.textContent = `Atakuj??cy spud??owa??! \n KO??CZ WA????, WSTYYDU OSZCZ??D??`;
  }
  rundaNew();

  wstrzasnij(".wolodImg");
  wstrzasnij(".bohunImg");
  console.log(zycBo, zycMi);
});
