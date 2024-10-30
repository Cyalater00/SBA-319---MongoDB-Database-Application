const form = document.getElementById('add_user');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const status = document.querySelector('input[name="status"]:checked').value;

  // Create a user object (optional, depending on your backend logic)
  const user = {
    name,
    email,
    gender,
    status,
  };

  // Send the data to your backend (replace with your API call)
  fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify(user), 
  })
    .then(response => {
      if (response.ok) {
        console.log('User added successfully!');
      } else {
        console.error('Error adding user:', response.statusText);
        /
    })
    .catch(error => {
      console.error('Error adding user:', error);
    });
});