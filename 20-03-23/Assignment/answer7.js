/* Create a class called User with properties username and password. Implement a getter method for password
that returns the password with all characters replaced by asterisks. Implement a setter method for password
that checks if the new password is at least 8 characters long and contains at least one number and one
uppercase letter. If the password is valid, set the new password. If not, log an error message. */

class User{
    constructor (username, password){
        this.username = username;
        this._password = password;
    }

    setPassword(newPassword){
        if (newPassword.length >= 8 && /[0-9]/.test(newPassword) && /[A-Z]/.test(newPassword)) {
            this._password = newPassword;
        } else {
            console.error("Invalid password. It must be at least 8 characters long and contain at least one number and one uppercase letter.");
        }
    }

    getPassword(){
        return this._password.replace(/./g, '*');
    }
}

const user = new User("Mukund", 'Password123');
console.log(user.getPassword());

user.setPassword('myPassword');
user.setPassword('MyPassword');

user.setPassword('MyPassword123');
console.log(user.getPassword());


