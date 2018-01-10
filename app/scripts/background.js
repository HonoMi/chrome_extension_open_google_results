// メッセージが来たら、現在開いているページのurlをコピーする。

{
"use strict";
const jquery = require('jquery');
window.$ = window.jQuery = jquery;
const util = require('./util')


// Initialize chrome.STORAGE_KEY if not.
chrome.storage.sync.get(util.OPTION_KEYS, function(items){
        for(let i=0; i<util.OPTION_KEYS.length; i++){
            const key = util.OPTION_KEYS[i];
            if(! items.hasOwnProperty(key)){
                const setObj = {};
                const defaultValue = util.OPTION_DEFAULT_VALUES[i];
                setObj[key] = defaultValue;
                chrome.storage.sync.set(setObj);
            }
            
        }
    }
);



chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "openLinks"){
        // chrome.tabs.executeScript(null, {file: "include.js"});
        chrome.tabs.executeScript(null, {file: "scripts/open_links.js"});
    }
    sendResponse({});
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "createTab"){
        chrome.tabs.create({url: request.url, active:false });
    }
    sendResponse({});
});

function shakeWindow(curX, curY, curWidth, curHeight) {    /* http://javascript.eweb-design.com/0508_qw.html */
    let interval = 10; // ウィンドウを揺らす間隔(ミリ秒単位)
    // ウィンドウを揺らすパターン。x座標・y座標
    // let x = [12,-20, 8,-16, 20, -4, 16, -8, 4,-12, 0];
    // let y = [-20, 8,-16, 12,-12, 16, -4, 20, -8, 4, 0];
    // let x = [3,-5, 2,-4, 5, -1, 4, -2, 1,-3, 0];
    // let y = [-5, 2,-4, 3,-3, 4, -1, 5, -2, 1, 0];
    let x = [+5, -2, 1, 0];
    let y = [1, 0, 0, 0];
    for(let i=0; i<x.length; i++){
        x[i] += curX;
        y[i] += curY;
    }
    let cnt = 0;
    function moveWindow(){
        let updateInfo = {
            left: x[cnt],
            top: y[cnt],
            width:  curWidth,
            height:  curHeight,
        }
        chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, updateInfo);
        cnt++;
        if(cnt < x.length){
            setTimeout(moveWindow, interval);
        }else{
            cnt = 0;
        }
    }
    moveWindow();
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "shakeWindow"){
        shakeWindow(request.screenX, request.screenY, request.outerWidth, request.outerHeight);
    }
    sendResponse({});
});

}
