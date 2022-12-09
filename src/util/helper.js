let today= new Date()
function printDate(){
    const day= today.getDate()
    console.log(`current date is ${day}`)
}

function printMonth(){
    const month= today.getMonth()
    console.log(`current month is ${month+1}`)
}

function getBatchInfo(){
  console.log('Californium, W3D4, the topic for today is Nodejs module system')
}

module.exports.Date= printDate
module.exports.Month= printMonth
module.exports.batchInfo= getBatchInfo