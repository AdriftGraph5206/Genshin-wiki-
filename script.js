async function dwa() {
//     https://genshin.jmp.blue/

// const charactersearch =  document.getElementById("Submit").onclick = () => {

// var input = document.getElementById("searchas")
// var ind = input.value

// console.log(ind)

// return ind
// }

// console.log(ind)

const ind = "candace"
    const characterapi = await fetch(`https://genshin.jmp.blue/characters/${ind}`)
    const elementsapi = await fetch("https://genshin.jmp.blue/elements")
    const enemiesapi = await fetch("https://genshin.jmp.blue/enemies")
    const materialsapi = await fetch("https://genshin.jmp.blue/materials")
    const nationsapi = await fetch("https://genshin.jmp.blue/nations")
    const weaponsapi = await fetch("https://genshin.jmp.blue/weapons")

   
    const characters = await characterapi.json()
    const elements = await elementsapi.json()
    const enemies = await enemiesapi.json()
    const materials = await materialsapi.json()
    const nations = await nationsapi.json()
    const weapons = await weaponsapi.json()

    
    const card = document.getElementById("info")

// character info
    
const name = card.appendChild(document.createElement("h2"))
name.classList.add("txt")
name.innerText = "Name: " +  characters.name

const title = card.appendChild(document.createElement("h2"))
title.classList.add("txt")
title.innerText = "Title: " + characters.title

const vision = card.appendChild(document.createElement("h2"))
vision.classList.add("txt")
vision.innerText = "Vision: " + characters.vision

const weapon = card.appendChild(document.createElement("h2"))
weapon.classList.add("txt")
weapon.innerText = "Weapon: " + characters.weapon

const gender = card.appendChild(document.createElement("h2"))
gender.classList.add("txt")
gender.innerText = "Gender: " + characters.gender

const nation = card.appendChild(document.createElement("h2"))
nation.classList.add("txt")
nation.innerText = "Nation: " + characters.nation

const affiliation = card.appendChild(document.createElement("h2"))
affiliation.classList.add("txt")
affiliation.innerText = "Affiliation: " + characters.affiliation

const rarity = card.appendChild(document.createElement("h2"))
rarity.classList.add("txt")
rarity.innerText = "Rarity: " + characters.rarity

const release = card.appendChild(document.createElement("h2"))
release.classList.add("txt")
release.innerText = "Release: " + characters.release

const constellation = card.appendChild(document.createElement("h2"))
constellation.classList.add("txt")
constellation.innerText = "Constellation: " + characters.constellation

const birthday = card.appendChild(document.createElement("h2"))
birthday.classList.add("txt")
birthday.innerText = "Birthday: " + characters.birthday

const description = card.appendChild(document.createElement("h2"))
description.classList.add("txt")
description.innerText = "Description: " + characters.description

const skill = document.getElementById("skill")

console.log(characters)

// skils

for(let i = 0; i < characters.skillTalents.length; i++){

console.log(characters.skillTalents[i])

const skillname = skill.appendChild(document.createElement("h2"))
skillname.classList.add("txt")
skillname.innerText = "Skill name: " + characters.skillTalents[i].name

const skilldescription = skill.appendChild(document.createElement("p"))
skilldescription.classList.add("txt")
skilldescription.innerText = "Skill Description: " + characters.skillTalents[i].description

const skilltype = skill.appendChild(document.createElement("h2"))
skilltype.classList.add("txt")
skilltype.innerText = "Skill unlock: " + characters.skillTalents[i].type



const skillstatsname = skill.appendChild(document.createElement("h2"))
skillstatsname.classList.add("txt")
skillstatsname.innerText = "Skill Stats Name: " + characters.skillTalents[i].upgrades[i].name

const skillstatsvalue = skill.appendChild(document.createElement("h2"))
skillstatsvalue.classList.add("txt")
skillstatsvalue.innerText = "Skill Stats Value: " + characters.skillTalents[i].upgrades[i].value

}

for(let i = 0; i < characters.skillTalents.length; i++){

}

console.log(characters.skillTalents[0].upgrades)


// ascention_materials

const ascentiondiv = document.getElementById("ascention")


for(let i = 0; i < characters.ascension_materials.level_20.length; i++){
    const costn = ascentiondiv.appendChild(document.createElement("h2"))
    costn.classList.add("txt")
    costn.innerText = "Material name to upgrade ot level 20: " + characters.ascension_materials.level_20[i].name

    const cost = ascentiondiv.appendChild(document.createElement("h2"))
    cost.classList.add("txt")
    cost.innerText = "Material count to upgrade to level 20: " + characters.ascension_materials.level_20[i].value

}

for(let i = 0; i < characters.ascension_materials.level_40.length; i++){
    const costn1 = ascentiondiv.appendChild(document.createElement("h2"))
    costn1.classList.add("txt")
    costn1.innerText = "Material name to upgrade ot level 40: " + characters.ascension_materials.level_40[i].name

    const cost1 = ascentiondiv.appendChild(document.createElement("h2"))
    cost1.classList.add("txt")
    cost1.innerText = "Material count to upgrade to level 40: " + characters.ascension_materials.level_40[i].value

}

for(let i = 0; i < characters.ascension_materials.level_50.length; i++){
    const costn2 = ascentiondiv.appendChild(document.createElement("h2"))
    costn2.classList.add("txt")
    costn2.innerText = "Material name to upgrade ot level 50: " + characters.ascension_materials.level_50[i].name

    const cost2 = ascentiondiv.appendChild(document.createElement("h2"))
    cost2.classList.add("txt")
    cost2.innerText = "Material count to upgrade to level 50: " + characters.ascension_materials.level_50[i].value

}

for(let i = 0; i < characters.ascension_materials.level_60.length; i++){
    const costn3 = ascentiondiv.appendChild(document.createElement("h2"))
    costn3.classList.add("txt")
    costn3.innerText = "Material name to upgrade ot level 60: " + characters.ascension_materials.level_60[i].name

    const cost3 = ascentiondiv.appendChild(document.createElement("h2"))
    cost3.classList.add("txt")
    cost3.innerText = "Material count to upgrade to level 60: " + characters.ascension_materials.level_60[i].value

}

for(let i = 0; i < characters.ascension_materials.level_70.length; i++){
    const costn4 = ascentiondiv.appendChild(document.createElement("h2"))
    costn4.classList.add("txt")
    costn4.innerText = "Material name to upgrade ot level 70: " + characters.ascension_materials.level_70[i].name

    const cost4 = ascentiondiv.appendChild(document.createElement("h2"))
    cost4.classList.add("txt")
    cost4.innerText = "Material count to upgrade to level 70: " + characters.ascension_materials.level_70[i].value

}

for(let i = 0; i < characters.ascension_materials.level_80.length; i++){
    const costn5 = ascentiondiv.appendChild(document.createElement("h2"))
    costn5.classList.add("txt")
    costn5.innerText = "Material name to upgrade ot level 80: " + characters.ascension_materials.level_80[i].name

    const cost5 = ascentiondiv.appendChild(document.createElement("h2"))
    cost5.classList.add("txt")
    cost5.innerText = "Material count to upgrade to level 80: " + characters.ascension_materials.level_80[i].value

}
    
//constelations

const constelations = document.getElementById("constelations")

for(let i = 0; i < characters.constellations.length ; i++){
    const consteln = constelations.appendChild(document.createElement("h2"))
    consteln.classList.add("txt")
    consteln.innerText = characters.constellations[i].name

    const consteld = constelations.appendChild(document.createElement("p"))
    consteld.classList.add("txt")
    consteld.innerText = characters.constellations[i].description

    const constelu = constelations.appendChild(document.createElement("p"))
    constelu.classList.add("txt")
    constelu.innerText = characters.constellations[i].unlock
}
    

    

    

    




}



dwa()