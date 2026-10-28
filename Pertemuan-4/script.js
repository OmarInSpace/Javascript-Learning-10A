// Operator Logika


// && (dan)
let a = 5 === 5 && 6 > 3;
// console.log(a)

let b = 5 !== 10 && 6 < 10;
// console.log(b)

let c = 100 != '10' && 10 == '10';
// console.log(c)



// || (or)

let d = 10 <= 10 || 10 !== '10';
// console.log(d)

let e = 10 > 10 || 10 === '10';
// console.log(e)


// ! (tidak / not)

let f = 5 < 10 ;
// console.log(f)


// Latihan &&

let g = 5 >= 5 && 8 == '8'; // yang 1 benar 2 benar /true
// console.log(g)

let h = 5 >= 5 && 8 === '8'; // yang 1 benar 2 salah /false
// console.log(h)

let i = 5 > 5 && 8 == '8'; // yang 1 salah 2 benar /false
// console.log(i)

let j = 5 > 5 && 8 === '8'; // yang 1 salah 2 salah /false
// console.log(j)

// Latihan ||

let k = 5 >= 5 || 8 == '8'; // yang 1 benar 2 benar /true
console.log(k)

let l = 5 >= 5 || 8 === '8'; // yang 1 benar 2 salah /true
console.log(l)

let m = 5 > 5 || 8 == '8'; // yang 1 salah 2 benar /true
console.log(m)

let n = 5 > 5 || 8 === '8'; // yang 1 salah 2 salah /false
console.log(n)

