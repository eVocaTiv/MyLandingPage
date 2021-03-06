exports.onRouteUpdate = () => {
  window.scrollTo(0, 0);
  document.getElementById('___gatsby').style.visibility = 'hidden';
  document.getElementById('___gatsby').style.maxHeight = 0;
  document.getElementById('___body').style.maxHeight = '100vh';
  document.getElementById('___body').style.overflowY = 'hidden';
  document.getElementById('___loader').style.display = 'flex';
  setTimeout(function() {
    document.getElementById('___gatsby').style.visibility = 'visible';
    document.getElementById('___gatsby').style.maxHeight = '1000vh';
    document.getElementById('___gatsby').style.opacity = 1;
    document.getElementById('___body').style.maxHeight = '1000vh';
    document.getElementById('___body').style.overflowY = 'auto';
    document.getElementById('___loader').style.display = 'none';
  }, 100);
};
