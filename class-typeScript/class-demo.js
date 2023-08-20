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
var userDataSend1 = new UserData("Niloy Roy", 24);
var userDataSend2 = new UserData("Saddat Hossain", 24);
userDataSend1.display();
userDataSend2.display();
