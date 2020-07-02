function objek() {
  var virus = {
    nama: "Corona 20",
    warna: ["Merah", "Putih"],
    tahun: 2020,
  };

  virus.nama = "Corona Virus Disease-19";
  virus.bentuk = "Bulat";

  for (var value in virus) {
    console.log(virus[value]);
  }
}

objek();
