function trim(name){
    let trimming= name.trim()
    console.log(`word is ${name}, after trim word is ${trimming}`)
}

function changetoLowerCase(name){
    let lower= name.toLowerCase()
    console.log(`word is ${name} and in lower case is ${lower}`)
}

function changetoUpperCase(name){
    let upper= name.toUpperCase()
    console.log(`word is ${name} and in Upper case is ${upper}`)
}

module.exports.trim=trim
module.exports.lower= changetoLowerCase
module.exports.upper= changetoUpperCase