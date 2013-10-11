var col = {};

col.createCollisionBox = function(widht, height, x, y){
    return {
        x: x,
        y: y,
        w: widht,
        h: height
    };
}

col.doCollide = function (obA, obB) {
    var tw = obA.w;
    var th = obA.h;
    var rw = obB.w;
    var rh = obB.h;
    if (rw <= 0 || rh <= 0 || tw <= 0 || th <= 0)
        return false;

    var tx = obA.x;
    var ty = obA.y;
    var rx = obB.x;
    var ry = obB.y;

    rw += rx;
    rh += ry;
    tw += tx;
    th += ty;
    return ((rw < rx || rw > tx) &&
            (rh < ry || rh > ty) &&
            (tw < tx || tw > rx) &&
            (th < ty || th > ry));


}

