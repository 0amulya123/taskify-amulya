const darkToggle = document.querySelector('.dark-toggle');
const body = document.body;
const getStartedBtn = document.getElementById('getStartedBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const closeLogin = document.getElementById('closeLogin');
const closeSignup = document.getElementById('closeSignup');
const signupLink = document.getElementById('signupLink');
const loginLink = document.getElementById('loginLink');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const contactForm = document.getElementById('contactForm');
const contactStatus = document.getElementById('contactStatus');

// DARK MODE TOGGLE
darkToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('darkMode', body.classList.contains('dark'));
});
if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark');
}

// MODAL CONTROL
getStartedBtn.addEventListener('click', () => {
  loginModal.style.display = "flex";
});
closeLogin.addEventListener('click', () => {
  loginModal.style.display = "none";
});
closeSignup.addEventListener('click', () => {
  signupModal.style.display = "none";
});
signupLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginModal.style.display = "none";
  signupModal.style.display = "flex";
});
loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  signupModal.style.display = "none";
  loginModal.style.display = "flex";
});
window.addEventListener('click', (e) => {
  if (e.target === loginModal) loginModal.style.display = "none";
  if (e.target === signupModal) signupModal.style.display = "none";
});

// LOGIN/SIGNUP LOGIC (Demo only, replace with auth logic)
loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;
  if (email && password) {
    alert("Login successful! Redirecting to your dashboard...");
    window.location.href = "dashboard.html"; // point to your to-do app page
  }
});
signupForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = signupForm.signupEmail.value;
  const password = signupForm.signupPassword.value;
  if (email && password) {
    alert("Sign up successful! Logging you in...");
    window.location.href = "dashboard.html";
  }
});

// CONTACT FORM HANDLER (Demo: shows success message)
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = contactForm.contactName.value.trim();
  const email = contactForm.contactEmail.value.trim();
  const message = contactForm.contactMessage.value.trim();
  if (!name || !email || !message) {
    contactStatus.textContent = "Please fill in all fields.";
    contactStatus.style.color = 'var(--danger)';
    return;
  }
  // Simulate sending message:
  contactStatus.style.color = 'var(--success)';
  contactStatus.textContent = "Thank you for contacting us! We'll get back to you soon.";
  contactForm.reset();
});
