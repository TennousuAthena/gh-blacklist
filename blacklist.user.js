// ==UserScript==
// @name         中文圈黑名单用户自动屏蔽
// @namespace    https://github.com/qcminecraft/gh-blacklist
// @version      0.1.1
// @description  自动根据API屏蔽用户
// @author       qcminecraft
// @match        https://github.com/*
// @grant        GM_xmlhttpRequest
// @require      https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js
// @connect      raw.githubusercontent.com
// @icon         https://avatars3.githubusercontent.com/u/25388328
// ==/UserScript==

(function () {
    'use strict';

    GM_xmlhttpRequest({
        method: "GET",
        url: "https://raw.githubusercontent.com/qcminecraft/gh-blacklist/master/user/",
        onload: function (response) {
            console.log(response.responseText);
        }
    });
})();
