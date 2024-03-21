chrome.runtime.onMessage.addListener(function (message, sender) {
  if (message.message === "hello") {
    alert("Hello from content script!");
  }
});
