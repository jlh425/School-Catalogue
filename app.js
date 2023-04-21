class School{
  constructor(name,numberOfStudents){
    this._name = name;
    this._level = '';
    this._numberOfStudents = numberOfStudents;
  }
  get name(){return this._name}
  get level(){return this._level}
  get numberOfStudents(){return this._numberOfStudents}
  set numberOfStudents(newNumberOfStudents){
    if (typeof newNumberOfStudents === 'number'){
       this._numberOfStudents = newNumberOfStudents
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.')
       }
    }
  quickFacts(){
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`);
  }
  static pickSubstituteTeacher(){
    const substituteTeachers = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const numberOfSubstituteTeachers = substituteTeachers.length;
    const randomNumber = Math.floor(Math.random()*numberOfSubstituteTeachers);
    return substituteTeachers[randomNumber];
    }
}
class Primary extends School{
  constructor(name,numberOfStudents,pickupPolicy ){
    super(name);
    this._numberOfStudents=numberOfStudents;
    this._level = 'Primary';
    this._pickupPolicy= pickupPolicy;
    }
    get pickupPolicy(){return this._pickupPolicy}
    set changePickupPolicy(newPolicy){this._pickupPolicy = newPolicy}
}
class Middle extends School{
  constructor(name,numberOfStudents){
    super(name);
    this._level = 'Middle';
    this._numberOfStudents=numberOfStudents;
  }
}
class High extends School{
  constructor(name,numberOfStudents,SportsTeams){
    super(name);
    this._level = 'High';
    this._numberOfStudents=numberOfStudents;
    this._sportsTeams = SportsTeams;
  }
  get sportsTeams(){return this._sportsTeams}
  addSportsTeams(newTeam){
    this._sportsTeams.push(newTeam);
  }
}
const lorraineHansbury = new Primary('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
console.log(lorraineHansbury.quickFacts());
console.log(School.pickSubstituteTeacher());
const alSmith = new High("Al E. Smith",415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
console.log(alSmith.quickFacts());
console.log(alSmith.sportsTeams)
alSmith.addSportsTeams("Chess");
console.log(alSmith.sportsTeams)
/*
const variableName = new nameofclass(value , ["value2", "value3"]);
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 set settername(newValue) {
    this._settername = newValue;
    }
  get behavior() {
    return this._behavior;
  }   
 
  incrementBehavior() {
    this._behavior++;
  }
  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
} 

class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}
}
*/
