console.log("Welcome to the password validator tool!");
console.log("Please enter a password below:");

function passwordCheck(password) {
    let i = 0; i < password.length; i++
    if (password.length > 10) {
        console.log(`Password approved!`);
    } else {
        console.log('Password does not match criteria, please try again.')
    }
}

passwordCheck('enterhere');
passwordCheck('completenow')