var connector = {};

connector.setPlayer = function (name, x, y, life, callback) {
    var Player = {
        Name: name,
        x: x,
        y: y,
        life: life
    }
    var output = JSON.stringify(Player);
    console.log(output);
    output = '{ "player" : ' + output + ' }';
    console.log(output);

    connector.post({
        method: 'SetPlayer',
        data: output,
        success: callback
    });
}

connector.getPlayers = function (callback) {
    var c = callback;
    connector.post({
        method: 'GetPlayers',
        success: function (returner) {
            
            console.log(returner);
            rango.players = [];
            var players = returner.GetPlayersResult;
            for (var i = 0 ; i < players.lenght ; i++)
                rango.players.push(players[i]);
            c();
        }
    });
}

connector.post = function (post) {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Services/ShadowWalker.svc/" + post.method,
        data: post.data,
        dataType: "json",
        success: post.success,
        error: function (message) {
            var jsonFault = $.parseJSON(message.responseText);
            alert(jsonFault.FaultType + ":\n" + jsonFault.Message);
        }
    });
};