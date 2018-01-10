exports.STORAGE_KEY = "extension_OpenGoogleResults";
exports.OPEN_TYPE_KEY = exports.STORAGE_KEY + "__options_openType";
exports.NUM_LINKS_AT_ONCE_KEY = exports.STORAGE_KEY + "__options_numLinksAtOnce";
exports.OPEN_INTERVAL_TIME_SCALE_KEY = exports.STORAGE_KEY + "__options_numIntervalTimeScale";
exports.SPELL_KEY = exports.STORAGE_KEY + "__options_spell";
exports.RESET_KEYBOARD_KEY = exports.STORAGE_KEY + "__options_resetKeyboard"
exports.SHAKE_WINDOW_KEY = exports.STORAGE_KEY + "__options_shakeWindow"
exports.OPTION_KEYS = [exports.OPEN_TYPE_KEY, exports.NUM_LINKS_AT_ONCE_KEY, exports.OPEN_INTERVAL_TIME_SCALE_KEY, exports.SPELL_KEY, exports.RESET_KEYBOARD_KEY, exports.SHAKE_WINDOW_KEY];
exports.OPTION_DEFAULT_VALUES = ["stop_and_go", 4, 2000, "", "F4", false];

function hashCode(str){
    let hash = 0;
    if (str.length == 0) return hash;
    for(let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        hash = ((hash<<5)-hash) + charCode;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString();
}

function url2hash(url){
    const urlHash = hashCode(url);
    return urlHash;
}

exports.keyUrlSpecific = function(url){
    return exports.STORAGE_KEY + "__urlhash_" + url2hash(url);
}


