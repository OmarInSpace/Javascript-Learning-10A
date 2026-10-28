// Looping

// For

// for (let a = 1; a <= 10; a++) {
//   if (a % 2 == 1) {
//     console.log("Hello, World! " + a);
//   }
// }

// // Mobil grab 1-10 dalam keadaan baik
// for (let b = 1; b <= 10; b++) {
//   if (b == 9) {
//     console.log("Mobil Grab " + b + " dalam keadaan di bengkel");
//   } else if (b == 3) {
//     console.log("Mobil Grab " + b + " dalam keadaan rusak");
//   } else {
//     console.log("Mobil Grab " + b + " dalam keadaan baik");
//   }
// }


// Let

let bus = 1;

while (bus <= 10) {
    if (bus === 7){
        console.log('Bus ' + bus + ' dalam keadaan rusak ');
    } else {
        console.log('Bus ' + bus + ' dalam keadaan baik');
    }
    bus++;
}

let suhuRuangan = 30;

while (suhuRuangan > 19) {
    console.log(`suhu ruangan: ${suhuRuangan}C, Pendingin Aktif...`);
    suhuRuangan--;
}

console.log(
    `suhu stabil pada ${suhuRuangan}C, Pendingin kembali ke mode hemat energi`,
);

let kapal = 1;
do {
    console.log('kapal ' + kapal + ' dalam keadaan baik');
    kapal++
} while (kapal <= 10);