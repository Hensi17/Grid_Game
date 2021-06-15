//document.getElementById("g1-2").style.backgroundColor = "Blue";

var color = ["Blue", "Red", "Purple", "Yellow", "Green", "orange"];
var id = ["g1-1", "g1-2", "g1-3", "g1-4", "g1-5", "g1-6", "g1-7", "g1-8", "g1-9"];
var box2 = ["g2-1", "g2-2", "g2-3", "g2-4", "g2-5", "g2-6", "g2-7", "g2-8", "g2-9", "g2-10", "g2-11",
    "g2-12", "g2-13", "g2-14", "g2-15", "g2-16", "g2-17", "g2-18", "g2-19", "g2-20", "g2-21", "g2-22",
    "g2-23", "g2-24", "g2-25"
];
var points;
var count = 0;

gt1 = document.getElementById(id[0]);
gt2 = document.getElementById(id[1]);
gt3 = document.getElementById(id[2]);
gt4 = document.getElementById(id[3]);
gt5 = document.getElementById(id[4]);
gt6 = document.getElementById(id[5]);
gt7 = document.getElementById(id[6]);
gt8 = document.getElementById(id[7]);
gt9 = document.getElementById(id[8]);
gf1 = document.getElementById(box2[6]);
gf2 = document.getElementById(box2[7]);
gf3 = document.getElementById(box2[8]);
gf4 = document.getElementById(box2[11]);
gf5 = document.getElementById(box2[12]);
gf6 = document.getElementById(box2[13]);
gf7 = document.getElementById(box2[16]);
gf8 = document.getElementById(box2[17]);
gf9 = document.getElementById(box2[18]);



function Rand() {
    var temp;
    temp = document.getElementById("b1").value;
    if (temp == "yes") {
        var c;
        var n = [0, 0, 0, 0, 0, 0];
        var i = 0;
        start: while (i < 9) {
            c = Math.floor(Math.random() * 6);
            if (n[c] >= 4) {
                continue start;
            }
            n[c]++;
            document.getElementById(id[i]).style.backgroundColor = color[c];
            i++;
        }
        var a;
        var q = [0, 0, 0, 0, 0, 0];
        var j = 0;
        start_2: while (j < 24) {
            a = Math.floor(Math.random() * 6);
            if (q[a] >= 4) {
                continue start_2;
            }
            q[a]++;
            document.getElementById(box2[j]).style.backgroundColor = color[a];
            j++;
        }
        document.getElementById(box2[24]).style.backgroundColor = "grey";
        points = 0;
        count = 0;
        document.getElementById("sb").innerText = points;
        document.getElementById("mb").innerText = count;
    }
}


function G_3B(x) {
    var p = "g2-";
    var l = x - 1;
    var r = x + 1;
    var t = x - 5;
    var y = document.getElementById(p.concat(x));


    var y1 = document.getElementById(p.concat(l));
    var y2 = document.getElementById(p.concat(r));
    var y3 = document.getElementById(p.concat(t));

    if (y1.style.backgroundColor == "grey") {
        var cls1 = y.style.backgroundColor;
        var cls2 = y1.style.backgroundColor;
        y.style.backgroundColor = cls2;
        y1.style.backgroundColor = cls1;
        count = count + 1;
    }

    if (y2.style.backgroundColor == "grey") {
        var cls1 = y.style.backgroundColor;
        var cls2 = y2.style.backgroundColor;
        y.style.backgroundColor = cls2;
        y2.style.backgroundColor = cls1;
        count = count + 1;
    }

    if (y3.style.backgroundColor == "grey") {
        var cls1 = y.style.backgroundColor;
        var cls2 = y3.style.backgroundColor;
        y.style.backgroundColor = cls2;
        y3.style.backgroundColor = cls1;
        count = count + 1;
    }
    document.getElementById("mb").innerText = count;
    Check_Game();

}

function G_3L(x) {
    var p = "g2-";
    var r = x + 1;
    var b = x + 5;
    var t = x - 5;
    var y = document.getElementById(p.concat(x));


    var y1 = document.getElementById(p.concat(b));
    var y2 = document.getElementById(p.concat(r));
    var y3 = document.getElementById(p.concat(t));

    if (y1.style.backgroundColor == "grey") {
        var cls1 = y.style.backgroundColor;
        var cls2 = y1.style.backgroundColor;
        y.style.backgroundColor = cls2;
        y1.style.backgroundColor = cls1;
        count = count + 1;
    }

    if (y2.style.backgroundColor == "grey") {
        var cls1 = y.style.backgroundColor;
        var cls2 = y2.style.backgroundColor;
        y.style.backgroundColor = cls2;
        y2.style.backgroundColor = cls1;
        count = count + 1;
    }

    if (y3.style.backgroundColor == "grey") {
        var cls1 = y.style.backgroundColor;
        var cls2 = y3.style.backgroundColor;
        y.style.backgroundColor = cls2;
        y3.style.backgroundColor = cls1;
        count = count + 1;
    }
    document.getElementById("mb").innerText = count;
    Check_Game();
}

function G_3R(x) {
    var p = "g2-";
    var l = x - 1;
    var b = x + 5;
    var t = x - 5;
    var y = document.getElementById(p.concat(x));


    var y1 = document.getElementById(p.concat(l));
    var y2 = document.getElementById(p.concat(b));
    var y3 = document.getElementById(p.concat(t));

    if (y1.style.backgroundColor == "grey") {
        var cls1 = y.style.backgroundColor;
        var cls2 = y1.style.backgroundColor;
        y.style.backgroundColor = cls2;
        y1.style.backgroundColor = cls1;
        count = count + 1;
    }

    if (y2.style.backgroundColor == "grey") {
        var cls1 = y.style.backgroundColor;
        var cls2 = y2.style.backgroundColor;
        y.style.backgroundColor = cls2;
        y2.style.backgroundColor = cls1;
        count = count + 1;
    }

    if (y3.style.backgroundColor == "grey") {
        var cls1 = y.style.backgroundColor;
        var cls2 = y3.style.backgroundColor;
        y.style.backgroundColor = cls2;
        y3.style.backgroundColor = cls1;
        count = count + 1;
    }
    document.getElementById("mb").innerText = count;
    Check_Game();

}

function G_3T(x) {
    var p = "g2-";
    var l = x - 1;
    var r = x + 1;
    var b = x + 5;
    var y = document.getElementById(p.concat(x));


    var y1 = document.getElementById(p.concat(l));
    var y2 = document.getElementById(p.concat(r));
    var y3 = document.getElementById(p.concat(b));

    if (y1.style.backgroundColor == "grey") {
        var cls1 = y.style.backgroundColor;
        var cls2 = y1.style.backgroundColor;
        y.style.backgroundColor = cls2;
        y1.style.backgroundColor = cls1;
        count = count + 1;
    }

    if (y2.style.backgroundColor == "grey") {
        var cls1 = y.style.backgroundColor;
        var cls2 = y2.style.backgroundColor;
        y.style.backgroundColor = cls2;
        y2.style.backgroundColor = cls1;
        count = count + 1;
    }

    if (y3.style.backgroundColor == "grey") {
        var cls1 = y.style.backgroundColor;
        var cls2 = y3.style.backgroundColor;
        y.style.backgroundColor = cls2;
        y3.style.backgroundColor = cls1;
        count = count + 1;
    }
    document.getElementById("mb").innerText = count;
    Check_Game();
}

function G_4C(x) {
    var p = "g2-";
    var l = x - 1;
    var r = x + 1;
    var t = x - 5;
    var b = x + 5;
    var y = document.getElementById(p.concat(x));


    var y1 = document.getElementById(p.concat(l));
    var y2 = document.getElementById(p.concat(r));
    var y3 = document.getElementById(p.concat(t));
    var y4 = document.getElementById(p.concat(b));

    if (y1.style.backgroundColor == "grey") {
        var cls1 = y.style.backgroundColor;
        var cls2 = y1.style.backgroundColor;
        y.style.backgroundColor = cls2;
        y1.style.backgroundColor = cls1;
        count = count + 1;
    }

    if (y2.style.backgroundColor == "grey") {
        var cls1 = y.style.backgroundColor;
        var cls2 = y2.style.backgroundColor;
        y.style.backgroundColor = cls2;
        y2.style.backgroundColor = cls1;
        count = count + 1;
    }

    if (y3.style.backgroundColor == "grey") {
        var cls1 = y.style.backgroundColor;
        var cls2 = y3.style.backgroundColor;
        y.style.backgroundColor = cls2;
        y3.style.backgroundColor = cls1;
        count = count + 1;
    }

    if (y4.style.backgroundColor == "grey") {
        var cls1 = y.style.backgroundColor;
        var cls2 = y4.style.backgroundColor;
        y.style.backgroundColor = cls2;
        y4.style.backgroundColor = cls1;
        count = count + 1;
    }
    document.getElementById("mb").innerText = count;
    Check_Game();
}

function g2_1(x) {
    var p = "g2-";
    var r = x + 1;
    var b = x + 5;
    var y = document.getElementById(p.concat(x));


    var y1 = document.getElementById(p.concat(b));
    var y2 = document.getElementById(p.concat(r));

    if (y1.style.backgroundColor == "grey") {
        var cls1 = y.style.backgroundColor;
        var cls2 = y1.style.backgroundColor;
        y.style.backgroundColor = cls2;
        y1.style.backgroundColor = cls1;
        count = count + 1;
    }

    if (y2.style.backgroundColor == "grey") {
        var cls1 = y.style.backgroundColor;
        var cls2 = y2.style.backgroundColor;
        y.style.backgroundColor = cls2;
        y2.style.backgroundColor = cls1;
        count = count + 1;
    }
    document.getElementById("mb").innerText = count;
    Check_Game();
}

function g2_5(x) {
    var p = "g2-";
    var l = x - 1;
    var b = x + 5;
    var y = document.getElementById(p.concat(x));


    var y1 = document.getElementById(p.concat(l));
    var y2 = document.getElementById(p.concat(b));

    if (y1.style.backgroundColor == "grey") {
        var cls1 = y.style.backgroundColor;
        var cls2 = y1.style.backgroundColor;
        y.style.backgroundColor = cls2;
        y1.style.backgroundColor = cls1;
        count = count + 1;
    }

    if (y2.style.backgroundColor == "grey") {
        var cls1 = y.style.backgroundColor;
        var cls2 = y2.style.backgroundColor;
        y.style.backgroundColor = cls2;
        y2.style.backgroundColor = cls1;
        count = count + 1;
    }
    document.getElementById("mb").innerText = count;
    Check_Game();
}

function g2_21(x) {
    var p = "g2-";
    var r = x + 1;
    var t = x - 5;
    var y = document.getElementById(p.concat(x));


    var y1 = document.getElementById(p.concat(t));
    var y2 = document.getElementById(p.concat(r));

    if (y1.style.backgroundColor == "grey") {
        var cls1 = y.style.backgroundColor;
        var cls2 = y1.style.backgroundColor;
        y.style.backgroundColor = cls2;
        y1.style.backgroundColor = cls1;
        count = count + 1;
    }

    if (y2.style.backgroundColor == "grey") {
        var cls1 = y.style.backgroundColor;
        var cls2 = y2.style.backgroundColor;
        y.style.backgroundColor = cls2;
        y2.style.backgroundColor = cls1;
        count = count + 1;
    }
    document.getElementById("mb").innerText = count;
    Check_Game();
}

function g2_25(x) {
    var p = "g2-";
    var l = x - 1;
    var t = x - 5;
    var y = document.getElementById(p.concat(x));


    var y1 = document.getElementById(p.concat(l));
    var y2 = document.getElementById(p.concat(t));

    if (y1.style.backgroundColor == "grey") {
        var cls1 = y.style.backgroundColor;
        var cls2 = y1.style.backgroundColor;
        y.style.backgroundColor = cls2;
        y1.style.backgroundColor = cls1;
        count = count + 1;
    }

    if (y2.style.backgroundColor == "grey") {
        var cls1 = y.style.backgroundColor;
        var cls2 = y2.style.backgroundColor;
        y.style.backgroundColor = cls2;
        y2.style.backgroundColor = cls1;
        count = count + 1;
    }
    document.getElementById("mb").innerText = count;
    Check_Game();
}


function Check_Game() {
    gt1 = document.getElementById("g1-1");
    gt2 = document.getElementById("g1-2");
    gt3 = document.getElementById("g1-3");
    gt4 = document.getElementById("g1-4");
    gt5 = document.getElementById("g1-5");
    gt6 = document.getElementById("g1-6");
    gt7 = document.getElementById("g1-7");
    gt8 = document.getElementById("g1-8");
    gt9 = document.getElementById("g1-9");
    gf1 = document.getElementById("g2-7");
    gf2 = document.getElementById("g2-8");
    gf3 = document.getElementById("g2-9");
    gf4 = document.getElementById("g2-12");
    gf5 = document.getElementById("g2-13");
    gf6 = document.getElementById("g2-14");
    gf7 = document.getElementById("g2-17");
    gf8 = document.getElementById("g2-18");
    gf9 = document.getElementById("g2-19");
    if (gt1.style.backgroundColor === gf1.style.backgroundColor) {
        if (gt2.style.backgroundColor === gf2.style.backgroundColor)
            if (gt3.style.backgroundColor === gf3.style.backgroundColor)
                if (gt4.style.backgroundColor === gf4.style.backgroundColor)
                    if (gt5.style.backgroundColor === gf5.style.backgroundColor)
                        if (gt6.style.backgroundColor === gf6.style.backgroundColor)
                            if (gt7.style.backgroundColor === gf7.style.backgroundColor)
                                if (gt8.style.backgroundColor === gf8.style.backgroundColor)
                                    if (gt9.style.backgroundColor === gf9.style.backgroundColor) {
                                        points = 1000 - count * 2;
                                        document.getElementById("sb").innerText = points;

                                        alert("Congratulations!! Match over!! POINTS = " + points);
                                    }
    } else {
        document.getElementById("sb").innerText = "0";
    }
}




var timeoutHandle;

function countdown(minutes) {
    var seconds = 60;
    var mins = minutes

    function tick() {
        var counter = document.getElementById("timer");
        var current_minutes = mins - 1
        seconds--;
        counter.innerHTML =
            current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if (document.getElementById("timer").innerText == "0:00") {
            alert("Times upp!! Better luck next time!!");
        }
        if (seconds > 0) {
            timeoutHandle = setTimeout(tick, 1000);
        } else {

            if (mins > 1) {

                // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
                setTimeout(function() { countdown(mins - 1); }, 1000);
            }
        }
    }
    tick();
}
countdown(3);