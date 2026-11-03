
console.log("AMSYAR DIGITAL - SYSTEM ONLINE");

const orb = document.querySelector(".orb");

if (orb) {
    document.addEventListener("mousemove", (event) => {
        const x = (event.clientX / window.innerWidth - 0.5) * 12;
        const y = (event.clientY / window.innerHeight - 0.5) * 12;

        orb.style.marginLeft = x + "px";
        orb.style.marginTop = y + "px";
    });
}

function pesanLayanan(namaLayanan) {

    const nomorWhatsApp = "6282269371984";

    const pesan = "Halo Mimin! Saya tertarik memesan layanan " 
        + namaLayanan + ". Bisa minta informasi lebih lanjut?";

    const link = "https://wa.me/" + nomorWhatsApp
        + "?text=" + encodeURIComponent(pesan);

    window.open(link, "_blank");
}

// CONTACT FORM

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const layanan = document.getElementById("layanan").value;
    const pesan = document.getElementById("pesan").value.trim();

    if (!nama || !layanan || !pesan) {
      alert("Mohon lengkapi semua kolom.");
      return;
    }

    // Ganti dengan nomor WhatsApp bisnis yang sudah disiapkan.
    const nomorWhatsApp = "6282269371984";

    const isiPesan =
      `Halo Amsyar Digital!\n\n` +
      `Nama: ${nama}\n` +
      `Layanan: ${layanan}\n` +
      `Pesan: ${pesan}`;

    const url =
      `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(isiPesan)}`;

    window.open(url, "_blank");
  });
}
