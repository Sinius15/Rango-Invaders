var text = {};

text.onStartup = function(){
    var divID = "counter";

    $('body').append('<div id="' + divID + '" class="StartText">3</div>');

    setTimeout(function () {
        $('#' + divID).remove();
        $('body').append('<div id="' + divID + '" class="StartText">2</div>');
    }, 1000);
    setTimeout(function () {
        $('#' + divID).remove();
        $('body').append('<div id="' + divID + '" class="StartText">1</div>');
    }, 2000);
    setTimeout(function () { $('#' + divID).remove();  game.intervalID = setInterval(rango.cycle, 10); }, 3000);

}

text.onEnd = function (winner) {
    var divID = "counter";

    clearInterval(game.intervalID);
    if(winner === "tie")
        $('body').append('<div id="' + divID + '" class="EndText">It is a tie!</div>');
    else
        $('body').append('<div id="' + divID + '" class="EndText">The winner is ' + winner + '!</div>');
}