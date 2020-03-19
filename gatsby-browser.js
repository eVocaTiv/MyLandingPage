exports.onInitialClientRender = () => {
  window.scrollTo(0, 0);
  setTimeout(function() {
    document.getElementById("___loader").style.display = "none"
  }, 200)
}