
const searchParams = new URLSearchParams(window.location.search)
const names = searchParams.get("names").split(",")
const endTime = searchParams.get("end").split(":")

const endDate = new Date()
endDate.setHours(endTime[0])
endDate.setMinutes(endTime[1])
endDate.setMilliseconds(0)

$(function() {
    $(".name").text(names[0])
    $(".next").click(removeName)
    setInterval(update, 1000)
})

function removeName() {
    names.splice(0, 1)
    $(".name").text(names[0])
}

function update() {
    const now = new Date()
    now.setMilliseconds(0)

    const remainingMillis = endDate.getTime() - now.getTime()
    $(".countdown").text(remainingMillis/1000)
}
