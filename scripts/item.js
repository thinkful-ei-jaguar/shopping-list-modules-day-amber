function validateName(name){
if (name === ''){
    
 throw TypeError('Name must not be blank')
};
}

//example of factoryFunction
// const Person = (name) => {
//     const sayName = () => console.log(`my name is ${name}`)
//     return {sayName}
//   }

const create = function (name){
    let item ={
        id: cuid(),
        name: name,
        checked: false,
    };
}

export default {
    validateName,
    create,
};