function midnightCalc(fjr, mgrb) {

    var date1 = String(fjr);
    var date2 = String(mgrb);

    var d1msecs = new Date(date1).getTime(); // get milliseconds
    var d2msecs = new Date(date2).getTime(); // get milliseconds

    var avgTime = (d1msecs + d2msecs) / 2;
    console.log(avgTime);

    var result = new Date(avgTime);
    var answer = result.toLocaleString();
    var toReplace = ':00 ';
    answer = answer.replace(toReplace,' ');
    document.getElementById("output").innerHTML = answer;
}
