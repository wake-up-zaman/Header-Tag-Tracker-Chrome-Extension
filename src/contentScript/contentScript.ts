window.onload = () => {
    console.log('I am from content');
};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "getHeaders") {
    const headers = Array.from(document.querySelectorAll("h1, h2")).map((header) => (header as HTMLElement).innerText);
    sendResponse({ headers });
  }
});

