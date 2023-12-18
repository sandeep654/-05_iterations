// for of(,map,array) , for in ( object ) , for each 

// [" " , " " , " " , " "]
// [{} , {} ,{} , {} ,{} , {}]

const arr=[1,2,3,4,5,6]

for(let i=0 ; i < arr.length ; i++){
    console.log(arr[i]);
}

for (const num of arr) {
    // console.log(num);
    
}

const object = {
    Name : " hero ",
    emailid :" 123@gmail"

}

for (const item in object) {
    // console.log(Object.keys(object));
}


for (const item  in object) {

    // console.log(item);
}

const map = new Map()
map.set('in','india')
map.set('aus',"australia")

for (const [key , value]of map) {
    console.log(key,value);
}

for (const i in object) {
    console.log(i,object[i]);
    
}






// ---------------  for each ------------------------

const coding = ["sandeep " , "Yadav" , "Mohan nagar " , " Maruti Kunj" ,36]
coding.forEach( function (item){
    console.log(item);
});

coding.forEach( item =>
    {
        console.log(item);
    }
);

coding.forEach(
    function (item , index , arr)
     {
    console.log(item , index ,arr);
});

//function
function printme(item) {
    console.log(item);
}

coding.forEach(printme)


const arr1 = [
    { username: "Sandeep Yadav",
      password: "@#7890"

    },
    {
     Graduation : "Btech in computer science " ,
     Result : "Passed"

    }
]

arr1.forEach(element => {
    console.log(element.Result);
    
});


const arr2 =[ 3, 8 ,9 ,0 ,"hello "]
const re = arr2.filter(
    (item) => {
        return item >3
    }
)
console.log(re);

const arr_2= []

arr2.forEach(element => {
    if (element > 3) {
        arr_2.push(element)
    }
});

console.log(arr_2);