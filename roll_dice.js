function roll_dice() {
    var n = Math.floor((Math.random()*6)+1);
    if(n>3) {
        alert("You have won: " + n);
    }
    else {
        alert("You have los: " + n);
    }
}

// If n>3 print you have won
// If n<=3 print you have lost

roll_dice();