function midnightCalc(fjr, mgrb) {

var fjrArray = fjr.split(":")
var mgrbArray = mgrb.split(":")

var x = (parseInt(mgrbArray[0]) * -1 + 24 + parseInt(fjrArray[0])) * 60
var y = parseInt(mgrbArray[1]) * -1 + parseInt(fjrArray[1])
var z = Math.floor((x + y) / 2)
var hrsToAdd = Math.floor(z/60)
var minsToAdd = z % 60
var deadlinehrs = (hrsToAdd + parseInt(mgrbArray[0])) % 24 + Math.floor((minsToAdd + parseInt(mgrbArray[1]))/60)
var deadlinemins = (minsToAdd + parseInt(mgrbArray[1])) % 60
console.log(deadlinehrs + ":" + deadlinemins)
document.getElementById("output").innerHTML = deadlinehrs + ":" + deadlinemins
}
