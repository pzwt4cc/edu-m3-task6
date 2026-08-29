const userProfile = {
  name: 'Robin Summeretto',
  nickname: '@Robin',
  bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rerum omnis quaerat eligendi, cum aliquam ea libero explicabo odio exercitationem quae a unde non dignissimos beatae aperiam optio. Ipsam, iste!',
  birthDate: '28.08.2000',
  profession: 'Singer idol',
};

const userPublications = [
  {
    src: './assets/img/post1.jpg',
    alt: 'post 1',
  },
  {
    src: './assets/img/post2.jpg',
    alt: 'post 2',
  },
  {
    src: './assets/img/post3.jpg',
    alt: 'post 3',
  },
];

const userName = document.getElementById('user-name');
const userNickname = document.getElementById('user-nickname');
const userBio = document.getElementById('user-bio');
const userDate = document.getElementById('user-date');
const userProfession = document.getElementById('user-profession');

userName.textContent = userProfile.name;
userNickname.textContent = userProfile.nickname;
userBio.textContent = userProfile.bio;
userDate.textContent = `Date of birth: ` + userProfile.birthDate;
userProfession.textContent = `Profession: ` + userProfile.profession;

const userSwitchLinks = document.querySelectorAll('.nav-link');

function switchLinks(e) {
  document.querySelectorAll('.main-card-content > div').forEach((div) => {
    div.style.display = 'none';
  });

  const targetId = e.target.dataset.target;
  const tabs = document.getElementById(targetId);
  tabs.style.display = '';
}

userSwitchLinks.forEach((link) => {
  link.addEventListener('click', switchLinks);
});

userPublications.forEach((item) => {
  const img = document.createElement('img');
  img.classList.add('publication-img');
  img.src = item.src;
  img.alt = item.alt;

  const publicationsTarget = document.getElementById('publications');

  publicationsTarget.append(img);
});

const subscribeBtn = document.getElementById('follow-btn');

function subscribeBtnText() {
  if (subscribeBtn.textContent === 'Subscribe') {
    subscribeBtn.textContent = 'Subscribed';
    subscribeBtn.classList.add('subscribed');
  } else {
    subscribeBtn.textContent = 'Subscribe';
    subscribeBtn.classList.remove('subscribed');
  }
}

subscribeBtn.addEventListener('click', subscribeBtnText);

const likeBtn = document.getElementById('like-btn');

function toggleLike() {
  likeBtn.classList.toggle('active');
}

likeBtn.addEventListener('click', toggleLike);
