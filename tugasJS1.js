//Number 1
let name = "Lidiya Wati";
let email = "lidiyawati315@gmail.com";
let address = {
  name: "Lidiya",
  address: "Sumatera Selatan"
};
let isMarried = false;
let hobbies = ["tidur", "makan", "nonton", "membaca", "jalan-jalan",];
console.log(typeof (name));
console.log(typeof (email));
console.log(typeof (address));
console.log(typeof (isMarried));
console.log(typeof (hobbies));

//Number 2
const printGenapGanjil = (num) => {
  for (let x = 1; x <= num; x++) {
    while (x % 2 === 0) {
      console.log(`${x} merupakan bilagan genap`);
      x++;
    }
    console.log(`${x} merupakan bilagan ganjil`);
  }
}
printGenapGanjil(5);

//Number 3
const printSegitiga = (num) => {
  for (let x = 1; x <= num; x++) {
    let baris = "";
    for (let y = 1; y <= x; y++) {
      baris += `${x} `;
    }
    console.log(baris);
  }
}
printSegitiga(5);