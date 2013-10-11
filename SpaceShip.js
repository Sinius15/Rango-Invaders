CreateShip = function (posX, posY, name, up, down, left, right, blast) {
    return {
        name: name,
        size: 32,
        direction: 'down',
        speed: 3,
        velocity: 0,
        posX: posX,
        posY: posY,
        button_up: up,
        button_down: down,
        button_left: left,
        button_right: right,
        button_blast: blast,
        blastCooldown: false,
        explisonID: null,
        handleInput: function () {
            if (keys.isKeyDown(this.button_up)) {
                this.direction = 'up';
                this.velocity = this.speed;
            }
            else if (keys.isKeyDown(this.button_down)) {
                this.direction = 'down';
                this.velocity = this.speed;
            }
            else if (keys.isKeyDown(this.button_left)) {
                this.direction = 'left';
                this.velocity = this.speed;
            }
            else if (keys.isKeyDown(this.button_right)) {
                this.direction = 'right';
                this.velocity = this.speed;
            }
            else {
                this.velocity = 0;
            }
            if (keys.isKeyDown(this.button_blast)) {
                this.fireBlaster();
            };
        },
        getColBox: function(){
            return col.createCollisionBox(32,32,this.posX,this.posY);
        },
        update: function () {
            switch (this.direction) {
                case 'up': this.posY -= this.velocity; break;
                case 'down': this.posY += this.velocity; break;
                case 'left': this.posX -= this.velocity; break;
                case 'right': this.posX += this.velocity; break;
                default: break;
            }
        },
        draw: function () {
            // add the ship to the DOM if it doesn't exist yet
            if ($('#' + this.name).length == 0) 
                $('body').append('<div id="' + this.name + '" class="spaceship"></div>');

            var ship = $('#' + this.name);

            ship.offset({
                top: this.posY - this.size / 2,
                left: this.posX - this.size / 2
            });

            ship.removeClass('rotateLeft rotateRight rotate180');

            switch (this.direction) {
                case 'up': ship.addClass('rotate180'); break;
                case 'left': ship.addClass('rotateRight'); break;
                case 'right': ship.addClass('rotateLeft'); break;
                default: break;
            };
        },
        fireBlaster: function () {
            if (this.blastCooldown) {
                return;
            }
            this.blastCooldown = true;
            var n = this.name;
            setTimeout(function () { getPlayerByName(n).blastCooldown = false }, 200);

            game.addBullet(this.posX, this.posY, this.name, this.direction);

        },
        bulletHit: function () {
            if (rango.lifeMeter.cooldown === true)
                return;
            rango.lifeMeter.cooldown = true;

            
            this.explisonID = CreateRandomID();
            $('body').append('<div id="' + this.explisonID + '" class="explosion"  style="top: ' + (this.posY-100) + 'px; left: ' + (this.posX-71) + 'px;"><img src="Images/explosion.gif?'+this.explisonID+'"></img></div>');

            rango.lifeMeter.life = rango.lifeMeter.life - 1;

            var id = this.explisonID;
            setTimeout(function () {
                var div = $('#' + id);
                div.remove();
            }, 1610);
            
            setTimeout(function () { rango.lifeMeter.cooldown = false }, 500);

        }
    };
};

getPlayerByName = function(name){
    if(name == 'playerOne')
        return rango.playerOne;
    if (name == 'playerTwo')
        return rango.playerTwo;
    
}

CreateRandomID = function () {
    var out = "";
    var possible = "qwertyuiiioplkjhgfdsazxcvbnm1234567890";
    for (var i = 0; i < 10; i++)
        out += possible.charAt(Math.floor(Math.random() * possible.length));
    return out.replace("undefined", "");
}

