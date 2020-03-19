exports.onInitialClientRender = () => {
  window.scrollTo(0, 0);
  // work around gatsby's default scroll memory behavior.
  setTimeout(function() {
    document.getElementById('___loader').style.display = 'none';
    document.getElementById('___gatsby').style.display = 'block';
  }, 200);
};
