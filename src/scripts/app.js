
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

const setupScrollViews = ()=> {
  const scrollViews = document.getElementsByClassName('scroll-view');
  for (let i = 0; i < scrollViews.length; i++) {
    const ps = new PerfectScrollbar(scrollViews[i], {
      wheelSpeed: 2,
      wheelPropagation: true,
    });
  }
};

const stopMenu =(ev)=> {
  ev.preventDefault();
  return false;
};

const imgElements = document.getElementsByTagName('img');
for (let i = 0; i < imgElements.length; i++) {
  imgElements[i].addEventListener('contextmenu', ev=>{
    stopMenu(ev);
  });
};


setupScrollViews();
document.getElementById('copyright').innerHTML = `<span>&copy; ${new Date().getFullYear()} Nagatos Notes</span>`;
