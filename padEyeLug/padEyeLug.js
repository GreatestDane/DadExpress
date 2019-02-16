let dropDown = $('#drop-down option:selected').val()


$("#drop-down").on("click", () => {
    event.preventDefault();
    if (dropDown === "crosby-g2130x120"){
        alert("FUCK YEAH WE DID IT!!!!!")
    }
    
}, {
    passive: true
})