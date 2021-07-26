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

/* using map */
console.log(radius.map(area));
console.log(radius.map(Circumference));
console.log(radius.map(Diameter));