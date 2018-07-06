(function(doc,win){
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange':'resize',
    recalc = function () {
        var clientWidth = docEl.clientWidth;
        // console.log(docEl);
        if (!clientWidth) return;
        console.log(clientWidth)
        docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt,recalc,false);
    doc.addEventListener('DOMContentLoaded',recalc,false);
})(document,window)