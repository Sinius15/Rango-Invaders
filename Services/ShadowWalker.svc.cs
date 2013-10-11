using System;
using System.Collections.Generic;
using Rango.DataObjects;

namespace Rango {
    public class ShadowWalker : IShadowWalker
    {
        static List<Player> players = new List<Player>();

        public void SetPlayer(Player player) {
            players.Add(player);
        }

        public IEnumerable<Player> GetPlayers() {
            return players;
        }

        public void checkLifes() {
            int toSkip = 1;
            while (toSkip < players.Count)
            {
                for (int i = 0; i < players.Count; i++)
                {
                    if (i + toSkip >= players.Count)
                        continue;
                    if (players[i + toSkip].cooldown || players[i].cooldown)
                        continue;

                    if (players[i + toSkip].getColBox().doCollide(players[i].getColBox()))
                    {
                        players[i + toSkip].cooldown = true;
                        players[i].cooldown = true;
                        players[i + toSkip].life = players[i + toSkip].life - 1;
                        players[i].life = players[i].life - 1;
                    }

                }
            }

            foreach (Player p in players)
                p.cooldown = false;

        }
    }
}
