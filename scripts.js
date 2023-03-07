
const searchParams = new URLSearchParams(window.location.search)
const names = searchParams.get("names").split(",")
const endTime = searchParams.get("end").split(":")

const endDate = new Date()
endDate.setHours(endTime[0])
endDate.setMinutes(endTime[1])
endDate.setMilliseconds(0)

let counterInterval = 0

$(function() {
    $(".name").text(names[0])
    $(".next").click(removeName)
    counterInterval = setInterval(update, 1000)
})

function removeName() {
    if (names.length !== 1) {
        names.splice(0, 1)
        $(".name").text(names[0])
    } else {
        clearInterval(counterInterval)
        $(".name").text("Have a great day!")
    }
}

function update() {
    const now = new Date()
    now.setMilliseconds(0)
    const nowMillis = now.getTime()
    const endMillis = endDate.getTime()

    // I have to remember when the person started talking!
    const remainingTotalMillis = endMillis - nowMillis
    const personRemainningMillis = Math.floor(remainingTotalMillis / names.length)
    $(".countdown").text(Math.floor(personRemainningMillis/1000))
}
