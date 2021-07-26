const radius = [2,3,5,6];

/* -- Cirlce Area = PI * r * r -- */
const calcArea = function(arr){
    const output = [];
    for(let i=0; i<arr.length; i++){
        let area = Math.PI * arr[i] * arr[i];
        output.push(area);
    }
    return output;
};
console.log( calcArea(radius) );

/* -- Cirlce Circumference = 2 * PI * r -- */
const calcCircumference = function(arr) {
    const output = [];
    for(let i=0; i<arr.length; i++){
        let area = 2 * Math.PI * arr[i];
        output.push(area);
    }
    return output;
};
console.log( calcCircumference(radius) );

/* -- Cirlce Diameter = 2 * r -- */
const calcDiameter = function(arr) {
    const output = [];
    for(let i=0; i<arr.length; i++){
        let area = 2 * arr[i];
        output.push(area);
    }
    return output;
};
console.log( calcDiameter(radius) );