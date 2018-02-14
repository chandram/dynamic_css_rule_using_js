/**

CSSStyleRule {
        selectorText: "#page-title",
        style: CSSStyleDeclaration,
        type: 1,
        cssText: "#page-title { height: 20px; }"...
    }

#TODO check if insertRule is supported by your browser
(style.insertRule) or style.addRule
**/
let cssRules = {
    style : (function() {
        return document.styleSheets[0];
    })(),
    set: function (height) {
        let rule = this.get();
        if (rule) {
            rule.style.height = height+"px";
        } else {
            this.style.insertRule("#page-title { height: "+height+"px;}", 0);
        }
    },
    get: function () {
        return this.style.cssRules.item(0);
    },
    delete: function () {
        let rule = this.get();
        if (rule)
            this.style.deleteRule(0);

    }
};
