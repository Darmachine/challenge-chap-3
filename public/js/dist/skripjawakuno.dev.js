"use strict";

var selectionButtons = document.querySelectorAll('[data-selection]');
var BtnEle = document.querySelectorAll('.selection');
var BtnEleCom = document.querySelectorAll('.pilihanKomputer');
var test = '';
var middle = document.getElementById('Versus');
var SELECTIONS = [{
  id: '0',
  name: 'b',
  mengalahkan: 'g'
}, {
  id: '1',
  name: 'k',
  mengalahkan: 'b'
}, {
  id: '2',
  name: 'g',
  mengalahkan: 'k'
}];

function makeSelection(selection) {
  // logic untuk pilihan komputer
  var pilihanKomputer = randomSelection(); // document.getElementById('pilihanKomputer').classList.toggle('selected')

  BtnEleCom[pilihanKomputer.id].classList.toggle('comSelected');
  test = pilihanKomputer.id; // menentukan pilihan dan compare hasil

  var kamuMenang = isWinner(selection, pilihanKomputer);
  var komputerMenang = isWinner(pilihanKomputer, selection);
  console.log(selection);
  console.log(pilihanKomputer); // scorebox

  if (kamuMenang) {
    middle.src = "/public/images/You Win.png";
    middle.classList.toggle('Hasil');
  } else if (komputerMenang) {
    middle.src = "/public/images/You Lose.png";
    middle.classList.toggle('Hasil');
  } else {
    middle.src = "/public/images/Draw.png";
    middle.classList.toggle('Hasil');
  }
} // pengubahan untuk menentukan pilihan


selectionButtons.forEach(function (selectionButtons) {
  selectionButtons.addEventListener('click', function (e) {
    var selectionName = selectionButtons.dataset.selection;
    var selection = SELECTIONS.find(function (selection) {
      return selection.name === selectionName;
    });
    var refreshButton = document.querySelector("#refresh");
    makeSelection(selection);
    selectionButtons.classList.toggle('selected');
    refreshButton.style.pointerEvents = "auto";
    BtnEle[0].style.pointerEvents = "none";
    BtnEle[1].style.pointerEvents = "none";
    BtnEle[2].style.pointerEvents = "none";
  }); // tombol refresh

  document.getElementById("refresh").addEventListener('click', function (e) {
    selectionButtons.classList.remove('selected');
    BtnEleCom[test].classList.remove('comSelected');
    middle.src = "/public/images/VERSUS.png";
    middle.classList.remove('Hasil');
    BtnEle[0].style.pointerEvents = "auto";
    BtnEle[1].style.pointerEvents = "auto";
    BtnEle[2].style.pointerEvents = "auto";
    document.getElementById("refresh").style.pointerEvents = "none";
  });
}); // menentukan pemenang

function isWinner(selection, opponentSelection) {
  // parameter selection.mengalahkan harus identik dengan pilihan yang akan di compare
  return selection.mengalahkan === opponentSelection.name;
} // fungsi pilihan komputer


function randomSelection() {
  var randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}