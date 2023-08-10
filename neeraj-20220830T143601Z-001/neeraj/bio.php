<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bio data</title>
    <style>
        body{
            background-color:#90EE90;
            color:;
        }
        h1{
            text-align:center;
            font-family:sans-serif;
            font-weight:200%;
        }
        .data{
            font-size:200%;
            text-align:center;
        }
        button{
            background-color:black;
            color:white;
            
        }
       input{
           color:white;
           background-color:#262626;
       }
    </style>
</head>
<body>
<h1>
GENRATE YOUR BIO DATA IN ONE CLICK
</h1>
<HR></HR>




<form action="<?php echo $_SERVER['PHP_SELF'];?>" method="Post">

            
            <input type="text" name="tname" placeholder="enter name">
           
            <input type="text" name="age" placeholder="enter age">
             <input type="text" name="add" placeholder="enter city">
            <input type="text" name="phone" placeholder="enter phone number">
            
            <input type="text" name="hq" placeholder="highest qualification">
          
          <button>  <input type="submit" value="submit"> </button>
            </form>
<br>
<div class="data">




<HR></HR>

            <?php
            $txt = "Hello, MY SELF  ".$_POST['tname'].","."<br><br>".
            
           "I PUT UP AT ".$_POST['add']."<br><br>".
            "MY AGE IS ".$_POST['age']."<br><br>".
            "  MY PHONE NUMBER IS ".$_POST['phone']."<br><br>".
            "AND MY HIGHEST QUALIFICATION IS   ".$_POST['hq']." COURSE";

            echo $txt;

           
            ?></div>
</body>
</html>