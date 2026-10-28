function updateTactics() {
    // Ambil input value dari semua dropdown di HTML
    const fw = document.getElementById("fwSelect").value;
    const mf = document.getElementById("mfSelect").value;
    const df = document.getElementById("dfSelect").value;
    const gk = document.getElementById("gkSelect").value;

    // Variabel penampung nilai statistik kumulatif
    let totalAtk = 0;
    let totalDef = 0;

    // 1. SWITCH CASE - PENYERANG (FW)
    const cardFw = document.getElementById("card-fw");
    const nameFw = document.getElementById("name-fw");
    switch(fw) {
        case "cr7":
            nameFw.innerText = "C. RONALDO";
            totalAtk += 48; totalDef += 5;
            activateCard(cardFw);
            break;
        case "mbappe":
            nameFw.innerText = "K. MBAPPÉ";
            totalAtk += 50; totalDef += 3;
            activateCard(cardFw);
            break;
        default:
            nameFw.innerText = "KOSONG";
            deactivateCard(cardFw);
    }

    // 2. SWITCH CASE - GELANDANG (MF)
    const cardMf = document.getElementById("card-mf");
    const nameMf = document.getElementById("name-mf");
    switch(mf) {
        case "kdb":
            nameMf.innerText = "K. DE BRUYNE";
            totalAtk += 45; totalDef += 20;
            activateCard(cardMf);
            break;
        case "bellingham":
            nameMf.innerText = "J. BELLINGHAM";
            totalAtk += 40; totalDef += 35;
            activateCard(cardMf);
            break;
        default:
            nameMf.innerText = "KOSONG";
            deactivateCard(cardMf);
    }

    // 3. SWITCH CASE - BEK (DF)
    const cardDf = document.getElementById("card-df");
    const nameDf = document.getElementById("name-df");
    switch(df) {
        case "vvd":
            nameDf.innerText = "V. VAN DIJK";
            totalAtk += 10; totalDef += 48;
            activateCard(cardDf);
            break;
        case "rudiger":
            nameDf.innerText = "A. RÜDIGER";
            totalAtk += 8; totalDef += 50;
            activateCard(cardDf);
            break;
        default:
            nameDf.innerText = "KOSONG";
            deactivateCard(cardDf);
    }

    // 4. SWITCH CASE - KIPER (GK)
    const cardGk = document.getElementById("card-gk");
    const nameGk = document.getElementById("name-gk");
    switch(gk) {
        case "courtois":
            nameGk.innerText = "T. COURTOIS";
            totalAtk += 0; totalDef += 49;
            activateCard(cardGk);
            break;
        case "alisson":
            nameGk.innerText = "ALISSON B.";
            totalAtk += 2; totalDef += 47;
            activateCard(cardGk);
            break;
        default:
            nameGk.innerText = "KOSONG";
            deactivateCard(cardGk);
    }

    // Update Tampilan Bar & Angka Statistik Tim ke UI
    document.getElementById("atkVal").innerText = totalAtk + "/100";
    document.getElementById("atkBar").style.width = totalAtk + "%";
    
    document.getElementById("defVal").innerText = totalDef + "/100";
    document.getElementById("defBar").style.width = totalDef + "%";
}

// Fungsi Helper Efek Visual Card Saat Terisi (Menyala)
function activateCard(element) {
    element.classList.remove("opacity-40", "scale-90");
    element.classList.add("opacity-100", "scale-105", "shadow-xl");
}

// Fungsi Helper Efek Visual Card Saat Kosong (Meredup)
function deactivateCard(element) {
    element.classList.remove("opacity-100", "scale-105", "shadow-xl");
    element.classList.add("opacity-40", "scale-90");
}