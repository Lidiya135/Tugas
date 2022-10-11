//Number 1
//1. Push = digunakan untuk menambah satu atau lebih data baru di ahir dari sebuah array.
//syntak:
//array.push (item1, item2, ..., itemX);
//contoh:
const myNumber = [1, 2, 3, 4]
myNumber.push(5);
//console.log(myNumber);

//2. Pop = kebalikan dari push, digunakan untuk menghapus item terakhir dari sebuah array.
//contoh:
const myNum = [1, 2, 3, 4]
myNum.pop();
//console.log(myNum);

//3. Unshift = digunakan untuk menambah item baru di awal sebuah array.
//Contoh:
const number = [3, 4, 5]
number.unshift(1, 2);
//console.log(number);

//4. Shift = digunakan untuk menghapus item pertama dari sebuah array, kebalikan dari unshift.
//contoh:
const num = [1, 2, 3]
num.shift();
//console.log(num);

//5. Includes = digunakan untuk mengecek apakah array memiliki element tertentu.
//contoh:
const cats = ['anggora', 'domestik', 'persia']
cats.includes('persia'); //return true
cats.includes('himalaya'); //return false
cats.includes('anggora', 1); //return false karna pengecekan dimulai dari index 1

//6. indexOf = digunakan untuk mencari letak sebuah item dalam array.
const felidae = ['tiger', 'cat', 'lion']
felidae.indexOf('tiger'); //return 0
felidae.indexOf('rabbit'); // return -1

//7. Concat = digunakan untuk menggabungkan 2 atau lebih array.
//contoh:
const herbivora = ['rabbit', 'zebra',]
const karnivora = ['lion', 'tiger']
const omnivora = ['chicken', 'monkey']
const animals = herbivora.concat(karnivora, omnivora);
//console.log(animals);

//8. Slice = digunakan untuk memilih satu atau beberapa item dari sebuah array.
//contoh:
const fruits = ['banana', 'mango', 'durian', 'apple']
fruits.slice(0, 1);
// console.log(fruits);

//9. Splice = digunakan untuk menambahkan, menghapus, atau mereplace item ke atau dari sebuah array.
//contoh: 
const flowers = ['rose', 'lily', 'tulip']
flowers.splice(0, 1); //menghapus 1 item pada index 0
//console.log(flowers);

//10. Sort = digunakan untuk mengurutkan item dalam sebuah array, urutannya bisa numeric atau alphabet, bisa ascending (keatas) atau descending (kebawah).
//contoh:
const myNumFavorit = [11, 99, 7, 17, 75, 3]
myNumFavorit.sort();
// console.log(myNumFavorit);
myNumFavorit.sort(function(a, b) { return a - b });
//console.log(myNumFavorit);

//Number 2
const searchName = (nama, num, callback) => {
    const name = [
      'Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope']
    let output = name.filter(name => name.indexOf(nama) !== -1);
    output.forEach(element => element.length == num);
    callback(output);
  }
  const showName = (output) => {
    console.log(output);
  }
  searchName("an", 3, showName);

//Number 3

function seleksiNilai (nilaiAwal, nilaiAkhir, dataArray) {
  if (nilaiAwal > nilaiAkhir) return console.log("nilai akhir harus lebih besar dari nilai awal")
  if (dataArray?.length < 5) return console.log("data array harus lebih dari 5") 
  let hasil = []
  dataArray?.forEach(nomer => {
    if (nomer > nilaiAwal && nomer < nilaiAkhir) return hasil.push(nomer)
  })
  if (hasil.length === 0) return console.log("nilai tidak ditemukan")
  log(hasil.sort(function(a, b){return a - b}))
}

seleksiNilai (5,20, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai (15,3, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai (5, 17, [2, 25, 4]);
seleksiNilai (5, 17, [2, 25, 4, 1, 30, 18])