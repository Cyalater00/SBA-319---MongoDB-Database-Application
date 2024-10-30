const user = {
  _id: 1, 
  name: "Mike O",
  email: "Mike.O@example.com",
  gender: "Male",
  status: "Active"
};

// Get form elements
const form = document.getElementById('update_user');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const maleRadio = document.getElementById('radio-2');
const femaleRadio = document.getElementById('radio-3');
const activeRadio = document.getElementById('radio-4');
const inactiveRadio = document.getElementById('radio-5');

nameInput.value = user.name;
emailInput.value = user.email;

if (user.gender === 'Male') {
  maleRadio.checked = true;
} else {
  femaleRadio.checked = true;
}

if (user.status === 'Active') {
  activeRadio.checked = true;
} else {
  inactiveRadio.checked = true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get updated user data
  const updatedUser = {
    _id: user._id, /
    name: nameInput.value,
    email: emailInput.value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    status: document.querySelector('input[name="status"]:checked').value,
  };

  // Send update request to backend (replace with your API call)
  fetch('/update-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedUser),
  })
    .then(response => {
      if (response.ok) {
        console.log('User updated successfully!');
      } else {
        console.error('Error updating user:', response.statusText);
        // Handle error (e.g., show error message)
      }
    })
    .catch(error => {
      console.error('Error updating user:', error);
      // Handle network or other errors
    });
});