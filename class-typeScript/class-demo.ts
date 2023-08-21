class UserData {
  userName: string;
  userAge: number;

  constructor(userName: string, userAge: number) {
    this.userName = userName;
    this.userAge = userAge;
  }

  display(): void {
    console.log(`Data of ${this.userName} and User age is ${this.userAge}`);
  }
}

// let userDataSend1 = new UserData("Niloy Roy", 24);
// let userDataSend2 = new UserData("Saddat Hossain", 24);

// userDataSend1.display();
// userDataSend2.display();

class Student extends UserData {
  studentId: number;

  constructor(userName: string, userAge: number, studentId: number) {
    super(userName, userAge);
    this.studentId = studentId;
  }

  displayStudentData(): void {
    console.log(
      `Data of ${this.userName} and User age is ${this.userAge}, student Id :${this.studentId}`
    );
  }
}

let studentDataPass = new Student("Niloy", 12, 1250);

studentDataPass.displayStudentData();
