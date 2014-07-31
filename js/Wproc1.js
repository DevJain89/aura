
$(function () {
    // ResetZoomFront();
    MapStyles();
    //    $('.map').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5 });
    //    $('.mappedObject').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5, alwaysOn: false });
    //    $('.map3').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5 });
});


function MapStyles() {
    $('.map').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5 });
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
    strHtml += "      <area id='aHead' coords='109,49,101,36,103,25,104,21,108,17,113,16,119,15,125,19,127,24,128,27,130,36,126,42,118,51'";
    strHtml += "         shape='poly' name='Head'>";
    strHtml += "         <area id='stomach' shape='poly' coords='96,108,100,105,111,101,117,100,129,102,134,108,134,112,137,123,139,134,137,135,131,139,121,141,101,139,94,133,92,134,93,126,96,121' />";
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
function BackView() {
    $("#divBack").css({ display: 'block' });
    $("#divImageContainer").css({ display: 'none' });
    $("#divafterZoom").css({ display: 'none' });
    $("#DivBig").css({ display: 'none' });
}
function Reload() {
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
    setTimeout(HAreaStomach, 200);
}
function HAreaStomach() {
    $("#aChest").trigger("mouseout");
    $("#aStomach").trigger("mouseover");
    setTimeout(HAreaPelvis, 200);
}
function HAreaPelvis() {
    $("#aStomach").trigger("mouseout");
    $("#aPelvis").trigger("mouseover");
    setTimeout(HAreaUpperLegs, 200);
}
function HAreaUpperLegs() {
    $("#aStomach").trigger("mouseout");
    $("#aLeftUpperLeg").trigger("mouseover");
    $("#aRightUpperLeg").trigger("mouseover");
    setTimeout(HAreaLowerLegs, 200);
}
function HAreaLowerLegs() {
    $("#aLeftUpperLeg").trigger("mouseout");
    $("#aRightUpperLeg").trigger("mouseout");
    $("#aLeftLowerLeg").trigger("mouseover");
    $("#aRightLowerLeg").trigger("mouseover");
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
        $("#imgZoomOutButton").css({ 'visibility': 'visible' });
        var id = $(this).attr('id');
        var img = $("#divImageContainer img");
        var ZoomImage = $("#ImgMan");
        $("#divafterZoom .mappedObject").css({ 'position': 'relative' });
        //   $("#divImage").css({ 'background-color': '#434343' });
        //  $("#divafterZoom").css({ visibility: 'visible' });
        //  $("#divafterZoom").css('z-index', 10);
        $("#divImageContainer").css({ visibility: 'hidden' });
        $("#divarrows").css({ visibility: 'visible' });


        if (id == "aHead") {
            //*****aHead:- "HEAD"******area9:- Neck******
            $("#ImgMan").stop().animate({
                'margin-left': '-614px',
                'opacity': '0px',
                'height': '2000px',
                'position': 'relative',
                'margin-top': '-85px'
            });
            //  setTimeout(function () { setImage(id) }, 500);
        }

        if (id == "aRightUpperArm") {
            //*****aHead:- "HEAD"******area9:- Neck******
            $("#ImgMan").stop().animate({
                'margin-left': '-322px',
                'opacity': '0px',
                'height': '1700px',
                'position': 'relative',
                'margin-top': '-330px'
            });
            //            $("#divafterZoom").stop().animate({
            //                'top': '-42px',
            //                'opacity': '0px',
            //                'height': '2000px',
            //                'position': 'relative',
            //                'left': '-610px'
            //            });
        }

        setTimeout(function () { setImage(id) }, 500);

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


        $("#divafterZoom").css({ 'margin-top': '-85px', position: 'relative', 'margin-left': '-614px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
        //  $("#ImgDivBig").attr("src", "images/BigFemaleFront.png");

    }

    if (id == "aRightUpperArm") {


        $("#divafterZoom").css({ 'margin-top': '-415px', position: 'relative', 'margin-left': '-428px', height: '1700px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '1700px' });
        //  $("#ImgDivBig").attr("src", "images/BigFemaleFront.png");

    }


    var ZoomImage = $("#ImgMan");
    ZoomImage.attr({ usemap: "#mappedObject", useMap: "#mappedObject" });
    MapStyles();

    //    $('.map').maphilight({ fade: true, stroke: true, fillColor: 'FA1B1B', fillOpacity: 0.5 });
    //    $('.mappedObject').maphilight({ fade: true, stroke: true, fillColor: 'FA1B1B', fillOpacity: 0.5, alwaysOn: false });
    //    $('.map3').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5, alwaysOn: false });
}