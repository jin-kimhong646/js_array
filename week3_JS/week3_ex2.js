// TODO:
// - Update the data strucure and the functions to manage those new properties
const STUDENTS_DATA = [
    { firstName: "An", age: 20 ,lastName: "aliza" , batch : "G2" },
    { firstName: "Bình", age: 22 , lastName: "didov" , batch: "G1"},
    { firstName: "Cẩm", age: 21 , lastName: "Dodo" , batch: "G1"},
    { firstName: "An", age: 19, lastName: "xaioxaio" , batch: "G2" }, // Duplicate first name !
  ];
  
  /**
   * Update 1 student age, given his/her first name
   * @param {string} firstName - the student first name
   * @param {age} newAge  - the student new age
   * @param {string} lastName
   * @param {string} batch 
  function updateStudentAge(firstName, newAge) {
    let student = STUDENTS_DATA.find((s) => s.firstName === firstName);
    if (student) {
      student.age = newAge;
    }
  }
  */
 function updateStudentAge (firstName , newAge , lastName , batch){
    let student = STUDENTS_DATA.find(
        (s) => s.firstName == firstName && s.newAge == newAge && s.lastName == lastName && s.batch == batch
    );
    if (student) {
        student.age = newAge ; 
    }
 }
    
    
  // 1 - Update An age to 30
  updateStudentAge("An", 30 , "dudu" , "G2");
  
  // 2 - Print the updated data
  console.log(JSON.stringify(STUDENTS_DATA));
  