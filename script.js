document.addEventListener('DOMContentLoaded', () => {
  const scoreRing = document.querySelector('.score-ring');
  const heroScore = document.getElementById('hero-score');
  const checkboxes = document.querySelectorAll('.toggle-row input');
  const simulateButton = document.getElementById('simulate-risk');

  function updateScore() {
    const checked = [...checkboxes].filter((box) => box.checked).length;
    const total = checkboxes.length;
    const score = Math.max(40, Math.round((checked / total) * 100));

    if (scoreRing) {
      scoreRing.style.setProperty('--score', score);
    }

    if (heroScore) {
      heroScore.textContent = score;
    }

    const pill = document.querySelector('.pill');
    if (pill) {
      pill.textContent = score >= 80 ? 'Protegida' : score >= 60 ? 'En revisión' : 'Riesgo alto';
      pill.classList.toggle('success', score >= 80);
      pill.style.background = score >= 80 ? 'rgba(52, 211, 153, 0.12)' : score >= 60 ? 'rgba(251, 191, 36, 0.12)' : 'rgba(251, 113, 133, 0.12)';
      pill.style.color = score >= 80 ? '#a7f3d0' : score >= 60 ? '#fde68a' : '#fecdd3';
    }
  }

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', updateScore);
  });

  simulateButton?.addEventListener('click', () => {
    const dangerItem = document.querySelector('.check-item.danger');
    if (dangerItem) {
      dangerItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      dangerItem.classList.add('flash');
      setTimeout(() => dangerItem.classList.remove('flash'), 900);
    }
  });

  updateScore();
});
