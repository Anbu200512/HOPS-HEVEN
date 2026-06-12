window.rtlToggle = function() {
  const html = document.documentElement;
  const isRtl = html.dir === 'rtl';
  html.dir = isRtl ? 'ltr' : 'rtl';
  localStorage.setItem('dir', html.dir);
};

(function() {
  const saved = localStorage.getItem('dir');
  if (saved) {
    document.documentElement.dir = saved;
  }
})();
