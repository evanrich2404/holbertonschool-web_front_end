// JavaScript code

const firstNameInput = document.getElementById('firstname');
const emailInput = document.getElementById('email');

function setCookies() {
  const firstName = firstNameInput.value;
  const email = emailInput.value;
  
  // get the date 10 days from now
  const date = new Date();
  date.setDate(date.getDate() + 10);
  const expires = `expires=${date.toUTCString()}`;

  document.cookie = `firstname=${firstName};${expires}`;
  document.cookie = `email=${email};${expires}`;
}

function showCookies() {
  const cookies = document.cookie.split(';');
  const cookieContainer = document.getElementById('cookieContainer');
  cookieContainer.innerHTML = '';  // Clear the container

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    const [name, value] = cookie.split('=');

    if (name === 'firstname' || name === 'email') {
      const paragraph = document.createElement('p');
      paragraph.textContent = `Cookies: ${name}=${value}`;
      cookieContainer.appendChild(paragraph);
    }
  }
}

const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', setCookies);

const showBtn = document.getElementById('showBtn');
showBtn.addEventListener('click', showCookies);
