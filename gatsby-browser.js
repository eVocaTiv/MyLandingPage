exports.onInitialClientRender = () => {
  setTimeout(function() {
    document.getElementById("___loader").style.display = "none"
  }, 200)
}
