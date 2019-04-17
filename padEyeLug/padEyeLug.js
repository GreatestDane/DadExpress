let dropDown = $('#drop-down option:selected').val();
let action;
//Variables are named against best practices to follow a specific spreadsheet
//Declare variables for input values
let H25 = $("#inside-pin").val();
let H75 = $("#eye-diameter").val();
let H24 = $("#pin-diameter").val();
let H20 = $("#lug-pin-hole").val();
let H21 = $("#lug-radius").val();
let H16 = $("#lug-plate-thickness").val();
let H18 = $("#lug-plate-width-base").val();
let H22 = $("#lug-pad-thickness").val();
let H23 = $("#lug-pad-radius").val();
let H17 = $("#lug-eccentricity").val();
let H12 = $("#lug-force").val();
let H13 = $("#angle-of-force").val();
let H10 = $("#yield-stress").val();
let H11 = $("#allowable-force").val();
let H14 = $("#impact-factor").val();

// console.log(H25);
// console.log(H75);
// console.log(H24);
// console.log(H20);
// console.log(H21);
// console.log(H16);
// console.log(H18);
// console.log(H22);
// console.log(H23);
// console.log(H17);
// console.log(H12);
// console.log(H13);
// console.log(H10);
// console.log(H11);
// console.log(H14);




//First, set up the static values for when the user loads the page (first values numbers)
if (dropDown === "crosby-g2130x85") {

    // H25 = 1.69;
    // H75 = 2.38;
    // H24 = 1.15;
    // H20 = 1.28;
    // H21 = 2.50;
    // H16 = 1.00;
    // H18 = 5.00;
    // H22 = 0.00;
    // H23 = 0.00;
    // H17 = 2.00;
    // H12 = 17.00;
    // H13 = 60.00;
    // H10 = 36.00;
    // H11 = 14.85;
    // H14 = 1.80;
    

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
$("#drop-down").on("change", () => {
    dropDown = $('#drop-down option:selected').val();



    if (dropDown === "crosby-g2130x85") {

        // H25 = 1.69;
        // H75 = 2.38;
        // H24 = 1.15;
        // H20 = 1.28;
        // H21 = 2.50;
        // H16 = 1.00;
        // H18 = 5.00;
        // H22 = 0.00;
        // H23 = 0.00;
        // H17 = 2.00;
        // H12 = 17.00;
        // H13 = 60.00;
        // H10 = 36.00;
        // H11 = 14.85;
        // H14 = 1.80;
        

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

        console.log(H25);
        console.log(H75);
        console.log(H24);
        console.log(H20);
        console.log(H21);
        console.log(H16);
        console.log(H18);
        console.log(H22);
        console.log(H23);
        console.log(H17);
        console.log(H12);
        console.log(H13);
        console.log(H10);
        console.log(H11);
        console.log(H14);


    }
    else if (dropDown === "crosby-g2130x12") {

        // H25 = 2.03;
        // H75 = 3.00;
        // H24 = 1.40;
        // H20 = 1.53;
        // H21 = 2.50;
        // H16 = 1.50;
        // H18 = 5.00;
        // H22 = 0.00;
        // H23 = 0.00;
        // H17 = 2.50;
        // H12 = 24.00;
        // H13 = 60.00;
        // H10 = 36.00;
        // H11 = 14.85;
        // H14 = 1.80;

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

        console.log(H25);
        console.log(H75);
        console.log(H24);
        console.log(H20);
        console.log(H21);
        console.log(H16);
        console.log(H18);
        console.log(H22);
        console.log(H23);
        console.log(H17);
        console.log(H12);
        console.log(H13);
        console.log(H10);
        console.log(H11);
        console.log(H14);

    }
    else if (dropDown === "crosby-g2130x17") {

        // H25 = 2.38;
        // H75 = 3.63;
        // H24 = 1.66;
        // H20 = 1.79;
        // H21 = 3.00;
        // H16 = 1.50;
        // H18 = 6.00;
        // H22 = 0.00;
        // H23 = 0.00;
        // H17 = 3.00;
        // H12 = 34.00;
        // H13 = 60.00;
        // H10 = 36.00;
        // H11 = 14.85;
        // H14 = 1.80;

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

        console.log(H25);
        console.log(H75);
        console.log(H24);
        console.log(H20);
        console.log(H21);
        console.log(H16);
        console.log(H18);
        console.log(H22);
        console.log(H23);
        console.log(H17);
        console.log(H12);
        console.log(H13);
        console.log(H10);
        console.log(H11);
        console.log(H14);

    }
    else if (dropDown === "crosby-g2130x25") {

        // H25 = 2.88;
        // H75 = 4.19;
        // H24 = 2.04;
        // H20 = 2.17;
        // H21 = 3.50;
        // H16 = 2.00;
        // H18 = 7.00;
        // H22 = 0.00;
        // H23 = 0.00;
        // H17 = 3.50;
        // H12 = 50.00;
        // H13 = 60.00;
        // H10 = 36.00;
        // H11 = 14.85;
        // H14 = 1.80;

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

        console.log(H25);
        console.log(H75);
        console.log(H24);
        console.log(H20);
        console.log(H21);
        console.log(H16);
        console.log(H18);
        console.log(H22);
        console.log(H23);
        console.log(H17);
        console.log(H12);
        console.log(H13);
        console.log(H10);
        console.log(H11);
        console.log(H14);

    }
    else if (dropDown === "crosby-g2130x35") {

        // H25 = 3.25;
        // H75 = 4.81;
        // H24 = 2.30;
        // H20 = 2.43;
        // H21 = 4.00;
        // H16 = 2.25;
        // H18 = 8.50;
        // H22 = 0.00;
        // H23 = 0.00;
        // H17 = 4.00;
        // H12 = 70.00;
        // H13 = 60.00;
        // H10 = 36.00;
        // H11 = 14.85;
        // H14 = 1.80;

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

        console.log(H25);
        console.log(H75);
        console.log(H24);
        console.log(H20);
        console.log(H21);
        console.log(H16);
        console.log(H18);
        console.log(H22);
        console.log(H23);
        console.log(H17);
        console.log(H12);
        console.log(H13);
        console.log(H10);
        console.log(H11);
        console.log(H14);

    }
    else if (dropDown === "crosby-g2130x55") {

        // H25 = 4.13;
        // H75 = 5.69;
        // H24 = 2.80;
        // H20 = 2.93;
        // H21 = 5.00;
        // H16 = 2.75;
        // H18 = 10.00;
        // H22 = 0.00;
        // H23 = 0.00;
        // H17 = 4.50;
        // H12 = 110.00;
        // H13 = 60.00;
        // H10 = 36.00;
        // H11 = 14.85;
        // H14 = 1.80;

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

        console.log(H25);
        console.log(H75);
        console.log(H24);
        console.log(H20);
        console.log(H21);
        console.log(H16);
        console.log(H18);
        console.log(H22);
        console.log(H23);
        console.log(H17);
        console.log(H12);
        console.log(H13);
        console.log(H10);
        console.log(H11);
        console.log(H14);

    }
    else if (dropDown === "crosby-g2130x85") {

        // H25 = 5.00;
        // H75 = 6.50;
        // H24 = 3.30;
        // H20 = 3.34;
        // H21 = 5.50;
        // H16 = 2.50;
        // H18 = 16.50;
        // H22 = 0.75;
        // H23 = 5.00;
        // H17 = 7.00;
        // H12 = 170.00;
        // H13 = 60.00;
        // H10 = 36.00;
        // H11 = 14.85;
        // H14 = 1.80;

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

        console.log(H25);
        console.log(H75);
        console.log(H24);
        console.log(H20);
        console.log(H21);
        console.log(H16);
        console.log(H18);
        console.log(H22);
        console.log(H23);
        console.log(H17);
        console.log(H12);
        console.log(H13);
        console.log(H10);
        console.log(H11);
        console.log(H14);

    }
    else if (dropDown === "crosby-g2130x120") {

        // H25 = 5.25;
        // H75 = 8.00;
        // H24 = 3.76;
        // H20 = 3.89;
        // H21 = 6.50;
        // H16 = 3.00;
        // H18 = 20.00;
        // H22 = 0.75;
        // H23 = 6.00;
        // H17 = 8.50;
        // H12 = 240.00;
        // H13 = 60.00;
        // H10 = 36.00;
        // H11 = 14.85;
        // H14 = 1.80;

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

        console.log(H25);
        console.log(H75);
        console.log(H24);
        console.log(H20);
        console.log(H21);
        console.log(H16);
        console.log(H18);
        console.log(H22);
        console.log(H23);
        console.log(H17);
        console.log(H12);
        console.log(H13);
        console.log(H10);
        console.log(H11);
        console.log(H14);

    }
    else if (dropDown === "crosby-g2130x150") {

        // H25 = 5.50;
        // H75 = 9.00;
        // H24 = 4.26;
        // H20 = 4.39;
        // H21 = 7.00;
        // H16 = 3.00;
        // H18 = 23.50;
        // H22 = 1.00;
        // H23 = 6.50;
        // H17 = 9.00;
        // H12 = 300.00;
        // H13 = 60.00;
        // H10 = 36.00;
        // H11 = 14.85;
        // H14 = 1.80;

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

        console.log(H25);
        console.log(H75);
        console.log(H24);
        console.log(H20);
        console.log(H21);
        console.log(H16);
        console.log(H18);
        console.log(H22);
        console.log(H23);
        console.log(H17);
        console.log(H12);
        console.log(H13);
        console.log(H10);
        console.log(H11);
        console.log(H14);

    }
    else if (dropDown === "crosby-g2140x200") {

        // H25 = 7.25;
        // H75 = 10.50;
        // H24 = 4.75;
        // H20 = 5.00;
        // H21 = 8.00;
        // H16 = 3.50;
        // H18 = 27.00;
        // H22 = 1.25;
        // H23 = 7.50;
        // H17 = 10.25;
        // H12 = 400.00;
        // H13 = 60.00;
        // H10 = 36.00;
        // H11 = 14.85;
        // H14 = 1.80;

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

        console.log(H25);
        console.log(H75);
        console.log(H24);
        console.log(H20);
        console.log(H21);
        console.log(H16);
        console.log(H18);
        console.log(H22);
        console.log(H23);
        console.log(H17);
        console.log(H12);
        console.log(H13);
        console.log(H10);
        console.log(H11);
        console.log(H14);

    }
    else if (dropDown === "crosby-g2140x250") {

        // H25 = 8.50;
        // H75 = 12.00;
        // H24 = 5.00;
        // H20 = 5.25;
        // H21 = 8.50;
        // H16 = 4.00;
        // H18 = 29.00;
        // H22 = 1.50;
        // H23 = 8.00;
        // H17 = 11.00;
        // H12 = 500.00;
        // H13 = 60.00;
        // H10 = 36.00;
        // H11 = 14.85;
        // H14 = 1.80;

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

        console.log(H25);
        console.log(H75);
        console.log(H24);
        console.log(H20);
        console.log(H21);
        console.log(H16);
        console.log(H18);
        console.log(H22);
        console.log(H23);
        console.log(H17);
        console.log(H12);
        console.log(H13);
        console.log(H10);
        console.log(H11);
        console.log(H14);

    }
    else if (dropDown === "crosby-g2140x300") {

        // H25 = 8.38;
        // H75 = 12.00;
        // H24 = 6.00;
        // H20 = 6.25;
        // H21 = 10.00;
        // H16 = 4.00;
        // H18 = 34.50;
        // H22 = 1.50;
        // H23 = 9.50;
        // H17 = 12.75;
        // H12 = 600.00;
        // H13 = 60.00;
        // H10 = 36.00;
        // H11 = 14.85;
        // H14 = 1.80;

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

        console.log(H25);
        console.log(H75);
        console.log(H24);
        console.log(H20);
        console.log(H21);
        console.log(H16);
        console.log(H18);
        console.log(H22);
        console.log(H23);
        console.log(H17);
        console.log(H12);
        console.log(H13);
        console.log(H10);
        console.log(H11);
        console.log(H14);

    }
    else if (dropDown === "crosby-g2140x400") {

        // H25 = 8.25;
        // H75 = 14.00;
        // H24 = 7.00;
        // H20 = 7.25;
        // H21 = 11.50;
        // H16 = 4.38;
        // H18 = 41.00;
        // H22 = 1.75;
        // H23 = 11.00;
        // H17 = 14.50;
        // H12 = 800.00;
        // H13 = 60.00;
        // H10 = 36.00;
        // H11 = 14.85;
        // H14 = 1.80;

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

        console.log(H25);
        console.log(H75);
        console.log(H24);
        console.log(H20);
        console.log(H21);
        console.log(H16);
        console.log(H18);
        console.log(H22);
        console.log(H23);
        console.log(H17);
        console.log(H12);
        console.log(H13);
        console.log(H10);
        console.log(H11);
        console.log(H14);

    }

})
