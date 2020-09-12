// public sendText: (text: string) => Promise<void> = async (text) => {
//     const { currentConversationId } = this.messagesModel.getData();
//     if (currentConversationId == null) {
//       return;
//     }

//     this.userSendMessageSubject.next();

//     return this.messageIO.sendMessage(currentConversationId, 1000, text, {
//       ...(await this.sendMessageExt(currentConversationId)),
//       type: "text",
//       tag_valid: "1",
//     });
//   };

//   public async sendMessageExt(
//     conversationId: string
//   ): Promise<Record<string, string>> {
//     const { conversationInfoById } = this.messagesModel.getData();
//     const { selfId } = this.userModel.getData();
//     const conversation = conversationInfoById[conversationId];
//     if (conversation == null) {
//       return {};
//     }
//     const receiverId = MessagesModel.getAnotherId(conversation, selfId!);

//     return {
//       receiver_id: receiverId!,
//     };
//   }
