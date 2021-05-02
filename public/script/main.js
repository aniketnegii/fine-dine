function showAlert(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.subbtn');
    // Get form
    const form = document.querySelector('#submit');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
}



document.getElementById('submit').addEventListener("click",function(e){

    const name = document.getElementById('name').value,
          email = document.getElementById('email').value,
          message = document.getElementById('message').value
  
    // Validate
    if(name === '' || email === '' || message === '') {
      // Error alert
      showAlert("Please fill all the details.", "error");
    } else {
      $.get("https://myeasyapi.herokuapp.com/register/send_otp", 
      { "email":email,
        "message": "Name: "+name+"<br>"+"Message: "+message 
    }, 
    function(data, status){
       if(status=="success"){ 
         otp_from_back = data; 
         document.getElementById("otp_div").style.display='block'; } } ); 
        showAlert("Your email has been sent.", "success");
    }
    e.preventDefault();
})