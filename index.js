
function writeCards(names, events) {
    let my_array = []
    for (let i = 0; i < names.length; i++) {
        my_array.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`)
    }
    return my_array
}



function countDown(i) {
    while (i >= 0){
        console.log(i)
        i--
    }
}