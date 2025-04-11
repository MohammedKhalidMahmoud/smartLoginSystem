// handle signup
// handle login

const signup_name_field=document.querySelector("#signup_name_field");
const signup_email_field=document.querySelector("#signup_email_field");
const signup_password_field=document.querySelector("#signup_password_field");
// console.log(login_email_field);

fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'John Doe',
      email: 'john@example.com'
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    window.location.href = 'signin.html';
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  





