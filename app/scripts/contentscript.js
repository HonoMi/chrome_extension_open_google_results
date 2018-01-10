// キーボードリスナーを登録する。
{
"use strict";
const jquery = require('jquery');
window.$ = window.jQuery = jquery;
const util = require('./util');

chrome.storage.sync.get(util.OPTION_KEYS, function(items){
        keyboardListener(items);
    }
);


function keyboardListener(options){
    $(document).keydown(function(event){
        const keyboard = options[util.RESET_KEYBOARD_KEY];
        if(event.key == keyboard){
            localStorage[util.keyUrlSpecific(location.href)] = 0;
        }
        if(event.ctrlKey){
            if(event.keyCode === 32/* space */){
                chrome.runtime.sendMessage({method: "openLinks"}, function(response) {});
            }
        }
    })
}


}
