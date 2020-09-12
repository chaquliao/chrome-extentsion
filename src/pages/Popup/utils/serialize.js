import Long from 'long';
import proto_1 from './protobuf';
const Request = proto_1.im_proto.Request;
const Response = proto_1.im_proto.Response;
const Frame = proto_1.im_proto.Frame;

const deserialize = (elements) => {
  var buffer = new Uint8Array(elements);
  var res = Response.decode(buffer);
  return res;
};

function deserializeFrame(elements) {
  var buffer = new Uint8Array(elements);
  return Frame.decode(buffer);
}

function uuid() {
  var s = [];
  var hexDigits = '0123456789abcdef';
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-';

  var uuid = s.join('');
  return uuid;
}

const serialize = (req) => {
  //   req.body.has_new_message_notify.content = '自动回复内容';
  const sendMessageRequestBody = proto_1.im_proto.SendMessageRequestBody.create(
    {
      client_message_id: uuid(),
      content: '自动回复的消息',
      conversation_id: req.body.has_new_message_notify.conversation_id,
      conversation_short_id: 6870000121266831000,
      conversation_type: req.body.has_new_message_notify.conversation_type,
      message_type: 1000,
      ticket:
        '1WhdWrOGQQXDKO9uKPE0RAV5gHCV8yNJvvIoI8neRdb24luRtlJhaHTWICLsl4TQXvrFvfvKJtxMUCZlBBtgSkpmtVwFgvxRhp4Mx1cdJ81ofx6MIIKDskeUrjASwCDlxSngG7UldfMGooqI290Y2YRm3h9EKnx11F',
      ext: {
        receiver_id: '102478122829',
        's:client_message_id': '60fe8150-f3df-11ea-9e05-85966978a547',
        source: '',
        src: 'pc',
        tag_valid: '1',
        type: 'text',
      },
    }
  );
  const send_message_body = {
    send_message_body: sendMessageRequestBody,
  };
  const reqBody = proto_1.im_proto.RequestBody.create(send_message_body);
  let payload = {
    body: reqBody,
    cmd: 100,
    device_id: '41157968724',
    inbox_type: 1,
    refer: 3,
    sequence_id: 10007,
    token: 'Hf5U2WUlgCIzb3YBU1GxbTrt9OIXcXKOGYFB1FUyZHk5WvWSndqC0j',
    headers: {
      app_name: 'ecom.im',
      browser_language: 'zh-CN',
      browser_name: 'Mozilla',
      browser_online: 'true',
      browser_platform: 'Win32',
      browser_version:
        '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36',
      cookie_enabled: 'true',
      priority_region: 'CN',
      referer: 'https://im.jinritemai.com/pc_seller/?selfId=1037537787526669',
      screen_height: '1080',
      screen_width: '1920',
      session_aid: '1383',
      timezone_name: 'Asia/Shanghai',
      user_agent:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36',
    },
  };
  //   return payload;

  payload = proto_1.im_proto.Request.create(payload);
  console.log('发送的payload:', payload);
  var buffer = proto_1.im_proto.Request.encode(payload).finish();
  return buffer;
};

const serializeFrame = (frame) => {
  console.log('发送的frame:', frame);
  var buffer = Frame.encode(frame).finish();
  return buffer;
};

export const packMessage = (req) => {
  var payload = serialize(req);
  var frame = proto_1.im_proto.Frame.create({
    logid: new Date().getTime(),
    method: 1,
    payload: payload,
    payload_type: 'pb',
    seqid: 10006,
    service: 10001,
  });
  return serializeFrame(frame);
};

export const unpackMessage = (frameBuffer) => {
  var frame = deserializeFrame(frameBuffer);
  return deserialize(frame.payload);
};
