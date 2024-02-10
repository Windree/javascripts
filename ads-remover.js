// ==UserScript==
// @name          ads remover for yandex browser
// @namespace     https://openuserjs.org/users/Windree
// @author        Windree (https://openuserjs.org/scripts/Windree)
// @description   Block ads in Yandex browser that still allowed by Yandex
// @copyright     2024+, Windree (https://openuserjs.org/users/Windree)
// @license       GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @version       0.0.1
// @icon          https://cdn-icons-png.flaticon.com/128/6124/6124986.png

// @homepageURL  https://github.com/Windree/
// @homepageURL  https://openuserjs.org/scripts/Windree
// @supportURL   https://github.com/Windree/javascripts/issues

// @updateURL    https://raw.githubusercontent.com/Windree/javascripts/main/ads-remover.js
// @downloadURL  https://github.com/Windree/javascripts/blob/main/ads-remover.js

// @match  *://*.yandex.ru/
// @match  *://*.yandex.com/
// @match  *://*.dzen.ru/

// @grant none

// ==/UserScript==

// ==OpenUserJS==
// @author Windree
// ==/OpenUserJS==

(function () {
    function hideElement(element, property, filter) {
        var all = Array.from(document.querySelectorAll(element));
        var elements = property && filter && all.filter(el => (filter.test && filter.test(el[property]) || el[property] === filter)) || all;
        elements.forEach(el => { el.style.display = 'none'; });
    }
    // dzen.ru top banner
    hideElement("div", "className", new RegExp(/banner/));

    // yandex ads
    hideElement("div", "className", new RegExp(/^ya_partner/));

    // yandex direct
    hideElement("div.banner");

    // yandex search results right banner
    hideElement("div[id='search-result-aside']");

    // yandex market banner
    hideElement("section", "ariaLabel", "Акции");
})()