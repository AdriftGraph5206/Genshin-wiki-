async function domains() {
    const daw = "the-lost-valley"
    const domainsapi = await fetch(`https://genshin.jmp.blue/domains/${daw}`)
    const domains = await domainsapi.json()

    const card = document.getElementById("info")

const name = card.appendChild(document.createElement("h2"))
name.classList.add("txt")
name.innerText =domains.name

const description = card.appendChild(document.createElement("p"))
description.classList.add("txt")
description.innerText = domains.description

const location = card.appendChild(document.createElement("p"))
location.classList.add("txt")
location.innerText ="Location: " +  domains.location

const nation = card.appendChild(document.createElement("p"))
nation.classList.add("txt")
nation.innerText ="Nation: " + domains.nation

const rec = document.getElementById("rec")

for(let i = 0; i < domains.recommendedElements.length; i++){
    const recommendedElement = rec.appendChild(document.createElement("p"))
recommendedElement.classList.add("txt")
recommendedElement.innerText = domains.recommendedElements[i]
}

const rew = document.getElementById("rewards")

for(let i = 0; i < domains.rewards[0].details.length; i++){
    const rewardn = rew.appendChild(document.createElement("h2"))
rewardn.classList.add("txt")
rewardn.innerText = domains.rewards[0].details[i].drops[i].name

const rewardl = rew.appendChild(document.createElement("p"))
rewardl.classList.add("txt")
rewardl.innerText ="Rarity: " + domains.rewards[0].details[i].drops[i].rarity
}


    console.log(domains)
}

domains()