const errorElement = '<span class="error-msg">This field is required</span>'

const verifyForm = ()=> {
  const contactForm = document.getElementById('contact-form');
  let errorsCount = 0;
  const requiredFieldList = ['txt-input name', 'txt-input email', 'txt-input message'];
  for (let i = 0; i < requiredFieldList.length; i++) {
    const fieldInput = contactForm.getElementsByClassName(requiredFieldList[i])[0];
    if (fieldInput.value.trim().length == 0 || !fieldInput.validity.valid) {
      if (!fieldInput.parentElement.getElementsByClassName('error-msg')[0]) {
        fieldInput.insertAdjacentHTML('afterend', errorElement);
      }
      errorsCount++;
    } else {
      fieldInput.parentElement.getElementsByClassName('error-msg')[0]?.remove();
    }
  }

  const checkBox = contactForm.getElementsByClassName('checkbox')[0];
  if (checkBox.classList.contains('unchecked')) {
    checkBox.classList.add('error');
    errorsCount++;
  } else {
    checkBox.classList.remove('error');
  }

  return errorsCount == 0;
};

const sendMessage = ()=> {
  if (verifyForm()) {
    openSnackBar('Your message has been received, we will reply to you in 5 business days.');
  }
};

