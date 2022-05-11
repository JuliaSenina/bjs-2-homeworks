function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  return `name: ${this.name}, gender: ${this.gender}, age: ${this.age}`;
};

Student.prototype.setSubject = function (subjectName) {
  let subject = this.subjectName;
  return `subject: ${subject}`;
};

Student.prototype.addMark = function (mark) {
  let marks = [];
  if (this.marks === undefined) { 
    this.marks = this.mark;
  } else {
    this.marks.push(this.mark);
  };
};

Student.prototype.addMarks = function (...mark) {
  if (this.marks === undefined) { 
    this.marks = this.mark;
  } else {
    this.marks.push(this.mark);
  };
};

Student.prototype.getAverage = function () {
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {   
    sum += this.marks[i];
  };
  return Number((sum / this.marks.length).toFixed(2));
};

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.exclude = "reason";
};