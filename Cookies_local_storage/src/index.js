const firstNameInput = document.getElementById('firstname');
const emailInput = document.getElementById('email');

function setCookies() {
  const firstName = firstNameInput.value;
  const email = emailInput.value;

  document.cookie = `firstname=${firstName}`;
  document.cookie = `email=${email}`;
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
