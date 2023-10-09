let stemmer1 = 0;
let stemmer2 = 0;
let stemmer3 = 0;
let stemmer4 = 0;



function stemPåAlternativ(alternativ) {
    if (alternativ === 1) {
        stemmer1 = stemmer1 + 1;
    }
    else if (alternativ === 2) {
        stemmer2++;
    } else if (alternativ === 3) {
        stemmer3++;
    } else if (alternativ === 4) {
        stemmer4++;
    }

    //oppdaterResu
    
}

function lagSporsmal(spors) {
    const sporsCard = document.createElement('div');
    const sporsmalsTekst = document.createElement("div");

    sporsmalsTekst.innerHTML = spors;

    const btnEnig = document.createElement("button");
    btnEnig.innerHTML = "Enig";
    btnEnig.addEventListener("click", ()=> {
        console.log("Enig clicked");
    })
    
    sporsCard.appendChild(sporsmalsTekst);
    sporsCard.appendChild(btnEnig);

    document.body.appendChild(sporsCard);
}

function lagSporsmal(spors) {
    const sporsCard = document.createElement('div');
    const sporsmalsTekst = document.createElement("div");

    sporsmalsTekst.innerHTML = spors;

    const btnUenig = document.createElement("button");
    btnUenig.innerHTML = "Uenig";
    btnUenig.addEventListener("click", ()=> {
        console.log("Uenig clicked");
    })
    
    sporsCard.appendChild(sporsmalsTekst);
    sporsCard.appendChild(btnUenig);

    document.body.appendChild(sporsCard);
}

function oppdaterResultater() {
    document.getElementById("resultat1").textContent = stemmer1;
    document.getElementById("resultat2").textContent = stemmer2;
}

// Lytt etter klikk på knappene og stem på det val8gte alternativet
document.getElementById("spm1Alternativ1").addEventListener("click", function() {
    console.log("Du valgte alternativ 1");
    stemPåAlternativ(1);

});

document.getElementById("spm2Alternativ2").addEventListener("click", function() {
    console.log("Du valgte alternativ 2");
    stemPåAlternativ(2);

});


document.getElementById("knappResultat").addEventListener("click", visresultat);
function visresultat() {
    document.getElementById("Quest").style.display = "none" 
    document.getElementById("knappResultat").style.display = "none"
  

}

document.getElementById("Quest").addEventListener("click", visquest);
function visquest() {
    document.getElementById("Quest").style.display = "none"
}
