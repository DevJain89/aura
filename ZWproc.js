﻿var moveClick = false;
var aRight = 0;
var aTop = 0;
var aBottom = 0;
var ctlContent = "";
$(function () {

    // ResetZoomFront();
    MapStyles();
    //    $('.map').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5 });
    //    $('.mappedObject').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5, alwaysOn: false });
    //    $('.map3').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5 });
    $("#divarrows").css("display", "none");

});

function MapStyles() {
    $('.map').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5, alwaysOn: false });

    $('.mappedObjectWomen').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5, alwaysOn: false });
    $('.mappedObject').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5, alwaysOn: false });
    //    $('.map3').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5 });
    //    $('.map2').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5 });
    $('.MapBack').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5 });


}
var IsTooltip = 'True';
function ZoomOut() {
    var ClickID = $("#hdnID").val();


    $("#divarrows").css("display", "none");
    if (moveClick == true) {
        if (ClickID.indexOf('aBack') != -1) {


            setTimeout(function () {
                ResetZoomBack();
            }, 800);

        } else {


            setTimeout(function () {
                ResetZoomFront('Front');
            }, 800);

        }

    } else {


        if (ClickID == "aHead") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '539px',
                'margin-top': '76px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aRightUpperArm") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top:0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: 0px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '350px',
                'margin-top': '373px'

            }, "fast");
        }
        if (ClickID == "aRightLowerArm") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top:0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: 0px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '246px',
                'margin-top': '616px'

            }, "fast");
        }
        if (ClickID == "aChest") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top:0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: 0px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '559px',
                'margin-top': '376px'

            }, "fast");
        }
        if (ClickID == "aStomach") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top:0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: 0px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '559px',
                'margin-top': '587px'

            }, "fast");
        }
        if (ClickID == "aLeftUpperArm") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top:0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left:-20px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '750px',
                'margin-top': '373px'

            }, "fast");
        }
        if (ClickID == "aLeftLowerArm") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top:0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left:-20px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '850px',
                'margin-top': '616px'

            }, "fast");
        }
        if (ClickID == "aPelvis") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top:0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left:-20px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '561px',
                'margin-top': '725px'

            }, "fast");
        }
        if (ClickID == "aRightUpperLeg") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top:0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left:0px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '420px',
                'margin-top': '950px'

            }, "fast");
        }
        if (ClickID == "aRightLowerLeg") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top:0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left:0px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '458px',
                'margin-top': '1314px'

            }, "fast");
        }
        if (ClickID == "aLeftUpperLeg") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top:0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left:0px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '670px',
                'margin-top': '950px'

            }, "fast");
        }
        if (ClickID == "aLeftLowerLeg") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top:0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left:0px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '662px',
                'margin-top': '1314px'

            }, "fast");
        }
        //********Back*******
        if (ClickID == "aBackLeftUpperLeg") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '439px',
                'margin-top': '976px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackLeftLowerLeg") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '439px',
                'margin-top': '1376px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackRightUpperLeg") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '639px',
                'margin-top': '976px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackRightLowerLeg") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '639px',
                'margin-top': '1376px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackRightUpperArm") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '739px',
                'margin-top': '376px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackRightLowerArm") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '839px',
                'margin-top': '656px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackLeftUpperArm") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '339px',
                'margin-top': '376px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackLeftLowerArm") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '249px',
                'margin-top': '626px',
                'padding-left': '20px'

            }, "fast");
        }


        if (ClickID == "aBackHead" || ClickID == "aBackBigHead" || ClickID == "aBackBigLeftEar" || ClickID == "aBackBigRightEar") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '539px',
                'margin-top': '76px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackNeck" || ClickID == "aBackBigNeck") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '539px',
                'margin-top': '100px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBack" || ClickID == "aBackBigUpperSpine") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '539px',
                'margin-top': '337px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackBigleft") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '489px',
                'margin-top': '396px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackBigLowerSpine") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '539px',
                'margin-top': '576px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackBigMiddleSpine") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '539px',
                'margin-top': '476px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackBigright") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '589px',
                'margin-top': '396px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackButtonLock" || ClickID == "aBackBigButtock") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '539px',
                'margin-top': '775px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackBigLeftHip") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '439px',
                'margin-top': '776px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackBigRightHip") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '639px',
                'margin-top': '776px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackLeftUpperLeg") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '439px',
                'margin-top': '976px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackBigRightHamString") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '639px',
                'margin-top': '956px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackBigrightKnee") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '639px',
                'margin-top': '1176px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackBigkRightCalf") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '639px',
                'margin-top': '1176px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackBigLeftHamString") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '439px',
                'margin-top': '956px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackBigLeftKnee") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '439px',
                'margin-top': '1176px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackBigleftCalf") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '439px',
                'margin-top': '1326px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackBigLeftAnkle" || ClickID == "aBackBigLeftToe") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '439px',
                'margin-top': '1476px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackBigRightCalf") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '639px',
                'margin-top': '1326px',
                'padding-left': '20px'

            }, "fast");
        }

        if (ClickID == "aBackBigRightShoulder") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '639px',
                'margin-top': '336px',
                'padding-left': '20px'

            }, "fast");
        }

        if (ClickID == "aBackBigRightUpperArm") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '739px',
                'margin-top': '376px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackBigRightElbow") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '756px',
                'margin-top': '539px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackBigRightForeArm") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '839px',
                'margin-top': '656px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackBigRightWrist") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '855px',
                'margin-top': '736px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackBigRightAnkle" || ClickID == "aBackBigRightToe") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '639px',
                'margin-top': '1476px',
                'padding-left': '20px'

            }, "fast");
        }


        if (ClickID == "aBackBigRightAnkle" || ClickID == "aBackBigRightToe") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '639px',
                'margin-top': '1476px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackBigLEftWrist") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '219px',
                'margin-top': '726px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackBigLeftForeArm") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '249px',
                'margin-top': '626px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackBigLeftElbow") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '259px',
                'margin-top': '526px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackBigLeftUpperArm") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '339px',
                'margin-top': '376px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aBackBigLeftShoulder") {

            $("#divafterZoomWomen").html("<img border='0' class='mappedObjectWomen' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgBackWoman' src='images/BigFemaleBack.png' >");

            $("#ImgBackWoman").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '339px',
                'margin-top': '276px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "aNeck") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '539px',
                'margin-top': '150px',
                'padding-left': '20px'

            }, "fast");
        }

        if (ClickID == "BigUpperAbdoman") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '540px',
                'margin-top': '480px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "BigLowerAbdoman") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '540px',
                'margin-top': '600px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "BigPelvis") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '540px',
                'margin-top': '650px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "BigGenitals") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '540px',
                'margin-top': '750px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "BigLeftHip") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '600px',
                'margin-top': '650px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "BigRightHip") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '500px',
                'margin-top': '650px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "BigRightThigh") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '420px',
                'margin-top': '920px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "BigRightKnee") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '420px',
                'margin-top': '1100px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "BigRightShin") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '420px',
                'margin-top': '1300px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "BigRightAnkle" || ClickID == "BigRightFoot" || ClickID == "BigRightToes" || ClickID == "BigRightThumb") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '420px',
                'margin-top': '1499px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "BigLeftAnkle" || ClickID == "BigLeftFoot" || ClickID == "BigLeftToes" || ClickID == "BigLeftThumb") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '650px',
                'margin-top': '1530px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "BigLeftShin") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '650px',
                'margin-top': '1330px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "BigLeftKnee") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '650px',
                'margin-top': '1100px',
                'padding-left': '20px'

            }, "fast");
        }

        if (ClickID == "BigLeftThigh") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '650px',
                'margin-top': '940px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "BigLeftShoulder") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '630px',
                'margin-top': '200px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "BigLeftUpperArm") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '740px',
                'margin-top': '320px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "BigLeftElbow") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '730px',
                'margin-top': '403px',
                'padding-left': '20px'

            }, "fast");
        }

        if (ClickID == "BigLeftForeArm") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '826px',
                'margin-top': '615px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "BigLeftWrist") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '916px',
                'margin-top': '715px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "BigRightShoulder") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '430px',
                'margin-top': '300px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "BigRightUpperArm") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '330px',
                'margin-top': '400px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "BigRightElbow") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '280px',
                'margin-top': '500px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID == "BigRightForeArm") {
            $("#divafterZoom").html("<img border='0' class='mappedObject' style='top: 0px; height: 2000px; padding: 0px; position: absolute; display: inline-block; left: -67px; border: 0px none;'  id='ImgMan' src='images/BigFemaleFront.png' >");

            $("#ImgMan").stop().animate({
                'opacity': '1',
                'height': '307px',
                'z-index': '55',
                'left': '230px',
                'margin-top': '600px',
                'padding-left': '20px'

            }, "fast");
        }
        if (ClickID.indexOf('aBack') != -1) {


            setTimeout(function () {
                ResetZoomBack();
            }, 800);

        } else {


            setTimeout(function () {
                ResetZoomFront('Front');
            }, 800);

        }

    }
}
function ZoomOutImage() {

    // alert("working on the hover section after zoom out ");
    // location.reload();

    //   
    /// $("#divImageContainer").css({ visibility: 'visible' });
    // $("#divafterZoom").css({ visibility: 'hidden' });
    // $("#divafterZoom").css({ 'margin-left': '604px' });
    ResetZoomFront();
}
function ZoomOutImage1() {
    $("#divImageContainer").css({ visibility: 'visible' });

    $("#divafterZoom").css({ 'margin-left': '614px' });
    ResetZoomFront();
}


function MapHighlight(area) {
    var areaHighlight = $(".carousel area").attr('name');
    if (areaHighlight != area) {

    }
}



function MoveLeft() {
    moveClick = true;
    var alt = $("#imgView").attr('alt');

    if (alt == "Front") {

        $('#divafterZoomWomen').animate({
            'margin-left': '+=50'
        });
    } else {
        $('#divafterZoom').animate({
            'margin-left': '+=50'
        });
    }

}
function MoveRight() {
    moveClick = true;
    var alt = $("#imgView").attr('alt');
    if (alt == "Front") {
        $('#divafterZoomWomen').animate({
            'margin-left': '-=50'
        });
    } else {
        $('#divafterZoom').animate({
            'margin-left': '-=50'
        });
    }

}
function MoveTop() {
    moveClick = true;
    var alt = $("#imgView").attr('alt');
    if (alt == "Front") {
        $('#divafterZoomWomen').animate({
            'margin-top': '+=50'
        });
    } else {
        $('#divafterZoom').animate({
            'margin-top': '+=50'
        });
    }
}
function MoveBottom() {
    moveClick = true;
    var alt = $("#imgView").attr('alt');
    if (alt == "Front") {

        $('#divafterZoomWomen').animate({
            'margin-top': '-=50'
        });
    } else {
        $('#divafterZoom').animate({
            'margin-top': '-=50'
        });
    }
}

function ResetZoomBack() {
    var strHtml = "";
    strHtml += "     <div style='position:absolute;margin-top: 252px;z-index:99;'> ";
    strHtml += "   <img onclick='ToggleView();' src='images/front.png' id='imgView' style='margin-left:6px;height:33px;' alt='Front'>";
    strHtml += "     </div>";
    strHtml += "     <div id='divarrows' style='display:none;background-color: rgb(255, 255, 255); border: 1px solid rgb(219, 219, 219); z-index: 99999999; top: 300px; position: absolute; border-top-left-radius: 67px; border-top-right-radius: 67px; border-bottom-right-radius: 67px; border-bottom-left-radius: 67px; right: 8px; height: 30px; width: 30px; visibility: visible;'>";
    strHtml += "    <img src='images/left.png' id='imgLeft' onclick='MoveLeft();' style='width: 13px; /* bottom: 10px; */ margin-top: 7px; margin-left: -1px;position: absolute;'>";
    strHtml += "    <img src='images/right.png' id='imgRight' onclick='MoveRight();' style='width: 13px; margin-top: 7px; position: absolute; margin-left: 16px;'>";
    strHtml += "    <img src='images/top.png' id='imgTop' onclick='MoveTop();' style='width: 13px; position: absolute; margin-top: -2px; margin-left: 8px;'>";
    strHtml += "     <img src='images/bottom.png' id='imgBottom' onclick='MoveBottom();' style='width: 13px; position: absolute; margin-top: 16px; margin-left: 7px;'>";
    strHtml += "   </div>";



    strHtml += "   <div id='divImage' style='overflow: hidden;'>";


    strHtml += "   <div style='position:absolute;right:10px;z-index:999;'><img src='images/minus.ico' onclick='ZoomOut();' id='imgBackView' style='margin-top: 5px;height:20px;'></div>";
    strHtml += "   <div id='ProcessDiv'>";
    strHtml += "    <div>";
    strHtml += "  <div style='z-index: 1099; display: none;' class='mainClass' id='divImageContainer'><input type='hidden' id='hdnID'>";
    strHtml += "    <div class='map' style='display: block; background: url(images/SmallFemaleFront.png) no-repeat scroll 0% 0% transparent;";
    strHtml += "      position: absolute; padding: 0px; width: 237px; height: 307px;'>";
    strHtml += "    <canvas width='237' height='307' style='width: 237px; height: 307px; position: absolute; left: 0px; top: 0px;";
    strHtml += "        padding: 0px; border: 0px none; opacity: 0;'></canvas>";
    strHtml += "     <div style='display: block; background: url('images/SmallFemaleFront.png';) no-repeat scroll 0% 0% transparent; position: absolute; padding: 0px; width: 400px; height: 400px;' class='map'><canvas style='width: 230px; height: 306px; position: absolute; left: 0px; top: 0px; padding: 0px; border: 0px none; opacity: 1;' id='myCanvas' height='306' width='230'></canvas><img border='0' style='opacity: 0; position: absolute; left: 0px; top: 0px; padding: 0px; border: 0px none;' src='images/SmallFemaleFront.png' usemap='#Map' class='map maphilighted'></div>";
    strHtml += "    </div>";
    strHtml += "   <map name='Map' id='Map'>";
    strHtml += "     <div class='mapControl'>";



    strHtml += "  <area shape='poly' id='auroID' name='General/Constitution' coords='127,12,130,23,131,40,129,49,146,59,154,77,160,95,174,115,182,141,194,150,197,160,196,172,183,181,170,180,160,175,156,179,157,195,151,206,151,208,149,222,147,252,143,269,147,284,134,303,114,322,182,302,186,291,193,263,202,243,210,226,217,210,216,183,211,160,212,125,204,112,188,55,170,29,150,16,138,10'>";
    strHtml += "  <area shape='poly' id='auroID1' name='General/Constitution' coords='118,7,106,19,98,28,99,46,95,59,82,68,74,72,67,89,65,101,53,118,50,125,34,147,33,161,34,181,47,182,56,180,66,176,71,190,72,194,82,219,82,235,85,282,106,317,86,318,57,306,43,301,37,283,29,266,19,251,11,231,11,217,11,153,12,129,18,111,27,76,40,45,62,20,87,13,104,4,116,6'>";
    strHtml += "       <area shape='poly' coords='108,47,107,46,106,45,106,44,105,43,105,42,104,41,104,41,103,40,102,40,101,38,101,38,100,37,100,35,100,34,100,33,100,32,100,31,100,30,101,29,102,29,103,29,103,28,102,27,103,26,103,25,103,23,104,22,104,21,105,20,106,19,107,18,108,17,109,16,110,16,111,15,113,15,114,15,115,15,117,15,118,15,118,16,120,16,121,16,122,17,123,18,124,20,125,21,126,23,126,25,127,27,127,28,127,29,127,29,128,30,128,30,129,31,129,33,129,36,129,35,130,37,128,39,127,41,126,41,125,42,124,42,124,43,123,44,123,46,122,47,121,48,120,49,120,50,119,50,118,51,117,51,116,51,113,51,112,51,111,51,109,49,109,49,108,48' id='aHead' name='Head'>";
    strHtml += "       <area coords='68,106,80,113,78,112,79,111,81,108,82,105,86,97,87,93,89,88,90,84,91,80,92,76,92,73,93,71,95,67,97,65,100,62,101,60,101,59,103,56,102,57,101,58,98,58,94,60,91,61,88,62,85,64,82,68,81,71,81,74,79,80,77,87,75,91,73,96,70,103' id='aRightUpperArm' shape='poly' name='Right Upper Arm'>";
    strHtml += "    <area coords='137,96,136,101,135,104,135,108,135,112,135,116,135,119,136,121,137,124,138,127,139,130,139,134,136,138,133,140,129,142,122,145,117,146,112,146,106,144,103,143,100,141,96,139,93,137,91,136,90,134,92,129,93,128,94,125,95,122,96,119,96,116,96,111,96,108,96,105,95,101,94,98,94,95,95,97,95,98,96,99,98,100,99,101,101,101,105,101,108,99,109,98,111,96,113,95,115,92,115,91,116,93,117,95,119,96,121,97,123,99,125,99,128,100,131,100,133,99,135,98' id='aStomach' shape='poly' name='Abdomen'>";
    strHtml += "    <area coords='151,112,151,114,152,117,153,119,154,121,155,122,156,124,157,126,158,127,159,129,160,131,161,133,163,135,164,137,165,139,166,141,167,143,168,145,169,147,169,150,169,153,170,156,171,158,173,159,176,160,179,160,182,158,183,155,184,154,182,151,181,146,178,143,176,140,174,136,173,133,172,130,171,126,169,122,168,118,167,114,165,112,164,109,163,107,162,107,161,105' id='aLeftLowerArm' shape='poly' name='Left Lower Arm'>";
    strHtml += "    <area coords='141,140,142,144,143,149,143,154,143,159,143,164,142,172,142,178,141,188,141,194,140,199,139,204,139,210,139,216,138,221,135,224,132,225,129,225,126,224,124,223,123,219,123,214,122,210,122,204,121,200,121,193,120,189,119,184,119,178,118,172,118,167,118,164,119,160,122,157,127,151,131,148,135,144,138,141' id='aLeftUpperLeg' shape='poly' name='Left Upper Leg'>";
    strHtml += "  <area coords='112,165,112,173,111,178,110,186,109,192,108,197,108,202,107,210,107,216,107,219,105,221,102,223,99,224,96,223,93,223,92,222,91,221,91,218,91,212,91,205,90,200,89,196,89,191,88,185,88,177,87,170,87,163,87,157,87,150,87,147,88,143,88,140,89,139,93,142,98,145,102,150,105,154,109,158,111,163' id='aRightUpperLeg' shape='poly' name='Right Upper Leg'>";
    strHtml += "  <area coords='151,114,150,113,149,110,148,108,147,106,146,102,144,99,143,96,141,92,140,89,140,84,139,80,139,76,139,74,138,70,137,67,135,64,133,61,129,58,133,59,136,60,139,61,143,63,146,66,148,69,149,73,151,78,152,83,153,88,155,92,157,97,159,102,161,105,162,108' id='aLeftUpperArm' shape='poly' name='Left Upper Arm'>";
    strHtml += "     <area coords='68,106,65,110,64,112,64,113,63,114,62,116,61,118,60,122,59,125,58,128,57,132,55,136,54,139,53,142,51,144,50,146,49,148,48,151,47,153,45,156,46,157,47,159,48,160,50,160,51,161,53,161,54,160,56,160,57,160,58,160,58,158,59,156,59,155,60,154,60,151,60,149,60,147,61,145,62,143,63,140,65,138,65,136,67,134,68,132,69,129,71,127,73,125,75,121,77,118,78,112' id='aRightLowerArm' shape='poly' name='Right Lower Arm'>";
    strHtml += "   <area coords='98,58,100,60,101,61,102,62,104,63,106,64,108,65,110,65,112,66,115,66,117,66,120,65,122,65,124,64,126,63,128,61,129,60,132,58,123,53,122,46,121,47,120,48,118,50,116,51,114,51,112,50,110,49,109,48,108,46,107,45,107,52,107,53' id='aNeck' shape='poly' name='Neck'>";
    strHtml += "        <area coords='91,133,89,136,89,140,112,164,117,165,141,138,140,135,138,133,135,136,133,138,129,140,123,143,120,143,114,144,107,143,103,142,98,139,94,136' id='aPelvis' shape='poly'>";
    strHtml += "    <area coords='139,83,139,86,139,90,138,93,137,95,135,98,132,100,129,101,126,101,122,100,120,98,117,97,116,94,115,91,114,94,112,96,110,98,108,100,104,101,100,101,96,100,94,98,92,95,91,93,91,91,91,88,91,85,91,83,92,78,93,74,95,71,97,68,99,65,101,67,104,68,106,68,109,69,112,69,116,69,119,69,121,69,125,68,127,67,130,66,131,65,132,67,134,69,136,73,137,78,138,81' id='aChest' shape='poly' name='Chest'>";
    strHtml += "   <area coords='91,222,90,228,90,233,90,239,90,242,91,246,92,250,93,256,93,261,94,266,94,272,94,275,93,277,93,279,93,282,92,286,90,290,88,292,89,296,90,297,94,298,96,299,99,299,102,299,103,298,103,296,103,293,103,291,103,285,103,282,103,279,103,277,102,272,102,269,102,265,103,259,105,251,106,243,107,234,106,228,106,225,106,224,105,224,103,226,100,226,96,226,93,225' id='aRightLowerLeg' shape='poly' name='Right Lower Leg'>";


    strHtml += "    <area coords='125,224,123,223,123,226,122,230,122,237,123,244,124,250,125,254,126,260,127,265,127,270,126,276,125,278,126,283,125,288,125,295,127,299,129,300,131,299,134,298,138,297,140,296,141,293,139,289,137,284,136,283,137,279,137,278,136,273,136,265,136,260,137,254,139,245,140,238,140,231,139,225,138,223,139,223,136,224,134,224,132,225,128,225' id='aLeftLowerLeg' shape='poly' name='Left Lower Leg'>";

    strHtml += "    </div>";
    strHtml += "   </map> ";
    strHtml += "  </div>";
    strHtml += "  <div>";
    strHtml += "    <div id='divafterZoom' style='width: 1500px; height: 400px; overflow: hidden; display: none;'>";
    strHtml += "       <img border='0' src='images/BigFemaleFront.png' id='ImgMan' class='mappedObject' style=' height: 307px; margin-left: 20px;'></div>";
    strHtml += "   </div>";
    strHtml += "   <div id='DivBig' style='overflow: hidden; width: 500px; display: none;'>";
    strHtml += "     <img border='0' usemap='#ImageMapMan' src='images/BigFemaleFront.png' class='ImageMapMan' id='ImgDivBig'>";
    strHtml += "     <map name='mappedObject' id='mappedObject'>";

    strHtml += "     <div class='mapControl' style='z-index: 54;'>";


    strHtml += "    <area shape='poly' name='Right Ear' coords='608,185,606,182,604,178,600,178,594,180,591,185,591,191,592,197,592,204,593,210,594,216,597,223,599,229,603,233,607,236,610,238,614,238,613,231,611,223,610,216,609,205,609,199,610,192,610,188' />";
    strHtml += "   <area shape='poly' name='Left Ear' coords='742,182,745,179,749,177,753,179,756,183,756,189,756,193,757,199,758,204,757,209,756,213,754,219,752,225,750,230,745,234,741,238,736,240,734,240,737,228,739,216,740,206,739,195,739,189,739,185'  />";
    strHtml += "  <area coords='898,695,969,655,974,668,980,682,984,697,990,711,995,728,1000,743,1008,761,1015,781,1024,805,1032,823,985,844,975,823,965,806,952,783,938,762,918,730,906,710' name='Left Fore Arm' id='BigLeftForeArm' shape='poly'>";

    strHtml += "   <area coords='659,232,659,231,659,230,659,229,659,228,660,226,661,225,663,224,664,223,666,222,666,221,667,219,667,217,667,214,667,210,667,206,667,201,667,198,667,194,667,192,667,192,668,190,671,189,672,189,674,189,676,189,678,189,680,190,682,191,682,192,682,194,682,197,682,201,682,206,682,210,682,214,682,216,682,219,682,221,683,222,684,223,685,223,686,224,687,225,688,226,689,227,689,229,689,230,690,232,690,233,688,235,687,236,686,237,684,238,683,239,682,239,681,240,679,241,677,242,675,241,674,242,672,241,670,241,668,240,667,239,666,238,666,237,663,236,662,236,661,235,660,234' id='BigNose' name='Nose' shape='poly'>";

    strHtml += "   <area coords='879,647,939,609,948,622,955,631,962,640,965,649,895,689,891,679,887,669,884,662' name='Left Elbow' id='BigLeftElbow' shape='poly'>";
    strHtml += "    <area coords='539,429,536,457,531,490,528,507,521,524,515,540,508,554,504,567,495,585,488,602,480,617,470,632,408,610,415,592,426,567,436,541,448,506,456,482,464,451,470,432' name='Left Upper Arm' id='BigLeftUpperArm' shape='poly'>";
    strHtml += "    <area coords='651,442,666,495,668,503,670,512,671,520,671,529,670,536,668,545,665,553,661,559,657,565,653,570,648,575,643,579,638,583,631,586,623,589,616,591,609,592,597,592,587,590,578,587,569,584,561,579,554,572,548,565,544,558,540,549,536,537,535,529,535,520,536,509,540,497,542,492,567,442' name='Right Chest' id='BigRightChest' shape='poly'>";
    strHtml += "    <area coords='592,513,54' shape='circle'>";
    strHtml += "    <area coords='750,1593,749,1604,746,1619,742,1632,740,1644,743,1656,744,1672,803,1672,801,1662,802,1652,803,1641,802,1631,797,1621,798,1611,797,1601,795,1593' name='Left Ankle' id='BigLeftAnkle' shape='poly'>";
    strHtml += "     <area coords='740,1708,813,1701,808,1688,802,1678,802,1668,744,1671' name='Left Foot' id='BigLeftFoot' shape='poly'>";
    strHtml += "   <area coords='740,1715,765,1715,767,1723,767,1736,769,1748,765,1756,755,1757,746,1753,741,1746,739,1736,738,1724' name='Left Thumb' id='BigLeftThumb' shape='poly'>";
    strHtml += "    <area coords='771,1713,771,1724,773,1735,772,1752,777,1755,787,1753,797,1752,807,1747,817,1745,826,1733,827,1723,819,1709,815,1707' name='Left Toes' id='BigLeftToes' shape='poly'>";
    strHtml += "    <area coords='723,1341,721,1355,718,1373,720,1398,722,1427,727,1457,735,1483,740,1503,744,1528,750,1556,751,1592,797,1592,796,1566,798,1548,800,1529,803,1508,808,1486,814,1458,817,1436,822,1402,821,1372,820,1352,819,1336,816,1327,810,1334,794,1342,772,1345,746,1342,724,1333' name='Left Shin' id='BigLeftShin' shape='poly'> ";
    strHtml += "  <area coords='533,1324,559,1333,590,1336,611,1335,624,1330,626,1347,629,1367,630,1391,628,1414,624,1443,619,1466,612,1494,607,1518,605,1533,601,1553,599,1572,600,1586,553,1586,553,1563,550,1537,548,1515,541,1488,538,1467,533,1445,529,1409,528,1391,529,1356' name='Right Shin' id='BigRightShin' shape='poly'>";
    strHtml += "  <area coords='515,863,573,900,607,924,639,959,660,988,658,1019,650,1069,641,1126,635,1177,631,1211,608,1205,571,1202,544,1209,535,1217,530,1176,522,1122,516,1061,513,983,511,929,511,899' name='Right Thigh' id='BigRightThigh' shape='poly'>";
    strHtml += "  <area coords='831,858,836,885,838,928,837,961,835,1004,832,1052,829,1091,825,1141,817,1195,814,1214,792,1206,765,1202,738,1207,718,1216,716,1187,711,1149,705,1108,699,1067,693,1027,690,989,708,965,738,932,771,904,794,884,813,870' name='Left Thigh' id='BigLeftThigh' shape='poly'>";
    strHtml += "  <area coords='662,566,656,574,640,587,625,592,613,594,598,594,584,590,568,585,552,573,540,554,535,535,534,521,537,505,545,486,553,476,562,467,576,460,589,456,606,454,623,457,641,463,653,472,661,480' shape='poly'>";
    strHtml += "   <area coords='595,338,600,346,606,353,612,359,617,364,624,369,633,374,640,377,648,380,656,382,666,383,675,383,687,382,697,380,711,375,720,370,728,364,735,358,741,351,747,343,751,337,743,332,734,326,729,321,721,313,719,306,719,296,720,284,720,270,716,276,711,280,708,284,702,288,696,294,684,297,677,299,665,298,654,294,648,289,640,283,635,277,630,271,630,279,630,288,631,301,629,309,626,315,620,322,606,332,596,337' id='BigNeck' name='Neck' shape='poly'>";
    strHtml += "   <area coords='874,432,871,421,864,406,859,394,855,389,846,380,834,369,821,363,808,358,792,351,783,350,765,343,730,384,804,440' name='Left Shoulder' id='BigLeftShoulder' shape='poly'>";
    strHtml += "    <area coords='881,645,939,609,938,607,930,594,917,562,899,514,884,471,878,445,876,437,815,442,814,486,814,495,826,520,836,549,844,570,860,602,874,630,880,648,884,643' name='Left Upper Arm' shape='poly'>";
    strHtml += "  <area coords='474,433,487,402,501,381,517,369,544,358,563,352,584,343,624,378,552,423,543,432,535,432' name='Right Shoulder' id='BigRightShoulder' shape='poly'>";
    strHtml += "   <area coords='399,627,462,669,468,652,471,642,477,627,489,606,497,591,505,571,516,543,529,508,531,496,532,485,526,434,474,436,470,449,464,471,457,494,451,517,441,543,431,570,414,606' name='Right Upper Arm' id='BigRightUpperArm' shape='poly'>";
    strHtml += "  <area coords='407,618,398,628,390,640,384,651,446,706,451,694,455,687,458,678,463,667,468,654,467,645,411,613' name='Right Elbow' id='BigRightElbow' shape='poly'>";
    strHtml += "   <area coords='314,830,360,852,349,878,301,854' name='Right Wrist' id='BigRightWrist' shape='poly'>";
    strHtml += "  <area coords='378,664,446,706,423,741,418,750,409,764,400,777,390,792,384,803,376,816,369,831,361,849,315,827,325,810,332,793,341,768,350,742,359,716' name='Right Fore Arm' id='BigRightForeArm' shape='poly'>";
    strHtml += "  <area coords='643,193,21' name='Right Eye' id='BigRightEye' shape='circle'>";
    strHtml += "  <area coords='706,194,21' name='Left Eye' id='BigLeftEye' shape='circle'>";
    strHtml += "   <area coords='667,444,667,576,685,576,685,444' name='Sternum' id='BigSternum' shape='poly'>";
    strHtml += "  <area coords='624,260,625,256,627,252,630,250,635,248,642,250,645,253,646,257,647,262,647,267,650,273,655,276,661,276,665,274,668,271,672,269,676,269,682,271,684,274,689,275,693,275,697,274,700,271,702,268,703,266,703,263,702,260,704,255,707,252,712,249,718,251,721,254,724,258,724,262,722,267,717,274,712,280,706,285,700,289,692,294,682,297,676,298,664,297,654,294,645,288,639,282,630,273,626,265' name='Jaw' id='BigJaw' shape='poly'>";
    strHtml += "        <area coords='738,199,738,216,736,230,732,241,728,251,723,261,716,272,695,243,695,220,707,219,718,216,729,207' name='Left Face' id='BigLeftFace' shape='poly'>";
    strHtml += "         <area coords='654,243,633,270,621,249,619,244,615,234,613,225,612,213,612,198,621,208,627,213,642,219,654,220' name='Right Face' id='BigRightFace' shape='poly'>";
    strHtml += "  <area coords='649,258,654,260,657,261,661,264,665,267,669,268,675,268,681,268,684,267,689,265,691,262,694,261,699,259,700,256,696,255,692,254,687,252,682,251,675,252,668,251,663,252,657,254,649,255,648,257' name='Mouth' id='BigMouth' shape='poly'>";
    strHtml += "     <area shape='poly' id='ImageRightFace' name='Right Face' coords='467,189,457,189,444,189,433,189,426,189,424,193,425,205,433,216,444,225,459,222,446,225,467,220,453,225,466,220,468,219,468,192,468,192'>";

    strHtml += "      <area shape='poly' coords='605,160,623,153,639,149,653,147,666,146,678,145,690,146,707,148,725,153,744,160,744,177,605,177' id='ImageForehead' name='Forehead'>";
    strHtml += "     <area shape='poly' coords='608,145,610,139,612,131,616,123,621,115,628,107,632,105,636,101,643,97,650,94,656,92,663,90,671,89,680,89,692,91,702,94,711,100,721,108,728,116,735,128,738,138,740,145' id='ImageScalp' name='Scalp'> ";
    strHtml += "      <area coords='698,443,683,497,679,512,678,521,677,527,678,535,680,544,684,552,687,559,692,566,696,572,702,578,711,583,721,588,734,593,749,593,760,592,771,588,782,583,790,577,799,569,805,560,810,551,812,543,813,531,814,522,812,510,807,496,787,442' name='Left Chest' id='BigLeftChest' shape='poly'>";
    strHtml += "    <area coords='555,723,567,733,581,740,597,747,613,753,627,756,645,761,662,763,681,762,707,761,721,758,733,755,753,747,776,736,784,731,796,724,815,780,806,786,789,798,771,808,756,816,743,823,724,830,708,835,685,840,668,840,650,837,631,833,610,825,584,811,565,800,546,787,535,779' name='Lower Abdomen' id='BigLowerAbdoman' shape='poly'>";
    strHtml += "      <area coords='562,636,563,655,565,672,564,684,563,698,558,714,554,723,564,733,578,740,593,746,610,753,628,758,646,762,669,764,688,763,704,762,717,759,736,755,751,749,766,742,775,736,786,731,795,725,792,714,789,702,786,689,785,676,785,664,787,650,789,641,778,633,770,627,757,621,746,616,734,612,720,607,703,603,688,602,669,601,649,602,628,607,611,611,594,616,578,624,569,629' name='Upper Abdomen' id='BigUpperAbdoman' shape='poly'>";
    strHtml += "     <area coords='297,856,354,883,352,896,349,904,344,920,342,937,326,940,307,940,291,938,279,932,274,923,268,917,279,891,283,874' shape='poly'>";
    strHtml += "    <area coords='554,1587,553,1600,553,1614,550,1624,546,1638,548,1651,549,1662,546,1673,607,1673,605,1660,606,1651,609,1641,605,1629,603,1621,601,1604,598,1591,599,1586' name='Right Ankle' id='BigRightAnkle' shape='poly'>";
    strHtml += "  <area coords='544,1679,607,1679,610,1688,610,1698,609,1715,532,1712,540,1696,539,1688' name='Right Foot' id='BigRightFoot' shape='poly'>";
    strHtml += "  <area coords='582,1719,581,1733,579,1740,581,1753,575,1757,566,1755,561,1753,553,1753,548,1751,538,1750,533,1748,526,1745,524,1736,523,1728,524,1720,531,1716' name='Right Toes' id='BigRightToes' shape='poly'>";
    strHtml += "   <area coords='592,1723,615,1726,610,1738,609,1751,600,1758,588,1757,583,1755,581,1744,582,1736,583,1725' name='Right Thumb' id='BigRightThumb' shape='poly'>";

    strHtml += "  <area coords='986,843,1032,823,1047,850,998,872' name='Left Wrist' id='BigLeftWrist' shape='poly'>";

    strHtml += "   <area coords='837,922,824,921,810,917,800,912,789,903,781,895,775,887,770,878,766,868,764,859,763,848,764,840,765,830,768,822,771,814,774,807,780,800,786,793,793,787,800,783,808,778,814,777,819,783,823,795,826,806,828,820,830,837,832,851,834,865,836,886,837,904' name='Left Hip' id='BigLeftHip' shape='poly'>";
    strHtml += "    <area coords='511,925,520,924,528,922,538,920,546,917,554,911,561,906,567,900,573,893,578,885,581,878,584,870,585,864,586,857,586,850,586,842,584,832,582,824,577,814,571,805,564,797,558,792,550,786,542,782,534,780,527,791,523,808,520,821,517,849,513,876,512,900,510,919' name='Right Hip' id='BigRightHip' shape='poly'>";
    strHtml += "    <area coords='652,930,664,971,684,971,699,930' name='Genitals' id='BigGenitals' shape='poly'>";
    strHtml += "    <area coords='619,876,732,876,703,924,648,924' id='BigPelvis' name='Pelvis' shape='poly'>";
    strHtml += "    <area coords='701,924,748,885,742,872,728,877,715,883,701,885,684,887,664,887,644,884,626,879,618,876,611,889,654,924' shape='poly'>";
    strHtml += "    <area coords='535,1223,539,1219,543,1215,548,1212,553,1209,559,1206,565,1204,572,1202,580,1201,588,1200,597,1201,606,1203,615,1207,621,1210,626,1214,631,1218,631,1223,631,1230,631,1238,631,1247,631,1258,630,1265,629,1275,626,1284,624,1298,621,1307,623,1319,624,1324,618,1328,612,1330,607,1332,600,1334,592,1335,583,1336,574,1335,561,1332,555,1329,549,1325,540,1319,534,1313,535,1306,536,1298,537,1289,537,1278,537,1265,537,1251,537,1237,536,1228' shape='poly' name='Right Knee' id='BigRightKnee'>";
    strHtml += "  <area coords='718,1224,719,1223,721,1221,724,1218,728,1216,732,1212,737,1211,741,1209,747,1206,753,1205,760,1204,765,1203,772,1204,781,1205,787,1207,793,1209,798,1212,803,1215,808,1218,814,1223,813,1230,812,1239,812,1249,812,1260,812,1275,811,1285,812,1296,813,1305,816,1316,815,1319,811,1323,806,1326,801,1329,795,1332,790,1335,784,1336,777,1338,769,1338,758,1338,750,1337,743,1335,738,1332,729,1328,725,1325,726,1320,727,1312,727,1305,726,1297,723,1288,721,1278,719,1269,718,1256,717,1243,718,1232' name='Left Knee' id='BigLeftKnee' shape='poly'>";


    strHtml += "   </div>";

    strHtml += "    </map>";

    strHtml += "     </div>";

    strHtml += "   <div id='back'>";

    strHtml += "    <div style='display: block;' class='mainClass' id='divBack'>";

    strHtml += "   <div class='MapBack' style='display: block; background: url(images/Female_Back_sml.png) no-repeat scroll 0% 0% transparent;position: absolute; padding: 0px; width: 237px; height: 307px;'>";

    strHtml += "    <div style='display: block; background: url('images/Female_Back_sml.png';) no-repeat scroll 0% 0% transparent; position: absolute; padding: 0px; width: 400px; height: 400px;' class='MapBack'><canvas style='width: 230px; height: 306px; position: absolute; left: 0px; top: 0px; padding: 0px; border: 0px none; opacity: 1;' id='myCanvas' height='306' width='230'></canvas><img border='0' style='height: 307px; opacity: 0; position: absolute; left: 0px; top: 0px; padding: 0px; border: 0px none;' src='images/Female_Back_sml.png' usemap='#MapBack' class='MapBack maphilighted'></div>";
    strHtml += "        <map name='MapBack' id='MapBack'>";
    strHtml += "     <div class='mapControl'>";
    strHtml += "    <area coords='131,59,133,63,135,66,136,68,137,71,138,73,139,77,139,80,139,83,139,85,145,99,148,105,151,110,152,115,163,108,156,92,153,83,150,73,147,67,144,65,142,63' id='aBackRightUpperArm' shape='poly' name='Right Upper Arm'>";
    strHtml += "     <area coords='90,84,90,81,90,79,90,76,91,72,91,70,93,67,94,64,96,61,98,59,94,60,89,62,86,64,83,67,81,70,79,78,78,81,76,88,74,93,71,100,66,108,65,111,75,118,79,111,81,106,83,102,85,98,87,93,90,86' id='aBackLeftUpperArm' shape='poly' name='Left Upper Arm'>";
    strHtml += "       <area coords='142,144,137,156,133,162,126,168,118,171,118,175,119,184,120,190,121,197,122,207,122,215,123,220,138,219,139,208,141,189,143,165' id='aBackRightUpperLeg' shape='poly' name='Right Upper Leg'>";
    strHtml += "      <area coords='88,147,93,157,99,164,105,169,111,171,112,174,111,183,108,197,107,210,107,216,107,219,106,221,91,221,91,213,90,202,89,190' id='aBackLeftUpperLeg' shape='poly' name='Left Upper Leg'>";
    strHtml += "      <area coords='102,56,104,58,107,59,110,60,114,60,118,60,122,60,125,59,128,56,140,84,139,87,137,94,136,100,135,106,134,114,134,118,136,123,137,127,139,131,135,133,131,135,124,137,120,138,111,138,103,136,94,133,90,131,93,126,94,122,95,117,95,110,94,103,93,97,92,90,90,85,91,83,102,56' id='aBack' shape='poly' name='Back'>";
    strHtml += "      <area coords='88,145,90,152,93,156,96,160,99,164,102,167,106,169,108,169,110,169,112,168,114,167,115,166,117,168,119,169,122,170,126,169,129,167,132,164,134,160,137,156,139,149,141,145,142,142,142,141,139,133,138,132,135,135,132,136,128,137,123,137,117,138,110,138,104,137,97,135,94,133,91,132,90,133,89,136,88,141' id='aBackButtonLock' shape='poly' name='BottonLock'>";
    strHtml += "    <area coords='152,113,162,107,164,109,166,111,167,113,168,116,169,119,170,123,172,130,175,137,177,142,179,144,180,145,182,146,185,148,189,150,190,151,189,153,188,153,183,152,184,154,184,156,191,166,191,167,190,168,188,168,183,161,186,170,186,172,185,172,184,172,183,170,180,162,180,171,179,172,177,172,177,171,176,161,174,161,174,168,174,170,173,170,172,169,171,157,171,156,170,154,169,151,170,148,169,146,166,140,164,136,162,133,158,128,155,123,153,119,152,116,151,114,151,113' id='aBackRightLowerArm' shape='poly' name='Right Lower Arm'>";
    strHtml += "      <area coords='67,106,78,113,78,116,77,118,76,120,74,123,72,126,70,129,67,134,64,138,62,142,60,146,59,147,59,149,59,153,59,155,58,157,58,162,58,168,57,170,56,170,55,169,55,165,55,160,54,161,53,171,52,172,50,172,50,161,49,164,46,171,45,172,44,170,46,160,41,166,40,168,39,167,38,165,46,153,46,152,44,152,41,153,39,152,39,151,41,150,43,149,45,148,47,146,48,145,50,145,51,145,53,141,54,139,55,136,56,133,56,131,57,128,59,124,60,120,62,117,63,112' id='aBackLeftLowerArm' shape='poly' name='Left Lower Arm'>";
    strHtml += "      <area coords='107,48,123,48,123,46,123,44,123,43,124,42,125,41,125,41,126,40,128,39,128,38,129,37,129,35,130,34,129,32,129,31,128,30,127,30,126,28,127,26,127,24,126,23,125,21,124,19,123,17,121,16,119,15,117,14,115,14,113,14,111,14,108,16,106,17,105,19,104,21,103,23,102,26,102,28,102,30,101,30,100,31,100,34,100,35,100,37,101,38,102,39,103,40,104,41,105,41,106,42,107,43' id='aBackHead' name='head' shape='poly'>";
    strHtml += "     <area coords='102,57,104,58,108,60,111,61,115,61,119,61,123,60,125,59,128,57,127,56,125,55,124,54,123,53,123,52,122,50,122,48,122,45,107,45,107,47,107,49,107,52,106,53,105,54,104,55,103,56' id='aBackNeck' shape='poly' name='Neck'>";
    strHtml += "     <area coords='91,221,90,228,89,233,89,240,89,246,90,253,91,259,92,264,93,268,93,274,93,279,93,283,92,287,92,289,90,289,90,291,91,294,93,296,95,298,99,298,101,296,103,292,103,287,102,281,102,276,102,270,103,262,106,253,107,241,107,236,106,231,106,229,106,222' id='aBackLeftLowerLeg' shape='poly' name='Left Lower Leg'>";
    strHtml += "     <area coords='123,221,123,224,123,228,123,232,123,239,123,247,124,255,126,263,128,270,128,277,128,280,127,285,126,288,127,293,128,297,131,298,134,298,137,296,138,293,139,289,138,287,137,284,137,277,137,272,137,265,139,258,140,248,140,240,140,232,139,227,139,223,139,220,137,220' id='aBackRightLowerLeg' shape='poly' name='Right Lower Leg'>";
    strHtml += "       </div>";
    strHtml += "    </map>";
    strHtml += "     </div>";

    strHtml += "   </div>";





    strHtml += "   <div>";
    strHtml += "     <div id='divafterZoomWomen' style='width: 1500px; height: 400px; overflow: hidden;'>";
    strHtml += "         <img border='0' src='images/BigFemaleBack.png' id='ImgBackWoman' class='mappedObjectWomen' style=' height: 307px; margin-left: 20px;'></div>";
    strHtml += "    </div>";




    strHtml += "  <div id='DivBigWomen' style='overflow: hidden; display: block; width: 500px;'>";
    strHtml += "    <img border='0' usemap='#ImageMapWomen' src='images/BigFemaleBack.png' class='ImageMapWomen' id='ImgDivBigWomen'>";
    strHtml += "    <map name='mappedObjectWomen' id='mappedObjectWomen'>";


    strHtml += "      <div class='mapControl' style='z-index: 1004;'>";

    strHtml += " <area shape='poly' name='Left Ear' coords='604,178,602,176,600,175,595,176,592,180,591,185,591,192,591,198,591,205,593,213,595,219,598,226,602,231,607,235,611,239,615,238,617,235,616,229,612,220,609,210,607,200,607,190,606,182' >";
    strHtml += " <area shape='poly' name='Right Ear' coords='745,178,744,184,743,192,742,199,741,206,738,215,736,221,733,231,733,235,735,238,739,238,743,236,745,232,748,229,752,224,755,217,756,212,757,205,758,199,759,192,759,184,759,181,758,178,756,176,752,175,749,175' >";

    strHtml += "    <area coords='642,813,645,796,649,772,651,755,652,743,655,727,659,676,659,667,663,584,663,567,662,551,660,534,658,519,655,504,653,493,651,481,648,469,644,456,640,444,637,434,631,423,626,412,621,403,616,395,611,388,539,430,529,506,533,511,536,526,540,543,544,565,547,579,552,607,555,621,560,642,562,661,563,678,562,692,560,704,557,717,551,733,545,746,542,760,537,773,532,786,547,792,562,798,598,807' name='Back' id='aBackBigleft' shape='poly'>";
    strHtml += "     <area coords='816,778,808,782,797,788,753,804,712,810,710,786,707,767,705,747,704,731,701,703,696,655,693,578,693,555,694,537,695,519,697,504,701,488,704,474,709,460,715,445,721,430,726,419,733,405,741,392,748,383,812,427,820,500,814,516,808,541,802,577,797,601,793,615,790,633,786,655,786,679,786,695,795,720,802,739,811,762' id='aBackBigright' name='Back' shape='poly'>";
    strHtml += "     <area shape='poly' coords='1002,879,1053,857,1047,849,1041,837,1031,817,984,833,990,848,997,865' name='Right Wrist' id='aBackBigRightWrist'>";
    strHtml += "   <area shape='poly' coords='909,711,981,674,984,682,989,692,992,704,997,719,1002,735,1008,749,1014,770,1020,784,1026,801,1031,816,983,833,976,820,968,805,956,786,944,767,932,748,919,729' id='aBackBigRightForeArm' name='Right ForeArm'>";
    strHtml += "  <area shape='poly' coords='878,632,937,602,943,612,947,621,953,628,959,635,963,640,969,651,974,661,979,667,981,669,907,708,907,708,906,705,900,696,895,684,891,670,888,659,883,648' id='aBackBigRightElbow' name='Right Elbow'>";
    strHtml += "  <area shape='poly' coords='720,1250,730,1244,747,1240,762,1237,777,1237,795,1241,816,1251,817,1238,817,1228,819,1215,820,1199,823,1183,826,1163,828,1145,831,1113,833,1087,834,1067,837,1045,837,1031,837,1017,837,999,837,984,837,974,829,987,819,999,804,1013,787,1026,766,1035,751,1041,721,1050,711,1050,695,1048,698,1066,702,1088,705,1110,707,1127,711,1160,713,1180,714,1195' name='Right HamString' id='aBackBigRightHamString'>";
    strHtml += "  <area shape='poly' coords='511,977,526,989,551,1005,576,1019,597,1029,622,1037,641,1042,654,1043,651,1062,648,1081,647,1098,642,1125,639,1146,637,1173,632,1202,631,1220,629,1239,629,1249,612,1242,599,1238,577,1236,554,1241,543,1245,534,1250,532,1233,529,1214,528,1196,525,1179,522,1160,520,1133,517,1096,515,1062,513,1029' name='Left HamString' id='aBackBigLeftHamString'>";
    strHtml += "   <area shape='poly' coords='754,1615,800,1615,800,1607,801,1595,801,1585,803,1572,805,1559,808,1545,811,1533,815,1516,819,1501,822,1482,825,1460,826,1442,827,1420,826,1400,824,1386,822,1364,819,1347,817,1328,810,1339,799,1350,788,1353,776,1356,762,1356,743,1352,736,1347,729,1341,726,1362,723,1385,721,1402,720,1430,722,1451,725,1474,729,1494,734,1513,740,1533,745,1556,750,1579' id='aBackBigRightCalf' name='Right Calf'>";
    strHtml += "   <area  name='Left Calf' id='aBackBigleftCalf'  coords='530,1337,544,1348,553,1352,573,1355,591,1353,605,1349,619,1341,622,1351,623,1363,625,1377,627,1388,629,1401,629,1420,628,1443,627,1458,623,1478,620,1493,617,1507,613,1522,608,1537,604,1555,600,1575,597,1596,596,1609,550,1611,550,1594,548,1582,546,1569,542,1550,540,1536,536,1523,531,1503,527,1486,524,1464,523,1449,523,1430,523,1411,524,1390,525,1371,527,1357' shape='poly'>";
    strHtml += "  <area shape='poly' coords='526,800,535,803,543,807,551,813,559,820,566,827,572,836,577,846,581,858,583,869,583,879,582,892,579,902,575,913,569,923,561,933,553,941,546,947,535,953,526,956,516,959,510,959,509,940,510,922,510,908,512,892,514,877,516,857,518,833,521,813' id='aBackBigLeftHip' name='Left Hip'>";
    strHtml += "   <area shape='poly' coords='572,823,565,814,572,822,576,830,581,841,584,851,587,868,587,882,584,897,580,907,576,916,570,924,563,931,562,934,564,941,571,953,580,964,589,975,601,982,617,989,641,991,660,983,669,974,679,976,692,981,704,987,719,991,736,989,752,980,764,971,772,961,780,951,789,939,781,930,776,923,769,912,764,899,762,888,761,876,763,863,766,850,772,838,778,827,784,819,792,813,791,813,787,814,790,813,565,814' id='aBackBigButtock' name='Buttock'>";
    strHtml += "   <area shape='poly' coords='824,799,814,803,803,810,795,816,787,823,778,836,773,848,770,861,769,873,769,885,770,895,773,905,777,916,783,925,791,934,798,941,807,948,819,954,830,957,841,959,840,943,840,929,840,912,840,900,837,883,835,869,833,849,830,828,827,809' id='aBackBigRightHip' name='Right Hip'>";
    strHtml += "  <area shape='poly' coords='877,629,937,602,932,587,925,573,918,555,911,535,904,518,897,495,892,477,887,460,879,433,810,426,821,495,823,506,828,524,839,550,847,572,856,594,866,612' id='aBackBigRightUpperArm' name='Right UpperArm(Triceps)'>";
    strHtml += "  <area shape='poly' coords='776,402,727,369,768,343,780,350,792,353,805,357,818,361,829,366,843,372,849,379,856,387,864,401,872,414,878,432,804,425' id='aBackBigRightShoulder' name='Right Shoulder'>";
    strHtml += "  <area shape='poly' coords='576,345,625,374,541,424,533,428,517,430,495,431,471,432,476,421,479,413,483,405,488,396,494,387,501,380,505,376,520,367,540,359,557,353,568,350' id='aBackBigLeftShoulder' name='Left Shoulder'>";
    strHtml += "  <area shape='poly' coords='539,429,536,457,531,490,528,507,521,524,515,540,508,554,504,567,495,585,488,602,480,617,470,632,408,610,415,592,426,567,436,541,448,506,456,482,464,451,470,432' id='aBackBigLeftUpperArm' name='Left Upper Arm(Triceps)'>";
    strHtml += "  <area shape='poly' coords='368,680,440,712,443,707,448,696,452,684,456,675,459,665,463,654,466,646,469,634,407,611,401,622,392,633,384,645,376,658,370,668' name='Left Elbow' id='aBackBigLeftElbow'>";
    strHtml += "   <area shape='poly' coords='328,797,372,821,376,815,380,807,387,798,391,789,397,780,404,769,411,758,419,745,425,735,432,724,438,715,367,682,361,696,353,718,348,736,340,762,334,778' name='Left ForeArm' id='aBackBigLeftForeArm'>";
    strHtml += "  <area shape='poly' coords='301,852,348,879,351,870,354,860,358,852,363,838,367,832,370,823,325,799,322,810,319,817,314,828,308,839' name='Left Wrist' id='aBackBigLEftWrist'>";
    strHtml += "   <area shape='poly' coords='510,960,522,959,534,955,544,952,555,946,565,940,574,933,580,925,586,917,591,908,594,899,597,890,599,881,599,867,597,855,592,840,587,829,580,819,572,810,560,801,546,792,530,788,524,800,521,810,519,829,517,845,514,863,511,882,510,896,509,921,508,938' name='16'>";
    strHtml += "  <area coords='631,273,631,273,629,270,626,256,621,242,616,226,611,210,606,194,605,180,604,167,605,158,606,147,609,137,613,127,618,119,624,110,631,104,637,100,645,95,651,92,661,90,674,88,687,88,702,92,713,98,721,104,728,114,736,123,741,138,744,153,746,167,746,181,744,195,741,208,737,225,732,237,728,250,723,264,722,270,719,271,716,273' shape='poly' name='Head' id='aBackBigHead'>";


    strHtml += "  <area shape='poly' id='aBackBigLeftAnkle' name='Left Ankle' coords='552,1612,551,1623,550,1636,548,1647,547,1657,544,1669,544,1683,544,1695,610,1694,609,1682,607,1671,605,1660,602,1647,599,1634,597,1623,596,1609,597,1612' >";
    strHtml += "  <area shape='poly' id='aBackBigRightAnkle' name='Right Ankle' coords='753,1618,752,1627,751,1639,750,1646,748,1654,745,1663,743,1672,743,1681,745,1694,806,1694,807,1679,807,1669,803,1655,802,1643,801,1634,801,1622,801,1617' >";
    strHtml += "    <area shape='poly' id='aBackBigLeftToe' name='Left Toe' coords='544,1695,537,1696,530,1696,528,1703,527,1711,530,1715,535,1725,541,1738,546,1747,552,1751,564,1758,573,1758,587,1754,597,1747,602,1736,604,1728,605,1718,611,1707,615,1698,615,1693,614,1686,610,1690,610,1697,547,1698' >";
    strHtml += "   <area shape='poly' id='aBackBigRightToe' name='Right Toe' coords='738,1698,811,1698,817,1697,824,1705,824,1712,816,1719,812,1729,807,1739,801,1748,792,1754,783,1757,771,1757,761,1753,751,1745,745,1731,746,1722,742,1711' >";
    strHtml += "   <area shape='poly' id='aBackBigNeck' name='Neck' coords='677,344,771,343,737,324,721,311,719,273,632,273,630,308,620,319,606,329,576,344' >";
    strHtml += "      <area shape='poly' id='aBackBigUpperSpine' name='Upper Spine'  coords='648,345,663,485,690,485,704,345' > ";
    strHtml += "      <area shape='poly' id='aBackBigLowerSpine' name='Lower Spine' coords='706,807,652,807,665,666,689,666' >";
    strHtml += "      <area shape='poly' id='aBackBigMiddleSpine' name='Middle Spine' coords='690,485,689,664,664,664,663,485' >";
    strHtml += "  <area shape='poly' id='aBackBigrightKnee' name='Right Knee' coords='720,1256,723,1253,727,1250,730,1248,735,1245,740,1242,745,1240,752,1238,762,1237,770,1237,778,1238,788,1240,797,1244,802,1247,809,1252,814,1257,816,1260,816,1265,816,1272,815,1283,816,1292,816,1302,816,1312,816,1326,816,1329,814,1332,810,1336,804,1340,796,1345,788,1348,781,1350,772,1351,763,1351,754,1350,741,1346,733,1342,729,1339,728,1330,726,1318,724,1307,721,1296,719,1286,719,1268'>";
    strHtml += " <area shape='poly' id='aBackBigLeftKnee' name='Left Knee' coords='533,1256,537,1253,540,1250,544,1248,548,1245,552,1243,556,1241,561,1240,568,1238,575,1237,582,1237,590,1238,596,1239,603,1241,609,1244,615,1247,623,1253,630,1260,630,1269,630,1277,629,1283,628,1292,627,1300,626,1307,623,1319,621,1328,620,1337,618,1340,614,1342,609,1344,605,1347,600,1348,592,1350,586,1351,579,1351,572,1351,564,1350,557,1348,550,1344,541,1339,536,1335,531,1330,532,1323,533,1315,533,1307,534,1296,534,1284,533,1269,533,1262'>";

    strHtml += "  </div>";
    strHtml += "  </map>";

    strHtml += "  </div>";
    strHtml += "  </div>  ";
    strHtml += "  </div>";

    strHtml += "   </div>";
    strHtml += "   </div>";



    $('#divImage').html('');

    $('#divImage').html(strHtml);

    MapStyles();


    $("#imgView").attr("src", "images/front.png");
    $("#imgView").attr('alt', 'Front');
    // ReloadBack();

    $("div area").bind("mouseover", function () {
        var s = $(this).attr("id");

        var title = $(this).attr('name');

        if (title != '') {
            if (title == "General/Constitution") {
                $('.map').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0, shadow: false, alwaysOn: false });
                $('.map').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0, alwaysOn: false });
                $(".Cntair").css({ 'background-image': 'url(images/femaleaura.png)', 'background-size': '100% 100%', 'background-position': '0 1px' });
            }
            $(this).data('tipText', title).removeAttr('name');
            // if (IsTooltip == "True") {
            $('<p class="tooltipClass"></p>')
                .text(title)
                .appendTo('body')
                .fadeIn('slow');
        }

    });

    $("div area").bind("mouseout", function () {
        $('.map').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5, alwaysOn: false });
        $(".Cntair").css({ 'background-color': '#3F424D', 'background-image': 'url(images/1femaleaura.png)', 'background-position': '0 1px' });
        $(this).attr('name', $(this).data('tipText'));
        $('.tooltipClass').remove();

    });

    $("div area").bind("mousemove", function (e) {

        var mousex = e.pageX + 20; ; //Get X coordinates
        var mousey = e.pageY + 10; ; //Get Y coordinates
        $('.tooltipClass')
                .css({ top: mousey, left: mousex })

    });

    $("div area").bind("click", function () {
        var s = $(this).attr("id");









        //        $("#imgBackView").css({ 'visibility': 'visible' });
        $("#divImageContainer").css({ visibility: 'hidden' });
        //        var img = $("#divImageContainer img");
        //        var ZoomImage = $("#ImgMan");
        $("#divafterZoom .mappedObject").css({ 'position': 'relative' });

        $("#divImageContainer").css({ visibility: 'hidden' });
        //        $("#divarrows").css({ visibility: 'visible' });
        $("#divafterZoomWomen .mappedObjectWomen").css({ 'position': 'relative' });

        $("#divBack").css({ visibility: 'hidden' });
        $("#hdnID").val(s);




        if (s == "auroID" || s == "auroID1") {


        } else {


            performZoomIN(s);
        }
    });
}
function ResetZoomFront(ViewMode) {


    // $("#divBack").css({ display: 'block' });
    // $("#divImageContainer").css({ display: 'none' });
    // $("#divafterZoom").css({ display: 'none' });
    //  $("#DivBig").css({ display: 'none' });
    //   $("#imgView").attr("src", "images/front.png");
    //  $("#imgView").attr('alt', 'Front');


    var strHtml = "";




    strHtml += "    <div style='position:absolute;margin-top: 252px;z-index:99;'>";
    strHtml += "    <img onclick='ToggleView();' src='images/Back.png' id='imgView' style='margin-left:6px;height:33px;' alt='Back'>";
    strHtml += "   </div>";
    strHtml += "   <div id='divarrows' style='display:none;background-color: rgb(255, 255, 255); border: 1px solid rgb(219, 219, 219); z-index: 99999999; top: 300px; position: absolute; border-top-left-radius: 67px; border-top-right-radius: 67px; border-bottom-right-radius: 67px; border-bottom-left-radius: 67px; right: 8px; height: 30px; width: 30px; visibility: visible;'>";
    strHtml += "   <img src='images/left.png' id='imgLeft' onclick='MoveLeft();' style='width: 13px; /* bottom: 10px; */ margin-top: 7px; margin-left: -1px;position: absolute;'>";
    strHtml += "    <img src='images/right.png' id='imgRight' onclick='MoveRight();' style='width: 13px; margin-top: 7px; position: absolute; margin-left: 16px;'>";
    strHtml += "     <img src='images/top.png' id='imgTop' onclick='MoveTop();' style='width: 13px; position: absolute; margin-top: -2px; margin-left: 8px;'>";
    strHtml += "      <img src='images/bottom.png' id='imgBottom' onclick='MoveBottom();' style='width: 13px; position: absolute; margin-top: 16px; margin-left: 7px;'>";
    strHtml += "   </div>";
    strHtml += "  <div id='divImage' style='overflow: hidden;'>";
    strHtml += "   <div style='position:absolute;right:10px;z-index:999;'><img src='images/minus.ico' onclick='ZoomOut();' id='imgBackView' style='margin-top: 5px;height:20px;'></div>";
    strHtml += "  <div id='ProcessDiv'>";
    strHtml += "   <div>";
    strHtml += "       <div style='z-index:1099;' class='mainClass' id='divImageContainer'><input type='hidden' id='hdnID'>";
    strHtml += "         <div class='map' style='display: block; background: url(images/SmallFemaleFront.png) no-repeat scroll 0% 0% transparent;";
    strHtml += "            position: absolute; padding: 0px; width: 237px; height: 307px;'>";
    strHtml += "            <canvas width='237' height='307' style='width: 237px; height: 307px; position: absolute; left: 0px; top: 0px;";
    strHtml += "            padding: 0px; border: 0px none; opacity: 0;'></canvas>";
    strHtml += "         <div style='display: block; background: url('images/SmallFemaleFront.png';) no-repeat scroll 0% 0% transparent; position: absolute; padding: 0px; width: 400px; height: 400px;' class='map'><canvas style='width: 230px; height: 306px; position: absolute; left: 0px; top: 0px; padding: 0px; border: 0px none; opacity: 1;' id='myCanvas' height='306' width='230'></canvas><img border='0' style='opacity: 0; position: absolute; left: 0px; top: 0px; padding: 0px; border: 0px none;' src='images/SmallFemaleFront.png' usemap='#Map' class='map maphilighted'></div>";
    strHtml += "     </div>";
    strHtml += "     <map name='Map' id='Map'>";
    strHtml += "      <div class='mapControl'>";
    strHtml += "  <area shape='poly' id='auroID' name='General/Constitution' coords='127,12,130,23,131,40,129,49,146,59,154,77,160,95,174,115,182,141,194,150,197,160,196,172,183,181,170,180,160,175,156,179,157,195,151,206,151,208,149,222,147,252,143,269,147,284,134,303,114,322,182,302,186,291,193,263,202,243,210,226,217,210,216,183,211,160,212,125,204,112,188,55,170,29,150,16,138,10'>";
    strHtml += "  <area shape='poly' id='auroID1' name='General/Constitution' coords='118,7,106,19,98,28,99,46,95,59,82,68,74,72,67,89,65,101,53,118,50,125,34,147,33,161,34,181,47,182,56,180,66,176,71,190,72,194,82,219,82,235,85,282,106,317,86,318,57,306,43,301,37,283,29,266,19,251,11,231,11,217,11,153,12,129,18,111,27,76,40,45,62,20,87,13,104,4,116,6'>";



    strHtml += "        <area shape='poly' coords='108,47,107,46,106,45,106,44,105,43,105,42,104,41,104,41,103,40,102,40,101,38,101,38,100,37,100,35,100,34,100,33,100,32,100,31,100,30,101,29,102,29,103,29,103,28,102,27,103,26,103,25,103,23,104,22,104,21,105,20,106,19,107,18,108,17,109,16,110,16,111,15,113,15,114,15,115,15,117,15,118,15,118,16,120,16,121,16,122,17,123,18,124,20,125,21,126,23,126,25,127,27,127,28,127,29,127,29,128,30,128,30,129,31,129,33,129,36,129,35,130,37,128,39,127,41,126,41,125,42,124,42,124,43,123,44,123,46,122,47,121,48,120,49,120,50,119,50,118,51,117,51,116,51,113,51,112,51,111,51,109,49,109,49,108,48' id='aHead' name='Head'>";
    strHtml += "         <area coords='68,106,80,113,78,112,79,111,81,108,82,105,86,97,87,93,89,88,90,84,91,80,92,76,92,73,93,71,95,67,97,65,100,62,101,60,101,59,103,56,102,57,101,58,98,58,94,60,91,61,88,62,85,64,82,68,81,71,81,74,79,80,77,87,75,91,73,96,70,103' id='aRightUpperArm' shape='poly' name='Right Upper Arm'>";
    strHtml += "      <area coords='137,96,136,101,135,104,135,108,135,112,135,116,135,119,136,121,137,124,138,127,139,130,139,134,136,138,133,140,129,142,122,145,117,146,112,146,106,144,103,143,100,141,96,139,93,137,91,136,90,134,92,129,93,128,94,125,95,122,96,119,96,116,96,111,96,108,96,105,95,101,94,98,94,95,95,97,95,98,96,99,98,100,99,101,101,101,105,101,108,99,109,98,111,96,113,95,115,92,115,91,116,93,117,95,119,96,121,97,123,99,125,99,128,100,131,100,133,99,135,98' id='aStomach' shape='poly' name='Abdomen'>";
    strHtml += "     <area coords='151,112,151,114,152,117,153,119,154,121,155,122,156,124,157,126,158,127,159,129,160,131,161,133,163,135,164,137,165,139,166,141,167,143,168,145,169,147,169,150,169,153,170,156,171,158,173,159,176,160,179,160,182,158,183,155,184,154,182,151,181,146,178,143,176,140,174,136,173,133,172,130,171,126,169,122,168,118,167,114,165,112,164,109,163,107,162,107,161,105' id='aLeftLowerArm' shape='poly' name='Left Lower Arm'>";
    strHtml += "  <area coords='141,140,142,144,143,149,143,154,143,159,143,164,142,172,142,178,141,188,141,194,140,199,139,204,139,210,139,216,138,221,135,224,132,225,129,225,126,224,124,223,123,219,123,214,122,210,122,204,121,200,121,193,120,189,119,184,119,178,118,172,118,167,118,164,119,160,122,157,127,151,131,148,135,144,138,141' id='aLeftUpperLeg' shape='poly' name='Left Upper Leg'>";
    strHtml += "  <area coords='112,165,112,173,111,178,110,186,109,192,108,197,108,202,107,210,107,216,107,219,105,221,102,223,99,224,96,223,93,223,92,222,91,221,91,218,91,212,91,205,90,200,89,196,89,191,88,185,88,177,87,170,87,163,87,157,87,150,87,147,88,143,88,140,89,139,93,142,98,145,102,150,105,154,109,158,111,163' id='aRightUpperLeg' shape='poly' name='Right Upper Leg'>";
    strHtml += " <area coords='151,114,150,113,149,110,148,108,147,106,146,102,144,99,143,96,141,92,140,89,140,84,139,80,139,76,139,74,138,70,137,67,135,64,133,61,129,58,133,59,136,60,139,61,143,63,146,66,148,69,149,73,151,78,152,83,153,88,155,92,157,97,159,102,161,105,162,108' id='aLeftUpperArm' shape='poly' name='Left Upper Arm'>";
    strHtml += " <area coords='68,106,65,110,64,112,64,113,63,114,62,116,61,118,60,122,59,125,58,128,57,132,55,136,54,139,53,142,51,144,50,146,49,148,48,151,47,153,45,156,46,157,47,159,48,160,50,160,51,161,53,161,54,160,56,160,57,160,58,160,58,158,59,156,59,155,60,154,60,151,60,149,60,147,61,145,62,143,63,140,65,138,65,136,67,134,68,132,69,129,71,127,73,125,75,121,77,118,78,112' id='aRightLowerArm' shape='poly' name='Right Lower Arm'>";
    strHtml += "  <area coords='98,58,100,60,101,61,102,62,104,63,106,64,108,65,110,65,112,66,115,66,117,66,120,65,122,65,124,64,126,63,128,61,129,60,132,58,123,53,122,46,121,47,120,48,118,50,116,51,114,51,112,50,110,49,109,48,108,46,107,45,107,52,107,53' id='aNeck' shape='poly' name='Neck'>";
    strHtml += "  <area coords='91,133,89,136,89,140,112,164,117,165,141,138,140,135,138,133,135,136,133,138,129,140,123,143,120,143,114,144,107,143,103,142,98,139,94,136' id='aPelvis' shape='poly'>";
    strHtml += "  <area coords='139,83,139,86,139,90,138,93,137,95,135,98,132,100,129,101,126,101,122,100,120,98,117,97,116,94,115,91,114,94,112,96,110,98,108,100,104,101,100,101,96,100,94,98,92,95,91,93,91,91,91,88,91,85,91,83,92,78,93,74,95,71,97,68,99,65,101,67,104,68,106,68,109,69,112,69,116,69,119,69,121,69,125,68,127,67,130,66,131,65,132,67,134,69,136,73,137,78,138,81' id='aChest' shape='poly' name='Chest'>";

    strHtml += "   <area coords='91,222,90,228,90,233,90,239,90,242,91,246,92,250,93,256,93,261,94,266,94,272,94,275,93,277,93,279,93,282,92,286,90,290,88,292,89,296,90,297,94,298,96,299,99,299,102,299,103,298,103,296,103,293,103,291,103,285,103,282,103,279,103,277,102,272,102,269,102,265,103,259,105,251,106,243,107,234,106,228,106,225,106,224,105,224,103,226,100,226,96,226,93,225' id='aRightLowerLeg' shape='poly' name='Right Lower Leg'>";


    strHtml += "<area coords='125,224,123,223,123,226,122,230,122,237,123,244,124,250,125,254,126,260,127,265,127,270,126,276,125,278,126,283,125,288,125,295,127,299,129,300,131,299,134,298,138,297,140,296,141,293,139,289,137,284,136,283,137,279,137,278,136,273,136,265,136,260,137,254,139,245,140,238,140,231,139,225,138,223,139,223,136,224,134,224,132,225,128,225' id='aLeftLowerLeg' shape='poly' name='Left Lower Leg'>";

    strHtml += " </div>";
    strHtml += " </map> ";
    strHtml += "  </div>";
    strHtml += " <div>";
    strHtml += " <div id='divafterZoom' style='width: 1500px; height: 400px; overflow: hidden;'>";
    strHtml += "   <img border='0' src='images/BigFemaleFront.png' id='ImgMan' class='mappedObject' style=' height: 307px; margin-left: 20px;'></div>";
    strHtml += "   </div>";
    strHtml += " <div id='DivBig' style='overflow: hidden; display: block; width: 500px;'>";
    strHtml += "  <img border='0' usemap='#ImageMapMan' src='images/BigFemaleFront.png' class='ImageMapMan' id='ImgDivBig'>";
    strHtml += " <map name='mappedObject' id='mappedObject'>";

    strHtml += "     <div class='mapControl' style='z-index: 54;'>";
    strHtml += "    <area shape='poly' id='aBackBigRightEar'  name='Right Ear' coords='608,185,606,182,604,178,600,178,594,180,591,185,591,191,592,197,592,204,593,210,594,216,597,223,599,229,603,233,607,236,610,238,614,238,613,231,611,223,610,216,609,205,609,199,610,192,610,188' />";
    strHtml += "   <area shape='poly' id='aBackBigLeftEar' name='Left Ear' coords='742,182,745,179,749,177,753,179,756,183,756,189,756,193,757,199,758,204,757,209,756,213,754,219,752,225,750,230,745,234,741,238,736,240,734,240,737,228,739,216,740,206,739,195,739,189,739,185'  />";

    strHtml += "   <area coords='898,695,969,655,974,668,980,682,984,697,990,711,995,728,1000,743,1008,761,1015,781,1024,805,1032,823,985,844,975,823,965,806,952,783,938,762,918,730,906,710' name='Left Fore Arm' id='BigLeftForeArm' shape='poly'>";

    strHtml += "       <area coords='659,232,659,231,659,230,659,229,659,228,660,226,661,225,663,224,664,223,666,222,666,221,667,219,667,217,667,214,667,210,667,206,667,201,667,198,667,194,667,192,667,192,668,190,671,189,672,189,674,189,676,189,678,189,680,190,682,191,682,192,682,194,682,197,682,201,682,206,682,210,682,214,682,216,682,219,682,221,683,222,684,223,685,223,686,224,687,225,688,226,689,227,689,229,689,230,690,232,690,233,688,235,687,236,686,237,684,238,683,239,682,239,681,240,679,241,677,242,675,241,674,242,672,241,670,241,668,240,667,239,666,238,666,237,663,236,662,236,661,235,660,234' id='BigNose' name='Nose' shape='poly'>";

    strHtml += "      <area coords='879,647,939,609,948,622,955,631,962,640,965,649,895,689,891,679,887,669,884,662' name='Left Elbow' id='BigLeftElbow' shape='poly'>";
    strHtml += "     <area coords='881,645,939,609,938,607,930,594,917,562,899,514,884,471,878,445,876,437,815,442,814,486,814,495,825,520,834,549,841,570,859,603,874,630,880,648,884,643' name='Left Upper Arm' id='BigLeftUpperArm' shape='poly'>";
    strHtml += "  <area coords='651,442,666,495,668,503,670,512,671,520,671,529,670,536,668,545,665,553,661,559,657,565,653,570,648,575,643,579,638,583,631,586,623,589,616,591,609,592,597,592,587,590,578,587,569,584,561,579,554,572,548,565,544,558,540,549,536,537,535,529,535,520,536,509,540,497,542,492,567,442' name='Right Chest' id='BigRightChest' shape='poly'>";
    strHtml += "  <area coords='592,513,54' shape='circle'>";
    strHtml += " <area coords='750,1593,749,1604,746,1619,742,1632,740,1644,743,1656,744,1672,803,1672,801,1662,802,1652,803,1641,802,1631,797,1621,798,1611,797,1601,795,1593' name='Left Ankle' id='BigLeftAnkle' shape='poly'>";
    strHtml += " <area coords='740,1708,813,1701,808,1688,802,1678,802,1668,744,1671' name='Left Foot' id='BigLeftFoot' shape='poly'>";
    strHtml += " <area coords='740,1715,765,1715,767,1723,767,1736,769,1748,765,1756,755,1757,746,1753,741,1746,739,1736,738,1724' name='Left Thumb' id='BigLeftThumb' shape='poly'>";
    strHtml += " <area coords='771,1713,771,1724,773,1735,772,1752,777,1755,787,1753,797,1752,807,1747,817,1745,826,1733,827,1723,819,1709,815,1707' name='Left Toes' id='BigLeftToes' shape='poly'>";
    strHtml += " <area coords='723,1341,721,1355,718,1373,720,1398,722,1427,727,1457,735,1483,740,1503,744,1528,750,1556,751,1592,797,1592,796,1566,798,1548,800,1529,803,1508,808,1486,814,1458,817,1436,822,1402,821,1372,820,1352,819,1336,816,1327,810,1334,794,1342,772,1345,746,1342,724,1333' name='Left Shin' id='BigLeftShin' shape='poly'> ";
    strHtml += " <area coords='533,1324,559,1333,590,1336,611,1335,624,1330,626,1347,629,1367,630,1391,628,1414,624,1443,619,1466,612,1494,607,1518,605,1533,601,1553,599,1572,600,1586,553,1586,553,1563,550,1537,548,1515,541,1488,538,1467,533,1445,529,1409,528,1391,529,1356' name='Right Shin' id='BigRightShin' shape='poly'>";
    strHtml += "<area coords='515,863,573,900,607,924,639,959,660,988,658,1019,650,1069,641,1126,635,1177,631,1211,608,1205,571,1202,544,1209,535,1217,530,1176,522,1122,516,1061,513,983,511,929,511,899' name='Right Thigh' id='BigRightThigh' shape='poly'>";
    strHtml += " <area coords='831,858,836,885,838,928,837,961,835,1004,832,1052,829,1091,825,1141,817,1195,814,1214,792,1206,765,1202,738,1207,718,1216,716,1187,711,1149,705,1108,699,1067,693,1027,690,989,708,965,738,932,771,904,794,884,813,870' name='Left Thigh' id='BigLeftThigh' shape='poly'>";
    strHtml += "<area coords='662,566,656,574,640,587,625,592,613,594,598,594,584,590,568,585,552,573,540,554,535,535,534,521,537,505,545,486,553,476,562,467,576,460,589,456,606,454,623,457,641,463,653,472,661,480' shape='poly'>";
    strHtml += " <area coords='595,338,600,346,606,353,612,359,617,364,624,369,633,374,640,377,648,380,656,382,666,383,675,383,687,382,697,380,711,375,720,370,728,364,735,358,741,351,747,343,751,337,743,332,734,326,729,321,721,313,719,306,719,296,720,284,720,270,716,276,711,280,708,284,702,288,696,294,684,297,677,299,665,298,654,294,648,289,640,283,635,277,630,271,630,279,630,288,631,301,629,309,626,315,620,322,606,332,596,337' id='BigNeck' name='Neck' shape='poly'>";
    strHtml += " <area coords='874,432,871,421,864,406,859,394,855,389,846,380,834,369,821,363,808,358,792,351,783,350,765,343,730,384,804,440' name='Left Shoulder' id='BigLeftShoulder' shape='poly'>";
    strHtml += " <area coords='881,645,939,609,938,607,930,594,917,562,899,514,884,471,878,445,876,437,815,442,814,486,814,495,826,520,836,549,844,570,860,602,874,630,880,648,884,643' name='Left Upper Arm' shape='poly'>";
    strHtml += " <area coords='474,433,487,402,501,381,517,369,544,358,563,352,584,343,624,378,552,423,543,432,535,432' name='Right Shoulder' id='BigRightShoulder' shape='poly'>";
    strHtml += " <area coords='399,627,462,669,468,652,471,642,477,627,489,606,497,591,505,571,516,543,529,508,531,496,532,485,526,434,474,436,470,449,464,471,457,494,451,517,441,543,431,570,414,606' name='Right Upper Arm' id='BigRightUpperArm' shape='poly'>";
    strHtml += "<area coords='407,618,398,628,390,640,384,651,446,706,451,694,455,687,458,678,463,667,468,654,467,645,411,613' name='Right Elbow' id='BigRightElbow' shape='poly'>";
    strHtml += "  <area coords='314,830,360,852,349,878,301,854' name='Right Wrist' id='BigRightWrist' shape='poly'>";
    strHtml += "  <area coords='378,664,446,706,423,741,418,750,409,764,400,777,390,792,384,803,376,816,369,831,361,849,315,827,325,810,332,793,341,768,350,742,359,716' name='Right Fore Arm' id='BigRightForeArm' shape='poly'>";
    strHtml += " <area coords='643,193,21' name='Right Eye' id='BigRightEye' shape='circle'>";
    strHtml += " <area coords='706,194,21' name='Left Eye' id='BigLeftEye' shape='circle'>";
    strHtml += " <area coords='667,444,667,576,685,576,685,444' name='Sternum' id='BigSternum' shape='poly'>";
    strHtml += " <area coords='624,260,625,256,627,252,630,250,635,248,642,250,645,253,646,257,647,262,647,267,650,273,655,276,661,276,665,274,668,271,672,269,676,269,682,271,684,274,689,275,693,275,697,274,700,271,702,268,703,266,703,263,702,260,704,255,707,252,712,249,718,251,721,254,724,258,724,262,722,267,717,274,712,280,706,285,700,289,692,294,682,297,676,298,664,297,654,294,645,288,639,282,630,273,626,265' name='Jaw' id='BigJaw' shape='poly'>";
    strHtml += "        <area coords='738,199,738,216,736,230,732,241,728,251,723,261,716,272,695,243,695,220,707,219,718,216,729,207' name='Left Face' id='BigLeftFace' shape='poly'>";
    strHtml += "         <area coords='654,243,633,270,621,249,619,244,615,234,613,225,612,213,612,198,621,208,627,213,642,219,654,220' name='Right Face' id='BigRightFace' shape='poly'>";
    strHtml += " <area coords='649,258,654,260,657,261,661,264,665,267,669,268,675,268,681,268,684,267,689,265,691,262,694,261,699,259,700,256,696,255,692,254,687,252,682,251,675,252,668,251,663,252,657,254,649,255,648,257' name='Mouth' id='BigMouth' shape='poly'>";
    strHtml += " <area shape='poly' id='ImageRightFace' name='Right Face' coords='467,189,457,189,444,189,433,189,426,189,424,193,425,205,433,216,444,225,459,222,446,225,467,220,453,225,466,220,468,219,468,192,468,192'>";

    strHtml += "  <area shape='poly' coords='605,160,623,153,639,149,653,147,666,146,678,145,690,146,707,148,725,153,744,160,744,177,605,177' id='ImageForehead' name='Forehead'>";
    strHtml += "  <area shape='poly' coords='608,145,610,139,612,131,616,123,621,115,628,107,632,105,636,101,643,97,650,94,656,92,663,90,671,89,680,89,692,91,702,94,711,100,721,108,728,116,735,128,738,138,740,145' id='ImageScalp' name='Scalp'> ";
    strHtml += "  <area coords='698,443,683,497,679,512,678,521,677,527,678,535,680,544,684,552,687,559,692,566,696,572,702,578,711,583,721,588,734,593,749,593,760,592,771,588,782,583,790,577,799,569,805,560,810,551,812,543,813,531,814,522,812,510,807,496,787,442' name='Left Chest' id='BigLeftChest' shape='poly'>";
    strHtml += " <area coords='555,723,567,733,581,740,597,747,613,753,627,756,645,761,662,763,681,762,707,761,721,758,733,755,753,747,776,736,784,731,796,724,815,780,806,786,789,798,771,808,756,816,743,823,724,830,708,835,685,840,668,840,650,837,631,833,610,825,584,811,565,800,546,787,535,779' name='Lower Abdomen' id='BigLowerAbdoman' shape='poly'>";
    strHtml += "  <area coords='562,636,563,655,565,672,564,684,563,698,558,714,554,723,564,733,578,740,593,746,610,753,628,758,646,762,669,764,688,763,704,762,717,759,736,755,751,749,766,742,775,736,786,731,795,725,792,714,789,702,786,689,785,676,785,664,787,650,789,641,778,633,770,627,757,621,746,616,734,612,720,607,703,603,688,602,669,601,649,602,628,607,611,611,594,616,578,624,569,629' name='Upper Abdomen' id='BigUpperAbdoman' shape='poly'>";
    strHtml += " <area coords='297,856,354,883,352,896,349,904,344,920,342,937,326,940,307,940,291,938,279,932,274,923,268,917,279,891,283,874' shape='poly'>";
    strHtml += "  <area coords='554,1587,553,1600,553,1614,550,1624,546,1638,548,1651,549,1662,546,1673,607,1673,605,1660,606,1651,609,1641,605,1629,603,1621,601,1604,598,1591,599,1586' name='Right Ankle' id='BigRightAnkle' shape='poly'>";
    strHtml += "<area coords='544,1679,607,1679,610,1688,610,1698,609,1715,532,1712,540,1696,539,1688' name='Right Foot' id='BigRightFoot' shape='poly'>";
    strHtml += "  <area coords='582,1719,581,1733,579,1740,581,1753,575,1757,566,1755,561,1753,553,1753,548,1751,538,1750,533,1748,526,1745,524,1736,523,1728,524,1720,531,1716' name='Right Toes' id='BigRightToes' shape='poly'>";
    strHtml += " <area coords='592,1723,615,1726,610,1738,609,1751,600,1758,588,1757,583,1755,581,1744,582,1736,583,1725' name='Right Thumb' id='BigRightThumb' shape='poly'>";

    strHtml += " <area coords='986,843,1032,823,1047,850,998,872' name='Left Wrist' id='BigLeftWrist' shape='poly'>";

    strHtml += " <area coords='837,922,824,921,810,917,800,912,789,903,781,895,775,887,770,878,766,868,764,859,763,848,764,840,765,830,768,822,771,814,774,807,780,800,786,793,793,787,800,783,808,778,814,777,819,783,823,795,826,806,828,820,830,837,832,851,834,865,836,886,837,904' name='Left Hip' id='BigLeftHip' shape='poly'>";
    strHtml += "  <area coords='511,925,520,924,528,922,538,920,546,917,554,911,561,906,567,900,573,893,578,885,581,878,584,870,585,864,586,857,586,850,586,842,584,832,582,824,577,814,571,805,564,797,558,792,550,786,542,782,534,780,527,791,523,808,520,821,517,849,513,876,512,900,510,919' name='Right Hip' id='BigRightHip' shape='poly'>";
    strHtml += "  <area coords='652,930,664,971,684,971,699,930' name='Genitals' id='BigGenitals' shape='poly'>";
    strHtml += "  <area coords='619,876,732,876,703,924,648,924' id='BigPelvis' name='Pelvis' shape='poly'>";
    strHtml += " <area coords='701,924,748,885,742,872,728,877,715,883,701,885,684,887,664,887,644,884,626,879,618,876,611,889,654,924' shape='poly'>";
    strHtml += "    <area coords='535,1223,539,1219,543,1215,548,1212,553,1209,559,1206,565,1204,572,1202,580,1201,588,1200,597,1201,606,1203,615,1207,621,1210,626,1214,631,1218,631,1223,631,1230,631,1238,631,1247,631,1258,630,1265,629,1275,626,1284,624,1298,621,1307,623,1319,624,1324,618,1328,612,1330,607,1332,600,1334,592,1335,583,1336,574,1335,561,1332,555,1329,549,1325,540,1319,534,1313,535,1306,536,1298,537,1289,537,1278,537,1265,537,1251,537,1237,536,1228' shape='poly' name='Right Knee' id='BigRightKnee'>";
    strHtml += "  <area coords='718,1224,719,1223,721,1221,724,1218,728,1216,732,1212,737,1211,741,1209,747,1206,753,1205,760,1204,765,1203,772,1204,781,1205,787,1207,793,1209,798,1212,803,1215,808,1218,814,1223,813,1230,812,1239,812,1249,812,1260,812,1275,811,1285,812,1296,813,1305,816,1316,815,1319,811,1323,806,1326,801,1329,795,1332,790,1335,784,1336,777,1338,769,1338,758,1338,750,1337,743,1335,738,1332,729,1328,725,1325,726,1320,727,1312,727,1305,726,1297,723,1288,721,1278,719,1269,718,1256,717,1243,718,1232' name='Left Knee' id='BigLeftKnee' shape='poly'>";



    strHtml += "  </div>";

    strHtml += "  </map>";

    strHtml += "  </div>";

    strHtml += " <div id='back'>";
    strHtml += "  <div style=' display:none;' class='mainClass' id='divBack'>";

    strHtml += "  <div class='MapBack' style='display: block; background: url(images/Female_Back_sml.png) no-repeat scroll 0% 0% transparent;position: absolute; padding: 0px; width: 237px; height: 307px;'>";

    strHtml += "   <div style='display: block; background: url('images/Female_Back_sml.png') no-repeat scroll 0% 0% transparent; position: absolute; padding: 0px; width: 400px; height: 400px;' class='MapBack'><canvas style='width: 230px; height: 306px; position: absolute; left: 0px; top: 0px; padding: 0px; border: 0px none;' id='myCanvas' height='306' width='230'></canvas><img border='0' style='height: 307px; opacity: 0; position: absolute; left: 0px; top: 0px; padding: 0px; border: 0px none;' src='images/Female_Back_sml.png' usemap='#MapBack' class='MapBack maphilighted'></div>";
    strHtml += "     <map name='MapBack' id='MapBack'>";
    strHtml += "   <div class='mapControl'>";
    strHtml += "  <area coords='131,59,133,63,135,66,136,68,137,71,138,73,139,77,139,80,139,83,139,85,145,99,148,105,151,110,152,115,163,108,156,92,153,83,150,73,147,67,144,65,142,63' name='Right Upper Arm' id='aBackRightUpperArm' shape='poly'>";
    strHtml += "  <area coords='90,84,90,81,90,79,90,76,91,72,91,70,93,67,94,64,96,61,98,59,94,60,89,62,86,64,83,67,81,70,79,78,78,81,76,88,74,93,71,100,66,108,65,111,75,118,79,111,81,106,83,102,85,98,87,93,90,86' name='Left Upper Arm' id='aBackLeftUpperArm' shape='poly'>";
    strHtml += "     <area coords='142,144,137,156,133,162,126,168,118,171,118,175,119,184,120,190,121,197,122,207,122,215,123,220,138,219,139,208,141,189,143,165' name='Right Upper Leg' id='aBackRightUpperLeg' shape='poly'>";
    strHtml += "  <area coords='88,147,93,157,99,164,105,169,111,171,112,174,111,183,108,197,107,210,107,216,107,219,106,221,91,221,91,213,90,202,89,190' name='Left Upper Leg' id='aBackLeftUpperLeg' shape='poly'>";
    strHtml += "   <area coords='102,56,104,58,107,59,110,60,114,60,118,60,122,60,125,59,128,56,140,84,139,87,137,94,136,100,135,106,134,114,134,118,136,123,137,127,139,131,135,133,131,135,124,137,120,138,111,138,103,136,94,133,90,131,93,126,94,122,95,117,95,110,94,103,93,97,92,90,90,85,91,83,102,56' name='Back' id='aBack' shape='poly'>";
    strHtml += "    <area coords='88,145,90,152,93,156,96,160,99,164,102,167,106,169,108,169,110,169,112,168,114,167,115,166,117,168,119,169,122,170,126,169,129,167,132,164,134,160,137,156,139,149,141,145,142,142,142,141,139,133,138,132,135,135,132,136,128,137,123,137,117,138,110,138,104,137,97,135,94,133,91,132,90,133,89,136,88,141' name='BottonLock' id='aBackButtonLock' shape='poly'>";
    strHtml += "   <area coords='152,113,162,107,164,109,166,111,167,113,168,116,169,119,170,123,172,130,175,137,177,142,179,144,180,145,182,146,185,148,189,150,190,151,189,153,188,153,183,152,184,154,184,156,191,166,191,167,190,168,188,168,183,161,186,170,186,172,185,172,184,172,183,170,180,162,180,171,179,172,177,172,177,171,176,161,174,161,174,168,174,170,173,170,172,169,171,157,171,156,170,154,169,151,170,148,169,146,166,140,164,136,162,133,158,128,155,123,153,119,152,116,151,114,151,113' name='Right Lower Arm' id='aBackRightLowerArm' shape='poly'>";
    strHtml += "    <area coords='67,106,78,113,78,116,77,118,76,120,74,123,72,126,70,129,67,134,64,138,62,142,60,146,59,147,59,149,59,153,59,155,58,157,58,162,58,168,57,170,56,170,55,169,55,165,55,160,54,161,53,171,52,172,50,172,50,161,49,164,46,171,45,172,44,170,46,160,41,166,40,168,39,167,38,165,46,153,46,152,44,152,41,153,39,152,39,151,41,150,43,149,45,148,47,146,48,145,50,145,51,145,53,141,54,139,55,136,56,133,56,131,57,128,59,124,60,120,62,117,63,112' name='Left Lower Arm' id='aBackLeftLowerArm' shape='poly'>";
    strHtml += "  <area coords='107,48,123,48,123,46,123,44,123,43,124,42,125,41,125,41,126,40,128,39,128,38,129,37,129,35,130,34,129,32,129,31,128,30,127,30,126,28,127,26,127,24,126,23,125,21,124,19,123,17,121,16,119,15,117,14,115,14,113,14,111,14,108,16,106,17,105,19,104,21,103,23,102,26,102,28,102,30,101,30,100,31,100,34,100,35,100,37,101,38,102,39,103,40,104,41,105,41,106,42,107,43' name='Head' id='aBackHead' name='head' shape='poly'>";
    strHtml += "  <area coords='102,57,104,58,108,60,111,61,115,61,119,61,123,60,125,59,128,57,127,56,125,55,124,54,123,53,123,52,122,50,122,48,122,45,107,45,107,47,107,49,107,52,106,53,105,54,104,55,103,56' name='Neck' id='aBackNeck' shape='poly'>";
    strHtml += "  <area coords='91,221,90,228,89,233,89,240,89,246,90,253,91,259,92,264,93,268,93,274,93,279,93,283,92,287,92,289,90,289,90,291,91,294,93,296,95,298,99,298,101,296,103,292,103,287,102,281,102,276,102,270,103,262,106,253,107,241,107,236,106,231,106,229,106,222' name='Left Lower Leg' id='aBackLeftLowerLeg' shape='poly'>";
    strHtml += " <area coords='123,221,123,224,123,228,123,232,123,239,123,247,124,255,126,263,128,270,128,277,128,280,127,285,126,288,127,293,128,297,131,298,134,298,137,296,138,293,139,289,138,287,137,284,137,277,137,272,137,265,139,258,140,248,140,240,140,232,139,227,139,223,139,220,137,220' name='Right Lower Leg' id='aBackRightLowerLeg' shape='poly'>";
    strHtml += "  </div>";
    strHtml += " </map>";
    strHtml += "  </div>";

    strHtml += "  </div>";

    strHtml += "   <div>";
    strHtml += "    <div id='divafterZoomWomen' style='width: 1500px; height: 400px; overflow: hidden;'>";
    strHtml += "       <img border='0' src='images/BigFemaleBack.png' id='ImgBackWoman' class='mappedObjectWomen' style=' height: 307px; margin-left: 20px;'></div>";
    strHtml += " </div>";
    strHtml += "   <div id='DivBigWomen' style='overflow: hidden; display: block; width: 500px;'>";
    strHtml += "   <img border='0' usemap='#ImageMapWomen' src='images/BigFemaleBack.png' class='ImageMapWomen' id='ImgDivBigWomen'>";
    strHtml += "  <map name='mappedObjectWomen' id='mappedObjectWomen'>";
    strHtml += "  <div class='mapControl' style='z-index: 1004;'>";
    strHtml += " <area shape='poly' name='Left Ear' coords='604,178,602,176,600,175,595,176,592,180,591,185,591,192,591,198,591,205,593,213,595,219,598,226,602,231,607,235,611,239,615,238,617,235,616,229,612,220,609,210,607,200,607,190,606,182' >";
    strHtml += " <area shape='poly' name='Right Ear' coords='745,178,744,184,743,192,742,199,741,206,738,215,736,221,733,231,733,235,735,238,739,238,743,236,745,232,748,229,752,224,755,217,756,212,757,205,758,199,759,192,759,184,759,181,758,178,756,176,752,175,749,175' >";
    strHtml += "<area coords='642,813,645,796,649,772,651,755,652,743,655,727,659,676,659,667,663,584,663,567,662,551,660,534,658,519,655,504,653,493,651,481,648,469,644,456,640,444,637,434,631,423,626,412,621,403,616,395,611,388,539,430,529,506,533,511,536,526,540,543,544,565,547,579,552,607,555,621,560,642,562,661,563,678,562,692,560,704,557,717,551,733,545,746,542,760,537,773,532,786,547,792,562,798,598,807' name='Back' id='aBackBigleft' shape='poly'>";
    strHtml += "  <area coords='816,778,808,782,797,788,753,804,712,810,710,786,707,767,705,747,704,731,701,703,696,655,693,578,693,555,694,537,695,519,697,504,701,488,704,474,709,460,715,445,721,430,726,419,733,405,741,392,748,383,812,427,820,500,814,516,808,541,802,577,797,601,793,615,790,633,786,655,786,679,786,695,795,720,802,739,811,762' id='aBackBigright' name='Back' shape='poly'>";
    strHtml += "  <area shape='poly' coords='1002,879,1053,857,1047,849,1041,837,1031,817,984,833,990,848,997,865' name='Right Wrist' id='aBackBigRightWrist'>";
    strHtml += "  <area shape='poly' coords='909,711,981,674,984,682,989,692,992,704,997,719,1002,735,1008,749,1014,770,1020,784,1026,801,1031,816,983,833,976,820,968,805,956,786,944,767,932,748,919,729' id='aBackBigRightForeArm' name='Right ForeArm'>";
    strHtml += " <area shape='poly' coords='878,632,937,602,943,612,947,621,953,628,959,635,963,640,969,651,974,661,979,667,981,669,907,708,907,708,906,705,900,696,895,684,891,670,888,659,883,648' id='aBackBigRightElbow' name='Right Elbow'>";
    strHtml += "<area shape='poly' coords='720,1250,730,1244,747,1240,762,1237,777,1237,795,1241,816,1251,817,1238,817,1228,819,1215,820,1199,823,1183,826,1163,828,1145,831,1113,833,1087,834,1067,837,1045,837,1031,837,1017,837,999,837,984,837,974,829,987,819,999,804,1013,787,1026,766,1035,751,1041,721,1050,711,1050,695,1048,698,1066,702,1088,705,1110,707,1127,711,1160,713,1180,714,1195' name='Right HamString' id='aBackBigRightHamString'>";
    strHtml += " <area shape='poly' coords='511,977,526,989,551,1005,576,1019,597,1029,622,1037,641,1042,654,1043,651,1062,648,1081,647,1098,642,1125,639,1146,637,1173,632,1202,631,1220,629,1239,629,1249,612,1242,599,1238,577,1236,554,1241,543,1245,534,1250,532,1233,529,1214,528,1196,525,1179,522,1160,520,1133,517,1096,515,1062,513,1029' name='Left HamString' id='aBackBigLeftHamString'>";
    strHtml += " <area shape='poly' coords='754,1615,800,1615,800,1607,801,1595,801,1585,803,1572,805,1559,808,1545,811,1533,815,1516,819,1501,822,1482,825,1460,826,1442,827,1420,826,1400,824,1386,822,1364,819,1347,817,1328,810,1339,799,1350,788,1353,776,1356,762,1356,743,1352,736,1347,729,1341,726,1362,723,1385,721,1402,720,1430,722,1451,725,1474,729,1494,734,1513,740,1533,745,1556,750,1579' id='aBackBigRightCalf' name='Right Calf'>";
    strHtml += "   <area  name='Left Calf' id='aBackBigleftCalf'  coords='530,1337,544,1348,553,1352,573,1355,591,1353,605,1349,619,1341,622,1351,623,1363,625,1377,627,1388,629,1401,629,1420,628,1443,627,1458,623,1478,620,1493,617,1507,613,1522,608,1537,604,1555,600,1575,597,1596,596,1609,550,1611,550,1594,548,1582,546,1569,542,1550,540,1536,536,1523,531,1503,527,1486,524,1464,523,1449,523,1430,523,1411,524,1390,525,1371,527,1357' shape='poly'>";
    strHtml += " <area shape='poly' coords='531,1337,545,1348,554,1352,574,1355,592,1353,606,1349,619,1341,620,1348,621,1361,624,1375,627,1390,628,1404,629,1423,627,1443,625,1458,623,1476,620,1491,615,1507,612,1522,606,1540,603,1555,599,1576,596,1594,595,1608,551,1610,549,1598,548,1580,545,1563,542,1546,540,1532,534,1518,531,1502,527,1487,525,1469,523,1454,523,1435,523,1417,523,1396,525,1380,528,1359' id='aBackBigLeftHip' name='Left Hip'>";
    strHtml += " <area shape='poly' coords='564,943,574,957,584,968,595,979,612,988,623,990,639,990,657,984,669,979,674,975,690,981,708,988,723,989,738,986,744,982,758,974,767,967,774,957,783,944,776,933,770,925,762,912,756,898,754,886,754,870,756,855,761,841,768,828,778,814,756,820,731,828,710,829,684,832,661,833,640,831,620,827,599,822,579,819,587,828,594,843,597,857,598,873,597,891,594,906,583,924' id='aBackBigButtock' name='Buttock'>";
    strHtml += " <area shape='poly' coords='839,959,840,949,840,936,840,921,840,909,838,891,837,877,834,864,833,852,831,830,828,806,821,790,805,794,797,800,786,807,775,816,766,827,760,837,756,852,754,871,754,889,760,905,765,918,771,927,776,936,787,945,795,949,804,954,819,958,831,961' id='aBackBigRightHip' name='Right Hip'>";
    strHtml += " <area shape='poly' coords='877,629,937,602,932,587,925,573,918,555,911,535,904,518,897,495,892,477,887,460,879,433,810,426,821,495,823,506,828,524,839,550,847,572,856,594,866,612' id='aBackBigRightUpperArm' name='Right UpperArm(Triceps)'>";
    strHtml += "<area shape='poly' coords='776,402,727,369,768,343,780,350,792,353,805,357,818,361,829,366,843,372,849,379,856,387,864,401,872,414,878,432,804,425' id='aBackBigRightShoulder' name='Right Shoulder'>";
    strHtml += "<area shape='poly' coords='576,345,625,374,541,424,533,428,517,430,495,431,471,432,476,421,479,413,483,405,488,396,494,387,501,380,505,376,520,367,540,359,557,353,568,350' id='aBackBigLeftShoulder' name='Left Shoulder'>";
    strHtml += " <area shape='poly' coords='539,429,536,457,531,490,528,507,521,524,515,540,508,554,504,567,495,585,488,602,480,617,470,632,408,610,415,592,426,567,436,541,448,506,456,482,464,451,470,432' id='aBackBigLeftUpperArm' name='Left Upper Arm(Triceps)'>";
    strHtml += " <area shape='poly' coords='368,680,440,712,443,707,448,696,452,684,456,675,459,665,463,654,466,646,469,634,407,611,401,622,392,633,384,645,376,658,370,668' name='Left Elbow' id='aBackBigLeftElbow'>";
    strHtml += " <area shape='poly' coords='328,797,372,821,376,815,380,807,387,798,391,789,397,780,404,769,411,758,419,745,425,735,432,724,438,715,367,682,361,696,353,718,348,736,340,762,334,778' name='Left ForeArm' id='aBackBigLeftForeArm'>";
    strHtml += "<area shape='poly' coords='301,852,348,879,351,870,354,860,358,852,363,838,367,832,370,823,325,799,322,810,319,817,314,828,308,839' name='Left Wrist' id='aBackBigLEftWrist'>";
    strHtml += "<area shape='poly' coords='510,960,522,959,534,955,544,952,555,946,565,940,574,933,580,925,586,917,591,908,594,899,597,890,599,881,599,867,597,855,592,840,587,829,580,819,572,810,560,801,546,792,530,788,524,800,521,810,519,829,517,845,514,863,511,882,510,896,509,921,508,938' name='16'>";
    strHtml += " <area coords='631,273,631,273,629,270,626,256,621,242,616,226,611,210,606,194,605,180,604,167,605,158,606,147,609,137,613,127,618,119,624,110,631,104,637,100,645,95,651,92,661,90,674,88,687,88,702,92,713,98,721,104,728,114,736,123,741,138,744,153,746,167,746,181,744,195,741,208,737,225,732,237,728,250,723,264,722,270,719,271,716,273' shape='poly' name='Head' id='aBackBigHead'>";
    strHtml += "  <area shape='poly' id='aBackBigLeftAnkle' name='Left Ankle' coords='552,1612,551,1623,550,1636,548,1647,547,1657,544,1669,544,1683,544,1695,610,1694,609,1682,607,1671,605,1660,602,1647,599,1634,597,1623,596,1609,597,1612' >";
    strHtml += "  <area shape='poly' id='aBackBigRightAnkle' name='Right Ankle' coords='753,1618,752,1627,751,1639,750,1646,748,1654,745,1663,743,1672,743,1681,745,1694,806,1694,807,1679,807,1669,803,1655,802,1643,801,1634,801,1622,801,1617' >";
    strHtml += "    <area shape='poly' id='aBackBigLeftToe' name='Left Toe' coords='544,1695,537,1696,530,1696,528,1703,527,1711,530,1715,535,1725,541,1738,546,1747,552,1751,564,1758,573,1758,587,1754,597,1747,602,1736,604,1728,605,1718,611,1707,615,1698,615,1693,614,1686,610,1690,610,1697,547,1698' >";
    strHtml += "   <area shape='poly' id='aBackBigRightToe' name='Right Toe' coords='738,1698,811,1698,817,1697,824,1705,824,1712,816,1719,812,1729,807,1739,801,1748,792,1754,783,1757,771,1757,761,1753,751,1745,745,1731,746,1722,742,1711' >";
    strHtml += "   <area shape='poly' id='aBackBigNeck' name='Neck' coords='677,344,771,343,737,324,721,311,719,273,632,273,630,308,620,319,606,329,576,344' >";
    strHtml += "      <area shape='poly' id='aBackBigUpperSpine' name='Upper Spine'  coords='648,345,663,485,690,485,704,345' > ";
    strHtml += "      <area shape='poly' id='aBackBigLowerSpine' name='Lower Spine' coords='706,807,652,807,665,666,689,666' >";
    strHtml += "      <area shape='poly' id='aBackBigMiddleSpine' name='Middle Spine' coords='690,485,689,664,664,664,663,485' >";
    strHtml += "  <area shape='poly' id='aBackBigrightKnee' name='Right Knee' coords='720,1256,723,1253,727,1250,730,1248,735,1245,740,1242,745,1240,752,1238,762,1237,770,1237,778,1238,788,1240,797,1244,802,1247,809,1252,814,1257,816,1260,816,1265,816,1272,815,1283,816,1292,816,1302,816,1312,816,1326,816,1329,814,1332,810,1336,804,1340,796,1345,788,1348,781,1350,772,1351,763,1351,754,1350,741,1346,733,1342,729,1339,728,1330,726,1318,724,1307,721,1296,719,1286,719,1268'>";
    strHtml += " <area shape='poly' id='aBackBigLeftKnee' name='Left Knee' coords='533,1256,537,1253,540,1250,544,1248,548,1245,552,1243,556,1241,561,1240,568,1238,575,1237,582,1237,590,1238,596,1239,603,1241,609,1244,615,1247,623,1253,630,1260,630,1269,630,1277,629,1283,628,1292,627,1300,626,1307,623,1319,621,1328,620,1337,618,1340,614,1342,609,1344,605,1347,600,1348,592,1350,586,1351,579,1351,572,1351,564,1350,557,1348,550,1344,541,1339,536,1335,531,1330,532,1323,533,1315,533,1307,534,1296,534,1284,533,1269,533,1262'>";

    strHtml += "  </div>";
    strHtml += " </map>";
    strHtml += "  </div>";
    strHtml += "  </div>";
    strHtml += "   </div>";
    strHtml += " </div>";
    strHtml += " </div>";





    $('#divImage').html('');

    $('#divImage').html(strHtml);

    MapStyles();
    if (ViewMode == "Back") {

        $("#imgView").attr("src", "images/front.png");
        $("#imgView").attr('alt', 'Front');
        ReloadBack();
    } else {

        $("#imgView").attr("src", "images/Back.png");
        $("#imgView").attr('alt', 'Back');
        // Reload();
    }

    $("div area").bind("mouseover", function () {
        var s = $(this).attr("id");

        var title = $(this).attr('name');

        if (title != '') {
            if (title == "General/Constitution") {

                $('.map').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0, shadow: false, alwaysOn: false, 'z-index': 10 });
                $(".Cntair").css({ 'background-image': 'url(images/femaleaura.png)', 'background-size': '100% 100%', 'background-position': '0 1px' });
            }
            $(this).data('tipText', title).removeAttr('name');
            // if (IsTooltip == "True") {
            $('<p class="tooltipClass"></p>')
                .text(title)
                .appendTo('body')
                .fadeIn('slow');
        }

    });

    $("div area").bind("mouseout", function () {
        $('.map').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5, alwaysOn: false });
        $(".Cntair").css({ 'background-color': '#3F424D', 'background-image': 'url(images/1femaleaura.png)', 'background-position': '0 1px' });
        $(this).attr('name', $(this).data('tipText'));
        $('.tooltipClass').remove();

    });

    $("div area").bind("mousemove", function (e) {

        var mousex = e.pageX + 20; ; //Get X coordinates
        var mousey = e.pageY + 10; ; //Get Y coordinates
        $('.tooltipClass')
                .css({ top: mousey, left: mousex })

    });
    $("div area").bind("click", function () {
        var s = $(this).attr("id");






        $("#divImageContainer").css({ visibility: 'hidden' });
        //        var img = $("#divImageContainer img");
        //        var ZoomImage = $("#ImgMan");
        $("#divafterZoom .mappedObject").css({ 'position': 'relative' });

        $("#divImageContainer").css({ visibility: 'hidden' });
        //        $("#divarrows").css({ visibility: 'visible' });
        $("#divafterZoomWomen .mappedObjectWomen").css({ 'position': 'relative' });

        $("#divBack").css({ visibility: 'hidden' });
        $("#hdnID").val(s);


        if (s == "auroID" || s == "auroID1") {


        } else {


            performZoomIN(s);
        }
    });
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
        // $("#cntPanel").html($(".Cntair").html());
        ResetZoomBack();
        ReloadBack();

    }
    if (alt == "Front") {

        $("#divBack").css({ display: 'none' });
        $("#divImageContainer").css({ display: 'block' });
        $("#divafterZoom").css({ display: 'none' });
        $("#DivBig").css({ display: 'none' });
        $("#imgView").attr("src", "images/back.png");
        $("#imgView").attr('alt', 'Back');
        //  $("#cntPanel").html($(".Cntair").html());
        ResetZoomFront();
        Reload();
    }
    //$("#cntPanel").html($(".Cntair").html());
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
    setTimeout(HAreaBackNeck, 170);
}
function HAreaBackNeck() {
    $("#aHead").trigger("mouseout");
    $("#aBackNeck").trigger("mouseover");
    setTimeout(HAreaBackUpperArm, 170);
}
function HAreaBackUpperArm() {
    $("#aBackNeck").trigger("mouseout");
    $("#aBackLeftUpperArm").trigger("mouseover");
    $("#aBackRightUpperArm").trigger("mouseover");
    setTimeout(HAreaBackLowerArm, 170);
}
function HAreaBackLowerArm() {
    $("#aBackLeftUpperArm").trigger("mouseout");
    $("#aBackRightUpperArm").trigger("mouseout");
    $("#aBackLeftLowerArm").trigger("mouseover");
    $("#aBackRightLowerArm").trigger("mouseover");
    setTimeout(HAreaBack, 170);
}
function HAreaBack() {
    $("#aBackLeftLowerArm").trigger("mouseout");
    $("#aBackRightLowerArm").trigger("mouseout");
    $("#aBack").trigger("mouseover");
    setTimeout(HAreaBackButtonLock, 170);
}
function HAreaBackButtonLock() {
    $("#aBack").trigger("mouseout");
    $("#aBackButtonLock").trigger("mouseover");
    setTimeout(HAreaBackUpperLegs, 170);
}
function HAreaBackUpperLegs() {
    $("#aBackButtonLock").trigger("mouseout");
    $("#aBackLeftUpperLeg").trigger("mouseover");
    $("#aBackRightUpperLeg").trigger("mouseover");
    setTimeout(HAreaBackLowerLegs, 170);
}
function HAreaBackLowerLegs() {
    $("#aBackLeftUpperLeg").trigger("mouseout");
    $("#aBackRightUpperLeg").trigger("mouseout");
    $("#aBackLeftLowerLeg").trigger("mouseover");
    $("#aBackRightLowerLeg").trigger("mouseover");
    setTimeout(RemoveBackHArea, 170);
}
function RemoveBackHArea() {
    $("#aBackLeftLowerLeg").trigger("mouseout");
    $("#aBackRightLowerLeg").trigger("mouseout");
}
function Reload() {

    setTimeout(HAreaHead, 170);
}
function HAreaHead() {
    $("#aHead").trigger("mouseover");
    setTimeout(HAreaNeck, 170);
}
function HAreaNeck() {
    $("#aHead").trigger("mouseout");
    $("#aNeck").trigger("mouseover");
    setTimeout(HAreaUpperArm, 170);
}
function HAreaUpperArm() {
    $("#aNeck").trigger("mouseout");
    $("#aLeftUpperArm").trigger("mouseover");
    $("#aRightUpperArm").trigger("mouseover");
    setTimeout(HAreaLower, 170);
}
function HAreaLower() {
    $("#aLeftUpperArm").trigger("mouseout");
    $("#aRightUpperArm").trigger("mouseout");
    $("#aLeftLowerArm").trigger("mouseover");
    $("#aRightLowerArm").trigger("mouseover");
    setTimeout(HAreaChest, 170);
}
function HAreaChest() {
    $("#aLeftLowerArm").trigger("mouseout");
    $("#aRightLowerArm").trigger("mouseout");
    $("#aChest").trigger("mouseover");
    setTimeout(HAreaStomach, 170);
}
function HAreaStomach() {
    $("#aChest").trigger("mouseout");
    $("#aStomach").trigger("mouseover");
    setTimeout(HAreaPelvis, 170);
}
function HAreaPelvis() {
    $("#aStomach").trigger("mouseout");
    $("#aPelvis").trigger("mouseover");
    setTimeout(HAreaUpperLegs, 170);
}
function HAreaUpperLegs() {
    $("#aStomach").trigger("mouseout");
    $("#aLeftUpperLeg").trigger("mouseover");
    $("#aRightUpperLeg").trigger("mouseover");
    setTimeout(HAreaLowerLegs, 170);
}
function HAreaLowerLegs() {
    $("#aLeftUpperLeg").trigger("mouseout");
    $("#aRightUpperLeg").trigger("mouseout");
    $("#aLeftLowerLeg").trigger("mouseover");
    $("#aRightLowerLeg").trigger("mouseover");
    setTimeout(RemoveHArea, 170);
}
function RemoveHArea() {
    $("#aLeftLowerLeg").trigger("mouseout");
    $("#aRightLowerLeg").trigger("mouseout");
}
var IsTooltip = "True";
$(document).ready(function () {
    Reload();
    $("div area").click(function () {



        $("#imgBackView").css({ 'visibility': 'visible' });
        var id = $(this).attr('id');

        if (id == "auroID" || id == "auroID1") {
        } else {

            var img = $("#divImageContainer img");
            var ZoomImage = $("#ImgMan");
            $("#divafterZoom .mappedObject").css({ 'position': 'relative' });

            $("#divImageContainer").css({ visibility: 'hidden' });
            $("#divarrows").css({ visibility: 'visible' });
            $("#divafterZoomWomen .mappedObjectWomen").css({ 'position': 'relative' });

            $("#divBack").css({ visibility: 'hidden' });
            $("#hdnID").val(id);

            performZoomIN(id);
        }

    });

    $(".mapControl area").hover(function () {

        var title = $(this).attr('name');
        if (title != '') {


            if (title == "General/Constitution") {

                $('.map').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0, shadow: false, alwaysOn: false, 'z-index': 10 });
                $(".Cntair").css({ 'background-image': 'url(images/femaleaura.png)', 'background-size': '100% 100%', 'background-position': '0 1px' });
            }
            $(this).data('tipText', title).removeAttr('name');
            // if (IsTooltip == "True") {
            $('<p class="tooltipClass"></p>')
                .text(title)
                .appendTo('body')
                .fadeIn('slow');
        }

    }, function () {
        // Hover out code
        $(".Cntair").css({ 'background-color': '#3F424D', 'background-image': 'url(images/femaleaura.png)', 'background-size': '0% 0%', 'background-position': '0 0px' });
        $('.map').maphilight({ fade: true, stroke: false, fillColor: 'FA1B1B', fillOpacity: 0.5, alwaysOn: false });

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
        if (title != '') {
            $(this).data('tipText', title).removeAttr('name');
            if (IsTooltip == "True") {
                $('<p class="tooltipClass"></p>')
                .text(title)
                .appendTo('body')
                .fadeIn('slow');
            }
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

        $("#divafterZoom").css({ 'margin-top': '-76px', position: 'relative', 'margin-left': '-539px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });

    }

    if (id == "aNeck") {

        $("#divafterZoom").css({ 'margin-top': '-150px', position: 'relative', 'margin-left': '-539px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });

    }

    if (id == "aRightUpperArm") {
        $("#divafterZoom").css({ 'margin-top': '-373px', position: 'relative', 'margin-left': '-330px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aRightLowerArm") {
        $("#divafterZoom").css({ 'margin-top': '-616px', position: 'relative', 'margin-left': '-226px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }


    if (id == "aLeftUpperArm" || id == "BigLeftElbow") {
        $("#divafterZoom").css({ 'margin-top': '-373px', position: 'relative', 'margin-left': '-730px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aLeftLowerArm") {
        $("#divafterZoom").css({ 'margin-top': '-616px', position: 'relative', 'margin-left': '-826px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }


    if (id == "aPelvis") {
        $("#divafterZoom").css({ 'margin-top': '-725px', position: 'relative', 'margin-left': '-541px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aChest") {
        $("#divafterZoom").css({ 'margin-top': '-376px', position: 'relative', 'margin-left': '-539px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }

    if (id == "aStomach") {
        $("#divafterZoom").css({ 'margin-top': '-588px', position: 'relative', 'margin-left': '-539px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aRightUpperLeg") {
        $("#divafterZoom").css({ 'margin-top': '-950px', position: 'relative', 'margin-left': '-400px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aRightLowerLeg") {
        $("#divafterZoom").css({ 'margin-top': '-1314px', position: 'relative', 'margin-left': '-438px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aLeftUpperLeg") {
        $("#divafterZoom").css({ 'margin-top': '-950px', position: 'relative', 'margin-left': '-650px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }

    if (id == "aLeftLowerLeg") {
        $("#divafterZoom").css({ 'margin-top': '-1314px', position: 'relative', 'margin-left': '-642px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }


    if (id == "aLeftLowerArm" || id == "BigLeftForeArm") {
        $("#divafterZoom").css({ 'margin-top': '-616px', position: 'relative', 'margin-left': '-826px', height: '1450px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '1450px' });
    }
    if (id == "BigLeftWrist") {
        $("#divafterZoom").css({ 'margin-top': '-716px', position: 'relative', 'margin-left': '-916px', height: '1450px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '1450px' });
    }
    if (id == "BigLeftUpperArm") {
        $("#divafterZoom").css({ 'margin-top': '-373px', position: 'relative', 'margin-left': '-730px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigLeftShoulder") {
        $("#divafterZoom").css({ 'margin-top': '-200px', position: 'relative', 'margin-left': '-630px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigNeck") {
        $("#divafterZoom").css({ 'margin-top': '-200px', position: 'relative', 'margin-left': '-530px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigJaw") {
        $("#divafterZoom").css({ 'margin-top': '-150px', position: 'relative', 'margin-left': '-530px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigMouth" || id == "BigLeftFace" || id == "BigRightFace" || id == "BigRightEye" || id == "BigLeftEye") {
        $("#divafterZoom").css({ 'margin-top': '-80px', position: 'relative', 'margin-left': '-530px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigSternum" || id == "BigLeftChest") {
        //alert("BigLeftChest1");
        $("#divafterZoom").css({ 'margin-top': '-350px', position: 'relative', 'margin-left': '-580px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigRightChest") {
        $("#divafterZoom").css({ 'margin-top': '-350px', position: 'relative', 'margin-left': '-530px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigRightShoulder") {
        $("#divafterZoom").css({ 'margin-top': '-300px', position: 'relative', 'margin-left': '-430px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigRightUpperArm") {
        $("#divafterZoom").css({ 'margin-top': '-400px', position: 'relative', 'margin-left': '-330px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigRightElbow") {
        $("#divafterZoom").css({ 'margin-top': '-500px', position: 'relative', 'margin-left': '-280px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigRightForeArm") {
        $("#divafterZoom").css({ 'margin-top': '-600px', position: 'relative', 'margin-left': '-230px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigRightWrist") {
        $("#divafterZoom").css({ 'margin-top': '-750px', position: 'relative', 'margin-left': '-180px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigUpperAbdoman") {
        $("#divafterZoom").css({ 'margin-top': '-480px', position: 'relative', 'margin-left': '-540px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigLowerAbdoman") {
        $("#divafterZoom").css({ 'margin-top': '-600px', position: 'relative', 'margin-left': '-540px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigLeftHip") {
        $("#divafterZoom").css({ 'margin-top': '-650px', position: 'relative', 'margin-left': '-600px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigPelvis") {
        $("#divafterZoom").css({ 'margin-top': '-650px', position: 'relative', 'margin-left': '-540px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigRightHip") {
        $("#divafterZoom").css({ 'margin-top': '-650px', position: 'relative', 'margin-left': '-500px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigGenitals") {
        $("#divafterZoom").css({ 'margin-top': '-750px', position: 'relative', 'margin-left': '-540px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigRightThigh") {
        $("#divafterZoom").css({ 'margin-top': '-920px', position: 'relative', 'margin-left': '-420px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigRightKnee") {
        $("#divafterZoom").css({ 'margin-top': '-1100px', position: 'relative', 'margin-left': '-420px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigRightShin") {
        $("#divafterZoom").css({ 'margin-top': '-1300px', position: 'relative', 'margin-left': '-420px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigRightAnkle" || id == "BigRightFoot" || id == "BigRightToes" || id == "BigRightThumb") {
        $("#divafterZoom").css({ 'margin-top': '-1500px', position: 'relative', 'margin-left': '-420px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigLeftThigh") {
        $("#divafterZoom").css({ 'margin-top': '-940px', position: 'relative', 'margin-left': '-650px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigLeftKnee") {
        $("#divafterZoom").css({ 'margin-top': '-1100px', position: 'relative', 'margin-left': '-650px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigLeftShin") {
        $("#divafterZoom").css({ 'margin-top': '-1330px', position: 'relative', 'margin-left': '-650px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigLeftShin") {
        $("#divafterZoom").css({ 'margin-top': '-1330px', position: 'relative', 'margin-left': '-650px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "BigLeftAnkle") {
        $("#divafterZoom").css({ 'margin-top': '-1530px', position: 'relative', 'margin-left': '-650px', height: '2000px' });
        $("#ImgMan").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }

    //********Back**********
    if (id == "aBackHead" || id == "aBackBigHead" || id == "aBackBigLeftEar" || id == "aBackBigRightEar") {
        $("#divafterZoomWomen").css({ 'margin-top': '-76px', position: 'relative', 'margin-left': '-539px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBack") {

        $("#divafterZoomWomen").css({ 'margin-top': '-337px', position: 'relative', 'margin-left': '-539px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }

    if (id == "aBackNeck" || id == "aBackBigNeck") {

        $("#divafterZoomWomen").css({ 'margin-top': '-100px', position: 'relative', 'margin-left': '-539px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }

    if (id == "aBackButtonLock" || id == "aBackBigButtock") {

        $("#divafterZoomWomen").css({ 'margin-top': '-776px', position: 'relative', 'margin-left': '-539px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackRightUpperLeg" || id == "aBackBigRightHamString") {

        $("#divafterZoomWomen").css({ 'margin-top': '-976px', position: 'relative', 'margin-left': '-639px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackBigRightHamString") {

        $("#divafterZoomWomen").css({ 'margin-top': '-956px', position: 'relative', 'margin-left': '-639px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackRightLowerLeg") {

        $("#divafterZoomWomen").css({ 'margin-top': '-1376px', position: 'relative', 'margin-left': '-639px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackBigRightCalf") {

        $("#divafterZoomWomen").css({ 'margin-top': '-1326px', position: 'relative', 'margin-left': '-639px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackLeftUpperLeg") {

        $("#divafterZoomWomen").css({ 'margin-top': '-976px', position: 'relative', 'margin-left': '-439px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }

    if (id == "aBackLeftLowerLeg") {

        $("#divafterZoomWomen").css({ 'margin-top': '-1376px', position: 'relative', 'margin-left': '-439px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackBigleftCalf") {

        $("#divafterZoomWomen").css({ 'margin-top': '-1326px', position: 'relative', 'margin-left': '-439px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackRightUpperArm" || id == "aBackBigRightUpperArm") {

        $("#divafterZoomWomen").css({ 'margin-top': '-376px', position: 'relative', 'margin-left': '-739px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }

    if (id == "aBackRightLowerArm" || id == "aBackBigRightForeArm") {

        $("#divafterZoomWomen").css({ 'margin-top': '-656px', position: 'relative', 'margin-left': '-839px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }

    if (id == "aBackLeftUpperArm" || id == "aBackBigLeftUpperArm") {

        $("#divafterZoomWomen").css({ 'margin-top': '-376px', position: 'relative', 'margin-left': '-339px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackLeftLowerArm" || id == "aBackBigLeftForeArm") {

        $("#divafterZoomWomen").css({ 'margin-top': '-626px', position: 'relative', 'margin-left': '-249px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackBigRightShoulder") {

        $("#divafterZoomWomen").css({ 'margin-top': '-336px', position: 'relative', 'margin-left': '-639px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackBigRightElbow") {

        $("#divafterZoomWomen").css({ 'margin-top': '-539px', position: 'relative', 'margin-left': '-756px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackBigRightWrist") {

        $("#divafterZoomWomen").css({ 'margin-top': '-739px', position: 'relative', 'margin-left': '-856px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackBigLEftWrist") {

        $("#divafterZoomWomen").css({ 'margin-top': '-726px', position: 'relative', 'margin-left': '-219px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackBigLeftElbow") {

        $("#divafterZoomWomen").css({ 'margin-top': '-526px', position: 'relative', 'margin-left': '-259px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackBigLeftShoulder") {

        $("#divafterZoomWomen").css({ 'margin-top': '-276px', position: 'relative', 'margin-left': '-339px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackBigleft") {

        $("#divafterZoomWomen").css({ 'margin-top': '-396px', position: 'relative', 'margin-left': '-489px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackBigright") {

        $("#divafterZoomWomen").css({ 'margin-top': '-396px', position: 'relative', 'margin-left': '-589px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackBigLeftHamString") {

        $("#divafterZoomWomen").css({ 'margin-top': '-956px', position: 'relative', 'margin-left': '-439px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackBigLeftAnkle" || id == "aBackBigLeftToe") {

        $("#divafterZoomWomen").css({ 'margin-top': '-1476px', position: 'relative', 'margin-left': '-439px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackBigRightAnkle" || id == "aBackBigRightToe") {

        $("#divafterZoomWomen").css({ 'margin-top': '-1476px', position: 'relative', 'margin-left': '-639px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackBigRightHip") {

        $("#divafterZoomWomen").css({ 'margin-top': '-776px', position: 'relative', 'margin-left': '-639px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackBigLeftHip") {

        $("#divafterZoomWomen").css({ 'margin-top': '-776px', position: 'relative', 'margin-left': '-439px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackBigLowerSpine") {

        $("#divafterZoomWomen").css({ 'margin-top': '-576px', position: 'relative', 'margin-left': '-539px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackBigMiddleSpine") {

        $("#divafterZoomWomen").css({ 'margin-top': '-476px', position: 'relative', 'margin-left': '-539px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackBigUpperSpine") {

        $("#divafterZoomWomen").css({ 'margin-top': '-337px', position: 'relative', 'margin-left': '-539px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackBigLeftKnee") {

        $("#divafterZoomWomen").css({ 'margin-top': '-1176px', position: 'relative', 'margin-left': '-439px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }
    if (id == "aBackBigrightKnee") {

        $("#divafterZoomWomen").css({ 'margin-top': '-1176px', position: 'relative', 'margin-left': '-639px', height: '2000px' });
        $("#ImgBackWoman").css({ 'margin-top': '0px', position: 'relative', 'margin-left': '0', height: '2000px' });
    }

    var ZoomImage = $("#ImgMan");
    ZoomImage.attr({ usemap: "#mappedObject", useMap: "#mappedObject" });
    var ZoomBackImage = $("#ImgBackWoman");
    ZoomBackImage.attr({ usemap: "#mappedObjectWomen", useMap: "#mappedObjectWomen" });

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

function performZoomIN(id) {
    moveClick = false;




    if (id == "aHead") {
        //*****aHead:- "HEAD"******area9:- Neck******
        $("#ImgMan").stop().animate({
            'margin-left': '-539px', 'opacity': '0px', 'height': '1800px', 'position': 'relative', 'margin-top': '-76px'
        });

    }
    if (id == "aNeck") {
        //*****aHead:- "HEAD"******area9:- Neck******
        $("#ImgMan").stop().animate({ 'margin-left': '-539px', 'opacity': '0px', 'height': '1800px', 'position': 'relative', 'margin-top': '-150px' });

    }
    if (id == "aRightUpperArm") {
        $("#ImgMan").stop().animate({ 'margin-left': '-330px', 'opacity': '0px', 'height': '1800px', 'position': 'relative', 'margin-top': '-373px' });

    }
    if (id == "aRightLowerArm") {
        $("#ImgMan").stop().animate({
            'margin-left': '-226px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-616px'
        });
    }
    if (id == "aChest") {
        $("#ImgMan").stop().animate({
            'margin-left': '-539px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-376px'
        });
    }
    if (id == "aStomach") {
        $("#ImgMan").stop().animate({
            'margin-left': '-539px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-588px'
        });
    }
    if (id == "aChest") {
        $("#ImgMan").stop().animate({
            'margin-left': '-539px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-376px'
        });
    }
    if (id == "aPelvis") {
        $("#ImgMan").stop().animate({
            'margin-left': '-541px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-725px'
        });
    }
    if (id == "aLeftUpperArm") {
        $("#ImgMan").stop().animate({
            'margin-left': '-730px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-373px'
        });
    }
    if (id == "aLeftLowerArm") {
        $("#ImgMan").stop().animate({
            'margin-left': '-826px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-616px'
        });
    }

    if (id == "aLeftLowerLeg") {
        $("#ImgMan").stop().animate({
            'margin-left': '-642px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-1314px'
        });
    }
    if (id == "aRightLowerLeg") {
        $("#ImgMan").stop().animate({
            'margin-left': '-438px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-1314px'
        });
    }
    if (id == "aRightUpperLeg") {
        $("#ImgMan").stop().animate({
            'margin-left': '-400px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-950px'
        });
    }

    if (id == "aLeftUpperLeg") {
        $("#ImgMan").stop().animate({
            'margin-left': '-650px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-950px'
        });
    }
    //***********Big Front Image***************
    if (id == "BigLeftForeArm") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-826px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-616px'
        });
    }


    if (id == "BigLeftWrist") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-916px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-716px'
        });
    }
    if (id == "BigLeftElbow") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-730px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-373px'
        });
    }
    if (id == "BigLeftUpperArm") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-730px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-373px'
        });
    }
    if (id == "BigLeftShoulder") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-630px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-200px'
        });
    }
    if (id == "BigNeck") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-530px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-200px'
        });
    }
    if (id == "BigJaw") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-530px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-150px'
        });
    }
    if (id == "BigMouth" || id == "BigLeftFace" || id == "BigRightFace" || id == "BigRightEye" || id == "BigLeftEye") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-530px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-80px'
        });
    }
    if (id == "BigSternum" || id == "BigLeftChest") {
        // alert("BigLeftChest");
        $("#divafterZoom").stop().animate({
            'margin-left': '-580px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-350px'
        });
    }
    if (id == "BigRightChest") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-530px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-350px'
        });
    }
    if (id == "BigRightShoulder") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-430px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-300px'
        });
    }
    if (id == "BigRightUpperArm") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-330px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-400px'
        });
    }
    if (id == "BigRightElbow") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-280px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-500px'
        });
    }
    if (id == "BigRightForeArm") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-230px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-600px'
        });
    }
    if (id == "BigRightWrist") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-180px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-750px'
        });
    }
    if (id == "BigUpperAbdoman") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-540px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-480px'
        });
    }
    if (id == "BigLowerAbdoman") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-540px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-600px'
        });
    }
    if (id == "BigLeftHip") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-600px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-650px'
        });
    }
    if (id == "BigPelvis") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-540px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-650px'
        });
    }
    if (id == "BigRightHip") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-500px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-650px'
        });
    }
    if (id == "BigGenitals") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-540px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-750px'
        });
    }
    if (id == "BigRightThigh") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-420px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-920px'
        });
    }
    if (id == "BigRightKnee") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-420px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-1100px'
        });
    }
    if (id == "BigRightShin") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-420px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-1300px'
        });
    }
    if (id == "BigRightAnkle" || id == "BigRightFoot" || id == "BigRightToes" || id == "BigRightThumb") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-420px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-1500px'
        });
    }
    if (id == "BigLeftThigh") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-650px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-940px'
        });
    }
    if (id == "BigLeftKnee") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-650px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-1100px'
        });
    }
    if (id == "BigLeftShin") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-650px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-1330px'
        });
    }
    if (id == "BigLeftAnkle") {
        $("#divafterZoom").stop().animate({
            'margin-left': '-650px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-1530px'
        });
    }
    //***********Back Small*****************
    if (id == "aBackHead") {
        $("#ImgBackWoman").stop().animate({
            'margin-left': '-539px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-76px'
        });

    }
    if (id == "aBackNeck") {
        $("#ImgBackWoman").stop().animate({
            'margin-left': '-539px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-100px'
        });

    }
    if (id == "aBack") {
        $("#ImgBackWoman").stop().animate({
            'margin-left': '-539px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-337px'
        });

    }
    if (id == "aBackButtonLock") {
        $("#ImgBackWoman").stop().animate({
            'margin-left': '-539px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-776px'
        });

    }
    if (id == "aBackRightUpperLeg") {
        $("#ImgBackWoman").stop().animate({
            'margin-left': '-639px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-976px'
        });

    }
    if (id == "aBackRightLowerLeg") {
        $("#ImgBackWoman").stop().animate({
            'margin-left': '-639px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-1376px'
        });

    }
    if (id == "aBackLeftUpperLeg") {
        $("#ImgBackWoman").stop().animate({
            'margin-left': '-439px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-976px'
        });

    }
    if (id == "aBackLeftLowerLeg") {
        $("#ImgBackWoman").stop().animate({
            'margin-left': '-439px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-1376px'
        });

    }
    if (id == "aBackRightUpperArm") {
        $("#ImgBackWoman").stop().animate({
            'margin-left': '-739px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-376px'
        });

    }
    if (id == "aBackRightLowerArm") {
        $("#ImgBackWoman").stop().animate({
            'margin-left': '-839px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-656px'
        });

    }
    if (id == "aBackLeftUpperArm") {
        $("#ImgBackWoman").stop().animate({
            'margin-left': '-339px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-376px'
        });

    }
    if (id == "aBackLeftLowerArm") {
        $("#ImgBackWoman").stop().animate({
            'margin-left': '-249px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-626px'
        });

    }
    //**********Back Big Image***********
    if (id == "aBackBigLeftForeArm") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-249px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-626px'
        });

    }

    if (id == "aBackBigLEftWrist") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-219px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-726px'
        });

    }
    if (id == "aBackBigLeftElbow") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-259px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-526px'
        });

    }
    if (id == "aBackBigLeftUpperArm") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-339px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-376px'
        });

    }
    if (id == "aBackBigLeftShoulder") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-339px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-276px'
        });

    }
    if (id == "aBackBigleft") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-489px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-396px'
        });

    }
    if (id == "aBackBigright") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-589px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-396px'
        });

    }
    if (id == "aBackBigLeftHamString") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-439px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-956px'
        });

    }
    if (id == "aBackBigRightUpperArm") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-739px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-376px'
        });

    }
    if (id == "aBackBigRightForeArm") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-839px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-656px'
        });

    }
    if (id == "aBackBigRightElbow") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-756px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-539px'
        });

    }
    if (id == "aBackBigRightWrist") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-856px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-739px'
        });

    }
    if (id == "aBackBigRightShoulder") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-639px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-336px'
        });

    }
    if (id == "aBackBigleftCalf") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-439px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-1326px'
        });

    }
    if (id == "aBackBigLeftAnkle" || id == "aBackBigLeftToe") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-439px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-1476px'
        });

    }
    if (id == "aBackBigRightHamString") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-639px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-956px'
        });

    }
    if (id == "aBackBigRightCalf") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-639px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-1326px'
        });

    }
    if (id == "aBackBigRightAnkle" || id == "aBackBigRightToe") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-639px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-1476px'
        });

    }
    if (id == "aBackBigButtock") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-539px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-776px'
        });

    }
    if (id == "aBackBigRightHip") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-639px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-776px'
        });

    }
    if (id == "aBackBigLeftHip") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-439px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-776px'
        });

    }
    if (id == "aBackBigLowerSpine") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-539px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-576px'
        });

    }
    if (id == "aBackBigMiddleSpine") {
       
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-539px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-476px'
        });

    } 
    if (id == "aBackBigUpperSpine") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-539px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-337px'
        });

    }
    if (id == "aBackBigHead" || id == "aBackBigLeftEar" || id == "aBackBigRightEar") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-539px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-76px'
        });

    }
    if (id == "aBackBigNeck") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-539px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-100px'
        });

    }
    if (id == "aBackBigLeftKnee") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-439px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-1176px'
        });

    }
    if (id == "aBackBigrightKnee") {
        $("#divafterZoomWomen").stop().animate({
            'margin-left': '-639px',
            'opacity': '0px',
            'height': '1800px',
            'position': 'relative',
            'margin-top': '-1176px'
        });

    }

    setTimeout(function () { setImage(id) }, 500);
    $("#divarrows").css("display", "block");

}