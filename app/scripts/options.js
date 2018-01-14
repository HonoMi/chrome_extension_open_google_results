// options.html・chrome.storage間のデータ送受信を行う。

{
"use strict";
const jquery = require('jquery');
window.$ = window.jQuery = jquery;
const util = require('./util');
const _ = require('lodash');
const R = require('ramda');

function createObject(key, value){
    const obj = {};
    obj[key] = value;
    return obj;
}

$(document).ready(()=>{
    // Get values from html, set it onto chrome.storage.
    // let save = document.getElementById("save");
    $('#save').on('click', function(){
        // Modal.
        $('#modal').attr('class', '')
        $('#mask').attr('class', '')
        setTimeout(
            function() {$('#modal').attr('class', 'hidden');$('#mask').attr('class', 'hidden')}, 
            800
        );

        // Set openType.
        _($('[name=open_type]'))
            .filter(tag=>tag.checked)
            .forEach(function(tag){
                 const updateItem = {};
                 chrome.storage.sync.set(createObject(util.OPEN_TYPE_KEY, tag.getAttribute('value')));
            })

        // Set numLinksAtOnce.
        const numLinksAtOnce = parseInt(document.getElementById("num_links_at_once").value);
        chrome.storage.sync.set(createObject(util.NUM_LINKS_AT_ONCE_KEY, numLinksAtOnce));
        // Set openIntervalTimeScale.
        const openIntervalTimeScale = parseInt(document.getElementById("open_interval_time_scale").value);
        chrome.storage.sync.set(createObject(util.OPEN_INTERVAL_TIME_SCALE_KEY, openIntervalTimeScale));
        // Set spell.
        const spell = document.getElementById("spell").value;
        chrome.storage.sync.set(createObject(util.SPELL_KEY, spell));
        // Set resetKeyboard.
        const resetKeyboard = document.getElementById("reset_keyboard").value;
        chrome.storage.sync.set(createObject(util.RESET_KEYBOARD_KEY, resetKeyboard));
        // Set shakeWindow.
        const shakeWindow = document.getElementById("shake_window").checked;
        chrome.storage.sync.set(createObject(util.SHAKE_WINDOW_KEY, shakeWindow));
    })

    // Get options from chrome.storage, set them onto html default values.
    chrome.storage.sync.get(util.OPTION_KEYS, function(items){
            const openType = items[util.OPEN_TYPE_KEY];
            $('.open_type[value=' + openType + ']').prop('checked', true);
            $('#num_links_at_once').val(items[util.NUM_LINKS_AT_ONCE_KEY]);
            $('#open_interval_time_scale').val(items[util.OPEN_INTERVAL_TIME_SCALE_KEY]);
            $('#spell').val(items[util.SPELL_KEY]);
            $('#reset_keyboard').val(items[util.RESET_KEYBOARD_KEY]);
            $('#shake_window').prop('checked', items[util.SHAKE_WINDOW_KEY]);
        }
    );
})

}
