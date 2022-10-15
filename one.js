// Start 1.1. 
function SCD (a, b) {  //наименьший общий делитель
    let arr1 = [];
    let arr2 = [];
    for(let i = 0; i <= a/2 + 1; i++) {
        if(a % i === 0) arr1.push(i);
    }
    for(let j = 0; j <= b/2 + 1; j++) {
        if(b % j === 0) arr2.push(j);
    }
    let q = arr1.filter(num => arr2.includes(num));
    q = Number(q);
    if (q === 1) {
        console.log('Числа взаимо простые')
    } else {
        console.log('Числа HE взаимо простые')
    }
    
}

SCD(2, 2)
SCD(35, 37)
// End 1.1. 
// Start 1.2. 
function prime_number(a){
    let arr = [];
    for(let i = 0; i <= a; i++) {
        if(a % i === 0) arr.push(i);
    }
    console.log(arr);
}
prime_number(10);
// End 1.2. 

// Start 1.. 
// End 1.. 

// Start 1.. 
// End 1.. 

// Start 1.. 
// End 1.. 

// Start 1.. 
// End 1.. 

// Start 1.. 
// End 1.. 

// Start 1.. 
// End 1.. 