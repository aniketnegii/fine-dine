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
        showAlert("Your email has been sent.", "success");
    }
    e.preventDefault();
})