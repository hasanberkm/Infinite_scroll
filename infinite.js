page=0; //Page indicator
  
$.post("url_is_here", { process:"getPosts" page: page }, function(data){
 if( data.indexOf( "No have any more." ) == -1 )
 {
   $(".ClassName_or_#IdName").append(data);
   page += 10


 }
 else
 {
   $(".process-comm").html("<p>"+data+"<p>");
 }
})


}) 
