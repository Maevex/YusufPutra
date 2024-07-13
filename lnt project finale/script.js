function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var event = document.getElementById('event').value;
  
    if (name.length < 3) {
      alert("Name must be at least 3 characters long");
      return false;
    }
  
    if (!email.includes('@')) {
      alert("Invalid email address");
      return false;
    }
  
    if (!phone.startsWith('08') || phone.length > 14) {
      alert("Invalid phone number");
      return false;
    }
  
    return true;
  }
  
  function submitForm() {
    if (validateForm()) {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          phone: document.getElementById('phone').value,
          event: document.getElementById('event').value
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.error('Error:', err));
    }
  }

  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    submitForm();
  });  