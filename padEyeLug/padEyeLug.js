let dropDown = $('#drop-down option:selected').val();
let action;
//Variables are named against best practices to follow a specific spreadsheet
//Declare variables for input values

let H25;
let H75;
let H24;
let H20;
let H21;
let H16;
let H18;
let H22;
let H23;
let H17;
let H12;
let H13;
let H10;
let H11;
let H14;

//Declare variables for calculation function

let H28;
let H29;
let H30;
let H31;
let H32;
let H33;
let H34;
let H35;
let H36;
let H37;

let H43;
let H44;
let H45;
let H46;
let H47;

let H67;
let H68;
let H69;
let H70;
let H71;
let H72;
let H73;
let H74;



//Write out the function for the input calculations

function calculate() {

    //Declare the H variable inputs
    H25 = Number($("#inside-pin").val());
    H75 = Number($("#eye-diameter").val());
    H24 = Number($("#pin-diameter").val());
    H20 = Number($("#lug-pin-hole").val());
    H21 = Number($("#lug-radius").val());
    H16 = Number($("#lug-plate-thickness").val());
    H18 = Number($("#lug-plate-width-base").val());
    H22 = Number($("#lug-pad-thickness").val());
    H23 = Number($("#lug-pad-radius").val());
    H17 = Number($("#lug-eccentricity").val());
    H12 = Number($("#lug-force").val());
    H13 = Number($("#angle-of-force").val());
    H10 = Number($("#yield-stress").val());
    H11 = Number($("#allowable-force").val());
    H14 = Number($("#impact-factor").val());

    //Here are the calculations that I do not understand
    H28 = H12 * Math.sin(H13 * Math.PI / 180);
    H29 = H12 * Math.cos(H13 * Math.PI / 180);

    H30 = H16 * H18;
    H31 = (H16 * H18 ^ 2) / 6;
    H32 = H29 * H17 * H14 / H31;
    H33 = H28 * H14 / H30;
    H34 = H29 * H14 / H30;
    H35 = 0.6 * H10;
    H36 = 0.4 * H10;
    H37 = H33 / H35 + H32 / H35 + H34 / H36;

    H68 = 2 * H18;
    H69 = H29 * H14 / H68;
    H70 = H28 * H14 / H68;
    H71 = H29 * H14 * H17;
    H67 = (H18 ^ 2) / 3;
    H72 = H71 / H67;
    H73 = Math.sqrt((H72 + H70) ^ 2 + (H69 ^ 2));
    H74 = H73 / H11;

    H43 = H12 * H14 / (H24 * H16);
    H45 = H12 * H14 / (H24 * (H16 + 2 * H22));
    H44 = 0.9 * H10;

    H46 = H22 * H12 / (2 * H22 + H16);

    if (H23 === 0) {
        H47 = 0;
    } else {
        H47 = H46 * H14 / (H23 * 2 * 3.1416 * 9.6);
    };

    //Print output field 1

    $("#H30").val(H30);
    $("#H31").val(H31);
    $("#H32").val(H32);
    $("#H33").val(H33);
    $("#H34").val(H34);
    $("#H35").val(H35);
    $("#H36").val(H36);
    $("#H37").val(H37);

    //Print output field 2

    $("#H68").val(H68);
    $("#H67").val(H67);
    $("#H73").val(H73);
    $("#H74").val(H74);

    //Print output field 3

    $("#H43").val(H43);
    $("#H45").val(H45);
    $("#H44").val(H44);
    $("#H46").val(H46);
    $("#H47").val(H47);

    //Print output field 4

    $("H49").val(H49);
    $("H58").val(H58);
    $("H60").val(H60);

    //Print output field 5

    $("H62").val(H62);
    $("H63").val(H63);
    $("H64").val(H64);

};


//First, set up the static values for when the user loads the page (first values numbers)
if (dropDown === "crosby-g2130x85") {

    //Print input field 1

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

    //Convert the input values to variables

    // H25 = $("#inside-pin").val();
    // H75 = $("#eye-diameter").val();
    // H24 = $("#pin-diameter").val();
    // H20 = $("#lug-pin-hole").val();
    // H21 = $("#lug-radius").val();
    // H16 = $("#lug-plate-thickness").val();
    // H18 = $("#lug-plate-width-base").val();
    // H22 = $("#lug-pad-thickness").val();
    // H23 = $("#lug-pad-radius").val();
    // H17 = $("#lug-eccentricity").val();
    // H12 = $("#lug-force").val();
    // H13 = $("#angle-of-force").val();
    // H10 = $("#yield-stress").val();
    // H11 = $("#allowable-force").val();
    // H14 = $("#impact-factor").val();

    //After the input values are set, the user can press the "calculate button"
    //If the calculate button is pressed, run the calculate function

    $("#calculate").on("click", () => {
        calculate();

        console.log("<----INPUTS---->");
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
        console.log("<----OUTPUTS---->");

        console.log(H28);
        console.log(H29);
        console.log(H30);
        console.log(H31);
        console.log(H32);
        console.log(H33);
        console.log(H34);
        console.log(H35);
        console.log(H36);
        console.log(H37);

        console.log(H43);
        console.log(H44);
        console.log(H45);
        console.log(H46);
        console.log(H47);

        console.log(H67);
        console.log(H68);
        console.log(H69);
        console.log(H70);
        console.log(H71);
        console.log(H72);
        console.log(H73);
        console.log(H74);
        console.log("<------Break----->");

    });

}


//This is where we're going to do the actual options for the drop down menu and the input fields
$("#drop-down").on("change", () => {

    //Convert the selected option into a variable
    dropDown = $('#drop-down option:selected').val();


    //Begin if statements to supply numbers based off of option selection
    if (dropDown === "crosby-g2130x85") {

        //Print input field 1

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

        //Convert the input values to variables

        // H25 = $("#inside-pin").val();
        // H75 = $("#eye-diameter").val();
        // H24 = $("#pin-diameter").val();
        // H20 = $("#lug-pin-hole").val();
        // H21 = $("#lug-radius").val();
        // H16 = $("#lug-plate-thickness").val();
        // H18 = $("#lug-plate-width-base").val();
        // H22 = $("#lug-pad-thickness").val();
        // H23 = $("#lug-pad-radius").val();
        // H17 = $("#lug-eccentricity").val();
        // H12 = $("#lug-force").val();
        // H13 = $("#angle-of-force").val();
        // H10 = $("#yield-stress").val();
        // H11 = $("#allowable-force").val();
        // H14 = $("#impact-factor").val();

        //After the input values are set, the user can press the "calculate button"
        //If the calculate button is pressed, run the calculate function

        $("#calculate").on("click", () => {
            calculate();

            console.log("<----INPUTS---->");
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
            console.log("<----OUTPUTS---->");

            console.log(H28);
            console.log(H29);
            console.log(H30);
            console.log(H31);
            console.log(H32);
            console.log(H33);
            console.log(H34);
            console.log(H35);
            console.log(H36);
            console.log(H37);

            console.log(H43);
            console.log(H44);
            console.log(H45);
            console.log(H46);
            console.log(H47);

            console.log(H67);
            console.log(H68);
            console.log(H69);
            console.log(H70);
            console.log(H71);
            console.log(H72);
            console.log(H73);
            console.log(H74);
            console.log("<------Break----->");

        });


    }
    else if (dropDown === "crosby-g2130x12") {

        //Print input field 1

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

        //Convert the input values to variables

        // H25 = $("#inside-pin").val();
        // H75 = $("#eye-diameter").val();
        // H24 = $("#pin-diameter").val();
        // H20 = $("#lug-pin-hole").val();
        // H21 = $("#lug-radius").val();
        // H16 = $("#lug-plate-thickness").val();
        // H18 = $("#lug-plate-width-base").val();
        // H22 = $("#lug-pad-thickness").val();
        // H23 = $("#lug-pad-radius").val();
        // H17 = $("#lug-eccentricity").val();
        // H12 = $("#lug-force").val();
        // H13 = $("#angle-of-force").val();
        // H10 = $("#yield-stress").val();
        // H11 = $("#allowable-force").val();
        // H14 = $("#impact-factor").val();

        //After the input values are set, the user can press the "calculate button"
        //If the calculate button is pressed, run the calculate function

        $("#calculate").on("click", () => {
            calculate();

            console.log("<----INPUTS---->");
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
            console.log("<----OUTPUTS---->");

            console.log(H28);
            console.log(H29);
            console.log(H30);
            console.log(H31);
            console.log(H32);
            console.log(H33);
            console.log(H34);
            console.log(H35);
            console.log(H36);
            console.log(H37);

            console.log(H43);
            console.log(H44);
            console.log(H45);
            console.log(H46);
            console.log(H47);

            console.log(H67);
            console.log(H68);
            console.log(H69);
            console.log(H70);
            console.log(H71);
            console.log(H72);
            console.log(H73);
            console.log(H74);
            console.log("<------Break----->");

        });

    }
    else if (dropDown === "crosby-g2130x17") {

        //Print input field 1

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

        //Convert the input values to variables

        // H25 = $("#inside-pin").val();
        // H75 = $("#eye-diameter").val();
        // H24 = $("#pin-diameter").val();
        // H20 = $("#lug-pin-hole").val();
        // H21 = $("#lug-radius").val();
        // H16 = $("#lug-plate-thickness").val();
        // H18 = $("#lug-plate-width-base").val();
        // H22 = $("#lug-pad-thickness").val();
        // H23 = $("#lug-pad-radius").val();
        // H17 = $("#lug-eccentricity").val();
        // H12 = $("#lug-force").val();
        // H13 = $("#angle-of-force").val();
        // H10 = $("#yield-stress").val();
        // H11 = $("#allowable-force").val();
        // H14 = $("#impact-factor").val();

        //After the input values are set, the user can press the "calculate button"
        //If the calculate button is pressed, run the calculate function

        $("#calculate").on("click", () => {
            calculate();

            console.log("<----INPUTS---->");
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
            console.log("<----OUTPUTS---->");

            console.log(H28);
            console.log(H29);
            console.log(H30);
            console.log(H31);
            console.log(H32);
            console.log(H33);
            console.log(H34);
            console.log(H35);
            console.log(H36);
            console.log(H37);

            console.log(H43);
            console.log(H44);
            console.log(H45);
            console.log(H46);
            console.log(H47);

            console.log(H67);
            console.log(H68);
            console.log(H69);
            console.log(H70);
            console.log(H71);
            console.log(H72);
            console.log(H73);
            console.log(H74);
            console.log("<------Break----->");

        });

    }
    else if (dropDown === "crosby-g2130x25") {

        //Print input field 1

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

        //Convert the input values to variables

        // H25 = $("#inside-pin").val();
        // H75 = $("#eye-diameter").val();
        // H24 = $("#pin-diameter").val();
        // H20 = $("#lug-pin-hole").val();
        // H21 = $("#lug-radius").val();
        // H16 = $("#lug-plate-thickness").val();
        // H18 = $("#lug-plate-width-base").val();
        // H22 = $("#lug-pad-thickness").val();
        // H23 = $("#lug-pad-radius").val();
        // H17 = $("#lug-eccentricity").val();
        // H12 = $("#lug-force").val();
        // H13 = $("#angle-of-force").val();
        // H10 = $("#yield-stress").val();
        // H11 = $("#allowable-force").val();
        // H14 = $("#impact-factor").val();

        //After the input values are set, the user can press the "calculate button"
        //If the calculate button is pressed, run the calculate function

        $("#calculate").on("click", () => {
            calculate();

            console.log("<----INPUTS---->");
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
            console.log("<----OUTPUTS---->");

            console.log(H28);
            console.log(H29);
            console.log(H30);
            console.log(H31);
            console.log(H32);
            console.log(H33);
            console.log(H34);
            console.log(H35);
            console.log(H36);
            console.log(H37);

            console.log(H43);
            console.log(H44);
            console.log(H45);
            console.log(H46);
            console.log(H47);

            console.log(H67);
            console.log(H68);
            console.log(H69);
            console.log(H70);
            console.log(H71);
            console.log(H72);
            console.log(H73);
            console.log(H74);
            console.log("<------Break----->");

        });

    }
    else if (dropDown === "crosby-g2130x35") {

        //Print input field 1

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

        //Convert the input values to variables

        // H25 = $("#inside-pin").val();
        // H75 = $("#eye-diameter").val();
        // H24 = $("#pin-diameter").val();
        // H20 = $("#lug-pin-hole").val();
        // H21 = $("#lug-radius").val();
        // H16 = $("#lug-plate-thickness").val();
        // H18 = $("#lug-plate-width-base").val();
        // H22 = $("#lug-pad-thickness").val();
        // H23 = $("#lug-pad-radius").val();
        // H17 = $("#lug-eccentricity").val();
        // H12 = $("#lug-force").val();
        // H13 = $("#angle-of-force").val();
        // H10 = $("#yield-stress").val();
        // H11 = $("#allowable-force").val();
        // H14 = $("#impact-factor").val();

        //After the input values are set, the user can press the "calculate button"
        //If the calculate button is pressed, run the calculate function

        $("#calculate").on("click", () => {
            calculate();

            console.log("<----INPUTS---->");
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
            console.log("<----OUTPUTS---->");

            console.log(H28);
            console.log(H29);
            console.log(H30);
            console.log(H31);
            console.log(H32);
            console.log(H33);
            console.log(H34);
            console.log(H35);
            console.log(H36);
            console.log(H37);

            console.log(H43);
            console.log(H44);
            console.log(H45);
            console.log(H46);
            console.log(H47);

            console.log(H67);
            console.log(H68);
            console.log(H69);
            console.log(H70);
            console.log(H71);
            console.log(H72);
            console.log(H73);
            console.log(H74);
            console.log("<------Break----->");

        });

    }
    else if (dropDown === "crosby-g2130x55") {

        //Print input field 1

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

        //Convert the input values to variables

        // H25 = $("#inside-pin").val();
        // H75 = $("#eye-diameter").val();
        // H24 = $("#pin-diameter").val();
        // H20 = $("#lug-pin-hole").val();
        // H21 = $("#lug-radius").val();
        // H16 = $("#lug-plate-thickness").val();
        // H18 = $("#lug-plate-width-base").val();
        // H22 = $("#lug-pad-thickness").val();
        // H23 = $("#lug-pad-radius").val();
        // H17 = $("#lug-eccentricity").val();
        // H12 = $("#lug-force").val();
        // H13 = $("#angle-of-force").val();
        // H10 = $("#yield-stress").val();
        // H11 = $("#allowable-force").val();
        // H14 = $("#impact-factor").val();

        //After the input values are set, the user can press the "calculate button"
        //If the calculate button is pressed, run the calculate function

        $("#calculate").on("click", () => {
            calculate();

            console.log("<----INPUTS---->");
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
            console.log("<----OUTPUTS---->");

            console.log(H28);
            console.log(H29);
            console.log(H30);
            console.log(H31);
            console.log(H32);
            console.log(H33);
            console.log(H34);
            console.log(H35);
            console.log(H36);
            console.log(H37);

            console.log(H43);
            console.log(H44);
            console.log(H45);
            console.log(H46);
            console.log(H47);

            console.log(H67);
            console.log(H68);
            console.log(H69);
            console.log(H70);
            console.log(H71);
            console.log(H72);
            console.log(H73);
            console.log(H74);
            console.log("<------Break----->");

        });

    }
    else if (dropDown === "crosby-g2130x85") {

        //Print input field 1

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

        //Convert the input values to variables

        // H25 = $("#inside-pin").val();
        // H75 = $("#eye-diameter").val();
        // H24 = $("#pin-diameter").val();
        // H20 = $("#lug-pin-hole").val();
        // H21 = $("#lug-radius").val();
        // H16 = $("#lug-plate-thickness").val();
        // H18 = $("#lug-plate-width-base").val();
        // H22 = $("#lug-pad-thickness").val();
        // H23 = $("#lug-pad-radius").val();
        // H17 = $("#lug-eccentricity").val();
        // H12 = $("#lug-force").val();
        // H13 = $("#angle-of-force").val();
        // H10 = $("#yield-stress").val();
        // H11 = $("#allowable-force").val();
        // H14 = $("#impact-factor").val();

        //After the input values are set, the user can press the "calculate button"
        //If the calculate button is pressed, run the calculate function

        $("#calculate").on("click", () => {
            calculate();

            console.log("<----INPUTS---->");
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
            console.log("<----OUTPUTS---->");

            console.log(H28);
            console.log(H29);
            console.log(H30);
            console.log(H31);
            console.log(H32);
            console.log(H33);
            console.log(H34);
            console.log(H35);
            console.log(H36);
            console.log(H37);

            console.log(H43);
            console.log(H44);
            console.log(H45);
            console.log(H46);
            console.log(H47);

            console.log(H67);
            console.log(H68);
            console.log(H69);
            console.log(H70);
            console.log(H71);
            console.log(H72);
            console.log(H73);
            console.log(H74);
            console.log("<------Break----->");

        });

    }
    else if (dropDown === "crosby-g2130x120") {

        //Print input field 1

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

        //Convert the input values to variables

        // H25 = $("#inside-pin").val();
        // H75 = $("#eye-diameter").val();
        // H24 = $("#pin-diameter").val();
        // H20 = $("#lug-pin-hole").val();
        // H21 = $("#lug-radius").val();
        // H16 = $("#lug-plate-thickness").val();
        // H18 = $("#lug-plate-width-base").val();
        // H22 = $("#lug-pad-thickness").val();
        // H23 = $("#lug-pad-radius").val();
        // H17 = $("#lug-eccentricity").val();
        // H12 = $("#lug-force").val();
        // H13 = $("#angle-of-force").val();
        // H10 = $("#yield-stress").val();
        // H11 = $("#allowable-force").val();
        // H14 = $("#impact-factor").val();

        //After the input values are set, the user can press the "calculate button"
        //If the calculate button is pressed, run the calculate function

        $("#calculate").on("click", () => {
            calculate();

            console.log("<----INPUTS---->");
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
            console.log("<----OUTPUTS---->");

            console.log(H28);
            console.log(H29);
            console.log(H30);
            console.log(H31);
            console.log(H32);
            console.log(H33);
            console.log(H34);
            console.log(H35);
            console.log(H36);
            console.log(H37);

            console.log(H43);
            console.log(H44);
            console.log(H45);
            console.log(H46);
            console.log(H47);

            console.log(H67);
            console.log(H68);
            console.log(H69);
            console.log(H70);
            console.log(H71);
            console.log(H72);
            console.log(H73);
            console.log(H74);
            console.log("<------Break----->");

        });

    }
    else if (dropDown === "crosby-g2130x150") {

        //Print input field 1

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

        //Convert the input values to variables

        // H25 = $("#inside-pin").val();
        // H75 = $("#eye-diameter").val();
        // H24 = $("#pin-diameter").val();
        // H20 = $("#lug-pin-hole").val();
        // H21 = $("#lug-radius").val();
        // H16 = $("#lug-plate-thickness").val();
        // H18 = $("#lug-plate-width-base").val();
        // H22 = $("#lug-pad-thickness").val();
        // H23 = $("#lug-pad-radius").val();
        // H17 = $("#lug-eccentricity").val();
        // H12 = $("#lug-force").val();
        // H13 = $("#angle-of-force").val();
        // H10 = $("#yield-stress").val();
        // H11 = $("#allowable-force").val();
        // H14 = $("#impact-factor").val();

        //After the input values are set, the user can press the "calculate button"
        //If the calculate button is pressed, run the calculate function

        $("#calculate").on("click", () => {
            calculate();

            console.log("<----INPUTS---->");
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
            console.log("<----OUTPUTS---->");

            console.log(H28);
            console.log(H29);
            console.log(H30);
            console.log(H31);
            console.log(H32);
            console.log(H33);
            console.log(H34);
            console.log(H35);
            console.log(H36);
            console.log(H37);

            console.log(H43);
            console.log(H44);
            console.log(H45);
            console.log(H46);
            console.log(H47);

            console.log(H67);
            console.log(H68);
            console.log(H69);
            console.log(H70);
            console.log(H71);
            console.log(H72);
            console.log(H73);
            console.log(H74);
            console.log("<------Break----->");

        });

    }
    else if (dropDown === "crosby-g2140x200") {

        //Print input field 1

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

        //Convert the input values to variables

        // H25 = $("#inside-pin").val();
        // H75 = $("#eye-diameter").val();
        // H24 = $("#pin-diameter").val();
        // H20 = $("#lug-pin-hole").val();
        // H21 = $("#lug-radius").val();
        // H16 = $("#lug-plate-thickness").val();
        // H18 = $("#lug-plate-width-base").val();
        // H22 = $("#lug-pad-thickness").val();
        // H23 = $("#lug-pad-radius").val();
        // H17 = $("#lug-eccentricity").val();
        // H12 = $("#lug-force").val();
        // H13 = $("#angle-of-force").val();
        // H10 = $("#yield-stress").val();
        // H11 = $("#allowable-force").val();
        // H14 = $("#impact-factor").val();

        //After the input values are set, the user can press the "calculate button"
        //If the calculate button is pressed, run the calculate function

        $("#calculate").on("click", () => {
            calculate();

            console.log("<----INPUTS---->");
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
            console.log("<----OUTPUTS---->");

            console.log(H28);
            console.log(H29);
            console.log(H30);
            console.log(H31);
            console.log(H32);
            console.log(H33);
            console.log(H34);
            console.log(H35);
            console.log(H36);
            console.log(H37);

            console.log(H43);
            console.log(H44);
            console.log(H45);
            console.log(H46);
            console.log(H47);

            console.log(H67);
            console.log(H68);
            console.log(H69);
            console.log(H70);
            console.log(H71);
            console.log(H72);
            console.log(H73);
            console.log(H74);
            console.log("<------Break----->");

        });

    }
    else if (dropDown === "crosby-g2140x250") {

        //Print input field 1

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

        //Convert the input values to variables

        // H25 = Number($("#inside-pin").val());
        // H75 = Number($("#eye-diameter").val());
        // H24 = Number($("#pin-diameter").val());
        // H20 = Number($("#lug-pin-hole").val());
        // H21 = Number($("#lug-radius").val());
        // H16 = Number($("#lug-plate-thickness").val());
        // H18 = Number($("#lug-plate-width-base").val());
        // H22 = Number($("#lug-pad-thickness").val());
        // H23 = Number($("#lug-pad-radius").val());
        // H17 = Number($("#lug-eccentricity").val());
        // H12 = Number($("#lug-force").val());
        // H13 = Number($("#angle-of-force").val());
        // H10 = Number($("#yield-stress").val());
        // H11 = Number($("#allowable-force").val());
        // H14 = Number($("#impact-factor").val());

        //After the input values are set, the user can press the "calculate button"
        //If the calculate button is pressed, run the calculate function

        $("#calculate").on("click", () => {
            calculate();

            console.log("<----INPUTS---->");
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
            console.log("<----OUTPUTS---->");

            console.log(H28);
            console.log(H29);
            console.log(H30);
            console.log(H31);
            console.log(H32);
            console.log(H33);
            console.log(H34);
            console.log(H35);
            console.log(H36);
            console.log(H37);

            console.log(H43);
            console.log(H44);
            console.log(H45);
            console.log(H46);
            console.log(H47);

            console.log(H67);
            console.log(H68);
            console.log(H69);
            console.log(H70);
            console.log(H71);
            console.log(H72);
            console.log(H73);
            console.log(H74);
            console.log("<------Break----->");

        });

    }
    else if (dropDown === "crosby-g2140x300") {

        //Print input field 1

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

        //Convert the input values to variables

        // H25 = $("#inside-pin").val();
        // H75 = $("#eye-diameter").val();
        // H24 = $("#pin-diameter").val();
        // H20 = $("#lug-pin-hole").val();
        // H21 = $("#lug-radius").val();
        // H16 = $("#lug-plate-thickness").val();
        // H18 = $("#lug-plate-width-base").val();
        // H22 = $("#lug-pad-thickness").val();
        // H23 = $("#lug-pad-radius").val();
        // H17 = $("#lug-eccentricity").val();
        // H12 = $("#lug-force").val();
        // H13 = $("#angle-of-force").val();
        // H10 = $("#yield-stress").val();
        // H11 = $("#allowable-force").val();
        // H14 = $("#impact-factor").val();

        // H25 = Number($("#inside-pin").val());
        // H75 = Number($("#eye-diameter").val());
        // H24 = Number($("#pin-diameter").val());
        // H20 = Number($("#lug-pin-hole").val());
        // H21 = Number($("#lug-radius").val());
        // H16 = Number($("#lug-plate-thickness").val());
        // H18 = Number($("#lug-plate-width-base").val());
        // H22 = Number($("#lug-pad-thickness").val());
        // H23 = Number($("#lug-pad-radius").val());
        // H17 = Number($("#lug-eccentricity").val());
        // H12 = Number($("#lug-force").val());
        // H13 = Number($("#angle-of-force").val());
        // H10 = Number($("#yield-stress").val());
        // H11 = Number($("#allowable-force").val());
        // H14 = Number($("#impact-factor").val());

        //After the input values are set, the user can press the "calculate button"
        //If the calculate button is pressed, run the calculate function

        $("#calculate").on("click", () => {
            calculate();

            console.log("<----INPUTS---->");
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
            console.log("<----OUTPUTS---->");

            console.log(H28);
            console.log(H29);
            console.log(H30);
            console.log(H31);
            console.log(H32);
            console.log(H33);
            console.log(H34);
            console.log(H35);
            console.log(H36);
            console.log(H37);

            console.log(H43);
            console.log(H44);
            console.log(H45);
            console.log(H46);
            console.log(H47);

            console.log(H67);
            console.log(H68);
            console.log(H69);
            console.log(H70);
            console.log(H71);
            console.log(H72);
            console.log(H73);
            console.log(H74);
            console.log("<------Break----->");

        });

    }
    else if (dropDown === "crosby-g2140x400") {

        //Print input field 1

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

        //Convert the input values to variables

        // H25 = $("#inside-pin").val();
        // H75 = $("#eye-diameter").val();
        // H24 = $("#pin-diameter").val();
        // H20 = $("#lug-pin-hole").val();
        // H21 = $("#lug-radius").val();
        // H16 = $("#lug-plate-thickness").val();
        // H18 = $("#lug-plate-width-base").val();
        // H22 = $("#lug-pad-thickness").val();
        // H23 = $("#lug-pad-radius").val();
        // H17 = $("#lug-eccentricity").val();
        // H12 = $("#lug-force").val();
        // H13 = $("#angle-of-force").val();
        // H10 = $("#yield-stress").val();
        // H11 = $("#allowable-force").val();
        // H14 = $("#impact-factor").val();

        //After the input values are set, the user can press the "calculate button"
        //If the calculate button is pressed, run the calculate function

        $("#calculate").on("click", () => {
            calculate();

            console.log("<----INPUTS---->");
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
            console.log("<----OUTPUTS---->");

            console.log(H28);
            console.log(H29);
            console.log(H30);
            console.log(H31);
            console.log(H32);
            console.log(H33);
            console.log(H34);
            console.log(H35);
            console.log(H36);
            console.log(H37);

            console.log(H43);
            console.log(H44);
            console.log(H45);
            console.log(H46);
            console.log(H47);

            console.log(H67);
            console.log(H68);
            console.log(H69);
            console.log(H70);
            console.log(H71);
            console.log(H72);
            console.log(H73);
            console.log(H74);
            console.log("<------Break----->");

        });

    };

});
