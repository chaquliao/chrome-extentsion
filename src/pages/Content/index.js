// import pb from '../Popup/protobuf';
// console.log(pb);

import { getCookie } from './utils/common-utils';
(function () {
  chrome.extension.onRequest.addListener(
    //监听扩展程序进程或内容脚本发送的请求
    function (request, sender, sendResponse) {
      console.log(request.action);
      if (request.action == 'SendMessage') {
        var PHPSESSID = getCookie('PHPSESSID');
        console.log(PHPSESSID);
        sendResponse({ cookie: `PHPSESSID=${PHPSESSID}` });
      }
    }
  );
})();
