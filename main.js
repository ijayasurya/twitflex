/*JS isn't my expertise.
  This is only to demonstrate how will look the profile page*/
$(document).ready(function() {
  $(".js-profile").on("click", function(){
    $(".menu-item").removeClass("is-selected");
    $(this).addClass("is-selected");
    $(".icon-back, .profile-box").removeClass("u-hide");
    $(".message-box").addClass("u-hide");
    $(".js-title").text("Elad Shechter");
  });
  
  $(".js-home").on("click", function(){
      $(".menu-item").removeClass("is-selected");
      $(".menu-item.js-home").addClass("is-selected");
      $(".icon-back, .profile-box").addClass("u-hide");
      $(".message-box").removeClass("u-hide");
      $(".js-title").text("Home");
  });
  
  $(".js-tweet").on("click", function(){
      $(".message-box").removeClass("u-hide");
      $(".message-box-content").focus();
  });
 
});

 $(document).ready(function(){
    $(".toggles").click(function(){
      $(".sidebar-content").toggleClass("active");
      $(".toggles").toggleClass("active");
    });
  });
window.onload = (event) => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  if(localStorage.getItem('theme') === 'dark' || 'light')
    changeTheme(localStorage.getItem('theme'))
  else {
    if(mediaQuery.matches)
      changeTheme('dark')
    else 
      changeTheme('light')
  }
  mediaQuery.addListener(e => {
      if(e.matches)
        changeTheme('dark')
      else 
        changeTheme('light')
  })
}
function toggleTheme() {
  if (document.documentElement.getAttribute('data-theme') === 'dark') 
    changeTheme('light')
  else 
    changeTheme('dark')
}
function changeTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}