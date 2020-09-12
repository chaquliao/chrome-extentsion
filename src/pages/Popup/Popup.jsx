import React, { useEffect, useState } from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
import axios from 'axios';
import ReconnectingWebSocket from 'reconnecting-websocket';
import toBuffer from 'blob-to-buffer';
import pb from './utils/protobuf';
import { isCustomer, getCustomerServiceId } from './utils/chat-utils';
import { packMessage, unpackMessage } from './utils/serialize';
import { Base64 } from 'js-base64';
const md5 = require('js-md5');

const Popup = () => {
  const [send, setSend] = useState(true);
  const sendMessage = () => {
    const str = window.atob(
      // 'CJZOEOrr4dnHLhiRTiABOgJwYkLGCAhkEJZOIjY2bzlxeUFKZGxEcVdkSnBxcDZxdlVITDl5N3g3b1poTG9mYXBoR2s1ZFhEYXF3TkJaekNVcFooAzABQpgDogaUAwohMToxOjEwMjQ3ODEyMjgyOToxMDM3NTM3Nzg3NTI2NjY5EAEYiIKAmOKWyatfIgbkvaDlpb0qGwoLcmVjZWl2ZXJfaWQSDDEwMjQ3ODEyMjgyOSoJCgNzcmMSAnBjKgoKBnNvdXJjZRIAKgwKBHR5cGUSBHRleHQqDgoJdGFnX3ZhbGlkEgExKjsKE3M6Y2xpZW50X21lc3NhZ2VfaWQSJDYwZmU4MTUwLWYzZGYtMTFlYS05ZTA1LTg1OTY2OTc4YTU0NzDoBzqiATFXaGRXck9HUVFYREtPOXVLUEUwUkFWNWdIQ1Y4eU5KdnZJb0k4bmVSZGIyNGx1UnRsSmhhSFRXSUNMc2w0VFFYdnJGdmZ2S0p0eE1VQ1psQkJ0Z1NrcG10VndGZ3Z4UmhwNE14MWNkSjgxb2Z4Nk1JSUtEc2tlVXJqQVN3Q0RseFNuZ0c3VWxkZk1Hb29xSTI5MFkyWVJtM2g5RUtueDExRkIkNjBmZTgxNTAtZjNkZi0xMWVhLTllMDUtODU5NjY5NzhhNTQ3Sgs0MTE1Nzk2ODcyNHqBAQoKdXNlcl9hZ2VudBJzTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzg1LjAuNDE4My4xMDIgU2FmYXJpLzUzNy4zNnoWCg5jb29raWVfZW5hYmxlZBIEdHJ1ZXoZChBicm93c2VyX2xhbmd1YWdlEgV6aC1DTnoZChBicm93c2VyX3BsYXRmb3JtEgVXaW4zMnoXCgxicm93c2VyX25hbWUSB01vemlsbGF6fgoPYnJvd3Nlcl92ZXJzaW9uEms1LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzg1LjAuNDE4My4xMDIgU2FmYXJpLzUzNy4zNnoWCg5icm93c2VyX29ubGluZRIEdHJ1ZXoUCgxzY3JlZW5fd2lkdGgSBDE5MjB6FQoNc2NyZWVuX2hlaWdodBIEMTA4MHpHCgdyZWZlcmVyEjxodHRwczovL2ltLmppbnJpdGVtYWkuY29tL3BjX3NlbGxlci8/c2VsZklkPTEwMzc1Mzc3ODc1MjY2Njl6HgoNdGltZXpvbmVfbmFtZRINQXNpYS9TaGFuZ2hhaXoTCgtzZXNzaW9uX2FpZBIEMTM4M3oTCghhcHBfbmFtZRIHZWNvbS5pbXoVCg9wcmlvcml0eV9yZWdpb24SAkNOkAEC'
      // 'CLVOEMyQh+DHLhiRTiABOgJwYkLGCAhkELVOIjYzTHp2Vk95STJLaVljSWdyeU9lZDd0b2drVEhiS3F3dmNqRE95WUxySHhpbWxBb2dXOWl6anEoAzABQpgDogaUAwohMToxOjEwMjQ3ODEyMjgyOToxMDM3NTM3Nzg3NTI2NjY5EAEYiIKAmOKWyatfIgbkvaDlpb0qGwoLcmVjZWl2ZXJfaWQSDDEwMjQ3ODEyMjgyOSoJCgNzcmMSAnBjKgoKBnNvdXJjZRIAKgwKBHR5cGUSBHRleHQqDgoJdGFnX3ZhbGlkEgExKjsKE3M6Y2xpZW50X21lc3NhZ2VfaWQSJDE5MjEwYWEwLWYzZmUtMTFlYS04MTQ0LTA3OTg3YWFhZTM5ODDoBzqiATFXaGRXck9HUVFYREtPOXVLUEUwUkFWNWdIQ1Y4eU5KdnZJb0k4bmVSZGIyNGx1UnRsSmhhSFRXSUNMc2w0VFFYdnJGdmZ2S0p0eE1VQ1psQkJ0Z1NrcG10VndGZ3Z4UmhwNE14MWNkSjgxb2Z4Nk1JSUtEc2tlVXJqQVN3Q0RseFNuZ0c3VWxkZk1Hb29xSTI5MFkyWVJtM2g5RUtueDExRkIkMTkyMTBhYTAtZjNmZS0xMWVhLTgxNDQtMDc5ODdhYWFlMzk4Sgs0MTE1Nzk2ODcyNHqBAQoKdXNlcl9hZ2VudBJzTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzg1LjAuNDE4My4xMDIgU2FmYXJpLzUzNy4zNnoWCg5jb29raWVfZW5hYmxlZBIEdHJ1ZXoZChBicm93c2VyX2xhbmd1YWdlEgV6aC1DTnoZChBicm93c2VyX3BsYXRmb3JtEgVXaW4zMnoXCgxicm93c2VyX25hbWUSB01vemlsbGF6fgoPYnJvd3Nlcl92ZXJzaW9uEms1LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzg1LjAuNDE4My4xMDIgU2FmYXJpLzUzNy4zNnoWCg5icm93c2VyX29ubGluZRIEdHJ1ZXoUCgxzY3JlZW5fd2lkdGgSBDE5MjB6FQoNc2NyZWVuX2hlaWdodBIEMTA4MHpHCgdyZWZlcmVyEjxodHRwczovL2ltLmppbnJpdGVtYWkuY29tL3BjX3NlbGxlci8/c2VsZklkPTEwMzc1Mzc3ODc1MjY2Njl6HgoNdGltZXpvbmVfbmFtZRINQXNpYS9TaGFuZ2hhaXoTCgtzZXNzaW9uX2FpZBIEMTM4M3oTCghhcHBfbmFtZRIHZWNvbS5pbXoVCg9wcmlvcml0eV9yZWdpb24SAkNOkAEC'

      // 'CJZOEIaQp+PHLhiRTiABOgJwYkLGCAhkEJZOIjZIZjVVMldVbGdDSXpiM1lCVTFHeGJUcnQ5T0lYY1hLT0dZRkIxRlV5WkhrNVd2V1NuZHFDMGooAzABQpgDogaUAwohMToxOjEwMjQ3ODEyMjgyOToxMDM3NTM3Nzg3NTI2NjY5EAEYiIKAmOKWyatfIgd1aXVpaXVpKhsKC3JlY2VpdmVyX2lkEgwxMDI0NzgxMjI4MjkqCQoDc3JjEgJwYyoKCgZzb3VyY2USACoMCgR0eXBlEgR0ZXh0Kg4KCXRhZ192YWxpZBIBMSo7ChNzOmNsaWVudF9tZXNzYWdlX2lkEiRmNzk2NWM0MC1mNDBkLTExZWEtOWUxYy02NTE5ZjNhN2E4ODgw6Ac6oQFWcjVhc28zVlJuRzF4d1lsdmYzYXdyRVFWd2l3YTA0dExJM1JXZlFORTlFRlJTbXc0WGxyS2N6ZEIxUWdTS3diYUZBaExjek9pRXVKRkM4Z1VndzVoekp0MXFmMGpBTHRVUzRpSTRjOVdFaVZpYlJKajhZVE0zeXdadGZHbTJDYmZhb1dhVWM0YXRzd0s1S2NXSGN0WmFBTm8wZG9weTMxekIkZjc5NjVjNDAtZjQwZC0xMWVhLTllMWMtNjUxOWYzYTdhODg4Sgs0MTE1Nzk2ODcyNHqBAQoKdXNlcl9hZ2VudBJzTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzg1LjAuNDE4My4xMDIgU2FmYXJpLzUzNy4zNnoWCg5jb29raWVfZW5hYmxlZBIEdHJ1ZXoZChBicm93c2VyX2xhbmd1YWdlEgV6aC1DTnoZChBicm93c2VyX3BsYXRmb3JtEgVXaW4zMnoXCgxicm93c2VyX25hbWUSB01vemlsbGF6fgoPYnJvd3Nlcl92ZXJzaW9uEms1LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzg1LjAuNDE4My4xMDIgU2FmYXJpLzUzNy4zNnoWCg5icm93c2VyX29ubGluZRIEdHJ1ZXoUCgxzY3JlZW5fd2lkdGgSBDE5MjB6FQoNc2NyZWVuX2hlaWdodBIEMTA4MHpHCgdyZWZlcmVyEjxodHRwczovL2ltLmppbnJpdGVtYWkuY29tL3BjX3NlbGxlci8/c2VsZklkPTEwMzc1Mzc3ODc1MjY2Njl6HgoNdGltZXpvbmVfbmFtZRINQXNpYS9TaGFuZ2hhaXoTCgtzZXNzaW9uX2FpZBIEMTM4M3oTCghhcHBfbmFtZRIHZWNvbS5pbXoVCg9wcmlvcml0eV9yZWdpb24SAkNOkAEC'
      'CIKU69wDEO+4++PHLhgBIPIHOgRqc29uQlB7ImNvbnZlcnNhdGlvbl9pZCI6IjE6MToxMDI0NzgxMjI4Mjk6MTAzNzUzNzc4NzUyNjY2OSIsInVzZXJfaWQiOiIxMDI0NzgxMjI4MjkifQ=='
    );

    const str2 = window.atob(
      'CJROEJrGo+PHLhiRTiABOgJwYkLRCAhkEJROIjZIZjVVMldVbGdDSXpiM1lCVTFHeGJUcnQ5T0lYY1hLT0dZRkIxRlV5WkhrNVd2V1NuZHFDMGooAzABQqMDogafAwohMToxOjEwMjQ3ODEyMjgyOToxMDM3NTM3Nzg3NTI2NjY5EAEYiIKAmOKWyatfIhLkuobkuobkuobkuobkuobkuoYqGwoLcmVjZWl2ZXJfaWQSDDEwMjQ3ODEyMjgyOSoJCgNzcmMSAnBjKgoKBnNvdXJjZRIAKgwKBHR5cGUSBHRleHQqDgoJdGFnX3ZhbGlkEgExKjsKE3M6Y2xpZW50X21lc3NhZ2VfaWQSJGQ0YTdhNDUwLWY0MGQtMTFlYS05ZTFjLTY1MTlmM2E3YTg4ODDoBzqhAVZyNWFzbzNWUm5HMXh3WWx2ZjNhd3JFUVZ3aXdhMDR0TEkzUldmUU5FOUVGUlNtdzRYbHJLY3pkQjFRZ1NLd2JhRkFoTGN6T2lFdUpGQzhnVWd3NWh6SnQxcWYwakFMdFVTNGlJNGM5V0VpVmliUkpqOFlUTTN5d1p0ZkdtMkNiZmFvV2FVYzRhdHN3SzVLY1dIY3RaYUFObzBkb3B5MzF6QiRkNGE3YTQ1MC1mNDBkLTExZWEtOWUxYy02NTE5ZjNhN2E4ODhKCzQxMTU3OTY4NzI0eoEBCgp1c2VyX2FnZW50EnNNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvODUuMC40MTgzLjEwMiBTYWZhcmkvNTM3LjM2ehYKDmNvb2tpZV9lbmFibGVkEgR0cnVlehkKEGJyb3dzZXJfbGFuZ3VhZ2USBXpoLUNOehkKEGJyb3dzZXJfcGxhdGZvcm0SBVdpbjMyehcKDGJyb3dzZXJfbmFtZRIHTW96aWxsYXp+Cg9icm93c2VyX3ZlcnNpb24SazUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvODUuMC40MTgzLjEwMiBTYWZhcmkvNTM3LjM2ehYKDmJyb3dzZXJfb25saW5lEgR0cnVlehQKDHNjcmVlbl93aWR0aBIEMTkyMHoVCg1zY3JlZW5faGVpZ2h0EgQxMDgwekcKB3JlZmVyZXISPGh0dHBzOi8vaW0uamlucml0ZW1haS5jb20vcGNfc2VsbGVyLz9zZWxmSWQ9MTAzNzUzNzc4NzUyNjY2OXoeCg10aW1lem9uZV9uYW1lEg1Bc2lhL1NoYW5naGFpehMKC3Nlc3Npb25fYWlkEgQxMzgzehMKCGFwcF9uYW1lEgdlY29tLmltehUKD3ByaW9yaXR5X3JlZ2lvbhICQ06QAQI='
    );

    function code2utf8(uni) {
      let uni2 = uni.toString(2);
      if (uni < 128) {
        return uni.toString(16);
      } else if (uni < 2048) {
        uni2 = ('00000000000000000' + uni2).slice(-11);
        const s1 = parseInt('110' + uni2.substring(0, 5), 2);
        const s2 = parseInt('10' + uni2.substring(5), 2);
        return s1.toString(16) + ',' + s2.toString(16);
      } else {
        uni2 = ('00000000000000000' + uni2).slice(-16);
        const s1 = parseInt('1110' + uni2.substring(0, 4), 2);
        const s2 = parseInt('10' + uni2.substring(4, 10), 2);
        const s3 = parseInt('10' + uni2.substring(10), 2);
        return s1.toString(16) + ',' + s2.toString(16) + ',' + s3.toString(16);
      }
    }

    let ua;

    function string2buffer(str) {
      let val = '';
      let arr = [];
      for (let i = 0; i < str.length; i++) {
        // val += ',' + code2utf8(str.charCodeAt(i));
        arr.push(str.charCodeAt(i));
      }
      ua = new Uint8Array(arr);
      // const frame = pb.im_proto.Frame.decode(ua);
      // console.log('frame:', frame);
      // const responseDecode = pb.im_proto.Request.decode(frame.payload);
      // console.log('responseDecode:', responseDecode);
      // responseDecode.body.send_message_body.content = '你也好！';
      // responseDecode.body.sequence_id = 10007;
      // const responseEncode = pb.im_proto.Request.encode(
      //   responseDecode
      // ).finish();

      // frame.payload = responseEncode;
      // frame.logid = new Date().getTime();
      // frame.seqid = 10007;
      // ua = pb.im_proto.Frame.encode(frame).finish();
      // console.log('responseEncode:', responseEncode);
      // console.log('Uint8Array:');

      // return responseDecode;
    }

    let ua2;

    function string2buffer2(str) {
      let val = '';
      let arr = [];
      for (let i = 0; i < str.length; i++) {
        // val += ',' + code2utf8(str.charCodeAt(i));
        arr.push(str.charCodeAt(i));
      }
      ua2 = new Uint8Array(arr);
      const frame = pb.im_proto.Frame.decode(ua2);
      console.log('frame:', frame);
      const responseDecode = pb.im_proto.Request.decode(frame.payload);
      console.log('responseDecode:', responseDecode);
      responseDecode.body.send_message_body.content = '你也好！';
      responseDecode.body.sequence_id = 10007;
      const responseEncode = pb.im_proto.Request.encode(
        responseDecode
      ).finish();

      frame.payload = responseEncode;
      frame.logid = new Date().getTime();
      frame.seqid = 10007;
      ua2 = pb.im_proto.Frame.encode(frame).finish();
      console.log('responseEncode:', responseEncode);
      console.log('Uint8Array:');

      return responseDecode;
    }

    string2buffer(str);
    string2buffer2(str2);
    // console.log(string2buffer(str2));
    chrome.tabs.getSelected(null, function (tab) {
      chrome.tabs.sendRequest(tab.id, { action: 'SendMessage' }, function (
        response
      ) {
        const cookie = response.cookie;
        const instance = axios.create({
          timeout: 1000,
        });
        instance.defaults.headers.common['Authorization'] = cookie;
        instance
          .get('https://pigeon.jinritemai.com/backstage/token')
          .then((res) => {
            const token = res.data.data;
            const app_key = 'b42d99769353ce6304e74fb597e36e90';
            const param = {};
            param['aid'] = '1383';
            param['fpid'] = '92';
            param['device_id'] = '41157968724';
            param['token'] = token;
            param['access_key'] = md5(
              param['fpid'] + app_key + param['device_id'] + 'f8a69f1719916z'
            );
            let uri_param = [];
            for (let k in param) {
              uri_param.push(`${k}=${param[k]}`);
            }
            const rws = new WebSocket(
              'wss://frontier.snssdk.com/ws/v2?' + uri_param.join('&')
            );

            setTimeout(() => {
              rws.send(ua);
            }, 2000);

            setTimeout(() => {
              rws.send(ua2);
            }, 4000);

            // return;

            rws.addEventListener('message', (e) => {
              if (e.data) {
                toBuffer(e.data, function (err, buffer) {
                  if (err) throw err;
                  const frameDecode = pb.im_proto.Frame.decode(buffer);
                  const responseDecode = pb.im_proto.Response.decode(
                    frameDecode.payload
                  );
                  console.log('监听到的frame:', frameDecode);
                  console.log('监听到的消息:', responseDecode);
                  // if (send) {
                  //   setSend(false);
                  //   setTimeout(() => {
                  //     setSend(true);
                  //   }, 10000);
                  //   let sendData = responseDecode;
                  //   const sendBlob = packMessage(sendData);
                  //   // console.log('自动回复');
                  //   rws.send(sendBlob, (data) => {
                  //     // console.log('data:', data);
                  //   });
                  // }
                });
              }
            });
          });
      });
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <pre>聊天插件</pre>
        <a className="click-link" onClick={sendMessage}>
          建立连接
        </a>
      </header>
    </div>
  );
};

export default Popup;
