const nisab = 85000000;
const fitrahTarif = 35000;
let jenis = "mal";

function selectJenis(type) {
  jenis = type;

  document.getElementById("btn-mal").classList.toggle("active", type === "mal");
  document
    .getElementById("btn-fitrah")
    .classList.toggle("active", type === "fitrah");

  document.getElementById("form-mal").style.display =
    type === "mal" ? "block" : "none";

  document.getElementById("form-fitrah").style.display =
    type === "fitrah" ? "block" : "none";

  hitungZakat();
}

function hitungZakat() {
  let hasil = 0;

  if (jenis === "mal") {
    const uang = parseFloat(document.getElementById("uang").value) || 0;
    const tabungan = parseFloat(document.getElementById("tabungan").value) || 0;
    const emas = parseFloat(document.getElementById("emas").value) || 0;
    const hutang = parseFloat(document.getElementById("hutang").value) || 0;

    const totalHarta = uang + tabungan + emas;
    const hartaBersih = totalHarta - hutang;

    if (hartaBersih >= nisab) {
      hasil = hartaBersih * 0.025;
    }
  } else {
    const jiwa = parseFloat(document.getElementById("jumlahJiwa").value) || 0;
    hasil = jiwa * fitrahTarif;
  }

  document.getElementById("hasilZakat").innerText =
    "Rp " + hasil.toLocaleString("id-ID");

  document.getElementById("btnBayar").style.display =
    hasil > 0 ? "block" : "none";

  if (hutang > totalHarta) {
    alert("Hutang tidak boleh melebihi total harta");
    return;
  }
}
document.addEventListener("input", hitungZakat);
document.getElementById("infoBersih").innerText =
  "Harta Bersih: Rp " + (hartaBersih || 0).toLocaleString("id-ID");
