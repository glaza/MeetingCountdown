
const searchParams = new URLSearchParams(window.location.search)

if (!searchParams.has("names") || !searchParams.has("end")) {
    throw new Error("Arguments not provided")
}

const names = searchParams.get("names").split(",")
const endParam = searchParams.get("end").split(":")

const end = new Date()
end.setHours(endParam[0])
end.setMinutes(endParam[1])
end.setMilliseconds(0)
const endMillis = end.getTime()

let counterInterval = 0
let targetMillis = 0

$(function() {
    computeTarget()
    shuffle(names)
    $(".name").text(names[0])
    $(".next").click(removeName)
    update()
    counterInterval = setInterval(update, 1000)
})

function removeName() {
    if (names.length !== 1) {
        names.splice(0, 1)
        $(".name").text(names[0])
        computeTarget()
        update()
    } else {
        clearInterval(counterInterval)
        $(".name").text("Have a great day!")
        $(".countdown").remove()
        $(".next").remove()
    }
}

function update() {
    const remainingMillis = Math.floor(targetMillis - nowMillis())
    const remainingMinutes = Math.floor(remainingMillis / (60 * 1000))
    const remainingSeconds = Math.floor((remainingMillis % (60 * 1000)) / 1000)
    const remainingSecondsString = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds
    $(".countdown").text(`${remainingMinutes}:${remainingSecondsString}`)
}

function nowMillis() {
    const now = new Date()
    now.setMilliseconds(0)
    return now.getTime()
}

function computeTarget() {
    const remainingTotalMillis = endMillis - nowMillis()
    const remainingToSpeak = remainingTotalMillis / names.length
    targetMillis = Math.floor(nowMillis() + remainingToSpeak)
}

function shuffle(array) {
    let currentIndex = array.length

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}
