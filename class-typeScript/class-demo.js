var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserData = /** @class */ (function () {
    function UserData(userName, userAge) {
        this.userName = userName;
        this.userAge = userAge;
    }
    UserData.prototype.display = function () {
        console.log("Data of ".concat(this.userName, " and User age is ").concat(this.userAge));
    };
    return UserData;
}());
// let userDataSend1 = new UserData("Niloy Roy", 24);
// let userDataSend2 = new UserData("Saddat Hossain", 24);
// userDataSend1.display();
// userDataSend2.display();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, userAge, studentId) {
        var _this = _super.call(this, userName, userAge) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.displayStudentData = function () {
        console.log("Data of ".concat(this.userName, " and User age is ").concat(this.userAge, ", student Id :").concat(this.studentId));
    };
    return Student;
}(UserData));
var studentDataPass = new Student("Niloy", 12, 1250);
studentDataPass.displayStudentData();
