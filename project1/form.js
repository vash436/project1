
const form = document.getElementById("form")
const email = document.getElementById("email")
const password = document.getElementById("password")
const submit = document.getElementById("submit")
const emailError = document.getElementById("email-error")
const passwordError = document.getElementById("password-error")
const passl = 10


form.addEventListener("submit", (e) => {
    e.preventDefault()
    if(e.target[0].value.trim() === ""){
        console.log("Run")
        emailError.innerText = "email is required"
    }
    if(e.target[1].value.trim() === ""){
        console.log("Run")
        passwordError.innerText = "password is required"
    }

    console.log(e.target[0].value,"even")
   })

   submit.addEventListener("click", () => {
    emailError.innerText = ""
    passwordError.innerText = ""
    if(email.value.trim() === ""){
        emailError.innerText = "email is required"
    }
    else if(!email.value.includes("@")){
        emailError.innerText = "password is required"
    }
    else if(password.value.length < passl){
        passwordError.innerText = "password must be at least 10 characters"
    }
    else{
        alert("You can now login")
        console.log({
            email:email.value,
            password:password.value
        })
    }
   })