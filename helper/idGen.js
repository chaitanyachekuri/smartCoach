//should go to helpers
"use strict";

let helpers = {
    generateUUID : function () {
        let d = new Date().getTime();

        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;

    },

    generateCID : function (a) {
    let f = Math.floor(Math.random() * 89999 + 10000);
    let c = f.toString();
    c = a + c;

    return c;
}
};

module.exports = helpers;
