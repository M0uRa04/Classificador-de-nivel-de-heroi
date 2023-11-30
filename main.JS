var bidimensionalVectorOfHeroes = [
    ["Solaris Sentinel", 521],
    ["Phantom Blazer", 1499],
    ["Thunderstrike", 4083],
    ["Frostwind Warden", 6712],
    ["Mirage Guardian", 7129],
    ["Nova Seraph", 8999],
    ["Stormshade Avenger", 9123],
    ["Ironclad Valkyrie", 110000]
]

var rank;
var level;

function classificatorLevelOfHero(level){
    if (level <= 1000) {
        rank = "Ferro";
    } else if (level >= 1001 && level <= 2000) {
        rank = "Bronze";
    } else if (level >= 2001 && level <= 5000) {
        rank = "Prata";
    } else if (level >= 6001 && level <= 7000) {
        rank = "Ouro";
    } else if (level >= 7001 && level <= 8000) {
        rank = "Platina";
    } else if (level >= 8001 && level <= 9000) {
        rank = "Ascendente";
    } else if (level >= 9001 && level <= 10000) {
        rank = "Imortal";
    } else if (level >= 10001) {
        rank = "Radiante";
    }
}

function printAllHeros(){
    console.log("---------------------------------------------------------")
    console.log("Apresentando toda a lista de heróis e seus niveís atuais")
    console.log("---------------------------------------------------------")
    for(let i = 0; i <= 7 ; i++){
        level = (bidimensionalVectorOfHeroes[i][1])
        classificatorLevelOfHero(level)
        console.log("O Herói de nome: " + bidimensionalVectorOfHeroes[i][0]  + " está no nível de " + rank)
    }
    console.log("---------------------------------------------------------")

}

function printOneHero(indexOfHero){
    console.log("---------------------------------------------------------")
    console.log("Apresentando o herói escolhido")
    console.log("---------------------------------------------------------")
    level = bidimensionalVectorOfHeroes[indexOfHero][1]
    classificatorLevelOfHero(level)
    console.log("O Herói de nome: " + bidimensionalVectorOfHeroes[indexOfHero][0]  + " está no nível de " + rank)
    console.log("---------------------------------------------------------")

}

printOneHero(0)
printAllHeros()