page=0; //Page indicator
  
$.post("url_is_here", { process:"getPosts" page: page }, function(data){
 if( data.indexOf( "determiner_like_a_verb" ) == -1 )
 {
   $(".ClassName_or_#IdName").append(data);
   page += 10


 }
 else
 {
   $(".process-comm").html("No Post Have Any More!");
 }
})


}) 
