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

    const artifactsapi = await fetch("https://genshin.jmp.blue/artifacts")
    const bossapi = await fetch("https://genshin.jmp.blue/boss")
    const characterapi = await fetch(`https://genshin.jmp.blue/characters/${ind}`)
    const consumablesapi = await fetch("https://genshin.jmp.blue/consumables")
    const domainsapi = await fetch("https://genshin.jmp.blue/domains")
    const elementsapi = await fetch("https://genshin.jmp.blue/elements")
    const enemiesapi = await fetch("https://genshin.jmp.blue/enemies")
    const materialsapi = await fetch("https://genshin.jmp.blue/materials")
    const nationsapi = await fetch("https://genshin.jmp.blue/nations")
    const weaponsapi = await fetch("https://genshin.jmp.blue/weapons")

    const artifacts = await artifactsapi.json()
    const boss = await bossapi.json()
    const characters = await characterapi.json()
    const consumables = await consumablesapi.json()
    const domains = await domainsapi.json()
    const elements = await elementsapi.json()
    const enemies = await enemiesapi.json()
    const materials = await materialsapi.json()
    const nations = await nationsapi.json()
    const weapons = await weaponsapi.json()

    
    const card = document.getElementById("card")


    
// const name = card.appendChild(document.createElement("h2"))
// name.classList.add("txt")
// name.innerText = "Name: " +  characters.name

// const title = card.appendChild(document.createElement("h2"))
// title.classList.add("txt")
// title.innerText = "Title: " + characters.title

// const vision = card.appendChild(document.createElement("h2"))
// vision.classList.add("txt")
// vision.innerText = "Vision: " + characters.vision

// const weapon = card.appendChild(document.createElement("h2"))
// weapon.classList.add("txt")
// weapon.innerText = "Weapon: " + characters.weapon

// const gender = card.appendChild(document.createElement("h2"))
// gender.classList.add("txt")
// gender.innerText = "Gender: " + characters.gender

// const nation = card.appendChild(document.createElement("h2"))
// nation.classList.add("txt")
// nation.innerText = "Nation: " + characters.nation

// const affiliation = card.appendChild(document.createElement("h2"))
// affiliation.classList.add("txt")
// affiliation.innerText = "Affiliation: " + characters.affiliation

// const rarity = card.appendChild(document.createElement("h2"))
// rarity.classList.add("txt")
// rarity.innerText = "Rarity: " + characters.rarity

// const release = card.appendChild(document.createElement("h2"))
// release.classList.add("txt")
// release.innerText = "Release: " + characters.release

// const constellation = card.appendChild(document.createElement("h2"))
// constellation.classList.add("txt")
// constellation.innerText = "Constellation: " + characters.constellation

// const birthday = card.appendChild(document.createElement("h2"))
// birthday.classList.add("txt")
// birthday.innerText = "Birthday: " + characters.birthday

// const description = card.appendChild(document.createElement("h2"))
// description.classList.add("txt")
// description.innerText = "Description: " + characters.description

const skill = document.getElementById("skill")

for(let i = 0; i < characters.skillTalents.length; i++){

console.log(characters.skillTalents[i])

const skillname = skill.appendChild(document.createElement("h2"))
skillname.classList.add("txt")
skillname.innerText = "Skill name: " + characters.skillTalents[i].name

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

}



dwa()