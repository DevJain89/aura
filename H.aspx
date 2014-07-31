﻿<!DOCTYPE HTML>
<html>
<head>
<script type="text/javascript">
    function drawShape() {
        // get the canvas element using the DOM
        var canvas = document.getElementById('mycanvas');

        // Make sure we don't execute when canvas isn't supported
        if (canvas.getContext) {

            // use getContext to use the canvas for drawing
            var ctx = canvas.getContext('2d');

            // Draw shapes
            var img = new Image();
            img.src = 'images/BigFemaleFront.png';

            img.onload = function () {
                ctx.drawImage(img, 0, 0);
                ctx.beginPath();
                ctx.moveTo(30, 96);
                ctx.lineTo(70, 66);
                ctx.lineTo(103, 76);
                ctx.lineTo(170, 15);
                ctx.stroke();
            }

        } else {
            alert('You need Safari or Firefox 1.5+ to see this demo.');
        }
    }
</script>
</head>
<body onload="drawShape();">
   <canvas id="mycanvas"></canvas>
</body>
</html>