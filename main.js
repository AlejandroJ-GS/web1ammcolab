document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('keydown', () => {
    document.querySelector('audio').play();
  });

  window.addEventListener('keyup', () => {
    document.querySelector('audio').pause();
  });
});
