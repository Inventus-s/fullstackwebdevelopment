// storing elements

const iPassword = document.getElementById("inputPassword");
const cPassword = document.getElementById("confirmPassword");
const submit = document.getElementById("submit");

// logic

submit.addEventListener("click", (e) => {
     const inputPassword = iPassword.value;
     const confirmPassword = cPassword.value;
     if (inputPassword === confirmPassword) {
        submit.style.backgroundColor = "green";
        alert("Password Matched. Password validation Successful.")
     } else{
        submit.style.backgroundColor = "red";
        alert("Password didn't match. Password validation unsuccessful")
     }
});