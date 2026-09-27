// ======================================================
// EDITOR PAS FOTO
// PART 1
// ======================================================

// ================= ELEMENT =================

const upload = document.getElementById("uploadFoto");

const preview = document.getElementById("previewImage");

const placeholder = document.getElementById("placeholder");

const canvas = document.getElementById("canvasArea");

const zoomSlider = document.getElementById("zoomSlider");

const brightnessSlider = document.getElementById("brightness");

const contrastSlider = document.getElementById("contrast");

const saturationSlider = document.getElementById("saturation");

const rotateLeft = document.getElementById("rotateLeft");

const rotateRight = document.getElementById("rotateRight");

const flipHorizontal = document.getElementById("flipHorizontal");

const flipVertical = document.getElementById("flipVertical");

const bgButtons = document.querySelectorAll(".bg-btn");

const sizeButtons = document.querySelectorAll(".size-btn");

const moveUp = document.getElementById("moveUp");

const moveDown = document.getElementById("moveDown");

const moveLeft = document.getElementById("moveLeft");

const moveRight = document.getElementById("moveRight");


// ================= VARIABLE =================

let currentX = 0;

let currentY = 0;

let scale = 1;

let rotation = 0;

let flipX = 1;

let flipY = 1;

let brightness = 100;

let contrast = 100;

let saturation = 100;

let isDragging = false;

let startX = 0;

let startY = 0;


// ================= UPDATE =================

function updateTransform(){

    preview.style.transform = `
    translate(calc(-50% + ${currentX}px),
    calc(-50% + ${currentY}px))
    scale(${scale * flipX},${scale * flipY})
    rotate(${rotation}deg)
    `;

    preview.style.filter = `
    brightness(${brightness}%)
    contrast(${contrast}%)
    saturate(${saturation}%)
    `;

}


// ================= SAVE =================
function saveEditor(){

    const params = new URLSearchParams(window.location.search);
    const bookingId = params.get("id");

    if (!bookingId) {
        alert("ID booking tidak ditemukan.");
        return;
    }

    const activeSize = document.querySelector(".size-btn.active");

    const data = {
        foto: preview.src,
        x: currentX,
        y: currentY,
        zoom: scale,
        rotate: rotation,
        flipX: flipX,
        flipY: flipY,
        brightness: brightness,
        contrast: contrast,
        saturation: saturation,
        background: canvas.style.background,
        ukuran: activeSize ? activeSize.dataset.size : "2x3"
    };

    localStorage.setItem(
        "editorData_" + bookingId,
        JSON.stringify(data)
    );
}
// ======================================================
// LOAD EDITOR
// ======================================================

function loadEditor(){

    const params = new URLSearchParams(window.location.search);
    const bookingId = params.get("id");

    if (!bookingId) {
        return;
    }

    const data = JSON.parse(
        localStorage.getItem("editorData_" + bookingId)
    );

    if (!data) {
        return;
    }

    preview.src = data.foto;
    preview.style.display = "block";
    placeholder.style.display = "none";

    currentX = data.x ?? 0;
    currentY = data.y ?? 0;
    scale = data.zoom ?? 1;
    rotation = data.rotate ?? 0;
    flipX = data.flipX ?? 1;
    flipY = data.flipY ?? 1;

    brightness = data.brightness ?? 100;
    contrast = data.contrast ?? 100;
    saturation = data.saturation ?? 100;

canvas.style.background =
    data.background || "#1f2937";


// ==========================
// KEMBALIKAN UKURAN
// ==========================

sizeButtons.forEach(btn => {
    btn.classList.remove("active");
});

canvas.classList.remove("size23", "size34", "size46");

const savedSize = data.ukuran || "2x3";

sizeButtons.forEach(btn => {

    if (btn.dataset.size === savedSize) {
        btn.classList.add("active");
    }

});

switch (savedSize) {

    case "2x3":
        canvas.classList.add("size23");
        break;

    case "3x4":
        canvas.classList.add("size34");
        break;

    case "4x6":
        canvas.classList.add("size46");
        break;

}


updateTransform();
}


// ======================================================
// UPLOAD FOTO
// ======================================================

upload.addEventListener("change",function(){

    const file = this.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(e){

        preview.src = e.target.result;

        preview.style.display = "block";

        placeholder.style.display = "none";

        currentX = 0;

        currentY = 0;

        scale = 1;

        rotation = 0;

        flipX = 1;

        flipY = 1;

        brightness = 100;

        contrast = 100;

        saturation = 100;

        zoomSlider.value = 100;

        brightnessSlider.value = 100;

        contrastSlider.value = 100;

        saturationSlider.value = 100;

        bgButtons.forEach(btn=>btn.classList.remove("active"));

        sizeButtons.forEach(btn=>btn.classList.remove("active"));

        if(sizeButtons[0]){

            sizeButtons[0].classList.add("active");

        }

        canvas.classList.remove("size23","size34","size46");

        canvas.classList.add("size23");

        canvas.style.background="#1f2937";

        updateTransform();

        saveEditor();

    }

    reader.readAsDataURL(file);

});


// ======================================================
// DRAG FOTO
// ======================================================

preview.addEventListener("mousedown",function(e){

    isDragging=true;

    startX=e.clientX-currentX;

    startY=e.clientY-currentY;

    preview.style.cursor="grabbing";

});

document.addEventListener("mousemove",function(e){

    if(!isDragging) return;

    currentX=e.clientX-startX;

    currentY=e.clientY-startY;

    updateTransform();

    saveEditor();

});

document.addEventListener("mouseup",function(){

    isDragging=false;

    preview.style.cursor="grab";

});

// ======================================================
// ZOOM
// ======================================================

zoomSlider.addEventListener("input",function(){

    scale = this.value / 100;

    updateTransform();

    saveEditor();

});

preview.addEventListener("wheel",function(e){

    e.preventDefault();

    if(e.deltaY < 0){

        scale += 0.05;

    }else{

        scale -= 0.05;

    }

    if(scale < 0.3) scale = 0.3;

    if(scale > 2) scale = 2;

    zoomSlider.value = scale * 100;

    updateTransform();

    saveEditor();

});


// ======================================================
// ROTATE
// ======================================================

rotateLeft.addEventListener("click",function(){

    rotation -= 90;

    updateTransform();

    saveEditor();

});

rotateRight.addEventListener("click",function(){

    rotation += 90;

    updateTransform();

    saveEditor();

});


// ======================================================
// FLIP
// ======================================================

flipHorizontal.addEventListener("click",function(){

    flipX *= -1;

    updateTransform();

    saveEditor();

});

flipVertical.addEventListener("click",function(){

    flipY *= -1;

    updateTransform();

    saveEditor();

});


// ======================================================
// FILTER
// ======================================================

brightnessSlider.addEventListener("input",function(){

    brightness = this.value;

    updateTransform();

    saveEditor();

});

contrastSlider.addEventListener("input",function(){

    contrast = this.value;

    updateTransform();

    saveEditor();

});

saturationSlider.addEventListener("input",function(){

    saturation = this.value;

    updateTransform();

    saveEditor();

});


// ======================================================
// BACKGROUND
// ======================================================

bgButtons.forEach(btn=>{

    btn.addEventListener("click",function(){

        bgButtons.forEach(b=>b.classList.remove("active"));

        this.classList.add("active");

        canvas.style.background = this.dataset.color;

        saveEditor();

    });

});


// ======================================================
// UKURAN
// ======================================================

sizeButtons.forEach(btn=>{

    btn.addEventListener("click",function(){

        sizeButtons.forEach(b=>b.classList.remove("active"));

        this.classList.add("active");

        canvas.classList.remove("size23","size34","size46");

        switch(this.dataset.size){

            case "2x3":

                canvas.classList.add("size23");

            break;

            case "3x4":

                canvas.classList.add("size34");

            break;

            case "4x6":

                canvas.classList.add("size46");

            break;

        }

        saveEditor();

    });

});


// ======================================================
// KEMBALI KE BOOKING
// ======================================================

const backToBooking = document.getElementById("backToBooking");

const exitModal = document.getElementById("exitModal");

const saveExitBtn = document.getElementById("saveExitBtn");

const discardExitBtn = document.getElementById("discardExitBtn");

const cancelExitBtn = document.getElementById("cancelExitBtn");


if (backToBooking) {

    backToBooking.addEventListener("click", function () {

        exitModal.classList.add("show");

    });

}


// ==========================
// SIMPAN & KELUAR
// ==========================

saveExitBtn.addEventListener("click", function () {

    if (preview.style.display == "none") {
        alert("Upload foto terlebih dahulu.");
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const bookingId = params.get("id");

    if (!bookingId) {
        alert("ID booking tidak ditemukan.");
        return;
    }

    // Simpan setting editor
    saveEditor();

    // Buat hasil PNG dari canvas
    html2canvas(canvas, {
        backgroundColor: null,
        useCORS: true,
        scale: 2,
        width: canvas.clientWidth,
        height: canvas.clientHeight

    }).then(function (result) {

        result.toBlob(function (blob) {

            const formData = new FormData();

            formData.append("simpan_hasil", "1");
            formData.append("id_booking", bookingId);

            formData.append(
                "hasil_edit",
                blob,
                "hasil_" + bookingId + ".png"
            );

            // Simpan hasil edit ke server
            fetch("editor_pasfoto.php?id=" + bookingId, {
                method: "POST",
                body: formData
            })
            .then(response => response.text())
            .then(data => {

                if (data.trim() === "success") {

                    // Setelah hasil tersimpan,
                    // status menjadi Sedang Diedit
                    return fetch(
                        "editor_pasfoto.php?id=" + bookingId,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type":
                                    "application/x-www-form-urlencoded"
                            },
                            body:
                                "ubah_status=Sedang%20Diedit"
                        }
                    );

                } else {

                    throw new Error(data);

                }

            })
            .then(() => {

                window.location.href = "booking.php";

            })
            .catch(error => {

                console.error(error);

                alert(
                    "Gagal menyimpan hasil edit:\n" +
                    error.message
                );

            });

        }, "image/png");

    });

});
// ==========================
// KELUAR TANPA SIMPAN
// ==========================

discardExitBtn.addEventListener("click", function () {

    const params = new URLSearchParams(window.location.search);

    const bookingId = params.get("id");

    if (bookingId) {

        // Hapus DATA EDITING saja
        localStorage.removeItem(
            "editorData_" + bookingId
        );

    }

    window.location.href = "booking.php";

});


// ==========================
// BATAL
// ==========================

cancelExitBtn.addEventListener("click", function () {

    exitModal.classList.remove("show");

});


// Klik area luar modal = tutup
exitModal.addEventListener("click", function (e) {

    if (e.target === exitModal) {

        exitModal.classList.remove("show");

    }

});

// ======================================================
// START
// ======================================================

loadEditor();

const removeBgBtn=document.getElementById("removeBgBtn");

const removeBgModal=document.getElementById("removeBgModal");

const closeRemoveBg=document.getElementById("closeRemoveBg");

removeBgBtn.onclick=function(){

    removeBgModal.classList.add("show");

}

closeRemoveBg.onclick=function(){

    removeBgModal.classList.remove("show");

}

window.onclick=function(e){

    if(e.target==removeBgModal){

        removeBgModal.classList.remove("show");

    }

}

// ================= POSISI FOTO =================

moveUp.addEventListener("click",function(){

    currentY -= 10;

    updateTransform();

    saveEditor();

});

moveDown.addEventListener("click",function(){

    currentY += 10;

    updateTransform();

    saveEditor();

});

moveLeft.addEventListener("click",function(){

    currentX -= 10;

    updateTransform();

    saveEditor();

});

moveRight.addEventListener("click",function(){

    currentX += 10;

    updateTransform();

    saveEditor();

});


// ======================================================
// PREVIEW
// ======================================================

const previewBtn = document.querySelector(".preview");

const previewModal = document.getElementById("previewModal");

const previewPaper = document.getElementById("previewPaper");

const closePreview = document.getElementById("closePreview");

const previewBack = document.getElementById("previewBack");

previewBtn.onclick = function(){

    if(preview.style.display=="none"){

        alert("Upload foto terlebih dahulu.");

        return;

    }

    previewPaper.innerHTML="";

    const clone = canvas.cloneNode(true);

    clone.removeAttribute("id");

    clone.style.margin="0";

    clone.style.cursor="default";

    clone.style.transform="none";

    clone.style.pointerEvents="none";

    clone.style.border="none";

    clone.style.boxShadow="none";

    clone.style.background=canvas.style.background;

    clone.style.width=canvas.offsetWidth+"px";

    clone.style.height=canvas.offsetHeight+"px";

    previewPaper.appendChild(clone);

    previewModal.classList.add("show");

}

closePreview.onclick=function(){

    previewModal.classList.remove("show");

}

previewBack.onclick=function(){

    previewModal.classList.remove("show");

}

previewModal.onclick=function(e){

    if(e.target===previewModal){

        previewModal.classList.remove("show");

    }

}

// ======================================
// SIMPAN PAS FOTO
// ======================================

const saveBtn = document.querySelector(".save");

saveBtn.onclick = function () {

    // Cek apakah foto sudah ada
    if (preview.style.display == "none") {

        alert("Upload foto terlebih dahulu.");

        return;
    }

    // Ambil ID booking
    const params = new URLSearchParams(
        window.location.search
    );

    const bookingId = params.get("id");

    if (!bookingId) {

        alert("ID booking tidak ditemukan.");

        return;
    }

    // ======================================
    // KONFIRMASI
    // ======================================

    const yakin = confirm(
        "Yakin ingin menyelesaikan pesanan ini?\n\n" +
        "Setelah disimpan, status pesanan akan menjadi Selesai."
    );

    if (!yakin) {

        return;

    }

    // ======================================
    // SIMPAN SETTING EDITOR
    // ======================================

    saveEditor();

    // Hilangkan border editor
    canvas.style.overflow = "hidden";
    canvas.style.border = "none";

    // ======================================
    // BUAT PNG
    // ======================================

    html2canvas(canvas, {

        backgroundColor: null,

        useCORS: true,

        scale: 2,

        width: canvas.clientWidth,

        height: canvas.clientHeight

    }).then(function (result) {

        result.toBlob(function (blob) {

            const formData = new FormData();

            formData.append(
                "simpan_hasil",
                "1"
            );

            formData.append(
                "id_booking",
                bookingId
            );

            formData.append(
                "hasil_edit",
                blob,
                "hasil_" + bookingId + ".png"
            );

            // ======================================
            // SIMPAN HASIL FOTO
            // ======================================

            fetch(
                "editor_pasfoto.php?id=" + bookingId,
                {
                    method: "POST",
                    body: formData
                }
            )

            .then(response => response.text())

            .then(data => {

                if (data.trim() !== "success") {

                    throw new Error(data);

                }

                // ======================================
                // UBAH STATUS MENJADI SELESAI
                // ======================================

                return fetch(
                    "editor_pasfoto.php?id=" + bookingId,
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/x-www-form-urlencoded"
                        },

                        body:
                            "ubah_status=" +
                            encodeURIComponent("Selesai")
                    }
                );

            })

            .then(response => response.text())

            .then(data => {

                // ======================================
                // SELESAI
                // ======================================

                window.location.href = "booking.php";

            })

            .catch(error => {

                console.error(error);

                alert(
                    "Gagal menyelesaikan pesanan:\n" +
                    error.message
                );

            });

        }, "image/png");

    });

};