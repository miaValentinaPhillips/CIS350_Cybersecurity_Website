// 1. Find the HTML elements we want to interact with.
// An ID identifies one element; a class or data attribute can match several.
const revealButton = document.querySelector('#reveal-button');
const warningSigns = document.querySelector('#warning-signs');
const emailExample = document.querySelector('#email-example');
const loginDialog = document.querySelector('#login-dialog');
const loginButtons = document.querySelectorAll('[data-login]');

// 2. Run this function whenever the visitor clicks the reveal button.
revealButton.addEventListener('click', function () {
  const isExpanded = revealButton.getAttribute('aria-expanded') === 'true';
  const shouldShow = !isExpanded;

  // Keep the visible content, accessibility state, and highlights in sync.
  warningSigns.hidden = !shouldShow;
  revealButton.setAttribute('aria-expanded', String(shouldShow));
  emailExample.classList.toggle('clues-visible', shouldShow);
  revealButton.textContent = shouldShow
    ? 'Hide warning signs −'
    : 'Reveal warning signs +';
});

// 3. Both login buttons open the same information dialog.
// This does not log anyone in or create an account.
loginButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    loginDialog.showModal();
  });
});
