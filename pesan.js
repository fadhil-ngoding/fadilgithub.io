const form = document.querySelector("form");

// ==========================
// KONFIRMASI PESANAN
// ==========================

function konfirmasiPesanan() {

    const foto = document.getElementById("foto");
    const ukuran = document.querySelector("select[name='ukuran']");
    const background = document.querySelector("select[name='background']");
    const jumlah = document.querySelector("select[name='jumlah']");

    // Cek foto
    if (!foto.files || foto.files.length === 0) {
        alert("Silakan upload foto terlebih dahulu.");
        return;
    }

    // Cek ukuran
    if (ukuran.value === "") {
        alert("Silakan pilih ukuran pas foto terlebih dahulu.");
        ukuran.focus();
        return;
    }

    // Cek background
    if (background.value === "") {
        alert("Silakan pilih background terlebih dahulu.");
        background.focus();
        return;
    }

    // Cek jumlah
    if (jumlah.value === "") {
        alert("Silakan pilih jumlah lembar terlebih dahulu.");
        jumlah.focus();
        return;
    }

    // Semua sudah diisi
    document.getElementById("popupKonfirmasi").classList.add("active");
}


// ==========================
// BATAL PESANAN
// ==========================

function batalPesanan() {

    document.getElementById("popupKonfirmasi").classList.remove("active");

}


// ==========================
// IYA, PESAN
// ==========================

function lanjutPesanan() {

    // Tutup popup konfirmasi
    document.getElementById("popupKonfirmasi").classList.remove("active");

    // Langsung kirim form ke PHP
    form.submit();
}


// ==========================
// TUTUP POPUP TOTAL
// ==========================

function tutupPopup() {

    document.getElementById("popup").classList.remove("active");

}


// ==========================
// PREVIEW FOTO
// ==========================

const inputFoto = document.getElementById("foto");
const previewFoto = document.getElementById("previewFoto");
const uploadText = document.getElementById("uploadText");

inputFoto.addEventListener("change", function () {

    const file = this.files[0];

    if (file) {

        const reader = new FileReader();

        reader.onload = function (e) {

            previewFoto.src = e.target.result;
            previewFoto.style.display = "block";
            uploadText.style.display = "none";

        };

        reader.readAsDataURL(file);

    }

});