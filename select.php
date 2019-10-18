<?php

if(isset($_POST))
{
  if(isset($_POST["process"]) && $_POST["process"] == "getPosts")
  {
    $page = $_POST["page"];
    $posts = $pdo->prepare("SELECT * FROM posts ORDER BY postID DESC LIMIT $page, 10");
    $posts->execute();
    
    if($posts->rowCount() > 0)
    {
      foreach($posts as $p)
      {
        echo "
        <p>".$p["postTitle"]."<p>
        <p>".$p["postText"]."<p>
";
      } 
    }
    else
    {
      echo "No have any more.";
    }
  }
}
?>
