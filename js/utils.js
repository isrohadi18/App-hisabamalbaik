function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

function setTab(tab) {
  document.getElementById("content-donasi").style.display =
    tab === "donasi" ? "flex" : "none";

  document.getElementById("content-zakat").style.display =
    tab === "zakat" ? "block" : "none";

  document
    .getElementById("tab-donasi")
    .classList.toggle("active", tab === "donasi");

  document
    .getElementById("tab-zakat")
    .classList.toggle("active", tab === "zakat");
}

function selectItem(group, id) {
  document.querySelectorAll("[data-group='" + group + "']").forEach((el) => {
    el.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}
