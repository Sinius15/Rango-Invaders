using System.Collections.Generic;
using System.ServiceModel;
using System.ServiceModel.Web;
using Rango.DataObjects;

namespace Rango
    
{
    [ServiceContract]
    public interface IShadowWalker
    {
        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped, ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        void SetPlayer(Player player);

        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped, ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        IEnumerable<Player> GetPlayers();
    }
}