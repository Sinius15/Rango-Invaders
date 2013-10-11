using System;
using System.Collections.Generic;

namespace Rango {
    public class ChatService : IChatService {
        static List<ChatMessage> messages = new List<ChatMessage>();

        public void AddChatMessage(ChatMessage message) {
            messages.Add(message);
        }

        public IEnumerable<ChatMessage> GetChatMessages() {
            return messages;
        }

        public void ClearMessages() {
            messages.Clear();
        }
    }
}
