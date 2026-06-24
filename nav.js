function toggleDropdown() {
  const menu = document.getElementById('projMenu');
  const btn  = document.getElementById('projBtn');
  if (menu.classList.contains('open')) {
    closeDropdown();
  } else {
    menu.classList.add('open');
    btn.classList.add('open');
  }
}

function closeDropdown() {
  const menu = document.getElementById('projMenu');
  const btn  = document.getElementById('projBtn');
  if (menu) menu.classList.remove('open');
  if (btn)  btn.classList.remove('open');
}

document.addEventListener('click', function(e) {
  const wrap = document.getElementById('projWrap');
  if (wrap && !wrap.contains(e.target)) closeDropdown();
});

// Highlight active nav link based on current page filename
(function() {
  const page = window.location.pathname.split('/').pop().replace('.html', '');
  const map = {
    'index':    0,
    'about':    1,
    'contact':  3
  };
  const projectPages = ['projects','p1','p2','p3','p4','p5'];

  const navBtns = document.querySelectorAll('.nb');
  if (map[page] !== undefined && navBtns[map[page]]) {
    navBtns[map[page]].classList.add('on');
  }
  const projBtn = document.getElementById('projBtn');
  if (projectPages.includes(page) && projBtn) {
    projBtn.classList.add('on');
  }
})();
