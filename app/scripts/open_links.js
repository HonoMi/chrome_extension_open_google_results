// storageからオプションを読みだし、それに基づいてタブを開く。
{

"use strict";
"use strict";
const jquery = require('jquery');
window.$ = window.jQuery = jquery;
const util = require('./util')

// Get extension options and run the main functoin.
chrome.storage.sync.get(util.OPTION_KEYS, function(items){
        main(items);
    }
);

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

    function getWaitTime(linkIndex){
        switch (OPEN_TYPE) {
            case "stop_and_go":
                if(linkIndex === 0){
                    return 0;
                }
                return OPEN_INTERVAL_TIME_SCALE;
            case "cascade":
                let wait_time = 0;
                for(let i=0; i<linkIndex; i++){
                    wait_time += OPEN_INTERVAL_TIME_SCALE * Math.pow(1/2., i);
                }
                return wait_time;
            case "interval":
                return linkIndex * OPEN_INTERVAL_TIME_SCALE;
            default:
                return 0;
        }
    }

    function openInNewTab(url){
        // javascriptのwindow.open を使うと、新しいタブを開いた際に、そちらに移動してしまう。
        // chrome.tab.create({url:myUrl, active: false}) とすれば移動せずにタブを開けるが、tab.create apiはbackground_scriptからしか使えない。
        // よって、background_scriptにメッセージを飛ばし、依頼する。
        chrome.runtime.sendMessage({method: "createTab", url: url}, function(response) {});
        // window.open(url,'_blank');
        return false;
    }

    function shoutSpell(){
        const elem = document.createElement('div');
        elem.textContent = SPELL;
        elem.style.zIndex = 9999;
        elem.style.display = "inline";
        elem.style.position = "fixed";
        // elem.className = "med";
        const body = document.getElementsByTagName("body")[0];
        body.insertBefore(elem, body.firstChild);
        // body.appendChild(elem);
    }

    function openLinks(){
        shoutSpell();
        if(SHAKE_WINDOW){
            chrome.runtime.sendMessage({method: "SHAKE_WINDOW", screenX: window.screenX, screenY: window.screenY, outerWidth: window.outerWidth, outerHeight: window.outerHeight}, function(response) {});
        }

        const searchedResults = document.getElementsByClassName("r");
        let openedLinks = 0;
        for(let i = 0; i<searchedResults.length; i++){
            if(i >= NUM_LINKS_AT_ONCE){break;}
            const linkIndex = i + parseInt(localStorage[STORAGE_KEY_URL_SPECIFIC]);
            if(linkIndex >= searchedResults.length){
                localStorage[STORAGE_KEY_URL_SPECIFIC] = 0;
                break;
            }

            // Open the link after wait time.
            (function(){
                const waitTime = getWaitTime(i);
                const url = searchedResults[linkIndex].getElementsByTagName("a")[0].getAttribute("href");
                setTimeout(
                    function() {openInNewTab(url);}, 
                    waitTime
                );
                return false;
            })();
            openedLinks += 1;
        }
        localStorage[STORAGE_KEY_URL_SPECIFIC] = parseInt(localStorage[STORAGE_KEY_URL_SPECIFIC]) + openedLinks;
    }

    openLinks();
}

}
