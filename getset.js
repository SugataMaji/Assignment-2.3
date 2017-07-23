var password = "mypasscode";
/**
 * The Employee class, having fullName property
 * @class Employee
 * @constructor
**/
var User = (function () {
    function User() {
    }
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return this.username;
        },
        set: function (newName) {
            if (password && password == "mypasscode") {
                this.username = newName;
            }
            else {
                console.log("Error: The user1 is not valid1");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "fullName1", {
        get: function () {
            return this.username;
        },
        set: function (newName) {
            if (password && password == "mypasscodr") {
                this.username = newName;
            }
            else {
                console.log("Error: The user2 is not valid");
            }
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
var user = new User();
user.fullName = "Sugata Maji";
if (user.fullName) {
    console.log("User1: " + user.fullName + " is a valid user .");
}
var user1 = new User();
user1.fullName1 = "Sugata Maji1";
if (user1.fullName1) {
    console.log("User2: " + user1.fullName1 + " is a valid user .");
}
