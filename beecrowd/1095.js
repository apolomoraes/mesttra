console.log("I=1 J=60");
console.log("I=4 J=55");
console.log("I=7 J=50");
console.log("I=10 J=45");
console.log("I=13 J=40");
console.log("I=16 J=35");
console.log("I=19 J=30");
console.log("I=22 J=25");
console.log("I=25 J=20");
console.log("I=28 J=15");
console.log("I=31 J=10");
console.log("I=34 J=5");
console.log("I=37 J=0");

/*----------------------------------*/

let j = 60

for (let i = 1; i < 38; i += 3) {
  console.log(`I=${i} J=${j}`);
  j -= 5;
}

/*----------------------------------*/

for (let i = 1, j = 60; i <= 37; i += 3, j -= 5) {
  console.log(`I=${i} J=${j}`);
}