page=0; //Page indicator

//Get first Post
selectPosts();

//Get posts every time you come under the div
$(document).ready(function(){
  $(window).scroll(function(){		
    if((window.innerHeight + window.scrollY) >= document.body.scrollHeight)
		 selectPosts();
  });	
})

function selectPosts()
{
  $.post("select.php", { process: "getPosts", page: page }, function(data){
    if( data.indexOf( "No Have Post Any More." ) == -1 )
    {
      $(".postArea").append(data);
      page += 10
    }

    else
      $(".loadingArea").html("<img src='loading.svg'><p>"+data+"<p>");
  })
}
