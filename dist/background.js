/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    console.log(msg);
    console.log(sender);
    sendResponse("Front the background Script");
});
chrome.runtime.onInstalled.addListener(() => {
    console.log('I just installed my chrome extension');
});
chrome.bookmarks.onCreated.addListener(() => {
    console.log('I just bookmarked this page');
});

/******/ })()
;
//# sourceMappingURL=background.js.map