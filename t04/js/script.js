// create function - solver with parameters
function solver(a, b, c, d, e){
    // 
    if (a == undefined || isNaN(a) || b == undefined || isNaN(b) || c == undefined || isNaN(c) || d == undefined || isNaN(d)|| e == undefined || isNaN(e)){
        return "Wrong input";
    }
    var x = a**2 - 5 * b * c +(d/3)+ e;
    return x.toFixed(2);
    //Check for empty and string
    };

alert(solver(40, -9, 0.5, 7, 100));
// displays 1724.83

alert(solver(40,"doesn't look like a number", 0.5, 7, 100));
// displays "Wrong input";
    
alert(solver(40, -9, 0.5, 7));
// displays "Wrong input";