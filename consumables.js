async function consumables() {

    const consumablesapi = await fetch("https://genshin.jmp.blue/consumables")
    const consumables = await consumablesapi.json()

    console.log(consumables)
}

consumables()