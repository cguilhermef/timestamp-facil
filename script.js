document.addEventListener('DOMContentLoaded', function () {
  const t = document.getElementsByClassName('js-timestamp')[0];
  t.innerHTML = new Date()
    .toISOString()
    .replace(/\:/g, '')
    .replace(/\-/g, '')
    .split('.')[0];
});
