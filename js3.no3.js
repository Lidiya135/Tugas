// number 3
// buat 2 program pake promise

// 1. pertandingan bola
const pertandingan = (bola) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (bola == true) {
        resolve("grup b masuk final")
      } else {
        reject("grup b gagal masuk final")
      }
    }, 3000)
  })
}
const bola = true
pertandingan(bola)
  .then((res) => console.log(res))
  .catch((error) => console.log(error))

// cek username
const listUsername = ["lidiya11", "lidiya22", "lidiya33", "lidiya44"]

const step1 = () => {
  console.log("Mengecek username...")
}
const step2 = (name, dataName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cekUsername = dataName.includes(name)
      if (cekUsername) {
        reject(new Error(`Username ${name} tidak dapat digunakan atau telah dipakai`))
      } else if (name.length <= 5) {
        reject(new Error("Username harus lebih dari 5 huruf"))
      } else {
        resolve(`Username ${name} dapat digunakan`)
      }
    }, 3000);
  })
}
const finalStep = () => {
  console.log("Proses selesai.")
}
step1()
step2("lidiya11", listUsername)
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error.message)
  })
  .finally(() => {
    finalStep()
  })