console.log("Hey there! Thanks for using the app!");

var total = [0, 0, 0, 0, 0, 0];
var numVals = [0, 0, 0, 0, 0, 0];
var count = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

function avg(number, player)
{
    var index = player;

    var error = false;
    total[index] += number;
    numVals[index]++;
    count[index][number]++;
    
    updateText(index);
}

function updateText(player)
{
    var index = player;
    // print result to screen
    document.getElementById("answer" + index).innerHTML = "Current average (" +
        numVals[index] + "): " + Math.round((total[index] / numVals[index]) * 100) / 100;

    document.getElementById("zeros" + index).innerHTML = "\nZeros: " + count[index][0];
    document.getElementById("ones" + index).innerHTML = "\nOnes: " + count[index][1];
    document.getElementById("twos" + index).innerHTML = "\nTwos: " + count[index][2];
    document.getElementById("threes" + index).innerHTML = "\nThrees: " + count[index][3];
}

function resetTotal(player)
{
    var index = player;

    total[index] = 0;
    numVals[index] = 0;

    document.getElementById("answer" + index).innerHTML = "";
    document.getElementById("zeros" + index).innerHTML = "";
    document.getElementById("ones" + index).innerHTML = "";
    document.getElementById("twos" + index).innerHTML = "";
    document.getElementById("threes" + index).innerHTML = "";

    for(var i = 0; i < count[index].length; i++)
    {
        count[index][i] = 0;
    }
}

