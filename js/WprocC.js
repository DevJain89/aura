
$(function () {
    // ResetZoomFront();
    MapStyles();
    //    $('.map').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5 });
    //    $('.mappedObject').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5, alwaysOn: false });
    //    $('.map3').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5 });
});


function MapStyles() {
    $('.map').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5, alwaysOn: false });
    $('.mappedObject').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5, alwaysOn: false });
    $('.map3').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5 });
    $('.MapBack').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5 });

}
var IsTooltip = 'True';


function ZoomOut() {

    $("#divafterZoom").css({ position: 'relative', height: '2000px', Color: 'red', width: '1500px', overflow: 'hidden' });
    $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: 0px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

    $("#ImgMan").stop().animate({
        'opacity': '1',
        'height': '307px',
        'z-index': '55',
        'left': '613px',
        'top': '65px',
        'padding-left': '21px'
    }, "fast");
    setTimeout(ZoomOutImage, 500);
    // ResetZoomFront();
}
function ZoomOutImage() {
    $("#divImageContainer").css({ visibility: 'visible' });
    // $("#divafterZoom").css({ visibility: 'hidden' });
    $("#divafterZoom").css({ 'margin-left': '614px' });
    ResetZoomFront();
}


function MapHighlight(area) {
    var areaHighlight = $(".carousel area").attr('name');
    if (areaHighlight != area) {

    }
}



function MoveLeft() {
    $('#divafterZoom').animate({
        left: '+=50'
    });

}
function MoveRight() {

    $('#divafterZoom').animate({
        left: '-=50'
    });

}
function MoveTop() {
    $('#divafterZoom').animate({
        top: '+=50'
    });

}
function MoveBottom() {

    $('#divafterZoom').animate({
        top: '-=50'
    });

}


function ResetZoomFront() {

    //  $('#divImage').html("<div><span style='padding-right: 12px; padding-left: 3px;'>Skin</span><span style='padding-right: 10px;'>Muscles</span><span style='padding-right: 14px; padding-left: 85px;'>Bones</span><span style='padding-right: 2px;'>Organs</span></div><div id='divImageContainer' class='mainClass'><div style='display: block; background: url(http://localhost:24829/Sample/images/F_Frontsmall.png) no-repeat scroll 0% 0% transparent; position: absolute; padding: 0px; width: 1080px; height: 1920px;' class='map'><canvas style='width: 237px; height: 307px; position: absolute; left: 0px; top: 0px; padding: 0px; border: 0px none; opacity: 1;' height='307' width='237'></canvas><img border='0' class='map' usemap='#Map' src='images/F_Frontsmall.png' style='opacity: 0; position: absolute; left: 0px; top: 0px; padding: 0px; border: 0px none;'></div><map id='Map' name='Map'><div class='mapControl'><area id='aHead' coords='96,58,91,44,91,36,92,30,96,24,101,21,107,21,112,23,116,27,118,35,117,44,115,55,106,62' shape='poly' name='Head'></div></map></div><div><div style='width: 1500px; height: 400px; overflow: hidden;' id='divafterZoom'><img border='0' style='top: 9px; height: 307px; padding-left: 21px;' class='mappedObject' id='ImgMan' src='images/BigFemaleFront.png'></div></div><div style='overflow: hidden; display: block; width: 500px;' id='DivBig'><img border='0' class='ImageMapMan' usemap='#ImageMapMan' src='images/BigFemaleFront.png'><map id='mappedObject' name='mappedObject'><div style='z-index: 54;' class='mapControl'><area coords='675,167,677,158,682,146,689,130,698,119,707,113,722,104,731,100,751,98,761,100,772,103,783,108,794,113,803,121,810,132,819,147,823,159,825,167' name='Scalp' id='ImageScalp' shape='poly'><area coords='673,195,673,181,675,168,693,168,706,168,716,168,727,168,742,168,754,168,761,168,771,168,780,168,793,168,803,168,814,168,825,168,826,179,827,188,826,195' name='Forehead' id='ImageForehead' shape='poly'><area coords='519,211,508,211,494,210,482,210,474,211,472,215,473,228,482,240,494,250,511,247,496,250,519,245,504,250,518,245,520,244,520,214,520,214' name='Right Face' id='ImageRightFace' shape='poly'></div></map></div>");

    var strHtml = "<div><span style='margin-left: 3px; margin-right: 12px;'>SKIN</span><span style='margin-right: 10px;'>MUSCLES</span><span style='margin-left: 68px; margin-right: 10px;'>BONES</span><span style='margin-right: 2px;'>ORGANS</span></div>";
    strHtml += " <div id='divImageContainer' class='mainClass'>";
    strHtml += "   <div style='display: block; background: url(images/SmallFemaleFront.png) no-repeat scroll 0% 0% transparent;";
    strHtml += "    position: absolute; padding: 0px; width: 237px; height: 307px;margin-top:-20px;' class='map'>";
    strHtml += "    <canvas style='width: 237px; height: 307px; position: absolute; left: 0px; top: 0px;";
    strHtml += "      padding: 0px; border: 0px none; opacity: 0;' height='307' width='237'></canvas>";
    strHtml += "   <img border='0' class='map' usemap='#Map'  src='images/SmallFemaleFront.png' style=' opacity: 1;";
    strHtml += "       position: absolute; left: 0px; top: 0px; padding: 0px; border: 0px none;'>";
    strHtml += "  </div>";
    strHtml += "   <map id='Map' name='Map'>";
    strHtml += "    <div class='mapControl'>";
    //    strHtml += "      <area id='aHead' coords='109,49,101,36,103,25,104,21,108,17,113,16,119,15,125,19,127,24,128,27,130,36,126,42,118,51'";
    //    strHtml += "         shape='poly' name='Head'>";
    //    strHtml += "         <area id='stomach' shape='poly' coords='96,108,100,105,111,101,117,100,129,102,134,108,134,112,137,123,139,134,137,135,131,139,121,141,101,139,94,133,92,134,93,126,96,121' />";
    strHtml += " <area id='aHead' coords='102,29,102,27,103,25,104,23,104,21,105,19,107,18,109,17,110,16,112,15,114,15,116,15,119,16,121,17,123,18,124,21,126,26,126,30,126,35,126,38,124,43,120,48,116,50,112,50,107,46,105,43,103,37,102,32' shape='poly'   name='Head'>"

    strHtml += "  <area shape='poly' id='aStomach' name='Abdomen' coords='93,95,94,97,94,99,95,101,95,103,95,105,95,106,96,111,96,114,96,120,95,121,94,124,91,132,97,137,101,138,105,140,113,141,122,141,128,139,132,137,139,132,136,124,134,120,134,119,133,114,133,112,134,107,134,106,134,103,134,102,135,100,135,99,135,98,136,96,134,99,133,99,132,100,131,100,129,101,128,101,125,101,124,100,122,99,115,93,111,98,110,98,108,99,107,100,106,100,105,100,104,101,102,101,100,101,98,100,96,99'>"
    strHtml += " <area shape='poly' id='aLeftLowerArm' name='Left Lower Arm' coords='151,112,162,108,164,109,168,118,170,124,172,130,178,144,180,145,190,152,189,153,182,151,191,166,189,167,183,159,182,159,186,171,184,171,180,161,178,161,179,171,177,171,176,160,174,160,174,169,172,169,171,155,170,152,170,148,168,143,162,133,156,124,153,119,151,115'>"
    strHtml += "<area shape='poly' id='aLeftUpperLeg' name='Left Upper Leg' coords='118,163,118,177,120,185,121,195,122,207,122,216,122,217,138,216,139,210,140,199,141,187,142,176,142,166,143,153,141,139,141,139'>"
    strHtml += " <area shape='poly' id='aRightUpperLeg' name='Right Upper Leg' coords='112,164,107,205,105,219,92,219,90,202,86,157,89,137'>"
    strHtml += " <area shape='poly' id='aRightUpperArm' name='Right Upper Arm' coords='100,57,84,66,73,95,69,107,79,114,94,80'>"
    strHtml += "  <area shape='poly' id='aLeftUpperArm' name='Left Upper Arm' coords='132,58,147,67,161,105,150,112,138,83'>"
    strHtml += "     <area shape='poly' id='aRightLowerArm' name='Right Lower Arm' coords='68,106,78,112,78,114,77,117,74,122,70,129,64,138,61,145,60,146,60,150,59,153,58,156,58,159,58,168,56,169,55,160,54,160,52,171,50,171,51,161,50,161,46,171,43,170,48,160,47,158,40,168,39,165,47,152,46,151,40,154,38,153,38,152,45,148,48,145,50,145,52,143,56,133,60,124,62,117,65,111'>"

    strHtml += " <area shape='poly' id='aNeck' name='Neck' coords='108,48,107,54,101,57,115,65,127,57,123,54,122,48,121,48,120,49,119,50,119,51,117,52,116,52,115,52,114,52,113,52,112,52,111,51,110,51,109,50,109,49,108,48'>"
    strHtml += "    <area shape='poly' name='Pelvis' id='aPelvis' coords='91,133,89,136,89,140,112,164,117,165,141,138,140,135,138,133,135,136,133,138,129,140,123,143,120,143,114,144,107,143,103,142,98,139,94,136'>"
    strHtml += " <area shape='poly' name='Chest' id='aChest' coords='115,75,102,69,93,78,92,81,91,82,91,85,91,88,91,89,91,91,91,93,92,95,93,96,94,97,96,99,97,100,99,100,101,101,104,101,106,101,108,99,110,98,112,96,112,95,114,93,114,92,116,93,117,95,119,96,120,98,122,99,126,100,129,100,133,99,135,97,137,94,138,92,138,90,137,86,137,84,137,81,137,78,137,77,128,68'>"
    strHtml += "  <area shape='poly' name='Right Lower Leg' id='aRightLowerLeg' coords='91,219,90,228,90,233,90,239,90,243,90,248,92,255,93,260,94,267,93,273,94,278,93,284,91,287,89,293,89,296,93,298,98,298,101,299,104,297,104,293,104,286,103,277,103,274,103,267,103,262,104,255,106,243,107,234,107,228,106,223,106,219'>"
    strHtml += "  <area shape='poly' id='aLeftLowerLeg' name='Left Lower Leg' coords='123,220,123,225,122,230,122,236,122,245,124,252,125,257,126,263,127,268,127,271,126,277,126,281,125,290,126,297,127,300,130,300,131,299,134,299,137,299,140,297,141,296,140,293,139,290,137,286,137,279,136,273,136,268,136,261,138,256,139,250,140,240,140,233,139,228,139,222,138,220'>"
    strHtml += "    </div>";
    strHtml += "    </map>";
    strHtml += "   </div>";
    strHtml += "    <div>";
    strHtml += " <div style='width: 1500px; height: 400px; overflow: hidden;' id='divafterZoom'>";
    strHtml += "     <img border='0' style='margin-top: -20px; height: 307px; margin-left: 20px;' class='mappedObject'";
    strHtml += "     id='ImgMan' src='images/BigFemaleFront.png'></div>";
    strHtml += "  </div>";
    strHtml += "   <div style='overflow: hidden; display: block; width: 500px;' id='DivBig'>";
    strHtml += "     <img border='0'id='ImgDivBig' class='ImageMapMan' src='images/BigFemaleFront.png' usemap='#ImageMapMan' ><map";
    strHtml += "       id='mappedObject' name='mappedObject'><div style='z-index: 54;' class='mapControl'>";
    strHtml += "          <area coords='675,167,677,158,682,146,689,130,698,119,707,113,722,104,731,100,751,98,761,100,772,103,783,108,794,113,803,121,810,132,819,147,823,159,825,167'";
    strHtml += "            name='Scalp' id='ImageScalp' shape='poly'>";
    strHtml += " <area coords='673,195,673,181,675,168,693,168,706,168,716,168,727,168,742,168,754,168,761,168,771,168,780,168,793,168,803,168,814,168,825,168,826,179,827,188,826,195'";
    strHtml += "             name='Forehead' id='ImageForehead' shape='poly'>";
    strHtml += " <area coords='519,211,508,211,494,210,482,210,474,211,472,215,473,228,482,240,494,250,511,247,496,250,519,245,504,250,518,245,520,244,520,214,520,214'";
    strHtml += "             name='Right Face' id='ImageRightFace' shape='poly'>";
    strHtml += "      </div>";
    strHtml += "      </map>";
    strHtml += "    </div>";
    strHtml += "  </div>";


    $('#divImage').html(strHtml);




    MapStyles();
    $(".mapControl area").bind("click", function () {
        var s = $(this).attr("id");
        performClick(s);
    });
}

function performClick(id) {
    // alert('asdsa');
    $("#imgZoomOutButton").css({ 'visibility': 'visible' });
    var img = $("#divImageContainer img");
    var ZoomImage = $("#ImgMan");
    $("#divafterZoom .mappedObject").css({ 'position': 'relative' });
    $("#divImageContainer").css({ visibility: 'hidden' });
    $("#divarrows").css({ visibility: 'visible' });


    if (id == "aHead") {
        //*****aHead:- "HEAD"******area9:- Neck******
        $("#ImgMan").stop().animate({
            'margin-top': '-85px',
            'opacity': '0px',
            'height': '2000px',
            'position': 'relative',
            'margin-left': '-614px'
        });

    }




    setTimeout(function () { setImage(id) }, 500);

}
function ToggleView() {

    var alt = $("#imgView").attr('alt');
    if (alt == "Back") {
        $("#divBack").css({ display: 'block' });
        $("#divImageContainer").css({ display: 'none' });
        $("#divafterZoom").css({ display: 'none' });
        $("#DivBig").css({ display: 'none' });
        $("#imgView").attr("src", "images/front.png");
        $("#imgView").attr('alt', 'Front');
        ReloadBack();
    }
    if (alt == "Front") {

        $("#divBack").css({ display: 'none' });
        $("#divImageContainer").css({ display: 'block' });
        $("#divafterZoom").css({ display: 'block' });
        $("#DivBig").css({ display: 'block' });
        $("#imgView").attr("src", "images/back.png");
        $("#imgView").attr('alt', 'Back');
        Reload();
    }
}
function FrontView() {
    $("#divBack").css({ display: 'none' });
    $("#divImageContainer").css({ display: 'block' });
    $("#divafterZoom").css({ display: 'block' });
    $("#DivBig").css({ display: 'block' });
    Reload();
}
function ReloadBack() {
    $("#aBackHead").trigger("mouseover");
    setTimeout(HAreaBackNeck, 200);
}
function HAreaBackNeck() {
    $("#aHead").trigger("mouseout");
    $("#aBackNeck").trigger("mouseover");
    setTimeout(HAreaBackUpperArm, 200);
}
function HAreaBackUpperArm() {
    $("#aBackNeck").trigger("mouseout");
    $("#aBackLeftUpperArm").trigger("mouseover");
    $("#aBackRightUpperArm").trigger("mouseover");
    setTimeout(HAreaBackLowerArm, 200);
}
function HAreaBackLowerArm() {
    $("#aBackLeftUpperArm").trigger("mouseout");
    $("#aBackRightUpperArm").trigger("mouseout");
    $("#aBackLeftLowerArm").trigger("mouseover");
    $("#aBackRightLowerArm").trigger("mouseover");
    setTimeout(HAreaBack, 200);
}
function HAreaBack() {
    $("#aBackLeftLowerArm").trigger("mouseout");
    $("#aBackRightLowerArm").trigger("mouseout");
    $("#aBack").trigger("mouseover");
    setTimeout(HAreaBackButtonLock, 200);
}
function HAreaBackButtonLock() {
    $("#aBack").trigger("mouseout");
    $("#aButtonLock").trigger("mouseover");
    setTimeout(HAreaBackUpperLegs, 200);
}
function HAreaBackUpperLegs() {
    $("#aButtonLock").trigger("mouseout");
    $("#aBackLeftUpperLeg").trigger("mouseover");
    $("#aBackRightUpperLeg").trigger("mouseover");
    setTimeout(HAreaBackLowerLegs, 200);
}
function HAreaBackLowerLegs() {
    $("#aBackLeftUpperLeg").trigger("mouseout");
    $("#aBackRightUpperLeg").trigger("mouseout");
    $("#aBackLeftLowerLeg").trigger("mouseover");
    $("#aBackRightLowerLeg").trigger("mouseover");
    setTimeout(RemoveBackHArea, 200);
}
function RemoveBackHArea() {
    $("#aBackLeftLowerLeg").trigger("mouseout");
    $("#aBackRightLowerLeg").trigger("mouseout");
}
function Reload() {
    setTimeout(HAreaHead, 200);
}
function HAreaHead() {
    $("#aHead").trigger("mouseover");
    setTimeout(HAreaNeck, 200);
}
function HAreaNeck() {
    $("#aHead").trigger("mouseout");
    $("#aNeck").trigger("mouseover");
    setTimeout(HAreaUpperArm, 200);
}
function HAreaUpperArm() {
    $("#aNeck").trigger("mouseout");
    $("#aLeftUpperArm").trigger("mouseover");
    $("#aRightUpperArm").trigger("mouseover");
    $("#aLeftLowerArm").trigger("mouseover");
    $("#aRightLowerArm").trigger("mouseover");
    setTimeout(HAreaLower, 200);
}
function HAreaLower() {
    $("#aLeftUpperArm").trigger("mouseout");
    $("#aRightUpperArm").trigger("mouseout");
    $("#aLeftLowerArm").trigger("mouseover");
    $("#aRightLowerArm").trigger("mouseover");
    setTimeout(HAreaChest, 200);
}
function HAreaChest() {
    $("#aLeftLowerArm").trigger("mouseout");
    $("#aRightLowerArm").trigger("mouseout");
    $("#aChest").trigger("mouseover");
    $("#aStomach").trigger("mouseover");
    $("#aPelvis").trigger("mouseover");
    $("#aLeftUpperLeg").trigger("mouseover");
    $("#aRightUpperLeg").trigger("mouseover");
    $("#aLeftLowerLeg").trigger("mouseover");
    $("#aRightLowerLeg").trigger("mouseover");
    setTimeout(HAreaStomach, 200);
}
function HAreaStomach() {
    $("#aChest").trigger("mouseout");
    $("#aStomach").trigger("mouseover");
    $("#aStomach").trigger("mouseover");
    $("#aPelvis").trigger("mouseover");
    $("#aLeftUpperLeg").trigger("mouseover");
    $("#aRightUpperLeg").trigger("mouseover");
    $("#aLeftLowerLeg").trigger("mouseover");
    $("#aRightLowerLeg").trigger("mouseover");
    setTimeout(HAreaPelvis, 200);
}
function HAreaPelvis() {
    $("#aStomach").trigger("mouseout");
    $("#aPelvis").trigger("mouseover");
    $("#aPelvis").trigger("mouseover");
    $("#aLeftUpperLeg").trigger("mouseover");
    $("#aRightUpperLeg").trigger("mouseover");
    $("#aLeftLowerLeg").trigger("mouseover");
    $("#aRightLowerLeg").trigger("mouseover");
    setTimeout(HAreaUpperLegs, 200);
}
function HAreaUpperLegs() {
  
    $("#aLeftUpperLeg").trigger("mouseover");
    $("#aRightUpperLeg").trigger("mouseover");
    $("#aPelvis").trigger("mouseout");
  
    $("#aLeftLowerLeg").trigger("mouseover");
    $("#aRightLowerLeg").trigger("mouseover");
    setTimeout(HAreaLowerLegs, 200);
}
function HAreaLowerLegs() {
    $("#aLeftUpperLeg").trigger("mouseout");
    $("#aRightUpperLeg").trigger("mouseout");
   
    setTimeout(RemoveHArea, 200);
}
function RemoveHArea() {
    $("#aLeftLowerLeg").trigger("mouseout");
    $("#aRightLowerLeg").trigger("mouseout");
}
var IsTooltip = "True";
$(document).ready(function () {
    Reload();
    $("div area").click(function () {




        //  alert('asdsa');
//        $("#imgZoomOutButton").css({ 'visibility': 'visible' });
//        var id = $(this).attr('id');
//        var img = $("#divImageContainer img");
//        var ZoomImage = $("#ImgMan");
//        $("#divafterZoom .mappedObject").css({ 'position': 'relative' });
//       
//        $("#divImageContainer").css({ visibility: 'hidden' });
//        $("#divarrows").css({ visibility: 'visible' });


//        if (id == "aHead") {
//            //*****aHead:- "HEAD"******area9:- Neck******
//            $("#ImgMan").stop().animate({
//                'margin-left': '-539px',
//                'opacity': '0px',
//                'height': '1800px',
//                'position': 'relative',
//                'margin-top': '-76px'
//            });
//            setTimeout(function () { setImage(id) }, 500);
//        }

//        if (id == "aRightUpperArm") {
//            $("#ImgMan").stop().animate({
//                'margin-left': '-330px',
//                'opacity': '0px',
//                'height': '1800px',
//                'position': 'relative',
//                'margin-top': '-373px'
//            });

//        }
//        if (id == "aRightLowerArm") {
//            $("#ImgMan").stop().animate({
//                'margin-left': '-226px',
//                'opacity': '0px',
//                'height': '1800px',
//                'position': 'relative',
//                'margin-top': '-616px'
//            });
//        }
//        if (id == "aChest") {
//            $("#ImgMan").stop().animate({
//                'margin-left': '-539px',
//                'opacity': '0px',
//                'height': '1800px',
//                'position': 'relative',
//                'margin-top': '-376px'
//            });
//        }
//        if (id == "aStomach") {
//            $("#ImgMan").stop().animate({
//                'margin-left': '-539px',
//                'opacity': '0px',
//                'height': '1800px',
//                'position': 'relative',
//                'margin-top': '-588px'
//            });
//        }
//        if (id == "aChest") {
//            $("#ImgMan").stop().animate({
//                'margin-left': '-539px',
//                'opacity': '0px',
//                'height': '1800px',
//                'position': 'relative',
//                'margin-top': '-376px'
//            });
//        }
//        if (id == "aChest") {
//            $("#ImgMan").stop().animate({
//                'margin-left': '-539px',
//                'opacity': '0px',
//                'height': '1800px',
//                'position': 'relative',
//                'margin-top': '-376px'
//            });
//        }
//        if (id == "aChest") {
//            $("#ImgMan").stop().animate({
//                'margin-left': '-539px',
//                'opacity': '0px',
//                'height': '1800px',
//                'position': 'relative',
//                'margin-top': '-376px'
//            });
//        }
//        if (id == "aChest") {
//            $("#ImgMan").stop().animate({
//                'margin-left': '-539px',
//                'opacity': '0px',
//                'height': '1800px',
//                'position': 'relative',
//                'margin-top': '-376px'
//            });
//        }
//       

    });

    $(".mapControl area").hover(function () {
        //  alert('asda');
        var title = $(this).attr('name');

        $(this).data('tipText', title).removeAttr('name');
        // if (IsTooltip == "True") {
        $('<p class="tooltipClass"></p>')
                .text(title)
                .appendTo('body')
                .fadeIn('slow');
        //  }

    }, function () {
        // Hover out code
        $(this).attr('name', $(this).data('tipText'));
        $('.tooltipClass').remove();
    }).mousemove(function (e) {
        var mousex = e.pageX + 20; ; //Get X coordinates
        var mousey = e.pageY + 10; ; //Get Y coordinates
        $('.tooltipClass')
                .css({ top: mousey, left: mousex })
    });

    $(".carousel area").hover(function () {

        var title = $(this).attr('name');
        $(this).data('tipText', title).removeAttr('name');
        if (IsTooltip == "True") {
            $('<p class="tooltipClass"></p>')
                .text(title)
                .appendTo('body')
                .fadeIn('slow');
        }
    }, function () {
        // Hover out code
        $(this).attr('name', $(this).data('tipText'));
        $('.tooltipClass').remove();
    }).mousemove(function (e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.tooltipClass')
                .css({ top: mousey, left: mousex })

        // $(this).bind('.maphilight');
    });






});



function setImage(id) {
    var ID = '#' + id;
    var title2 = $(ID).attr('name');
    if (title2 != undefined) {
        $("#idPart").html(title2);
        $("#divSymptoms").css('display', 'block');
    }

    if (id == "aHead") {
        $("#divafterZoom").css({ 'margin-top': '-76px', position: 'relative', 'margin-left': '-539px', height: '1800px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '1800px' });

    }

    if (id == "aRightUpperArm") {
        $("#divafterZoom").css({ 'margin-top': '-373px', position: 'relative', 'margin-left': '-330px', height: '1450px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '1450px' });
    }
    if (id == "aRightLowerArm") {
        $("#divafterZoom").css({ 'margin-top': '-616px', position: 'relative', 'margin-left': '-226px', height: '1450px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '1450px' });
    }
    var ZoomImage = $("#ImgMan");
    ZoomImage.attr({ usemap: "#mappedObject", useMap: "#mappedObject" });
    MapStyles();




    //    $('.map').maphilight({ fade: true, stroke: true, fillColor: 'FA1B1B', fillOpacity: 0.5 });
    //    $('.mappedObject').maphilight({ fade: true, stroke: true, fillColor: 'FA1B1B', fillOpacity: 0.5, alwaysOn: false });
    //    $('.map3').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5, alwaysOn: false });
}


function ShowLayers() {
  
    $("#cssmenu").fadeIn();
}
function hideLayers() {

    $("#cssmenu").fadeOut();
}