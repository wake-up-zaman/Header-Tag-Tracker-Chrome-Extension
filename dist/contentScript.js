/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./src/contentScript/contentScript.ts ***!
  \********************************************/
window.onload = () => {
    console.log('I am from content');
};
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "getHeaders") {
        const headers = Array.from(document.querySelectorAll("h1, h2")).map((header) => header.innerText);
        sendResponse({ headers });
    }
});

/******/ })()
;
//# sourceMappingURL=contentScript.js.map