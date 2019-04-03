let dropDown = $('#drop-down option:selected').val();

console.log(dropDown);

//First, set up the static values for when the user loads the page (first values numbers)
if (dropDown === "crosby-g2130x85") {
    $("#inside-pin").val(1.69);
    $("#eye-diameter").val(2.38);
    $("#pin-diameter").val(1.15);
    $("#lug-pin-hole").val(1.28);
    $("#lug-radius").val(2.50);
    $("#lug-plate-thickness").val(1.00);
    $("#lug-plate-width-base").val(5.00);
    $("#lug-pad-thickness").val(0.00);
    $("#lug-pad-radius").val(0.00);
    $("#lug-eccentricity").val(2.00);
    $("#lug-force").val(17.00);
    $("#angle-of-force").val(60.00);
    $("#yield-stress").val(36.00);
    $("#allowable-force").val(14.85);
    $("#impact-factor").val(1.80);
}


//This is where we're going to do the actual options for the drop down menu and the input fields
$("#drop-down").on("change", ()=> {
    dropDown = $('#drop-down option:selected').val();
    console.log(dropDown);

    if (dropDown === "crosby-g2130x85") {
        $("#inside-pin").val(1.69);
        $("#eye-diameter").val(2.38);
        $("#pin-diameter").val(1.15);
        $("#lug-pin-hole").val(1.28);
        $("#lug-radius").val(2.50);
        $("#lug-plate-thickness").val(1.00);
        $("#lug-plate-width-base").val(5.00);
        $("#lug-pad-thickness").val(0.00);
        $("#lug-pad-radius").val(0.00);
        $("#lug-eccentricity").val(2.00);
        $("#lug-force").val(17.00);
        $("#angle-of-force").val(60.00);
        $("#yield-stress").val(36.00);
        $("#allowable-force").val(14.85);
        $("#impact-factor").val(1.80);
    }
    else if (dropDown === "crosby-g2130x12"){
        $("#inside-pin").val(2.03);
        $("#eye-diameter").val(3.00);
        $("#pin-diameter").val(1.40);
        $("#lug-pin-hole").val(1.53);
        $("#lug-radius").val(2.50);
        $("#lug-plate-thickness").val(1.50);
        $("#lug-plate-width-base").val(5.00);
        $("#lug-pad-thickness").val(0.00);
        $("#lug-pad-radius").val(0.00);
        $("#lug-eccentricity").val(2.50);
        $("#lug-force").val(24.00);
        $("#angle-of-force").val(60.00);
        $("#yield-stress").val(36.00);
        $("#allowable-force").val(14.85);
        $("#impact-factor").val(1.80);
    }
    else if (dropDown === "crosby-g2130x17"){
        $("#inside-pin").val(2.38);
        $("#eye-diameter").val(3.63);
        $("#pin-diameter").val(1.66);
        $("#lug-pin-hole").val(1.79);
        $("#lug-radius").val(3.00);
        $("#lug-plate-thickness").val(1.50);
        $("#lug-plate-width-base").val(6.00);
        $("#lug-pad-thickness").val(0.00);
        $("#lug-pad-radius").val(0.00);
        $("#lug-eccentricity").val(3.00);
        $("#lug-force").val(34.00);
        $("#angle-of-force").val(60.00);
        $("#yield-stress").val(36.00);
        $("#allowable-force").val(14.85);
        $("#impact-factor").val(1.80);
    }
    else if (dropDown === "crosby-g2130x25"){
        $("#inside-pin").val(2.88);
        $("#eye-diameter").val(4.19);
        $("#pin-diameter").val(2.04);
        $("#lug-pin-hole").val(2.17);
        $("#lug-radius").val(3.50);
        $("#lug-plate-thickness").val(2.00);
        $("#lug-plate-width-base").val(7.00);
        $("#lug-pad-thickness").val(0.00);
        $("#lug-pad-radius").val(0.00);
        $("#lug-eccentricity").val(3.50);
        $("#lug-force").val(50.00);
        $("#angle-of-force").val(60.00);
        $("#yield-stress").val(36.00);
        $("#allowable-force").val(14.85);
        $("#impact-factor").val(1.80);
    }

})


//Begin logic for the PadEye program 

    // if (dropDown === "crosby-g2130x85") {
    //     $("#inside-pin").val(1.69);
    //     $("#eye-diameter").val(2.38);
    //     $("#pin-diameter").val(1.15);
    //     $("#lug-pin-hole").val(1.28);
    //     $("#lug-radius").val(2.50);
    //     $("#lug-plate-thickness").val(1.00);
    //     $("#lug-plate-width-base").val(5.00);
    //     $("#lug-pad-thickness").val(0.00);
    //     $("#lug-pad-radius").val(0.00);
    //     $("#lug-eccentricity").val(2.00);
    //     $("#lug-force").val(17.00);
    //     $("#angle-of-force").val(60.00);
    //     $("#yield-stress").val(36.00);
    //     $("#allowable-force").val(14.85);
    //     $("#impact-factor").val(1.80);
    // }
    // else {
    //     $("#inside-pin").val("you done fucked up");
    // }