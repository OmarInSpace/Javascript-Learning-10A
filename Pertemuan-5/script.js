// Operator Unary

let a = 5;
// Increment, Menaikkan 1 Angka
a++;
console.log(a);
// Decrement, Mengurangkan 1 Angka
a--;
console.log(a);

// Operator typeOf
//

// Pengkondisian / Conditioning

let laukPagi = "ayam semur";

if (laukPagi == "ayam semur") {
  console.log("makan pagi dengan ayam semur");
} else {
  console.log("makan pagi dengan lauk lain");
}

let isAzzamHandsome = true;
let fakihBerkata = !isAzzamHandsome;

if (fakihBerkata == true) {
  console.log("fakih berkata, azzam tidak ganteng");
} else {
  console.log("fakih berkata, azzam ganteng");
}

// let inputUser = prompt('masukkan ekstrakulikuler pilihan anda : panahan,futsal,basket');
// if (inputUser == 'panahan'){
//     alert('anda memilih panahan');
// }else if (inputUser == 'futsal'){
//     alert('anda memilih futsal');
// }else if (inputUser == 'basket'){
//     alert('anda memilih basket');
// }else{
//     alert('anda tidak memilih ekstrakulikuler');
// }

// let angka = prompt('masukkan angka anda');
// if (angka % 2 == 0) {
//     alert('angka genap, ' + typeof(angka));
// }else if (angka % 2 == 1) {
//     alert('angka ganjil, ' + typeof(angka));
// }else {
//     alert('anda memasukkan string, ' + typeof(angka));
// }

let totalBelanja = 150000;

if (totalBelanja >= 200000) {
  console.log("Selamat! anda mendapatkan Diskon 20%");
} else if (totalBelanja >= 150000) {
  console.log("Selamat! anda mendapatkan Diskon 10%");
} else if (totalBelanja >= 100000) {
  console.log("Selamat! anda mendapatkan Diskon 5%");
}

// Switch
// Latihan Mandiri

let topBallonDor = prompt("TOP 5 Ballon D'or (1, 2, 3, 4, 5)");

switch (topBallonDor) {
  case "1":
    alert("Harry Kane / Bayern / Inggris");
    break;

  case "2":
    alert("Kylian Mbappe / Madrid / Prancis");
    break;

  case "3":
    alert("Lamine Yamal / Barcelona / Spanyol");
    break;

  case "4":
    alert("Rodri / Barcelona / Spanyol");
    break;

  case "5":
    alert("Lionel Messi / Inter Miami / Argentina");
    break;

  default:
    alert("Pemain tidak masuk 5 Besar Ballon D'or.");
}
