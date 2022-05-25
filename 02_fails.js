// riņkis
function darbs() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,c.width,c.height);
    darbss()
}

function darbss(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    sk = Number(skaits.value);
    ra = Number(radius.value);

    for(var i=0; i<sk; i++) {
        var r = Math.floor((Math.random() * 256));
        var g = Math.floor((Math.random() * 256));
        var b = Math.floor((Math.random() * 256));
        var x = Math.floor((Math.random() * 400) + 1);
        var y = Math.floor((Math.random() * 400) + 1);
        ctx.beginPath();
        ctx.fillStyle = 'rgb(' + r + ',' + g + ', ' + b + ')';
        ctx.arc(x, y, ra, 0, 2 * Math.PI);
        ctx.fill();
    }
}