// Evento de observação de reload do DOM
document.addEventListener('DOMContentLoaded', function () {


  // -- Adiciona uma borda da thumb do trailer selecionada -- //
  const trailer = document.querySelectorAll('[data-tab-trailer]')

  for (let i = 0; i < trailer.length; i++) {
    trailer[i].addEventListener('click', function (thumb) {

      thumnNoSelect()
      thumb.target.classList.add('trailer__playlist__video__thumb--is-active')
    })
  }

})



//---------------------------------------------------------------------------------//

// -- Remove a borda das thumbs dos trailers não selecionados  -- //

function thumnNoSelect() {
  const thumbSelect = document.querySelectorAll('[data-tab-trailer]')

  for (let i = 0; i < thumbSelect.length; i++) {
    thumbSelect[i].classList.remove('trailer__playlist__video__thumb--is-active')
  }
}

//-----------------------------------------------------------------------------//



// -- Função para selecioanr Trailer -- //

const trailerPlaylist = document.querySelectorAll('.trailer__playlist__video');
const trailerVideo = document.querySelector('.trailer__video');

function showTrailer(e) {

  const videoSource = this.firstElementChild.getAttribute('data-tab-trailer');
  trailerVideo.innerHTML = `<iframe class="trailer__video__play" src="https://www.youtube.com/embed/${videoSource}?controls=0&showinfo=0&rel=0&fs=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in- picture" allowfullscreen></iframe>`;
}

trailerPlaylist.forEach(video => video.addEventListener('click', showTrailer));

//---------------------------------------------------------------------------------------------------------//


// -- Fução para habilitar um botão para fecha o trailer do filme -- //

const closeButton = document.querySelector('.trailer__close');

closeButton.addEventListener('click', function () {
  document.querySelector('.trailer__video').innerHTML = '';
});

const trailerClose = document.querySelector('.trailer__close');

function showTrailer() {
  trailerClose.style.display = "block";
  const videoSource = this.firstElementChild.getAttribute('data-tab-trailer');
  trailerVideo.innerHTML = `<iframe class="trailer__video__play" src="https://www.youtube.com/embed/${videoSource}?controls=0&showinfo=0&rel=0&fs=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in- picture" allowfullscreen></iframe>`;
}

function closeTrailer() {
  trailerClose.style.display = "none";
  trailerVideo.innerHTML = '';
}

trailerPlaylist.forEach(video => video.addEventListener('click', showTrailer));
trailerClose.addEventListener('click', closeTrailer);

//-------------------------------------------------------------------------------------------------------------------------------//



// -- Carrousel para seção de personagens -- //

let swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1023: {
      slidesPerView: 1,
      spaceBetween: 1,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 1,
    },
    1980: {
      slidesPerView: 6,
      spaceBetween: 1,
    }
  },
});


//-------------------------------------------------------------------------//



// -- Efeito de flip na seção de personagens -- //

const cards = document.querySelectorAll('.shows__list__item');

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];

  card.addEventListener('click', function () {
    this.classList.toggle('shows__list__item--is-active');
  });
}

//----------------------------------------------------------------------------------------------//

// -- Efeito de scroll para seções --//
new fullpage('#fullpage', {
  autoScrolling: true,
  scrollHorizontally: true,

  // -- Solução de bug para o background do hero -- //
  onLeave: function (origin, destination, direction) {

    let video = document.querySelector('.background');
    if (video.paused) {
      video.play();
    }
  },
});

//------------------------------------------------------------------------//
