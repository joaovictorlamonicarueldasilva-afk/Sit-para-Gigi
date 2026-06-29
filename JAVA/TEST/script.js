const openLetterButton = document.getElementById('openLetter');
const letterCard = document.getElementById('letter');

if (openLetterButton && letterCard) {
  openLetterButton.addEventListener('click', () => {
    const isHidden = letterCard.hasAttribute('hidden');

    if (isHidden) {
      letterCard.removeAttribute('hidden');
      openLetterButton.textContent = 'Esconder carta';
      letterCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      letterCard.setAttribute('hidden', '');
      openLetterButton.textContent = 'Ler carta';
    }
  });
}
