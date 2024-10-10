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

    window.addEventListener('scroll', function () {
        // Cargar el script de Google Analytics solo después de que el usuario se desplaza
        var script = document.createElement('script');
        script.src = "https://www.googletagmanager.com/gtag/js?id=UA-32683326-1";
        document.head.appendChild(script);

        // Inicializar Google Analytics
        script.onload = function () {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'UA-32683326-1');
        };
    }, { once: true });



})(window.cnx = window.cnx || {}, document);
