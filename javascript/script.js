document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var loadingScreen = document.querySelector(".loading-screen");
      var mainContent = document.querySelector(".container");
  
      loadingScreen.classList.add("hidden");
      mainContent.classList.add("show");
    }, 3000);
  });
  