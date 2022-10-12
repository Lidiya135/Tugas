//number 2
//pake callback dan method map untuk nampilin
const getMonth = (callback) => {
  setTimeout(() => {
    let error = false
    let month = ['January', 'February', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    if (!error) {
      callback(null, month)
    } else {
      callback(new Error('Sorry Data Not Found'), [])
    }
  }, 4000)
}
const callback = (error, data) => {
  if (error) {
    console.log(error.message)
  } else {
    data.map((error, i) => {
      let num = i + 1;
      console.log(`${num}. ${error}`)
    })
  } console.log("Selesai")
}
console.log("Menampilkan nama bulan:");
getMonth(callback);