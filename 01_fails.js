// četrstūris
function darbs() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,c.width,c.height);
    darbss()
}

function darbss() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    sk = Number(skaits.value);
    pl = Number(platums.value);
    ag = Number(augstums.value);

    for(var i=0; i<sk; i++) {
        var r = Math.floor((Math.random() * 256));
        var g = Math.floor((Math.random() * 256));
        var b = Math.floor((Math.random() * 256));
        var x = Math.floor((Math.random() * 400) + 1);
        var y = Math.floor((Math.random() * 400) + 1);
        ctx.fillStyle = 'rgb(' + r + ',' + g + ', ' + b + ')';
        ctx.fillRect(x, y, pl, ag);
    }
}
// Kvadrāts
function darbs_2() {
    var c = document.getElementById("myCanvas_2");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,c.width,c.height);
    darbss_2()
}

function darbss_2() {
    var c = document.getElementById("myCanvas_2");
    var ctx = c.getContext("2d");
    sk = Number(skaits_2.value);
    ml = Number(mala_2.value);

    for(var i=0; i<sk; i++) {
        var r = Math.floor((Math.random() * 256));
        var g = Math.floor((Math.random() * 256));
        var b = Math.floor((Math.random() * 256));
        var x = Math.floor((Math.random() * 400) + 1);
        var y = Math.floor((Math.random() * 400) + 1);
        ctx.fillStyle = 'rgb(' + r + ',' + g + ', ' + b + ')';
        ctx.fillRect(x, y, ml, ml);
    }
}