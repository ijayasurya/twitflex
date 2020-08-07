
$(document).ready(function() {
  $(&quot;.js-profile&quot;).on(&quot;click&quot;, function(){
    $(&quot;.menu-item&quot;).removeClass(&quot;is-selected&quot;);
    $(this).addClass(&quot;is-selected&quot;);
    $(&quot;.icon-back, .profile-box&quot;).removeClass(&quot;u-hide&quot;);
    $(&quot;.message-box&quot;).addClass(&quot;u-hide&quot;);
    $(&quot;.js-title&quot;).text(&quot;Profile&quot;);
  });


  $(&quot;.js-search&quot;).on(&quot;click&quot;, function(){
    $(&quot;.menu-item&quot;).removeClass(&quot;is-selected&quot;);
    $(this).addClass(&quot;is-selected&quot;);
    $(&quot;.icon-back, .search-box&quot;).removeClass(&quot;u-hide&quot;);
    $(&quot;.message-box&quot;).addClass(&quot;u-hide&quot;);
    $(&quot;.js-title&quot;).text(&quot;Search&quot;);
  });
  
  $(&quot;.js-home&quot;).on(&quot;click&quot;, function(){
      $(&quot;.menu-item&quot;).removeClass(&quot;is-selected&quot;);
      $(&quot;.menu-item.js-home&quot;).addClass(&quot;is-selected&quot;);
      $(&quot;.icon-back, .profile-box,.search-box&quot;).addClass(&quot;u-hide&quot;);
      $(&quot;.message-box&quot;).removeClass(&quot;u-hide&quot;);
    $(&quot;.js-title&quot;).text(&quot;Home&quot;);
  });
  
  $(&quot;.js-tweet&quot;).on(&quot;click&quot;, function(){
      $(&quot;.message-box&quot;).removeClass(&quot;u-hide&quot;);
      $(&quot;.message-box-content&quot;).focus();
  });
 
});
