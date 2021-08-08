/*
<i class="fas fa-check"></i>
<p>Thank you for contacting us, Vasile</p>
<span>X</span>
*/

(function () {
  const submitButton = document.querySelector('[data-form]');
  submitButton.addEventListener('submit', handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    const firstNameValue = e.target.elements.firstName.value;
    const lastNameValue = e.target.elements.lastName.value;
    const gendersValue = e.target.elements.gender.value;
    const textValue = e.target.elements.message.value;
    const popupMessage = document.querySelector('.contact-form__message');

    if (verifyFields(firstNameValue) && verifyFields(lastNameValue) && verifyFields(textValue) && verifyFields(gendersValue)) {
      document.querySelector('[data-first-name]').style.border = '1px solid #000';
      document.querySelector('[data-last-name]').style.border = '1px solid #000';
      document.querySelector('[data-message]').style.border = '1px solid #000';
      document.querySelector('[data-genders]').style.border = '1px solid #000';
      getSuccesMessage();
    } else {
      document.querySelector('[data-first-name]').style.border = '1px solid red';
      document.querySelector('[data-last-name]').style.border = '1px solid red';
      document.querySelector('[data-message]').style.border = '1px solid red';
      document.querySelector('[data-genders]').style.border = '1px solid red';
      return false;
    }
    // Success Message
    function getSuccesMessage() {
      popupMessage.style.display = 'flex';
      const icon = document.createElement('i');
      const message = document.createElement('p');
      const close = document.createElement('span');

      icon.className = 'fas fa-check';
      message.innerText = `Thank you for contacting us, ${firstNameValue}`;
      close.innerText = 'X';

      popupMessage.append(icon, message, close);

      console.log(`
    First Name: ${firstNameValue},
    Last name : ${lastNameValue},
    Gender : ${gendersValue},
    Message : ${textValue}
    `);
    }

    // Fields Verify
    function verifyFields(input) {
      const typeOfErrors = ['', null];
      let response = true;
      for (const error of typeOfErrors) {
        if (error === input) {
          response = false;
        }
      }
      return response;
    }
  }
})();
