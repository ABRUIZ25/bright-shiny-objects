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


  function fixCar (vehicle , needsMaitenance){
   let car = {
        make: 'Ford',
        model: 'Mustang',
        year: 1969,
        needsMaitenance: false,
    };
    return car
 }


 function addGrades (clas, grades ){
    const student = {
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [80, 100, 95]
    }
    grades.splice [88, 70, 90] = grades 
    return student
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