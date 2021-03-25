const menuHiddenData = document.querySelector('.menu-hidden__container'),
      menuBar = document.querySelector('#menu-bar');
      
      menuBar.addEventListener('click', ()=> {
          if (menuHiddenData.classList.contains('hidden')) {
            menuHiddenData.classList.remove('hidden');
            menuBar.setAttribute("src", "../img/close.png");
          } else {
            menuHiddenData.classList.add('hidden');
            menuBar.setAttribute("src", "../img/bar.png");
          }
      });