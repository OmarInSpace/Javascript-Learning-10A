function analisisPemain() {
    // 1. Mengambil data pemain yang dipilih
    const pemain = document.getElementById("playerSelect").value;
    
    // 2. Menargetkan elemen HTML untuk menampilkan hasil
    const infoBox = document.getElementById("infoBox");
    const playerRole = document.getElementById("playerRole");
    const playerDesc = document.getElementById("playerDesc");

    // 3. Logika SWITCH CASE berdasarkan value dropdown
    switch (pemain) {
        case "cr7":
            playerRole.innerText = "🚀 Striker / Penyerang Tengah";
            playerDesc.innerText = "Cristiano Ronaldo: Terkenal dengan penempatan posisi yang luar biasa, sundulan mematikan, dan insting gol yang sangat tajam di dalam kotak penalti.";
            infoBox.style.borderLeftColor = "#ef4444"; // Merah
            break;
            
        case "messi":
            playerRole.innerText = "🪄 Playmaker / Penyerang Bayangan";
            playerDesc.innerText = "Lionel Messi: Pemain dengan visi bermain jenius, kemampuan dribel rapat melewati lawan, serta eksekusi tendangan bebas yang sangat akurat.";
            infoBox.style.borderLeftColor = "#eab308"; // Kuning
            break;
            
        case "kdb":
            playerRole.innerText = "🎯 Gelandang Serang (Midfielder)";
            playerDesc.innerText = "Kevin De Bruyne: Raja assist dengan kemampuan mengumpan silang yang mematikan, visi permainan visioner, dan tendangan jarak jauh yang keras.";
            infoBox.style.borderLeftColor = "#3b82f6"; // Biru
            break;
            
        case "vvd":
            playerRole.innerText = "🛡️ Bek Tengah (Central Back)";
            playerDesc.innerText = "Virgil van Dijk: Monster lini pertahanan yang sangat kuat dalam duel udara, tenang saat menguasai bola, dan sulit dilewati dalam situasi satu lawan satu.";
            infoBox.style.borderLeftColor = "#22c55e"; // Hijau
            break;
            
        default:
            playerRole.innerText = "Menunggu Pilihan...";
            playerDesc.innerText = "Silakan pilih salah satu pemain bintang di atas untuk memicu logika switch case.";
            infoBox.style.borderLeftColor = "#64748b"; // Abu-abu default
    }
}