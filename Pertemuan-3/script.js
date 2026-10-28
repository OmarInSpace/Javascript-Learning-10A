// Konversi Tipe Data

let angka = 100;
let konverAngka = String(angka); // ini untuk menjadikan angka menjadi String
let konversiAngka = angka.toString(); // ini juga bisa

// console.log(konversiAngka + angka);
// console.log(typeof konverAngka);

let tahun = '2026';
let konverTahun = Number(tahun);

// console.log(konverTahun + 4);

// Falsy & Truthy

// console.log(Boolean(0)); //false
// console.log(Boolean('')); //false
// console.log(Boolean(null)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean(NaN)); //false
// console.log(Boolean(false)); //false

// console.log(Boolean("Ibam")); //true


// Operator Pemrograman

let a = 10;
let b = 3;

let penjumlahan = a + b;
// console.log(penjumlahan)

let pengurangan = a - b;
// console.log(pengurangan)

let perkalian = a * b;
// console.log(perkalian)

let pembagian = a / b;
// console.log(pembagian)

let modulus = a % b;
// console.log(modulus)

let pangkat = a ** b;
// console.log(pangkat)

let x = 10;

// console.log(x);

x += 5;
// console.log(x)

x -= 3;
// console.log(x)

x *= 2;
// console.log(x)

x /= 4;
// console.log(x)

x %= 4;
// console.log(x)

x **= 3;
// console.log(x)

let i = 10;
let o = '10';
let m = 5;

console.log(i == o);
console.log(i === o);
console.log(i != o);
console.log(i !== o);
console.log(i > o);
console.log(i < o);
console.log(i >= o);
console.log(i <= o);