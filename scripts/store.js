
const items = [];
let hideCheckedItems = false;
import item from './item.js';

const findById = function(id){
  return items.find(item =>item.id ===id)
};

const addItem = function(name){
try{
item.validateName(name)
let createdItem =item.create(name)
this.items.push(createdItem)
}
catch(error){
console.log(`${error.message}`)
};
};

const findAndToggleChecked = function(id){
let found =this.findById();
found.checked =! found.checked

};

const findAndUpdateName = function(id, newName){
try{
  item.validateName(newName);
  newName = findById(id);
}
catch(error){
  console.log(`Cannot update name: ${error.message}`)
}

const findAndDelete = function (id) {
  const index = this.items.findIndex(item => item.id === id);
  this.items.splice(index, 1);
}
};

const toggleCheckedFilter = function(){
  this.hideCheckedItems = !this.hideCheckedItems;
}
 
export default {
  items, 
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter


};

