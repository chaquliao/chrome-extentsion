export const isCustomer = (responseDecode) => {
  // conversation_id: 1:1:102478122829:1037537787526669   1:1:(客户id)：(客服id)
  // sender: 客户id 或者 客服id
  // const conversation = conversation_id.split(':');
  // if (conversation[2] == sender) {
  //   return true;
  // } else {
  //   return false;
  // }
  const ext = responseDecode.body.has_new_message_notify.message.ext;
  if (ext.src_user_id) {
    return true;
  } else {
    return false;
  }
};

export const getCustomerServiceId = (conversation_id) => {
  const conversation = conversation_id.split(':');
  return conversation[3];
};
