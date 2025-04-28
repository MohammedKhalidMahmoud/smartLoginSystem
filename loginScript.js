// handle login
const login_email_field=document.querySelector("#login_email_field");
const login_password_field=document.querySelector("#login_password_field");
const login_button=document.querySelector("#login_btn");
// console.log(login_button);

login_button.addEventListener('click',checkCredentials);


function checkCredentials(e){
  e.preventDefault();
  let email=login_email_field.value; 
  let password=login_password_field.value; 
  // console.log(name);
  console.log(email);
  console.log(password);
  let credentials=JSON.parse(localStorage.getItem("credentials")) || [];
  console.log(credentials.length);
  for(let i=0;i<credentials.length;i++){
    if(credentials[i].email===email && credentials[i].password===password){
      localStorage.setItem("name", credentials[i].name)
      window.location.href = "./home.html";
    }
      
    else if(credentials[i].email===email && credentials[i].password!==password){
      console.log("Password is not correct");
    }
    else{
      console.log("You are not registered");
    }
  }
  // if(validateCredentials(name, email, password)){
  //   let credentials=[{
  //     name,
  //     email,
  //     password
  //   },...JSON.parse(localStorage.getItem("credentials")) || []
  //   ]
    
  //   // console.log(storage);
  //   localStorage.setItem("credentials",JSON.stringify(credentials))
  // }
}

// function validateCredentials(name, email, password){
//   return true;
// }





