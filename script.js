function showLove() {
    const question = document.querySelector('.question');
    const yesBtn = document.querySelector('.yes-btn');
    question.textContent = "I love you so much dear...";
    question.style.color = "red";
  }
  
  function moveNoButton() {
    const noBtn = document.querySelector('.no-btn');
    noBtn.style.position = "absolute";
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 40);
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
  }
  