/**
 * 
 *  Document     : control.js
 *  Created on   : Jan 26, 2017, 4:35:25 AM
 *  Author       : Subir Sekhar
 *  Co-Author    : Pabitra K Jana
 *  Organization : IIT Khatagpur
 *  
 */


var U;
var V1;
var V2;
var Vp;
var frontTime;
var tailTim;
var graphURI;

function trigger_generator() {

    function rotateObject(id, p1, p2) {
        scene.getNode(id, function (myrotate) {

            var angle = p1;
            var angleInc = 15;
            scene.on("tick", function () {
                if (angle >= p2) {
                    angleInc *= 0;
                }
                angle += angleInc;
                myrotate.setAngle(angle);
            });
        });
    }

    function moveObject(id, r1, r2, r3, r4, r5, r6) {
        scene.getNode(id,
                function (myTranslate) {
                    var x = r1;
                    var xInc = 0.01;
                    var y = r3;
                    var yInc = 0.01;
                    var z = r5;
                    var zInc = 0.01;
                    scene.on("tick",
                            function () {
                                if (x <= r2) {
                                    xInc *= 0.0;
                                }
                                x += xInc;
                                if (y <= r4) {
                                    yInc *= 0.0;
                                }
                                y += yInc;
                                if (z <= r6) {
                                    zInc *= 0.0;
                                }
                                z += zInc;
                                myTranslate.setXYZ({x: x, y: y, z: z});
                            });
                });
    }

    function colorChange(id) {
        scene.getNode(id, function (myFlags) {
            myFlags.setTransparent(!myFlags.getTransparent());
        });
    }

    function flashIvg() {
        var Rf = Number(document.getElementById('Rf').value);
        var Rt = Number(document.getElementById('Rt').value);
        var Cg = Number(document.getElementById('Cg').value);
        var C1 = Number(document.getElementById('C1').value);
        var V0 = Number(document.getElementById('V0').value);
        var d = Number(document.getElementById('d').value);
        var t = [];
        var RF1 = Rt;
        var RT1 = Rf;



        var a1 = 1 / ((Cg + C1) * RT1 + (RF1 * Cg));
        var b1 = ((Cg + C1) * RT1 + (RF1 * Cg)) / (RF1 * RT1 * Cg * C1);
        var r1 = 7.5;
        var U1 = ((27.2 * 0.98 * 4 * r1 * ((1 + (0.54 / Math.sqrt(0.98 * r1))) * (d / r1))) / ((d / r1) + 1 + Math.sqrt((((d / r1) + 1) * ((d / r1) + 1)) + 8)));
        for (var i = 0; i < 200; i++)
        {
            t[i] = i;
            var V11 = (((V0 * 3.8 * 100) * (Math.exp(-a1 * t[i]) - Math.exp(-b1 * t[i]))) / (RF1 * C1 * (b1 - a1)));
        }

        /* if (V11 < U1)
         {
         moveObject("sphere16", 6.65, 6.65, 0.7, 0.7, 2.4, 2.4);
         
         window.setTimeout(function () {
         alert("Withstand");
         }, 1000);
         
         
         } else
         {
         moveObject("sphere16", 6.65, 6.65, 1.1, 1.1, 2.5, 2.5);
         window.setTimeout(function () {
         alert("Flash Over");
         }, 1000);
         }*/
    }

    window.setTimeout(function () {
        moveObject("sphere5", -3.0, -3.0, 2.3, 2.3, 3.55, 3.7);
        moveObject("sphere7", -3.1, -3.1, 0.7, 0.7, 3.55, 3.7);
        moveObject("sphere9", -3.15, -3.15, -0.7, -0.7, 3.55, 3.7);
        moveObject("cylinder26", -0.5, 1, 0, 0, 1, 1);
        moveObject("cylinder27", -0.55, 1, 0, 0, 1, 1);
        moveObject("cylinder28", -0.4, 1, 0, 0, 1, 1);
        moveObject("tcylinder26", -3.3, -3.3, -0.65, -0.65, 3.32, 3.32);
        moveObject("tcylinder27", -3.3, -3.3, 0.75, 0.75, 3.32, 3.32);
        moveObject("tcylinder28", -3.2, -3.2, 2.25, 2.25, 3.32, 3.32);
        moveObject("cylinder15", -3.69, -3.6, 0.65, 0.65, 3.15, 3.15);

    }, 1000);
    window.setTimeout(function () {
        moveObject("sphere5", -3.0, -3.0, 2.3, 2.3, 3.45, 3.7);
        moveObject("sphere7", -3.1, -3.1, 0.7, 0.7, 3.45, 3.7);
        moveObject("sphere9", -3.15, -3.15, -0.7, -0.7, 3.45, 3.7);
        moveObject("cylinder26", -0.3, 1, 0, 0, 1, 1);
        moveObject("cylinder27", -0.3, 1, 0, 0, 1, 1);
        moveObject("cylinder28", -0.25, 1, 0, 0, 1, 1);
        moveObject("tcylinder26", -3.2, -3.2, -0.65, -0.65, 3.32, 3.32);
        moveObject("tcylinder27", -3.3, -3.3, 0.75, 0.75, 3.32, 3.32);
        moveObject("tcylinder28", -3.15, -3.15, 2.25, 2.25, 3.32, 3.32);
        moveObject("cylinder15", -3.67, -3.6, 0.65, 0.65, 3.15, 3.15);
    }, 1500);
    window.setTimeout(function () {
        moveObject("sphere5", -3.0, -3.0, 2.3, 2.3, 3.35, 3.7);
        moveObject("sphere7", -3.1, -3.1, 0.7, 0.7, 3.35, 3.7);
        moveObject("sphere9", -3.15, -3.15, -0.7, -0.7, 3.35, 3.7);
        moveObject("cylinder26", -0.2, 1, 0, 0, 1, 1);
        moveObject("cylinder27", -0.2, 1, 0, 0, 1, 1);
        moveObject("cylinder28", -0.2, 1, 0, 0, 1, 1);
        moveObject("tcylinder26", -3.1, -3.1, -0.65, -0.65, 3.2, 3.2);
        moveObject("tcylinder27", -3.3, -3.3, 0.75, 0.75, 3.2, 3.2);
        moveObject("tcylinder28", -3.1, -3.1, 2.25, 2.25, 3.2, 3.2);
        moveObject("cylinder15", -3.65, -3.6, 0.65, 0.65, 3.15, 3.15);
    }, 2000);
    window.setTimeout(function () {
        moveObject("sphere5", -3.0, -3.0, 2.3, 2.3, 3.25, 3.7);
        moveObject("sphere7", -3.1, -3.1, 0.7, 0.7, 3.25, 3.7);
        moveObject("sphere9", -3.15, -3.15, -0.7, -0.7, 3.25, 3.7);
        moveObject("cylinder26", -0.1, 1, 0, 0, 1, 1);
        moveObject("cylinder27", -0.1, 1, 0, 0, 1, 1);
        moveObject("cylinder28", -0.1, 1, 0, 0, 1, 1);
        moveObject("tcylinder26", -3.1, -3.1, -0.65, -0.65, 3.2, 3.2);
        moveObject("tcylinder27", -3.3, -3.3, 0.75, 0.75, 3.2, 3.2);
        moveObject("tcylinder28", -3.1, -3.1, 2.25, 2.25, 3.2, 3.2);
        moveObject("cylinder15", -3.65, -3.6, 0.65, 0.65, 3.15, 3.15);
        colorChange("myFlags11");
        colorChange("myFlags12");
        colorChange("myFlags13");
        colorChange("myFlags15");
        colorChange("myFlags16");
    }, 2500);
    window.setTimeout(function () {
        moveObject("sphere13", -3, -2.95, -0.75, -0.75, 3.4, 3.4);
        moveObject("sphere14", -2.8, -2.75, 2.25, 2.25, 3.4, 3.4);
        moveObject("sphere15", -2.85, -2.7, 0.6, 0.6, 3.4, 3.4);

//        
//         var Rf = Number(document.getElementById('Rf').value);
//    var Rt = Number(document.getElementById('Rt').value);
//    var Cg = Number(document.getElementById('Cg').value);
//    var C1 = Number(document.getElementById('C1').value);
//    var V0 = Number(document.getElementById('V0').value);
//    var d = Number(document.getElementById('d').value);
//    var t1 = [];
//    var RF1 = Rt;
//    var RT1 = Rf;
//    var v2 = 10 * V0;
//    var a1 = 1 / ((Cg + C1) * RT1 + (RF1 * Cg));
//    var b1 = ((Cg + C1) * RT1 + (RF1 * Cg)) / (RF1 * RT1 * Cg * C1);
//    var r1 = 7.5;
//    var V11;
//    var U1 = ((27.2 * 0.95 * 4 * r1 * ((1 + (0.54 / Math.sqrt(0.95 * r1))) * (d / r1))) / ((d / r1) + 1 + Math.sqrt((((d / r1) + 1) * ((d / r1) + 1)) + 8)));
//    for (var i = 0; i < 150; i++)
//    {
//        t1[i] = i;
//        V11 = (((v2 * 30) * (Math.exp(-a1 * t1[i]) - Math.exp(-b1 * t1[i]))) / (RF1 * C1 * (b1 - a1)));
//    }

        flashIvg();
        audio();
        //moveObject("multi2", -9, -10, -0.75, -0.75, 4.5, 4.5);
    }, 2600);
    window.setTimeout(function () {
        moveObject("sphere13", -2.7, -2.7, -0.75, -0.75, 3.6, 3.6);
        moveObject("sphere14", -2.5, -2.5, 2.25, 2.25, 3.55, 3.55);
        moveObject("sphere15", -2.6, -2.6, 0.6, 0.6, 3.55, 3.55);

        moveObject("sphere16", 6.65, 6.65, 0.7, 0.7, 2.4, 2.4);

    }, 3500);
    window.setTimeout(function () {
        colorChange("myFlags1");
        colorChange("myFlags2");
        colorChange("myFlags3");
        colorChange("myFlags4");
        colorChange("myFlags5");
        colorChange("myFlags6");
        colorChange("myFlags7");
        colorChange("myFlags8");
        colorChange("myFlags9");
        colorChange("myFlags11");
        colorChange("myFlags12");
        colorChange("myFlags13");
        colorChange("myFlags15");
        colorChange("myFlags16");
        rotateObject("cylinder38", 0, 0);
        rotateObject("cylinder39", 0, 0);
        colorChange("myFlags10");
    }, 3700);
    window.setTimeout(function () {
        moveObject("sphere5", -3.05, -3.05, 2.3, 2.3, 3.7, 5);
        moveObject("sphere7", -3.15, -3.15, 0.7, 0.7, 3.7, 4);
        moveObject("sphere9", -3.2, -3.2, -0.7, -0.7, 3.7, 4);
        moveObject("cylinder26", -0.9, 1, 0, 0, 1, 1);
        moveObject("cylinder27", -1, 1, 0, 0, 1, 1);
        moveObject("cylinder28", -0.75, 1, 0, 0, 1, 1);
        moveObject("tcylinder26", -3.5, -3.5, -0.65, -0.65, 3.4, 3.4);
        moveObject("tcylinder27", -3.45, -3.45, 0.75, 0.75, 3.4, 3.4);
        moveObject("tcylinder28", -3.3, -3.3, 2.25, 2.25, 3.4, 3.4);
        moveObject("cylinder15", -3.75, -3.75, 0.65, 0.65, 3.15, 3.15);
        //graphGenerator();
    }, 4000);
    window.setTimeout(function () {


        document.getElementById("meter").hidden = true;

    }, 3400);
    document.getElementById("buttn3").disabled = true;

    window.setTimeout(function () {
        displayMap();

        document.getElementById("peak_value").value = Vp.toPrecision(4);
        document.getElementById("front_time").value = frontTime;
        document.getElementById("tail_time").value = tailTime;
    }, 4500);

}

function displayMap() {
    document.getElementById('dwnldGraph').innerHTML = "";
    document.getElementById('graph').style.display = "block";
    graphGenerator();

//    var link = document.createElement('a');
//    link.textContent = 'Save graph';
//
//    link.addEventListener('click', function (ev) {
//        window.location.replace(graphURI);
//        link.href = graphURI;
//        link.download = "mypainting.png";
//    }, false);
    
    var linkk = "<a href='"+graphURI+"' download='mypanting.png' target='_blank' >Save Graph</a>";
    //document.getElementById('dwnldGraph').appendChild(link);
    document.getElementById('dwnldGraph').innerHTML = linkk;

}



//    var Rf = Number(document.getElementById('Rf').value);
//    var Rt = Number(document.getElementById('Rt').value);
//    var Cg = Number(document.getElementById('Cg').value);
//    var C1 = Number(document.getElementById('C1').value);
//    var V0 = Number(document.getElementById('V0').value);
//    var d = Number(document.getElementById('d').value);
//    var V = [];
//    var t = [];
//    var z = [];
//    var RF = Rt;
//    var RT = Rf;
//    var v = 10 * V0;
//    var a = 1 / ((Cg + C1) * RT + (RF * Cg));
//    var a1 = 1000000 / ((Cg + C1) * RT + (RF * Cg));
//    var b = ((Cg + C1) * RT + (RF * Cg)) / (RF * RT * Cg * C1);
//    var r = 7.5;
//    var U = ((27.2 * 0.95 * 4 * r * ((1 + (0.54 / Math.sqrt(0.95 * r))) * (d / r))) / ((d / r) + 1 + Math.sqrt((((d / r) + 1) * ((d / r) + 1)) + 8)));
//    for (var i = 0; i < 200; i++)
//    {
//        t[i] = i;
//        V1 = (((v * 5) * (Math.exp(-a * t[i]) - Math.exp(-b * t[i]))) / (RF * C1 * (b - a)));
//        V2 = (((v * 3) * (Math.exp(-a1 * t[i]) - Math.exp(-b * t[i]))) / (RF * C1 * (b - a1)));
//    }
function graphGenerator() {
    var Rf = Number(document.getElementById('Rf').value);
    var Rt = Number(document.getElementById('Rt').value);
    var Cg = Number(document.getElementById('Cg').value);
    var C1 = Number(document.getElementById('C1').value);
    var V0 = Number(document.getElementById('V0').value);
    var d = Number(document.getElementById('d').value);
    var V = [];
    var t = [];
    var z = [];
    var RF = Rt;
    var RT = Rf;
    var a = 1 / ((Cg + C1) * RT + (RF * Cg));
    var a1 = 1000000 / ((Cg + C1) * RT + (RF * Cg));
    var b = ((Cg + C1) * RT + (RF * Cg)) / (RF * RT * Cg * C1);
    var r = 7.5;
    var j = 0;


    /*  var x  = (1/2)*((1/(Rt*C1))+(1/(Rf*Cg))+(1/(Rf*C1)));
     var y  = (1/2)*Math.sqrt(4*a*a - 4/(1/(Rf*Rt*Cg*C1)));
     // var V3 =(V0/(Rf*C1*y))*(Math.exp(-(x-y)*t[i]) - Math.exp(-(x+y)*t[i]));
     */

    U = (((27.2 * 0.98 * 4 * r * ((1 + (0.54 / Math.sqrt(0.98 * r))) * (d / r))) / ((d / r) + 1 + Math.sqrt((((d / r) + 1) * ((d / r) + 1)) + 8))));
    for (var i = 0; i < 750; i++) {
        j = j + 0.5;
        t[i] = j;

        V1 = ((((V0 * 3.8 * 100) * (Math.exp(-a * t[i]) - Math.exp(-b * t[i]))) / (RF * C1 * (b - a))));
        V2 = (((V0 * 13 * 1000) * (Math.exp(-a1 * t[i]) - Math.exp(-b * t[i]))) / (RF * C1 * (b - a1)));

        if (V1 >= U) {
            V[i] = V2;
        } else {
            V[i] = V1 / 6;
        }

        /*  V[i] =(3*V0/(Rf*C1*y))*(Math.exp(-(x-y)*t[i]) - Math.exp(-(x+y)*t[i])); */
    }
    //z[i] = "[" + t[i] + " ," + V[i] + "]";

    var len = data.getNumberOfRows(); // ET NUMBER OF ROWS IN ARRAY 
    if (len > 0) {
        data.removeRows(0, len); // REMOVE THE PREVIOUS DATA
    }
    for (var i = 0; i < t.length; i++) {
        data.addRow([t[i], V[i]]);
    }

    Vp = Math.max(...V);
    var frontTime_index = V.indexOf(Vp);
    var halfVoltage = (Vp + Vp / 20) / 2;
    var fif;
    for (var i = frontTime_index; i < t.length; i++) {
        if (V[i] > halfVoltage) {
            fif = V[i];
        }

    }
    var zeroVoltage;
    var initVoltage = Vp / 100;
    for (i = 0; i < frontTime_index + 1; i++) {
        if (V[i] > initVoltage) {
            zeroVoltage = V[i];
        }
    }
    var zeroVoltage_index = V.indexOf(zeroVoltage);
    var zeroVoltage_time = t[zeroVoltage_index - 1];
    frontTime = t[frontTime_index] - zeroVoltage_time;

    var tailTime_index = V.indexOf(fif);
    tailTime = t[tailTime_index] - zeroVoltage_time;
    console.log(initVoltage + "       " + zeroVoltage);
    console.log("frontTime_index=" + frontTime_index + "     " + "10%Time=" + zeroVoltage_time);
    console.log("Peak value=" + Vp + "   " + "FrontTime=" + frontTime);
    console.log("halfVoltage=" + halfVoltage + "   " + "50%Peak=" + fif);
    console.log("tailTime_index=" + tailTime_index + "   " + "tailTime=" + tailTime);

    var titleGraph1 = document.getElementById("demo4").value;
    var titleGraph2 = document.getElementById("demo2").value;
    var titleGraph3 = document.getElementById("demo3").value;
    var titleGraph4 = document.getElementById("demo").value;
    var titleGraph5 = document.getElementById("demo1").value;
//    var inp = "in";
//    var vol = inp.sub();
//    var inp1 = "g"

//    console.log(x+"       "+y);
//    console.log(V);
    //alert("After add: "+data.);
    var options = {
        title: 'V - T Curve' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'V =' + ' ' + titleGraph1 + ' ' + 'kV' + '    \xa0\xa0\xa0      ' + 'Cg =' + ' ' + titleGraph2 + ' ' + '\xB5' + 'F' + '   \xa0\xa0\xa0    ' + 'Cl =' + ' ' + titleGraph3 + ' ' + '\xB5' + 'F' + '  \xa0\xa0\xa0     ' + 'Rf =' + ' ' + titleGraph4 + ' ' + '\u2126' + '   \xa0\xa0\xa0    ' + 'Rt =' + ' ' + titleGraph5 + ' ' + '\u2126',
        explorer: {maxZoomOut: 20,
            maxZoomIn: 5000},
        displayAnnotations: true,
        showArea: true,
        curveType: 'function',
        legend: {position: 'top'},
        'isStacked': true,
        pieSliceText: 'percentage',
        legend: {position: 'none'},
        chartArea: {
            left: "5%",
            top: "8%",
            height: "80%",
            width: "90%"
        },
        hAxis: {
            title: 'Time ( Micro Second )',
            viewWindowMode: 'explicit',
            viewWindow: {
                max: 300,
                min: 0
            }
        },
        vAxis: {
            title: 'Voltage ( kV )'
        },
        colors: ['#a52714', '#097138'],
        selectionMode: 'multiple',
        tooltip: {trigger: 'both',
            focusTarget: 'category',
            isHtml: true

        },
        aggregationTarget: 'none',
        crosshair: {
            color: '#000',
            trigger: 'both',

            focused: {color: ['#00ff00']},
            selected: {color: ['#00ffff']},
            focusTarget: 'category',
            sortColumn: 0,
            sortAscending: false,
            sort: 'enable'
        }
    };


//google.visualization.events.addListener(chart, 'ready', function () {
//        visualization.innerHTML = '<img src="' + chart.getImageURI() + '">';
//        console.log(visualization.innerHTML);
//      });
    chart.clearChart();

//    google.visualization.events.addListener(chart, 'ready', function () {
//
//      var png = chart.getImageURI();
//      console.log(png);
//    });
//    var download = document.createElement('a');
//download.href = 'png';
//download.download = 'reddot.png';
//download.click();
    google.visualization.events.addListener(chart, 'ready', function () {

        graphURI = chart.getImageURI();
        //cng = "'" + png + "'"

    });
    chart.draw(data, options);


}



//function dwnld() {
//
//
//
//
////    window.open(graphURI, '_blank');
////    window.location.href=graphURI;
////  var download = document.createElement('a');
////download.href = graphURI;
////console.log(graphURI);
////download.download = 'IVG-output.png';
////download.click();
////  //console.log(cng);
//}

function audio() {
    var audio = new Audio('images/flash_sound1.mp3');
    audio.play();
}

function ground_switch() {
    function rotateObject(id, p1, p2) {
        scene.getNode(id, function (myrotate) {

            var angle = p1;
            var angleInc = 15;
            scene.on("tick", function () {
                if (angle >= p2) {
                    angleInc *= 0;
                }
                angle += angleInc;
                myrotate.setAngle(angle);
            });
        });
    }

    window.setTimeout(function () {
        rotateObject("cylinder38", 0, 90);
        rotateObject("cylinder39", 0, 90);
        document.getElementById("buttn1").disabled = true;
    }, 500);
    document.getElementById("buttn2").disabled = false;
}

var chargeCapacitorTimer = null, chargeCapacitorCount = 0;
function charge_capacitor() {
    function colorChange(id) {
        scene.getNode(id, function (myFlags) {
            myFlags.setTransparent(!myFlags.getTransparent());
        });
    }

    window.setTimeout(function () {
        colorChange("myFlags10");
        document.getElementById("meter").hidden = false;
        document.getElementById("charge-msg").innerText = "Charging...";
    }, 300);
    window.setTimeout(function () {
        colorChange("myFlags1");
        colorChange("myFlags2");
        colorChange("myFlags3");
        colorChange("myFlags4");
        colorChange("myFlags5");
        colorChange("myFlags6");
        document.getElementById("buttn3").disabled = false;
        document.getElementById("buttn2").disabled = true;
    }, 5000);
    if (!chargeCapacitorTimer) {
        chargeCapacitorTimer = setInterval(function () {
            chargeCapacitorCount = chargeCapacitorCount + 2;
            if (chargeCapacitorCount == 100) {
                clearInterval(chargeCapacitorTimer);
                chargeCapacitorCount = 0;
                chargeCapacitorTimer = null;
                document.getElementById("charge-msg").innerText = "Charged";
            } else
                document.getElementById("charge-progress").value = chargeCapacitorCount;
        }, 100);
    }
}



function start() {
    document.getElementById("buttn").value = "Restart";
    document.getElementById("buttn1").disabled = false;
}
function restart() {
    document.getElementById("buttn").value = "Start Experiment";
    document.getElementById("buttn1").disabled = true;
    document.getElementById("buttn2").disabled = true;
    document.getElementById("buttn3").disabled = true;
    document.getElementById('buttn').addEventListener('click', function () {
document.getElementById('graph').style.display = "none";

// document.getElementById("dwnldGraph").reset();
        start();
    });
}

function toggleButton() {
    var bval = document.getElementById("buttn").value;
    if (bval === "Start Experiment") {
        start();
    } else {
        restart()
//        window.location.href = window.location.href;
    }

}

//function aaa() {
//    document.getElementById("demo").value = document.getElementById("Rf").value;
//    document.getElementById("demo1").value = document.getElementById("Rt").value;
//    document.getElementById("demo2").value = document.getElementById("Cg").value;
//    document.getElementById("demo3").value = document.getElementById("C1").value;
//    document.getElementById("demo4").value = document.getElementById("V0").value;
//    document.getElementById("demo8").value = document.getElementById("Td").value;
//}
function aaa() {
    document.getElementById("demo").value = document.getElementById("Rf").value;
}
function aaa1() {
    document.getElementById("demo1").value = document.getElementById("Rt").value;
}
function aaa2() {
    document.getElementById("demo2").value = document.getElementById("Cg").value;
}
function aaa3() {
    document.getElementById("demo3").value = document.getElementById("C1").value;
}
function aaa4() {
    document.getElementById("demo4").value = document.getElementById("V0").value;
}
function aaa8() {
    document.getElementById("demo8").value = document.getElementById("d").value;
}


var arrowSign = "&#x25BC;";
function changeThings() {
    if (arrowSign === "&#x25BC;") {
        document.getElementById("ckt_diagram").style.display = "none";
        document.getElementById("dropdown-content").style.display = "block";
        document.getElementById("circle").innerHTML = "&#916;";
        arrowSign = "&#916;";
    } else {
        document.getElementById("dropdown-content").style.display = "none";
        document.getElementById("ckt_diagram").style.display = "block";
        document.getElementById("circle").innerHTML = "&#x25BC;";
        arrowSign = "&#x25BC;";
    }
}

function help_you()
{
    if (document.getElementById("ansY").checked)
    {
        document.getElementById("query").innerHTML = "";
        document.getElementById("query").innerHTML = "Save the graph image for future referance";
    } else
    {
        document.getElementById("query").innerHTML = "";
        document.getElementById("query").innerHTML = "Retry with different set of parameter values";
    }
}
function myFunction() {
    window.print();
}