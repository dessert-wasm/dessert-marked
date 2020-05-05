let wasm = require('dessert-markdown-core');

function getDefaults() {
    return {
        baseUrl: null,
        breaks: false,
        gfm: true,
        headerIds: true,
        headerPrefix: '',
        highlight: null,
        langPrefix: 'language-',
        mangle: true,
        pedantic: false,
        renderer: null,
        sanitize: false,
        sanitizer: null,
        silent: false,
        smartLists: false,
        smartypants: false,
        xhtml: false
    };
}

function merge(obj) {
    let i = 1, target, key;

    for (; i < arguments.length; i++) {
        target = arguments[i];

        for (key in target) {
            if (Object.prototype.hasOwnProperty.call(target, key)) {
                obj[key] = target[key];
            }
        }
    }
    return obj;
}

function changeDefaults(newDefaults) {
    module.exports.defaults = newDefaults;
}

function optionsToCoreOptions(opt) {
    console.log(opt);

    let newObj = {
        noHeaderId: !opt["headerIds"],
        prefixHeaderId: opt["headerPrefix"],
        simpleLineBreaks: opt["breaks"],
        tables: opt["gfm"],
        strikethrough: opt["gfm"],
        tasklists: true,
        ghCompatibleHeaderId: true,
        requireSpaceBeforeHeadingText: true,
    };
    return newObj;
}

function marked(src, opt, callback) {
    if (typeof src === 'undefined' || src === null) {
        throw new Error('marked(): input parameter is undefined or null');
    }
    if (typeof src !== 'string') {
        throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
    }

    try {
        opt = optionsToCoreOptions(merge({}, marked.defaults, opt || {}));
        return wasm.make_html(src, opt);
    } catch (e) {
        if ((opt || marked.defaults).silent) {
            return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
        }
        throw e;
    }
}

marked.options = marked.setOptions = function (opt) {
    merge(marked.defaults, opt);
    changeDefaults(marked.defaults);
    return marked;
};

marked.getDefaults = getDefaults;
marked.defaults = getDefaults();


marked.parse = marked;

module.exports = marked;