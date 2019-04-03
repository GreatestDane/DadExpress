let dropDown = $('#drop-down option:selected').val();

console.log(dropDown);

$("#drop-down").on("change", ()=> {
    dropDown = $('#drop-down option:selected').val();
    console.log(dropDown);
})


//Begin logic for the PadEye program 

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
    else {
        $("#inside-pin").val("you done fucked up");
    }