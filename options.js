// document.getElementById("save").addEventListener("click", function () {
//   var settings = {
//     // ...
//   };

//   chrome.storage.sync.set(settings, function () {
//     // ...
//   });
// });

const observer = new PerformanceObserver((entryList) => {
  // 遍历所有 PerformanceEntry 条目
  for (const entry of entryList.getEntries()) {
    // 判断条目类型
    switch (entry.entryType) {
      // HTTP 请求
      case "resource":
        // 获取请求的 URL
        const url = entry.name;
        // 获取请求的大小
        const size = entry.encodedBodySize;
        // 将请求大小添加到总大小中
        console.log(`请求 ${url} 大小为 ${size} 字节`);
        break;
      // 其他资源
      default:
        // 忽略其他资源
        break;
    }
  }
});

// 观察所有资源
observer.observe({ entryTypes: ["resource"] });

// 监听浏览器窗口卸载事件
// window.addEventListener("beforeunload", () => {
//   // 停止观察
//   observer.disconnect();
// });
