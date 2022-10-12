// number 1
// //buat sambungan program pake try catch dan then catch seta jelaskan penggunaan keduanya dengan komen
const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
      let cek = dataDay.find((item) => {
        return item === day
      })
      if (cek) {
        resolve(cek)
      } else {
        reject(new Error('Hari ini bukan hari kerja'))
      }
    }, 3000)
  })
}
const hasil = (day) => {
  return `Hari ${day} adalah hari kerja`
}

let hariIni
switch (new Date().getDay()) {
  case 0: hariIni = 'Minggu'; break
  case 1: hariIni = 'Senin'; break
  case 2: hariIni = 'Selasa'; break
  case 3: hariIni = 'Rabu'; break
  case 4: hariIni = 'Kamis'; break
  case 5: hariIni = 'Jumat'; break
  case 6: hariIni = 'Sabtu'; break
}
console.log("Mengecek hari kerja atau bukan")
cekHariKerja(hariIni.toLowerCase())
  .then((result) => {
    console.log(hasil(result))
  })
  .catch((error) => {
    console.log(error.message)
  })
  .finally(() => {
    console.log('Selesai')
  })

const tryCatch = async () => {
  try {
    const output = await cekHariKerja(hariIni.toLowerCase())
    console.log(hasil(output))
  } catch (error) {
    console.log(error.message)
  } finally {
    console.log("Selesai")
  }
}
tryCatch()

//try-catch digunakan untuk mengurung eksekusi yang menampilkan error dan dapat membuat program tetap berjalan tanpa dihentikan secara langsung.
//F3ungsi dari then dan catch ini sendiri ialah then akan menghandle hasil eksekusi baik itu berhasil maupun gagal, sedangkan