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
    else if (dropDown === "crosby-g2130x35"){
        $("#inside-pin").val(3.25);
        $("#eye-diameter").val(4.81);
        $("#pin-diameter").val(2.30);
        $("#lug-pin-hole").val(2.43);
        $("#lug-radius").val(4.00);
        $("#lug-plate-thickness").val(2.25);
        $("#lug-plate-width-base").val(8.50);
        $("#lug-pad-thickness").val(0.00);
        $("#lug-pad-radius").val(0.00);
        $("#lug-eccentricity").val(4.00);
        $("#lug-force").val(70.00);
        $("#angle-of-force").val(60.00);
        $("#yield-stress").val(36.00);
        $("#allowable-force").val(14.85);
        $("#impact-factor").val(1.80);
    }
    else if (dropDown === "crosby-g2130x55"){
        $("#inside-pin").val(4.13);
        $("#eye-diameter").val(5.69);
        $("#pin-diameter").val(2.80);
        $("#lug-pin-hole").val(2.93);
        $("#lug-radius").val(5.00);
        $("#lug-plate-thickness").val(2.75);
        $("#lug-plate-width-base").val(10.00);
        $("#lug-pad-thickness").val(0.00);
        $("#lug-pad-radius").val(0.00);
        $("#lug-eccentricity").val(4.50);
        $("#lug-force").val(110.00);
        $("#angle-of-force").val(60.00);
        $("#yield-stress").val(36.00);
        $("#allowable-force").val(14.85);
        $("#impact-factor").val(1.80);
    }
    else if (dropDown === "crosby-g2130x85"){
        $("#inside-pin").val(5.00);
        $("#eye-diameter").val(6.50);
        $("#pin-diameter").val(3.30);
        $("#lug-pin-hole").val(3.34);
        $("#lug-radius").val(5.50);
        $("#lug-plate-thickness").val(2.50);
        $("#lug-plate-width-base").val(16.50);
        $("#lug-pad-thickness").val(0.75);
        $("#lug-pad-radius").val(5.00);
        $("#lug-eccentricity").val(7.00);
        $("#lug-force").val(170.00);
        $("#angle-of-force").val(60.00);
        $("#yield-stress").val(36.00);
        $("#allowable-force").val(14.85);
        $("#impact-factor").val(1.80);
    }
    else if (dropDown === "crosby-g2130x120"){
        $("#inside-pin").val(5.25);
        $("#eye-diameter").val(8.00);
        $("#pin-diameter").val(3.76);
        $("#lug-pin-hole").val(3.89);
        $("#lug-radius").val(6.50);
        $("#lug-plate-thickness").val(3.00);
        $("#lug-plate-width-base").val(20.00);
        $("#lug-pad-thickness").val(0.75);
        $("#lug-pad-radius").val(6.00);
        $("#lug-eccentricity").val(8.50);
        $("#lug-force").val(240.00);
        $("#angle-of-force").val(60.00);
        $("#yield-stress").val(36.00);
        $("#allowable-force").val(14.85);
        $("#impact-factor").val(1.80);
    }
    else if (dropDown === "crosby-g2130x150"){
        $("#inside-pin").val(5.50);
        $("#eye-diameter").val(9.00);
        $("#pin-diameter").val(4.26);
        $("#lug-pin-hole").val(4.39);
        $("#lug-radius").val(7.00);
        $("#lug-plate-thickness").val(3.00);
        $("#lug-plate-width-base").val(23.50);
        $("#lug-pad-thickness").val(1.00);
        $("#lug-pad-radius").val(6.50);
        $("#lug-eccentricity").val(9.00);
        $("#lug-force").val(300.00);
        $("#angle-of-force").val(60.00);
        $("#yield-stress").val(36.00);
        $("#allowable-force").val(14.85);
        $("#impact-factor").val(1.80);
    }
    else if (dropDown === "crosby-g2140x200"){
        $("#inside-pin").val(7.25);
        $("#eye-diameter").val(10.50);
        $("#pin-diameter").val(4.75);
        $("#lug-pin-hole").val(5.00);
        $("#lug-radius").val(8.00);
        $("#lug-plate-thickness").val(3.50);
        $("#lug-plate-width-base").val(27.00);
        $("#lug-pad-thickness").val(1.25);
        $("#lug-pad-radius").val(7.50);
        $("#lug-eccentricity").val(10.25);
        $("#lug-force").val(400.00);
        $("#angle-of-force").val(60.00);
        $("#yield-stress").val(36.00);
        $("#allowable-force").val(14.85);
        $("#impact-factor").val(1.80);
    }
    else if (dropDown === "crosby-g2140x250"){
        $("#inside-pin").val(8.50);
        $("#eye-diameter").val(12.00);
        $("#pin-diameter").val(5.00);
        $("#lug-pin-hole").val(5.25);
        $("#lug-radius").val(8.50);
        $("#lug-plate-thickness").val(4.00);
        $("#lug-plate-width-base").val(29.00);
        $("#lug-pad-thickness").val(1.50);
        $("#lug-pad-radius").val(8.00);
        $("#lug-eccentricity").val(11.00);
        $("#lug-force").val(500.00);
        $("#angle-of-force").val(60.00);
        $("#yield-stress").val(36.00);
        $("#allowable-force").val(14.85);
        $("#impact-factor").val(1.80);
    }
    else if (dropDown === "crosby-g2140x300"){
        $("#inside-pin").val(8.38);
        $("#eye-diameter").val(12.00);
        $("#pin-diameter").val(6.00);
        $("#lug-pin-hole").val(6.25);
        $("#lug-radius").val(10.00);
        $("#lug-plate-thickness").val(4.00);
        $("#lug-plate-width-base").val(34.50);
        $("#lug-pad-thickness").val(1.50);
        $("#lug-pad-radius").val(9.50);
        $("#lug-eccentricity").val(12.75);
        $("#lug-force").val(600.00);
        $("#angle-of-force").val(60.00);
        $("#yield-stress").val(36.00);
        $("#allowable-force").val(14.85);
        $("#impact-factor").val(1.80);
    }
    else if (dropDown === "crosby-g2140x400"){
        $("#inside-pin").val(8.25);
        $("#eye-diameter").val(14.00);
        $("#pin-diameter").val(7.00);
        $("#lug-pin-hole").val(7.25);
        $("#lug-radius").val(11.50);
        $("#lug-plate-thickness").val(4.38);
        $("#lug-plate-width-base").val(41.00);
        $("#lug-pad-thickness").val(1.75);
        $("#lug-pad-radius").val(11.00);
        $("#lug-eccentricity").val(14.50);
        $("#lug-force").val(800.00);
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