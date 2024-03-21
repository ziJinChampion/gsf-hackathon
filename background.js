// chrome.browserAction.onClicked.addListener(function () {
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, { message: "hello" });
//   });
// });

// chrome.tabs.onMessage.addListener(function (message, sender) {
//   if (message.message === "hello") {
//     console.log("Received message from content script");
//   }
// });

import { ENet } from "@grnsft/if-plugins";

const test = async () => {
  const eNet = ENet({ "energy-per-gb": 0.002 });
  const result = await eNet.execute([
    {
      "network/data-in": 10,
      "network/data-out": 5,
      duration: 3600,
      timestamp: "2022-01-01T01:00:00Z",
    },
  ]);
  console.log("result", result);
};

function getNetworkRequestSize(url) {
  return fetch(url)
    .then(function (response) {
      if (response.ok) {
        return response.blob();
      }
      throw new Error("Network request failed");
    })
    .then(function (blob) {
      return blob.size;
    })
    .catch(function (error) {
      console.log("Error:", error);
    });
}

// 示例用法
var requestUrl = "https://www.baidu.com/";
getNetworkRequestSize(requestUrl).then(function (size) {
  console.log("Request Size:", size);
});

// function getResourcesSize() {
//   let resources = performance.getEntries();

//   let totalSize = resourcesSize;

//   resources.forEach(function(resource) {
//     if (
//       // resource.initiatorType !== 'fetch' &&
//       // resource.initiatorType !== 'beacon' &&
//       // resource.initiatorType !== 'navigation' &&
//       // resource.initiatorType !== 'websocket' &&
//       resource.transferSize &&
//       resource.transferSize > 0
//     ) {
//       totalSize += resource.transferSize;
//     }
//   });
//   const now = new Date();
//   const item = {
//     size: totalSize,
//     expire: now.getTime() + 1000 * 60 * 60 * 60 * 8
//   };
//   localStorage.setItem('carbon', JSON.stringify(item));
// }
