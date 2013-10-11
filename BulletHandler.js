var game = {};

game.bullets = [];

game.addBullet = function (x, y, source, direction) {
    var temp = {
        source: source,
        x: x,
        y: y,
        dir: direction,
        id: 'bullet_' + source + '_' + CreateRandomID(),
        ttl: 200
    }

    var rotate = '';
    switch (this.direction) {
        case 'up': rotate = 'rotate180'; break;
        case 'left': rotate = 'rotateRight'; break;
        case 'right': rotate = 'rotateLeft'; break;
        default: break;
    };

    $('body').append('<div id="' + temp.id + '" class="bullet ' + rotate + '" style="top: ' + (temp.y - 8) + 'px; left: ' + (temp.x - 8) + 'px;"></div>');

    game.bullets.push(temp);
}

game.renderBullets = function () {
    for (var i = 0 ; i < bullet.length; i++) {
        var b = bullet[i];
        var bullet = $('#' + b.id);

        bullet.offset({
            top: b.y - 8,
            left: b.x- 8
        });
        b.ttl = b.ttl - 1;
        if (b.ttl <= 0)
            game.bullets.splice(i , 1)
    }
}

CreateRandomID = function () {
    var out;
    var possible = "qwertyuiiioplkjhgfdsazxcvbnm1234567890";
    for (var i = 0; i < 10; i++)
        out += possible.charAt(Math.floor(Math.random() * possible.length));
    return out;
}


