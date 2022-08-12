"use strict";

var circle = {
    radius: 3,

    getArea: function (area) {
        // TODO: complete this method
        // hint: area = pi * radius^2
        var area = math.PI * (math.pow(this.radius, 2));
        return area;

        return; // TODO: return the proper value
    }

}
 function (doRounding) {


    if (doRounding) {
        var roundedNum = math.round(this.getArea());
        console.log("Area of a circle with radius " + this.radius + "is " + roundedNum);
    } else {
        console.log("Area of a circle with radius " + this.radius + "is " + this.getArea());
    }
}
console.log()


console.log()