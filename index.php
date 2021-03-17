<?php Header("Cache-Control: max-age=3000, must-revalidate"); 
    readfile("templates/index.html");
?>
