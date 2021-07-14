window.onload = function(){
  // asideMenu
  var listAside = document.querySelector(".list_aside")
  var btnAside = document.querySelector(".btn_aside")
  var icoClose = document.querySelector(".ico_close")
  var icoOpen = document.querySelector(".ico_open")

  btnAside.addEventListener("click", toggleMenu);

  function toggleMenu() {
    if (listAside.classList.contains("is_active")) {
      listAside.classList.remove("is_active");
      icoClose.style.display = "none";
      icoOpen.style.display = "block";
    } else {
      listAside.classList.add("is_active");
      icoClose.style.display = "block";
      icoOpen.style.display = "none";
    }
  }

  var linkAsides = document.querySelectorAll(".link_aside");

  linkAsides.forEach(
    function (linkAside) {
      linkAside.addEventListener("click", toggleMenu)
    }
  )

  $(".wrap_qna").accordion({
    heightStyle: "content"
  });
}
