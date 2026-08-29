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
userProfession.textContent = `Profession: ` + userProfile.profession;

const userSwitchLinks = document.querySelectorAll('.nav-link');

function switchLinks(e) {
  document.querySelectorAll('.main-card-content > div').forEach((div) => {
    div.style.display = 'none';
  });
  const targetId = e.target.dataset.target;
  const tabs = document.getElementById(targetId);
  tabs.style.display = '';

  console.log(`User clicked on tab: ${targetId}`);
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

const userPhone = document.getElementById('user-phone');

function getOperator(number) {
  const code = number.slice(3, 6);

  if (['067', '096', '097', '098'].includes(code)) {
    return 'Kyivstar';
  } else {
    return 'Unknown Operator';
  }
}

userPhone.addEventListener('mouseenter', () => {
  const originalNumber = userPhone.dataset.phone;
  const operator = getOperator(originalNumber);
  userPhone.textContent = `${operator}: ${originalNumber}`;
});

userPhone.addEventListener('mouseleave', () => {
  userPhone.textContent = userPhone.dataset.phone;
});

const birthYear = userProfile.birthDate.slice(-4);
const age = new Date().getFullYear() - birthYear;

userDate.textContent = `Date of birth: ${userProfile.birthDate}`;
userDate.title = `Age: ${age}`;

const toggleContactsBtn = document.getElementById('toggle-contacts-btn');
const contactsInfo = document.getElementById('contacts-info');

function toggleContacts() {
  contactsInfo.classList.toggle('hidden');

  if (contactsInfo.classList.contains('hidden')) {
    toggleContactsBtn.textContent = 'Show contacts';
  } else {
    toggleContactsBtn.textContent = 'Hide contacts';
  }
}

toggleContactsBtn.addEventListener('click', toggleContacts);
