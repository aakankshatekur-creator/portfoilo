console.log("js working")
new Typed(".typed-role", {
    strings: ["Full Stack Developer", "angular developer", "Web Developer","java developer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2500,
    loop: true,
    showCursor: true,
    smartBackspace: true
  });
  
  // Typing effect: Taglines
  new Typed(".typed-tagline", {
    strings: [
     'Building interactive shopping experiences with Angular.',
      "Developing scalable full-stack applications with Java & APIs.",
      "Designing scalable web applications with clean code.",
      "Bridging analytics and engineering for real-world solutions."
    ],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 3000,
    startDelay: 1000,
    loop: true,
    showCursor: true,
    smartBackspace: true
  });
  
  // Mobile Navigation Toggle
  function toggleMenu() {
    document.querySelector('nav').classList.toggle('active');
  }
  
  // Project Modal
  function openModal(title, type, features, tech, github, live, imageSrc) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-type').innerText = type;
  
    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = '';
    features.forEach(f => {
      const li = document.createElement('li');
      li.textContent = f;
      featuresList.appendChild(li);
    });
  
    const techContainer = document.getElementById('modal-tech');
    techContainer.textContent = tech.join(', '); 
  
    document.getElementById('modal-github').href = github;
    document.getElementById('modal-live').href = live;
    document.getElementById('modal-image').src = imageSrc;
  
    document.getElementById('modal').style.display = 'flex';
  }
  
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  } 
  
  const toggleBtn = document.getElementById('theme-toggle');
  const icon = toggleBtn.querySelector('i');
  
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  });
  
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      const nav = document.querySelector('nav');
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
      }
    });
  });