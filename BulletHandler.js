var game = {};

game.bullets = [];

game.addBullet = function (x, y, source, direction) {
    var temp = {
        source: source,
        x: x,
        y: y,
        dir: direction,
        id: 'bullet_' + source + '_' + CreateRandomID(),
        ttl: 200,
        getCol: function () {
            return col.createCollisionBox(25, 25, this.x-12, this.y-12);
        }
    }

    var rotate = '';
    switch (temp.dir) {
        case 'up': rotate = 'rotate180'; break;
        case 'left': rotate = 'rotateRight'; break;
        case 'right': rotate = 'rotateLeft'; break;
        default: break;
    };

    $('body').append('<div id="' + temp.id + '" class="bullet ' + rotate + '" style="top: ' + (temp.y - 8) + 'px; left: ' + (temp.x - 8) + 'px;"></div>');

    game.bullets.push(temp);
}

game.collideBullets = function () {
    for (var i = 0 ; i < game.bullets.length; i++) {
        var bullet = game.bullets[i];
        
        if (col.doCollide(rango.playerOne.getColBox(), bullet.getCol()))
            if(bullet.source !== "playerOne")
            rango.playerOne.bulletHit();
        if (col.doCollide(rango.playerTwo.getColBox(), bullet.getCol()))
            if(bullet.source !== "playerTwo")
                rango.playerTwo.bulletHit();
    }
}

game.renderBullets = function () {
    for (var i = 0 ; i < game.bullets.length; i++) {
        
        var b = game.bullets[i];
        var bulletDiv = $('#' + b.id);

        switch (b.dir) {
            case 'up': b.y -= 10; break;
            case 'down': b.y += 10; break;
            case 'left': b.x -= 10; break;
            case 'right': b.x += 10; break;
            default: break;
        }

        bulletDiv.offset({
            top: b.y - 8,
            left: b.x- 8
        });
        b.ttl = b.ttl - 1;
        if (b.ttl <= 0) {
            bulletDiv.remove();
            game.bullets.splice(i, 1);
        }
    }
}

CreateRandomID = function () {
    var out;
    var possible = "qwertyuiiioplkjhgfdsazxcvbnm1234567890";
    for (var i = 0; i < 10; i++)
        out += possible.charAt(Math.floor(Math.random() * possible.length));
    return out;
}


