// //number 1
// //buat sambungan program pake try catch dan then catch seta jelaskan penggunaan keduanya dengan komen
// const cekHariKerja = (day) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
//       let cek = dataDay.find((item) => {
//         return item === day
//       })
//       if (cek) {
//         resolve(cek)
//       } else {
//         reject(new Error('Hari ini bukan hari kerja'))
//       }
//     }, 3000)
//   })
// }
// const hasil = (day) => {
//   return `Hari ${day} adalah hari kerja`
// }

// let hariIni
// switch (new Date().getDay()) {
//   case 0: hariIni = 'Minggu'; break
//   case 1: hariIni = 'Senin'; break
//   case 2: hariIni = 'Selasa'; break
//   case 3: hariIni = 'Rabu'; break
//   case 4: hariIni = 'Kamis'; break
//   case 5: hariIni = 'Jumat'; break
//   case 6: hariIni = 'Sabtu'; break
// }
// console.log("Mengecek hari kerja atau bukan")
// cekHariKerja(hariIni.toLowerCase())
//   .then((result) => {
//     console.log(hasil(result))
//   })
//   .catch((error) => {
//     console.log(error.message)
//   })
//   .finally(() => {
//     console.log('Selesai')
//   })

// const tryCatch = async () => {
//   try {
//     const output = await cekHariKerja(hariIni.toLowerCase())
//     console.log(hasil(output))
//   } catch (error) {
//     console.log(error.message)
//   } finally {
//     console.log("Selesai")
//   }
// }
// tryCatch()

//try-catch digunakan untuk mengurung eksekusi yang menampilkan error dan dapat membuat program tetap berjalan tanpa dihentikan secara langsung.
//F3ungsi dari then dan catch ini sendiri ialah then akan menghandle hasil eksekusi baik itu berhasil maupun gagal, sedangkan catch akan menghandle bila terdapat error pada kode.

// //number 2
// //pake callback dan method map untuk nampilin
// const getMonth = (callback) => {
//   setTimeout(() => {
//     let error = false
//     let month = ['January', 'February', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
//     if (!error) {
//       callback(null, month)
//     } else {
//       callback(new Error('Sorry Data Not Found'), [])
//     }
//   }, 4000)
// }
// const callback = (error, data) => {
//   if (error) {
//     console.log(error.message)
//   } else {
//     data.map((error, i) => {
//       let num = i + 1;
//       console.log(`${num}. ${error}`)
//     })
//   } console.log("Selesai")
// }
// // console.log("Menampilkan nama bulan:");
// getMonth(callback);

//number 3
//buat 2 program pake promise

// 1. pertandingan bola
// const pertandingan = (bola) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (bola == true) {
//         resolve("grup b masuk final")
//       } else {
//         reject("grup b gagal masuk final")
//       }
//     }, 3000)
//   })
// }
// const bola = true
// pertandingan(bola)
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error))

//cek username
// const listUsername = ["lidiya11", "lidiya22", "lidiya33", "lidiya44"]

// const step1 = () => {
//   console.log("Mengecek username...")
// }
// const step2 = (name, dataName) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const cekUsername = dataName.includes(name)
//       if (cekUsername) {
//         reject(new Error(`Username ${name} tidak dapat digunakan atau telah dipakai`))
//       } else if (name.length <= 5) {
//         reject(new Error("Username harus lebih dari 5 huruf"))
//       } else {
//         resolve(`Username ${name} dapat digunakan`)
//       }
//     }, 3000);
//   })
// }
// const finalStep = () => {
//   console.log("Proses selesai.")
// }
// step1()
// step2("lidiya11", listUsername)
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((error) => {
//     console.log(error.message)
//   })
//   .finally(() => {
//     finalStep()
//   })

