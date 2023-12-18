//  .map().map().filter()   // reduce(acc,cv),initial value

const arr =  [23,40,38,64,54,68,74,85,11]

const items=arr.map((element)=>{ 
    return element*10
}).map((ele)=>{
    return ele+2
}).filter(
    function (element) {
        return element<400} 
)

console.log(items);
