
const searchQuery = ev=> {
  const resultMenu = ev.target.parentElement.getElementsByClassName('result-menu')[0];

  if (ev.target.value.trim().length > 0) {
    if (!resultMenu.classList.contains('loading')) {
      resultMenu.classList.add('loading');
    }
  } else {
    resultMenu.classList.remove('loading');
  }
};

const hideResultMenu = ev=> {
  const resultMenu = ev.target.parentElement.getElementsByClassName('result-menu')[0];
  resultMenu.classList.remove('loading');
};

const showResultMenu = ev=> {
  const resultMenu = ev.target.parentElement.getElementsByClassName('result-menu')[0];
  if (!resultMenu.classList.contains('loading') && ev.target.value.trim().length > 0) {
    resultMenu.classList.add('loading');
  }
};

const getBook = ev=> {
  let book = ev.target;
  while (!book.classList.contains('book')) {
    book = book.parentElement;
  }
  return book;
};

const flipBook = ev=> {
  const book = getBook(ev);
  if (book.classList.contains('flipped')) {
    book.classList.remove('flipped');
  } else {
    book.classList.add('flipped');
  }
};

const openBook = ev=>{
  ev.preventDefault();
  ev.stopPropagation();
  return false;
};
