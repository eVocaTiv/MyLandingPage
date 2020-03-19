exports.onInitialClientRender = () => {
  window.scrollTo(0, 0);
  // work around gatsby's default scroll memory behavior.
  document.getElementById('___gatsby').style.display = 'block';
  setTimeout(function() {
    document.getElementById('___loader').style.display = 'none';
  }, 200);
};
