//Math.atan() = arc tangent
let angleTheta; 
let hypotenuse; 
let adjacent;
let opposite; 
let between;

//Functions

const angleThetaHypotenuseCalc = () => {
     angleTheta = Math.atan(opposite / adjacent);
     hypotenuse = adjacent / Math.cos(angleTheta);
};

const angleThetaAdjacentCalc = () => {
    angleTheta = Math.atan((opposite/ hypotenuse) / Math.sqrt(1 - (opposite / hypotenuse) ^ 2));
    adjacent = hypotenuse * Math.cos(angleTheta);
};

const angleThetaOppositeCalc = () => {
    angleTheta = 1.570796 - Math.atan((adjacent / hypotenuse) / Math.sqrt(1 - (adjacent / hypotenuse) ^ 2));
    opposite = hypotenuse * Math.sin(angleTheta); 
};

const hypotenuseOppositeCalc = () => {
    hypotenuse = adjacent / Math.cos(angleTheta); 
    opposite = hypotenuse * Math.sin(angleTheta); 
};

const hypotenuseAdjacentCalc = () => {
    hypotenuse = opposite / Math.sin(angleTheta);
    adjacent = opposite / Math.tan(angleTheta); 
};

const oppositeAdjacentCalc = () => {
    adjacent = hypotenuse * Math.cos(angleTheta); 
    opposite = hypotenuse * Math.sin(angleTheta); 
}


//Create functionality for the actual calculations
$("#calculate").on("click", ()=> {
    angleTheta = Number($("#inputAngleTheta").val());
    hypotenuse = Number($("#inputHypotenuse").val());
    adjacent = Number($("#inputAdjacent").val());
    opposite = Number($("#inputOpposite").val());
    
    angleTheta = angleTheta * 3.14159 / 180; 

    if(angleTheta === 0 && hypotenuse === 0) {
        angleThetaHypotenuseCalc();
    }
    else if (angleTheta === 0 && adjacent === 0) {
        angleThetaAdjacentCalc();
    }
    else if (angleTheta === 0 && opposite === 0) {
        angleThetaOppositeCalc();
    }
    else if (hypotenuse === 0 && opposite === 0) {
        hypotenuseOppositeCalc();
    }
    else if (hypotenuse === 0 && adjacent === 0) {
        hypotenuseAdjacentCalc();
    }
    else if (opposite === 0 && adjacent === 0) {
        oppositeAdjacentCalc();
    };

    angleTheta = angleTheta * 180 / 3.14159;
    between = 90 - angleTheta;

    $("#outputAngleTheta").val(angleTheta.toFixed(2));
    $("#outputHypotenuse").val(hypotenuse.toFixed(2));
    $("#outputAdjacent").val(adjacent.toFixed(2));
    $("#outputOpposite").val(opposite.toFixed(2));
    $("#outputAngleBetween").val(between.toFixed(2));
});


//Create functionality for Sample Values button
$("#sample-values").on("click", ()=> {

    $("#inputAngleTheta").val(0.00);
    $("#inputHypotenuse").val(0.00);
    $("#inputAdjacent").val(4.00);
    $("#inputOpposite").val(3.00);

    $("#outputAngleTheta").val(36.87);
    $("#outputHypotenuse").val(5.00);
    $("#outputAdjacent").val(4.00);
    $("#outputOpposite").val(3.00);
    $("#outputAngleBetween").val(53.13);
})