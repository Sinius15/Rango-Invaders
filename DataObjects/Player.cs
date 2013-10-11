using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;

namespace Rango.DataObjects
{
    [DataContract]
    public class Player{

        [DataMember]
        public string Name { get; set; }

        [DataMember]
        public int x { get; set; }

        [DataMember]
        public int y { get; set; }

        [DataMember]
        public int life { get; set; }

        public Boolean cooldown = false;
        public Boolean ischecked = false;

        public CollisionBox getColBox(){
            return new CollisionBox(x, y, 32, 32);
        }
    }
}