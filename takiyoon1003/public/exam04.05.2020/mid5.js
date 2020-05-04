let array = [];
for(let i=0; i<100; i++){
    array[i] = Math.floor(Math.random() * (100 - 1 + 1) + 1);
}

let array2 = array.filter(function (n) {
    return n % 2 == 0;
});

let sum = 0;
for(let i = 0; i<array2.length; i++){
    sum+=array2[i];
}

console.log(sum);