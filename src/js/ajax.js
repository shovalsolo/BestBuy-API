


export const ajax = function(data){
    return new Promise ((resolve,reject) =>{
    let value = true;
    let res = data;
    
    console.log(res.products);
    console.log("from ajax");

	 resolve("working value is true cat is dead");


	 reject("error value is not true go clean the cat")
    
    });

}