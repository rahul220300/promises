console.log("person1 : shows ticket");
console.log("person2 : shows ticket");

const preMovie  = async () =>{
    const promiseWifeBringingTicket = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000);

        
});

        const getPopcorn = new Promise((resolve,reject)=>resolve('popcorn'));

        const addButter = new Promise((resolve,reject)=>resolve('butter'));

        const getColdDrinks = new Promise((resolve,reject)=>resolve('coldDrink'));


let ticket = await promiseWifeBringingTicket;

console.log(`wife : i have ${ticket}`);
console.log(`husband : we should go in`);
console.log(`wife : no i am hungry`);

let popcorn = await getPopcorn;

console.log(`husband : i got some ${popcorn}`);
console.log(`husband : we should go in`);
console.log(`wife : i need butter on my popcorn`);

let butter  = await addButter;

console.log(`husband : i got some ${butter} on popcorn`);
console.log(`husband : anything else darling?`);
console.log(`wife : yes i need colddrink `);


let coldDrink = await getColdDrinks; 
 
console.log(`husband : i got some ${coldDrink}`);
console.log(`husband : anything else darling?`);
console.log(`wife : let go we are getting late`);
console.log(`husband : thanks you for the reminder"grins"`);
console.log('pleaze : shows ticket');
return ticket;
}

preMovie().then((m)=>console.log(m));


