let password = "mypasscode";


/**
 * The Employee class, having fullName property
 * @class Employee
 * @constructor
**/
class User {
    private username: string;

    get fullName(): string {
        return this.username;
    }

    set fullName(newName: string) {
        if (password && password == "mypasscode") {
            this.username = newName;
        }
        else {
            console.log("Error: The user1 is not valid1");
        }
    }


    get fullName1(): string {
        return this.username;
    }

    set fullName1(newName: string) {
        if (password && password == "mypasscodr") {
            this.username = newName;
        }
        else {
            console.log("Error: The user2 is not valid");
        }
    }
}

let user = new User();
user.fullName = "Sugata Maji";
if (user.fullName) {
    console.log(`User1: ${user.fullName} is a valid user .`);
}
let user1 = new User();
user1.fullName1 = "Sugata Maji1";
if (user1.fullName1) {
    console.log(`User2: ${user1.fullName1} is a valid user .`);
}
