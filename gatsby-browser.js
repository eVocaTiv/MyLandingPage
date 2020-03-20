exports.onRouteUpdate = () => {
  window.scrollTo(0, 0);
  document.getElementById('___gatsby').style.opacity = 0;
  document.getElementById('___loader').style.opacity = 1;
  setTimeout(function() {
    document.getElementById('___gatsby').style.opacity = 1;
    document.getElementById('___loader').style.opacity = 0;
  }, 200);
}