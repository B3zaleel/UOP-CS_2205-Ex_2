const maxTextAreaRows = 5;
const minTextAreaRows = 2;

const cancelEvent = ev=>{
  ev.stopPropagation();
  return false;
};

//#region Navigation Bar
const toggleNavBar = ()=> {
  const navBar = document.getElementById('navBar');
  if (navBar.classList.contains('max')) {
    navBar.classList.replace('max', 'min');
  } else {
    navBar.classList.replace('min', 'max');
  }
};

const closeNavBar = ()=> {
  const navBar = document.getElementById('navBar');
  if (navBar.classList.contains('max')) {
    navBar.classList.replace('max', 'min');
  } else {
    navBar.classList.add('min');
  }
};
//#endregion

//#region Sign Up
const openSignUpForm = ()=> {
  const signUpForm = document.getElementById('sign-up-pane');
  signUpForm.style.display = 'block';
  closeNavBar();
};

const closeSignUpForm = ()=> {
  const signUpForm = document.getElementById('sign-up-pane');
  signUpForm.style.display = 'none';
  closeNavBar();
};

const signUp = ()=>{
  const signUpForm = document.getElementById('sign-up-pane');
  const emailInput = signUpForm.getElementsByTagName('input')[0];
  console.log(emailInput.validity);
  if (emailInput.validity.valid && emailInput.value.trim().length > 0) {
    closeSignUpForm();
    openSnackBar('Thank you for signing up.');
  } else {
    openSnackBar('Invalid email address given');
  }
};

//#endregion

const setupScrollViews = ()=> {
  const scrollViews = document.getElementsByClassName('scroll-view');
  for (let i = 0; i < scrollViews.length; i++) {
    const ps = new PerfectScrollbar(scrollViews[i], {
      wheelSpeed: 2,
      wheelPropagation: true,
    });
  }
};

const goToPreviousPage = ()=> {
  window.history.back();
};

const textAreaContentChanged = textArea=>{
  const lines = textArea.value.split('\n').length;
  if (lines <= maxTextAreaRows) {
    if (lines >= minTextAreaRows) {
      textArea.rows = lines;
    }
  } else {
    textArea.rows = maxTextAreaRows;
  }
};

const toggleCheckBox = checkbox=>{
  if (checkbox.classList.contains('checked')) {
    checkbox.classList.replace('checked', 'unchecked');
  } else {
    checkbox.classList.replace('unchecked', 'checked');
  }
};

const openSnackBar = (message, duration)=> {
  const snackBar = document.getElementById('snack-bar');
  snackBar.firstElementChild.innerHTML = message;
  snackBar.classList.add('open');
  const timeOut = window.setTimeout(()=>{
    snackBar.classList.remove('open');
  }, 5500);
};

const imgElements = document.getElementsByTagName('img');
for (let i = 0; i < imgElements.length; i++) {
  imgElements[i].addEventListener('contextmenu', ev=>{
    cancelEvent(ev);
  });
};

window.addEventListener('click', ev=>{
  closeNavBar();
  closeSignUpForm();
});

setupScrollViews();
document.getElementById('copyright').innerHTML = `<span>&copy; ${new Date().getFullYear()} Nagato Notes</span>`;
