const radius = [2,3,5,6];

/* -- Cirlce Area = PI * r * r -- */
const area = function(r){
    return Math.PI * r * r;
};

/* -- Cirlce Circumference = 2 * PI * r -- */
const Circumference = function(r){
    return 2 * Math.PI * r;
};

/* -- Cirlce Diameter = 2 * r -- */
const Diameter = function(r){
    return 2 * r;
};

const calculate = function(arr, logic){
    const output = [];
    for(let i=0; i<arr.length; i++){

        let newValue = logic(arr[i]);

        output.push(newValue);
    }
    return output;
};
console.log( calculate(radius, area) );
console.log( calculate(radius, Circumference) );
console.log( calculate(radius, Diameter) );