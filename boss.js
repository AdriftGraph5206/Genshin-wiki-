async function boss() {

const dwa = "childe"

    const bossapi = await fetch(`https://genshin.jmp.blue/boss/weekly-boss/${dwa}`)
    const boss = await bossapi.json()

    const card = document.getElementById("card")

    const name = card.appendChild(document.createElement("h2"))
name.classList.add("txt")
name.innerText = "Name: " +  boss.name

const drops = document.getElementById("drops")

for(let i = 0; i < boss.drops.length; i++){
const dropsn = drops.appendChild(document.createElement("h2"))
dropsn.classList.add("txt")
dropsn.innerText = "Name: " +  boss.drops[i].name

const dropss = drops.appendChild(document.createElement("p"))
dropss.classList.add("txt")
dropss.innerText = "Source: " +  boss.drops[i].source

const dropsr = drops.appendChild(document.createElement("p"))
dropsr.classList.add("txt")
dropsr.innerText = "Rarity: " +  boss.drops[i].rarity
}


    console.log(boss)
}

boss()