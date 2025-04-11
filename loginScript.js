// handle login
const login_email_field=document.querySelector("#login_email_field");
const login_password_field=document.querySelector("#login_password_field");
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
    window.location.href = 'signup.html';
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  





