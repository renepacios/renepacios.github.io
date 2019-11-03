/// <reference path="../cdn/js/cheet.min.js" />
; (function (cnx, doc, undefined) {


    var loadjs = function (scriptPath, onLoadCallBack) {

        var script = doc.createElement("script");
        script.type = "text/javascript";
        script.src = scriptPath;
        !!onLoadCallBack && (script.onload = onLoadCallBack);

        doc.body.appendChild(script);
    };


    loadjs("/cdn/js/cheet.min.js", function () {
        //console.log(window, window.cnx,cheet);
        cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () { //konamicode 
            loadjs("/cdn/harlem/harlem-shake.min.js", function () {
                cnx.harlem.start();
            }); //descarga harlem y arranca
        });
    });


})(window.cnx = window.cnx || {}, document);
