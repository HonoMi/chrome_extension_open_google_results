// キーボードリスナーを登録する。
{
"use strict";
const jquery = require('jquery');
window.$ = window.jQuery = jquery;
const util = require('./util');


function addKeyboardListener(options){
    $(document).keydown(function(event){
        const keyboard = options[util.RESET_KEYBOARD_KEY];
        if(event.key == keyboard){
            localStorage[util.keyUrlSpecific(location.href)] = 0;   // Start link index.
        }
        if(event.ctrlKey){
            if(event.keyCode === 32/* space */){
                chrome.runtime.sendMessage({method: "openLinks"}, function(response) {});
            }
        }
    })
}

chrome.storage.sync.get(util.OPTION_KEYS, function(options){
        addKeyboardListener(options);
    }
);


}
