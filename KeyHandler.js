var keys = {};

keys.pressedKeys = [];
keys.pressedMouse = [];
keys.mouseX, keys.mouseY;

keys.KEY_UP = 38;
keys.KEY_DOWN = 40;
keys.KEY_LEFT = 37;
keys.KEY_RIGHT = 39;
keys.KEY_A = 65;
keys.KEY_B = 66;
keys.KEY_C = 67;
keys.KEY_D = 68;
keys.KEY_E = 69;
keys.KEY_F = 70;
keys.KEY_G = 71;
keys.KEY_H = 72;
keys.KEY_I = 73;
keys.KEY_J = 74;
keys.KEY_K = 75;
keys.KEY_L = 76;
keys.KEY_M = 77;
keys.KEY_N = 78;
keys.KEY_O = 79;
keys.KEY_P = 80;
keys.KEY_Q = 81;
keys.KEY_R = 82;
keys.KEY_S = 83;
keys.KEY_T = 84;
keys.KEY_U = 85;
keys.KEY_V = 86;
keys.KEY_W = 87;
keys.KEY_X = 88;
keys.KEY_Y = 89;
keys.KEY_Z = 90;
keys.KEY_1 = 49;
keys.KEY_2 = 50;
keys.KEY_3 = 51;
keys.KEY_4 = 52;
keys.KEY_5 = 53;
keys.KEY_6 = 54;
keys.KEY_7 = 55;
keys.KEY_8 = 56;
keys.KEY_9 = 57;
keys.KEY_0 = 48;
keys.MOUSE_LEFT = 0;
keys.MOUSE_RIGHT = 2;

keys.MousePress = function (button) {
    if ($.inArray(button, keys.pressedMouse) === -1)
        keys.pressedMouse.push(button);
}

keys.KeyPress = function (button) {
    if ($.inArray(button, keys.pressedKeys) === -1) {
        console.log("now the key is pressed...");
        keys.pressedKeys.push(button);
    }
        
}

keys.MouseRelease = function (button) {
    var index = keys.pressedMouse.indexOf(button);
    keys.pressedMouse.splice(index, 1);
}

keys.KeyRelease = function (button) {
    console.log("now the key is released");
    var index = keys.pressedKeys.indexOf(button);
    keys.pressedKeys.splice(index, 1);
}

keys.MouseMove = function (x, y) {
    mouseX = x;
    mouseY = y;
}

keys.isKeyDown = function (button) {
    if ($.inArray(button, keys.pressedKeys) !== -1)
        return true;
    else
        return false;
}

keys.isMouseDown = function (button) {
    if($.inArray(button, keys.pressedMouse) !== -1)
        return true;
    else
        return false;
}