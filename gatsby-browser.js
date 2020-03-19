exports.onClientEntry = () => {
  console.log('on client entry ( out of if ) ');
  if (typeof window !== 'undefined') {
    console.log('on client entry');
    document.getElementById('___gatsby').style.display = 'none';
  }
};

exports.onInitialClientRender = () => {
  window.scrollTo(0, 0);
  setTimeout(function() {
    document.getElementById('___loader').style.display = 'none';
    document.getElementById('___gatsby').style.display = 'block';
  }, 200);
};
