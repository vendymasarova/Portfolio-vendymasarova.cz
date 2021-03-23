<?php

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "vendymasarova@seznam.cz"; //tohle musí být email mého hostingu
    $headers = "From: ".$mailFrom;
    $txt = "Přišel ti email od ".$name.".\n\n".$message;

    mail($mailTo, $txt, $headers);
    header("Location: about.html?mailsend");
}

?>