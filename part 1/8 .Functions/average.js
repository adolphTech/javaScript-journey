//write a function to find the average value in an array of numbers
//avg( (0,50))//25

////////////////////////////////////////////////////////

function avg2(arr){
    let  total =0;
    for (let num of arr){
        total += num;
    }
    let res = total/arr.length
    console.log(res)
}

avg2(50,0)