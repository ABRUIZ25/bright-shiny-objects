// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘
function createUser (first, last){
const fullName = {
firstName: first,
lastName: last,
}
return fullName 
}


function setAge (user, userage){
user.age = userage
return user

}


 function incrementAge (user, userage){
userage = userage + 1 
return user
}


function fixCar(car) {
car.needsMaitenance = false
return car

}

function addGrades (newGrades, students){
for (let i = 0; i < newGrades.length; i++){
   const newGrades = newGrades [i]
   students.grades.push(newGrades)
}
return students
}

function getDataType (object, key){
return typeof object [key]

}


function addTodo (todos, newTodo){
   todos.push(newTodo)
   return todos
}





 








// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;