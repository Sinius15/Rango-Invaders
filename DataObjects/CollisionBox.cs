using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Rango.DataObjects
{
    public class CollisionBox
    {
        public int x, y, w, h;

        public CollisionBox(int x, int y, int width, int height)
        {
            this.x = x;
            this.y = y;
            this.w = width;
            this.h = height;
        }

        public Boolean doCollide(CollisionBox b)
        {
            int tw = this.w;
            int th = this.h;
            int rw = b.w;
            int rh = b.h;
            if (rw <= 0 || rh <= 0 || tw <= 0 || th <= 0)
                return false;

            int tx = this.x;
            int ty = this.y;
            int rx = b.x;
            int ry = b.y;

            rw += rx;
            rh += ry;
            tw += tx;
            th += ty;
            return ((rw < rx || rw > tx) &&
                    (rh < ry || rh > ty) &&
                    (tw < tx || tw > rx) &&
                    (th < ty || th > ry));
        }

    }
}