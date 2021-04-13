//Write a solution that calculates the sum of the square roots 
//for all even numbers in an integer array.

var arr = [1, 4, 3, 0, 4, 5, 4];

//with for
function sum(array) {
    let calculate = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] > 0 && array[i] % 2 == 0) {
           calculate += Math.sqrt(array[i]);           
        }         
    }return calculate;   
}

console.log(sum(arr));

//for of
function sum2(array) {
    let calc = 0;
    for (let el of array) {
        if (el > 0 && el % 2 == 0) {
           calc += Math.sqrt(el);           
        }         
    }return calc;   
}

console.log(sum2(arr));

//with forEach
let calc = 0;

arr.forEach(val => {
    if(val > 0 && val % 2 == 0) {
        calc += Math.sqrt(val);
    }
    return calc;
});

console.log(calc);


//filter & reduce

const amount = arr.filter(val => !(val % 2)).reduce((sum, num) => sum + Math.sqrt(num), 0)
console.log (amount);

//wie alt bin ich
let currentYear =  new Date().getFullYear();
let year = prompt("In welchem Jahr sind Sie geboren?");

if(year < 1900 || year > currentYear || isNaN(year)){
    alert("Bitte geben Sie Ihr richtiges Geburtsjahr");
    location.reload();
} else {
    alert("Sie sind "+ (currentYear-year)+" Jahre alt");
}

//debouncing
function onChange(e){
    console.log(e.target.value);
}

const debounce = (fn, delay) => {
    let timeout;
    return function() {
        const fnCall = ()=>{fn.apply(this, arguments)}

        clearTimeout(timeout);

        timeout = setTimeout(fnCall,delay);
    };
}

onChange = debounce(onChange,500);

document.getElementById("txt-search").addEventListener("keyup", onChange);

//throttling
const throttle = (func, delay) => {
    let last = 0;
    return(...args) => {
        const now = new Date().getTime();
        if(now - last < delay){
            return;
        }
        last = now;
        return func(...args);

    }

}


document.getElementById("myId").addEventListener("click", throttle((e)=>{
    console.log("you clicked the button")
},5000))



















