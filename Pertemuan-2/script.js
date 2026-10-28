// String

let myName = "Ibrahim Omar";
let a = "5";
let b = "10";
let c = a * b;
let alamatSaya = `Jalan Tanjung Raya BSD`;

// console.log(a + b); // string concatenation
// console.log(myName); // string
// console.log(c); // number
// console.log(typeof (c)); // number
// console.log(`Nama saya ${myName}`); // string interpolation
// console.log(`Siapa itu "${myName}"?\tDia adalah santri di \'abudzar\'\n\'\"\\\n\\loh\\`); // string interpolation

// Number

let umurSaya = 17;
let varOne = 10;
let varTwo = 10.5;
let varThree = 10 ** 4; // power of 10 to the 4th / Pangkat = 10 pangkat 4
// console.log(varOne);
// console.log(varTwo);
// console.log(varThree);
// console.log(typeof (varThree)); // number

// Boolean

let isTrue = true;
let isFalse = false;
// console.log(isTrue);
// console.log(isFalse);

// null & undefined

let myNull = null;
let myUndefined = undefined;
let varFour; // undefined
// console.log(myNull);
// console.log(myUndefined);
// console.log(varFour);
// console.log(typeof (myNull));
// console.log(typeof (myUndefined));

// Primitive dan Non-Primitive data types

let nama1 = "Andi";
let nama2 = nama1; //nama2 menyalin nilai dari nama1 secara utuh
nama2 = "Budi"; //nama2 diubah nilainya menjadi "Budi"

// console.log(nama1); // Output: "Andi"

let hobi1 = ["Sepak Bola", "Basket", "Renang"];
let hobi2 = hobi1; //hobi2 menyalin nilai dari hobi1 secara utuh
hobi2.push("Bulu Tangkis"); //hobi2 diubah nilainya menjadi "Bulu Tangkis"

// console.log(hobi1); // Output: ["Sepak Bola", "Basket", "Renang"]

// Array

let hobiSaya = ["Sepak Bola", "Basket", "Renang"];
const fruits = ["apple", "banana", "cherry"];
// console.log(fruits[1], fruits[2]); // Output: "banana" "cherry"
// console.log(fruits);

// kenapa bukan apple? karena index dimulai dari "0" bukan "1" jadi apple = 0, banana = 1, cherry = 2.

// console.log(`nama saya ${myName} dan umur saya ${umurSaya} tahun, hobi saya adalah ${hobiSaya} dan saya tinggal di ${alamatSaya}, dan makanan favorit saya adalah ${fruits[1]}`); // string interpolation
const myPlayer = ["Messi", "Ronaldo", "Neymar", "Mbappe", "Lewandowski"];
// document.write(
//   `Nama saya ${myName}, dan saya akan mengurutkan pemain sepak bola dari yang pertama sampai yang terakhir, yang pertama adalah \"${myPlayer[1]}\", pemain sepak bola profesional Portugal yang bermain di klub Arab Saudi Al-Nassr FC sebagai penyerang dan juga kapten tim nasional Portugal. yang kedua adalah \"${myPlayer[0]}\", pemain sepak bola profesional Argentina yang bermain sebagai penyerang dan kapten untuk klub Major League Soccer, Inter Miami. yang ketiga adalah \"${myPlayer[2]}\", Neymar da Silva Santos Júnior yang umumnya dikenal sebagai Neymar atau Neymar Jr, adalah pemain sepak bola profesional Brasil yang bermain untuk klub Liga Brasil Santos FC. Dia bermain sebagai penyerang atau pemain sayap. yang keempat adalah \"${myPlayer[3]}\", pemain sepak bola profesional Prancis yang bermain sebagai penyerang untuk klub La Liga Real Madrid dan kapten tim nasional Prancis. Dianggap sebagai salah satu pemain terbaik di dunia, ia terkenal karena kemampuannya dalam menggiring bola, kecepatan, dan penyelesaian peluang. dan yang terakhir diduduki oleh \"${myPlayer[4]}\", pemain sepak bola profesional Polandia yang saat ini bermain sebagai penyerang untuk klub Major League Soccer Chicago Fire dan merupakan kapten tim nasional Polandia.`,
// ); // string interpolation

// Array Methods

const vegetables = ["brocoli", "carrot", "tomato", "cucumber", "spinach"];
// vegetables.push("lettuce"); // menambahkan elemen baru ke akhir array
// vegetables.push(1); // menambahkan elemen baru ke akhir array
// vegetables.pop(); // menghapus elemen terakhir dari array
// vegetables.shift(); // menghapus elemen pertama dari array
// vegetables.unshift("potato"); // menambahkan elemen baru ke awal array
// vegetables.splice(4, 1); // menghapus 1 elemen dari index 4
const joinedVegetables = vegetables.join(", "); // menggabungkan semua elemen array menjadi string dengan pemisah ", "
const slicedVegetables = vegetables.slice(1, 3); // mengembalikan elemen dari index 1 sampai index 2 (index 3 tidak termasuk)
// console.log(vegetables); // Output: ["potato", "brocoli", "carrot", "tomato", "cucumber", "spinach", "lettuce"] lettuce adalah elemen baru yang ditambahkan ke akhir array
// console.log(slicedVegetables); // Output: ["brocoli", "carrot"]
// console.log(joinedVegetables); // Output: "potato, brocoli, carrot, tomato, cucumber, spinach, lettuce"
// console.log(vegetables.includes("cucumber")); // Output: true // mencari elemen "cucumber" dalam array
// console.log(vegetables.indexOf("tomato")); // Output: 2 // mencari index elemen "tomato" dalam array


// Object
// object = > variabel = {key:value}

let myData = {
  name: "Ibrahim Omar",
  age: 17,
  address: "Jalan Tanjung Raya BSD",
  kelas: "10A",
  hobi: ["Sepak Bola", "Bulu Tangkis", "Renang"],
}
// myData.age = 18; // Output: 18 // untuk mengubah value di dalam object
myData.student = "Abudzar"; // untuk menambahkan key baru di dalam object
myData.country = "Indonesia";

// console.log(myData);
// console.log(myData.hobi[0]); // Output: "Sepak Bola"
// console.log(myData.name); // Output: "Ibrahim Omar"
// console.log(myData.age); // Output: 17
// console.log(myData.address); // Output: "Jalan Tanjung Raya BSD"
// console.log(myData.kelas); // Output: "10A"
// console.log(myData.hobi); // Output: ["Sepak Bola", "Bulu Tangkis", "Renang"]

// document.write("Nama saya " + myData.name + ", saya berumur " + myData.age + " tahun, saya tinggal di " + myData.address + " saya juga seorang siswa di " + myData.student + " kelas " + myData.kelas + " dan hobi saya adalah " + myData.hobi + ", oh iya saya juga berasal dari " + myData.country + ".");

// NaN & Infinity
// NaN = Not a Number
// Infinity = Infinity

console.log(5 * undefined); // Output: NaN
console.log(5 / 0); // Output: Infinity

//Konversi Tipe Data

// let angka = parseInt("pilih angka anda 1-10");
// alert("angka anda adalah" + typeof(angka));