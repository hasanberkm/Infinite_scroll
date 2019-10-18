page=0; //Page indicator
  
$.post("select.php", { process:"getPosts" page: page }, function(data){
  if( data.indexOf( "No have any more." ) == -1 )
  {
    $(".postArea").append(data);
    page += 10
  }
  else
  {
    $(".loadingArea").html("<img src='loading.svg'><p>"+data+"<p>");
  }
})
