$(document).ready(function(){
     if($("#mycredit").attr("href")!="https://twitter.com/jayasuryatweet")
 {
  window.location.href="https://www.facebook.com/imjayasurya/";
 }
});
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
