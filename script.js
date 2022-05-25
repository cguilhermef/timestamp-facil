let timer = null;
document.addEventListener('DOMContentLoaded', function () {
  const b = new ClipboardJS('#btn-copy');
  const t = document.getElementsByClassName('js-timestamp')[0];
  t.innerHTML = new Date()
    .toISOString()
    .replace(/\:/g, '')
    .replace(/\-/g, '')
    .split('.')[0];

  clearTimeout(timer);

  b.on('success', function () {
    const c = document.querySelector('.copied');
    c.style.display = 'flex';
    timer = setTimeout(function () {
      c.style.display = 'none';
    }, 1500);
  });
});

function generate() {
  const t = document.getElementsByClassName('js-timestamp')[0];
  const stamp = new Date()
    .toISOString()
    .replace(/\:/g, '')
    .replace(/\-/g, '')
    .split('.')[0];
  t.innerHTML = stamp;
  document
    .getElementById('btn-copy')
    .setAttribute('data-clipboard-text', stamp);
}

setInterval(function () {
  generate();
}, 5000);
