let timer = null;

function generate() {
  const t = document.getElementsByClassName('js-timestamp')[0];
  const a = dayjs().format('YYYYMMDDTHHmmss');
  t.innerHTML = a;
  document.getElementById('btn-copy').setAttribute('data-clipboard-text', a);
}

document.addEventListener('DOMContentLoaded', function () {
  const b = new ClipboardJS('#btn-copy');
  generate();
  setInterval(function () {
    generate();
  }, 5000);
  b.on('success', function () {
    const c = document.querySelector('.copied');
    c.style.display = 'flex';
    clearTimeout(timer);
    timer = setTimeout(function () {
      c.style.display = 'none';
    }, 1500);
  });
});
