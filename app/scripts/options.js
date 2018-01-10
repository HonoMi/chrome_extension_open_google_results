// options.html・chrome.storage間のデータ送受信を行う。

{
"use strict";
const jquery = require('jquery');
window.$ = window.jQuery = jquery;
const util = require('./util');

window.onload = function() {
    // Get values from html, set it onto chrome.storage.
    let save = document.getElementById("save");

    save.onclick = function() {
        // modal
        let modal = document.getElementById("modal");
        modal.className = "";
        let mask = document.getElementById("mask");
        mask.className = "";
        setTimeout(
            function() {modal.className="hidden";mask.className="hidden"}, 
            800
        );

        // Set openType.
        let openTypeTags = document.getElementsByName("open_type");
        for(let i=0; i<openTypeTags.length; i++){
            let openTypeTag = openTypeTags[i];
            if(openTypeTag.checked){
                let updateItem = {};
                updateItem[util.OPEN_TYPE_KEY] = openTypeTag.getAttribute("value");
                chrome.storage.sync.set(updateItem);
                break;
            }
        }
        // Set numLinksAtOnce.
        let numLinksAtOnce = parseInt(document.getElementById("num_links_at_once").value);
        let updateItem = {};
        updateItem[util.NUM_LINKS_AT_ONCE_KEY] = numLinksAtOnce;
        chrome.storage.sync.set(updateItem);
        // Set openIntervalTimeScale.
        let openIntervalTimeScale = parseInt(document.getElementById("open_interval_time_scale").value);
        updateItem = {}
        updateItem[util.OPEN_INTERVAL_TIME_SCALE_KEY] = openIntervalTimeScale;
        chrome.storage.sync.set(updateItem);
        // Set spell.
        let spell = document.getElementById("spell").value;
        updateItem = {}
        updateItem[util.SPELL_KEY] = spell;
        chrome.storage.sync.set(updateItem);
        // Set resetKeyboard.
        let resetKeyboard = document.getElementById("reset_keyboard").value;
        updateItem = {}
        updateItem[util.RESET_KEYBOARD_KEY] = resetKeyboard;
        chrome.storage.sync.set(updateItem);
        // Set shakeWindow.
        let shakeWindow = document.getElementById("shake_window").checked;
        updateItem = {}
        updateItem[util.SHAKE_WINDOW_KEY] = shakeWindow;
        chrome.storage.sync.set(updateItem);
    };

    // Get options from chrome.storage, set them onto html default values.
    chrome.storage.sync.get(util.OPTION_KEYS, function(items){
            let openType = items[util.OPEN_TYPE_KEY];
            let tag = document.querySelectorAll(".open_type[value=" + openType + "]")[0];
            tag.checked = true;

            let id = "num_links_at_once";
            tag = document.getElementById(id);
            tag.value = items[util.NUM_LINKS_AT_ONCE_KEY];

            id = "open_interval_time_scale";
            tag = document.getElementById(id);
            tag.value = items[util.OPEN_INTERVAL_TIME_SCALE_KEY];

            id = "spell";
            tag = document.getElementById(id);
            tag.value = items[util.SPELL_KEY];

            id = "reset_keyboard";
            tag = document.getElementById(id);
            tag.value = items[util.RESET_KEYBOARD_KEY];

            id = "shake_window";
            tag = document.getElementById(id);
            document.getElementById("shake_window").checked = items[util.SHAKE_WINDOW_KEY];
        }
    );
};

}
