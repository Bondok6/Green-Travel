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
    name: 'Youchai Benkler',
    bio: 'Someone who enjoyed a trip to Egypt',
    paragraph:
      'I spend one week in Egypt, and I had the best week ever with my family. It was an amazing trip',
  },
  {
    name: 'John Marcelo',
    bio: 'Someone who enjoyed a trip to the Forest Hiker.',
    paragraph:
      'WOW! my life is completely different now, I spend the best 3 days ever. It was an amazing trip',
  },
  {
    name: 'SohYeong Noh',
    bio: 'Someone who enjoyed a trip to the Snow Adventure',
    paragraph:
      'WOW! It was the best trip I spend, I spend the best 5 days of my life. It was an amazing trip',
  },
  {
    name: 'Kyrillos Hany',
    bio: 'Someone who enjoyed a trip to Paris',
    paragraph:
      'WOW! my life is completely different now, I spend the best 10 days ever. It was an amazing trip',
  },
  {
    name: 'Lila Tretikov',
    bio: 'Someone who enjoyed a trip to Landon',
    paragraph:
      'I had the best 15 days ever in London, I got new experiences, and new knowledge. It was an amazing trip',
  },
  {
    name: 'Andres Ryan',
    bio: 'Someone who enjoyed a trip to Australia',
    paragraph:
      'I had the best month ever in Australia. Wow! my life is completely different now. It was an amazing trip',
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
