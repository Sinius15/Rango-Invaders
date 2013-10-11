using System.Runtime.Serialization;

namespace Rango {
    [DataContract]
    public class ChatMessage {
        [DataMember]
        public string Sender { get; set; }

        [DataMember]
        public string Message { get; set; }
    }
}