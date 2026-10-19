 async function artifacts() {

const daw = "berserker"
    const artifactsapi = await fetch(`https://genshin.jmp.blue/artifacts/${daw}`)
 const artifacts = await artifactsapi.json()

const card = document.getElementById("card")


const name = card.appendChild(document.createElement("h2"))
name.classList.add("txt")
name.innerText = "Set name: " +  artifacts.name

const piece2 = card.appendChild(document.createElement("h2"))
piece2.classList.add("txt")
piece2.innerText = "2 piece bonus: " +  artifacts["2-piece_bonus"]

const piece4 = card.appendChild(document.createElement("h2"))
piece4.classList.add("txt")
piece4.innerText = "4 piece bonus: " +  artifacts["4-piece_bonus"]

const maxl = card.appendChild(document.createElement("h2"))
maxl.classList.add("txt")
maxl.innerText = "4 piece bonus: " +  artifacts.max_rarity


console.log(artifacts)
 }
 
  artifacts()