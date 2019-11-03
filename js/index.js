/// <reference path="../cdn/js/cheet.min.js" />
; (function (cnx, doc, undefined) {


    var loadjs = function (scriptPath, onLoadCallBack) {

        var script = doc.createElement("script");
        script.type = "text/javascript";
        script.src = scriptPath;
        !!onLoadCallBack && (script.onload = onLoadCallBack);

        doc.body.appendChild(script);
    };

    loadjs("/cdn/harlem/harlem-shake.min.js");
    loadjs("/cdn/js/cheet.min.js", function () {
        //console.log(window, window.cnx,cheet);
        cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
            cnx.harlem.start();
        });
    });


})(window.cnx = window.cnx || {}, document);
