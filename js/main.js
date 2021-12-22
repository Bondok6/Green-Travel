function mobileMenu() {
  const menuIcon = document.querySelector('.menu');
  const exitIcon = document.querySelector('.nav-exit');
  const navList = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-item');
  const nav = document.querySelector('.nav-bottom');

  const openMenu = () => {
    nav.classList.add('nav-active');
    navList.classList.add('nav-active');
    menuIcon.style.visibility = 'hidden';
  };

  const closeMenu = () => {
    nav.classList.remove('nav-active');
    navList.classList.remove('nav-active');
    menuIcon.style.visibility = 'unset';
  };

  menuIcon.addEventListener('click', openMenu);
  exitIcon.addEventListener('click', closeMenu);

  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

mobileMenu();

// Speakers Section

const speakersData = [
  {
    img: 'images/speakers/speaker1.png',
    name: 'Youchai Benkler',
    bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    paragraph:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Debitis idinventore natus facere, laudantium dolorum.',
  },
  {
    img: 'images/speakers/speaker2.png',
    name: 'John Marcelo',
    bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    paragraph:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Debitis idinventore natus facere, laudantium dolorum.',
  },
  {
    img: 'images/speakers/speaker3.png',
    name: 'SohYeong Noh',
    bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    paragraph:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Debitis idinventore natus facere, laudantium dolorum.',
  },
  {
    img: 'images/speakers/speaker4.png',
    name: 'Kyrillos Hany',
    bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    paragraph:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Debitis idinventore natus facere, laudantium dolorum.',
  },
  {
    img: 'images/speakers/speaker5.png',
    name: 'Lila Tretikov',
    bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    paragraph:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Debitis idinventore natus facere, laudantium dolorum.',
  },
  {
    img: 'images/speakers/speaker6.png',
    name: 'Andres Ryan',
    bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    paragraph:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Debitis idinventore natus facere, laudantium dolorum.',
  },
];

const container = document.querySelector('.speakers-container');
function createSpeaker(i) {
  const speakerHtml = `
    <li class="speaker">
      <img src="images/speakers/speaker${i + 1}.png" alt="speaker${
  i + 1
}" class="speaker__img">
      <div class="speaker__details">
        <h3>${speakersData[i].name}</h3>
        <h5>${speakersData[i].bio}</h5>
        <p>${speakersData[i].paragraph}</p>
      </div>
    </li>`;

  container.insertAdjacentHTML('beforeend', speakerHtml);
}

let ind = 0;
const showBtn = document.querySelector('.show-btn');

function generateAllSpeakers() {
  for (let i = speakersData.length - 1; i >= 0; i -= 1) {
    createSpeaker(ind);
    ind += 1;
  }
}

function generateTwoSpeakers() {
  for (let i = speakersData.length - 1; i >= 4; i -= 1) {
    createSpeaker(ind);
    ind += 1;
    if (ind === 6) {
      showBtn.style.display = 'none';
      return;
    }
  }
}

window.addEventListener('resize', () => {
  window.location.reload();
});

if (window.innerWidth < 992) {
  generateTwoSpeakers();
  showBtn.addEventListener('click', generateTwoSpeakers);
} else {
  generateAllSpeakers();
}
