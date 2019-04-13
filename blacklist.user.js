// ==UserScript==
// @name         中文圈黑名单用户自动屏蔽
// @namespace    https://github.com/qcminecraft/gh-blacklist
// @version      0.1.2
// @description  自动根据API屏蔽用户
// @author       qcminecraft
// @match        https://github.com/*
// @grant        GM_xmlhttpRequest
// @require      https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js
// @connect      raw.githubusercontent.com
// @icon         https://avatars3.githubusercontent.com/u/25388328
// @license      GPLv3
// ==/UserScript==

(function () {
    'use strict';

    //检测正在访问的用户主页
    getBlackInfo(window.location.pathname.replace("/", ""))
})();

//获取用户黑名单信息
function getBlackInfo(username){
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://raw.githubusercontent.com/qcminecraft/gh-blacklist/master/user/"+username,
        onload: function (response) {
            console.log(response);
            if (response.status === 200) {
                var json = JSON.parse(response.responseText);
                console.log(json);
                alert("⚠警告：该用户在黑名单中！")
                return json;
            }
        }
    });
}
