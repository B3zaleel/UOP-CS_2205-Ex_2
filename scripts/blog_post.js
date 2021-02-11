const maxRows = 5;
const minRows = 1;

const toggleLikeStatus = likeBtn=> {
  if (likeBtn.classList.contains('liked')) {
    likeBtn.classList.replace('liked', 'disliked');
  } else {
    likeBtn.classList.replace('disliked', 'liked');
  }
};

const commentChanged = ev=>{
  const lines = ev.target.value.split('\n').length;
  if (lines < maxRows) {
    if (lines >= minRows) {
      ev.target.setAttribute('rows', lines);
    }
  } else {
    ev.target.setAttribute('rows', maxRows);
  }
};
