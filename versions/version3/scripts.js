document.addEventListener('DOMContentLoaded', function() {
  const firstNameInput = document.querySelector('.first-name');
  const lastNameInput = document.querySelector('.last-name');
  const usernameInput = document.querySelector('.username');
  const firstNameNextButton = document.querySelector('.next-button.first-name');
  const lastNameNextButton = document.querySelector('.next-button.last-name');
  const usernameNextButton = document.querySelector('.next-button.username');
  const successMessage = document.querySelector('.success');

  firstNameInput.addEventListener('input', function() {
    if (firstNameInput.value) {
      document.querySelector('.icon-user').classList.add('next');
    } else {
      document.querySelector('.icon-user').classList.remove('next');
    }
  });

  firstNameNextButton.addEventListener('click', function() {
    if (firstNameInput.value) {
      sessionStorage.setItem('firstName', firstNameInput.value);
      document.querySelector('.first-name-section').classList.add('fold-up');
      document.querySelector('.last-name-section').classList.remove('folded');
    }
  });

  lastNameInput.addEventListener('input', function() {
    if (lastNameInput.value) {
      document.querySelector('.icon-user').classList.add('next');
    } else {
      document.querySelector('.icon-user').classList.remove('next');
    }
  });

  lastNameNextButton.addEventListener('click', function() {
    if (lastNameInput.value) {
      sessionStorage.setItem('lastName', lastNameInput.value);
      document.querySelector('.last-name-section').classList.add('fold-up');
      document.querySelector('.username-section').classList.remove('folded');
    }
  });

  usernameInput.addEventListener('input', function() {
    if (usernameInput.value) {
      document.querySelector('.icon-user').classList.add('next');
    } else {
      document.querySelector('.icon-user').classList.remove('next');
    }
  });

  usernameNextButton.addEventListener('click', function() {
    if (usernameInput.value) {
      sessionStorage.setItem('username', usernameInput.value);
      document.querySelector('.username-section').classList.add('fold-up');
      successMessage.style.marginTop = '0';
      successMessage.style.display = 'flex';
    }
  });
});