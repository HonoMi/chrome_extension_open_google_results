// storageからオプションを読みだし、それに基づいてタブを開く。
{

"use strict";
const jquery = require('jquery');
window.$ = window.jQuery = jquery;
const util = require('./util');
const _ = require('lodash');

function shoutSpell(spell){
    const elem = $('<div>').text(spell).css('zIndex', 9999).css('display', 'inline').css('position', 'fixed');
    elem.prepend($('body:first-child'));
}

function getWaitTime(linkIndex, openType, openIntervalTimeScale){
    switch (openType) {
        case "stop_and_go":
            if(linkIndex === 0){
                return 0;
            }
            return openIntervalTimeScale;
        case "cascade":
            const waitTime = _.range(0, linkIndex)
                                .reduce((waitTime, i) => waitTime + openIntervalTimeScale * Math.pow(1/2., i), 0)
            return waitTime;
        case "interval":
            return linkIndex * openIntervalTimeScale;
        default:
            return 0;
    }
}

function openInNewTab(url){
    // javascriptのwindow.open を使うと、新しいタブを開いた際に、そちらに移動してしまう。
    // chrome.tab.create({url:myUrl, active: false}) とすれば移動せずにタブを開けるが、tab.create apiはbackground_scriptからしか使えない。
    // よって、background_scriptにメッセージを飛ばし、依頼する。
    chrome.runtime.sendMessage({method: "createTab", url: url}, ()=>{});
    // window.open(url,'_blank');
    return false;
}


function main(options){
    if (location.href.match(/.*google.*search?.*/) === null) {
        return;
    }

    const OPEN_TYPE = options[util.OPEN_TYPE_KEY];
    const NUM_LINKS_AT_ONCE = options[util.NUM_LINKS_AT_ONCE_KEY];
    const OPEN_INTERVAL_TIME_SCALE = options[util.OPEN_INTERVAL_TIME_SCALE_KEY]
    const SPELL = options[util.SPELL_KEY];
    const SHAKE_WINDOW = options[util.SHAKE_WINDOW_KEY];
    const STORAGE_KEY_URL_SPECIFIC = util.keyUrlSpecific(decodeURIComponent(location.href));

    // Initialize localStorage.
    if(! localStorage.hasOwnProperty(STORAGE_KEY_URL_SPECIFIC)){
        localStorage[STORAGE_KEY_URL_SPECIFIC] = 0;
    }

    // Shout spell
    shoutSpell(SPELL);

    // Shake window
    if(SHAKE_WINDOW){
        chrome.runtime.sendMessage({method: "shakeWindow", screenX: window.screenX, screenY: window.screenY, outerWidth: window.outerWidth, outerHeight: window.outerHeight}, function(response) {});
    }

    // Open links.
    const searchedResults = document.getElementsByClassName("r");
    let openedLinks = 0;
    for(let i = 0; i<searchedResults.length; i++){
        if(i >= NUM_LINKS_AT_ONCE){break;}
        const startLinkIndex = localStorage[STORAGE_KEY_URL_SPECIFIC];
        const linkIndex = i + parseInt(startLinkIndex);
        if(linkIndex >= searchedResults.length){
            localStorage[STORAGE_KEY_URL_SPECIFIC] = 0;
            break;
        }
        // Open the link after wait time.
        const waitTime = getWaitTime(i, OPEN_TYPE, OPEN_INTERVAL_TIME_SCALE);
        const url = searchedResults[linkIndex].getElementsByTagName("a")[0].getAttribute("href");
        setTimeout(
            function() {openInNewTab(url);}, 
            waitTime
        );
        openedLinks += 1;
    }
    localStorage[STORAGE_KEY_URL_SPECIFIC] = parseInt(localStorage[STORAGE_KEY_URL_SPECIFIC]) + openedLinks;

}

// Get extension options and run the main functoin.
chrome.storage.sync.get(util.OPTION_KEYS, function(options){
        main(options);
    }
);


}
