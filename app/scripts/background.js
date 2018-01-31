// メッセージが来たら、現在開いているページのurlをコピーする。

{
"use strict";
const jquery = require('jquery');
window.$ = window.jQuery = jquery;
const util = require('./util');
const _ = require('lodash');


// Initialize chrome.STORAGE_KEY and set values onto html.
chrome.storage.sync.get(util.OPTION_KEYS, function(items){
    for(let i=0; i<util.OPTION_KEYS.length; i++){
        const key = util.OPTION_KEYS[i];
        const value = items.hasOwnProperty(key) ? items[key] : util.OPTION_DEFAULT_VALUES[i];
        const setObj = util.createObject(key, value)
        console.log(setObj);
        chrome.storage.sync.set(setObj);
    }
});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "openLinks"){
        chrome.tabs.executeScript(null, {file: "scripts/open_links.js"});
    }else if(request.method == "createTab"){
        chrome.tabs.create({url: request.url, active:false });
    }else if(request.method == "shakeWindow"){
        shakeWindow(request.screenX, request.screenY, request.outerWidth, request.outerHeight);
    }
    sendResponse({});
});


function shakeWindow(curX, curY, curWidth, curHeight) {    /* http://javascript.eweb-design.com/0508_qw.html */
    const interval = 10; // ウィンドウを揺らす間隔(ミリ秒単位)
    const delX = [+5, -2, 1, 0];
    const delY = [1, 0, 0, 0];
    const X = _(delX).map(value => value + curX);
    const Y = _(delY).map(value => value + curY);

    function moveTo(i){
        const updateInfo = {
            left: x[i],
            top: y[i],
            width:  curWidth,
            height:  curHeight,
        }
        chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, updateInfo);
        if(i < x.length){
            setTimeout(()=>{moveTo(i+1);}, interval);
        }else{
            return;
        }
    }

    moveTo(0);
}


}
