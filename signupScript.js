// handle signup
// handle login

const signup_name_field=document.querySelector("#signup_name_field");
const signup_email_field=document.querySelector("#signup_email_field");
const signup_password_field=document.querySelector("#signup_password_field");
const signup_button=document.querySelector("#signup_btn");
// console.log(login_email_field);
signup_button.addEventListener('click',saveCredentials);

const name_regex=
function saveCredentials(e){
  e.preventDefault();
  let name=signup_name_field.value; 
  let email=signup_email_field.value; 
  let password=signup_password_field.value; 
  console.log(name);
  console.log(email);
  console.log(password);
  
  if(validateCredentials(name, email, password)){
    let credentials=[{
      name,
      email,
      password
    },...JSON.parse(localStorage.getItem("credentials")) || []
    ]
    
    // console.log(storage);
    localStorage.setItem("credentials",JSON.stringify(credentials))
  }
}

function validateCredentials(name, email, password){
  if(name==='' || email==='' || password===''){
    console.log
  }
}




