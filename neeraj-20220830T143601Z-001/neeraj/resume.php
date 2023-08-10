<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .n{
                text-align:center;
                font-size:30px;
                background-color:#262626;
                color:#ffcc00;
                
        }
    </style>
</head>
<body>
<h3>
    <div class="n">

 

 
        <?php
            if($_SERVER['REQUEST_METHOD']=='POST'){
                 echo "First Name : ".$_REQUEST['uname']."<br>";
                echo "Last Name : ".$_REQUEST['mname']."<br>";
                echo "Last Name : ".$_REQUEST['mname']."<br>";
               
                echo "Email : ".$_REQUEST['email']."<br>";
              
                echo "Phone : ".$_REQUEST['phn']."<br>";
                echo "DOB : ".$_REQUEST['dob']."<br>";
            }
        ?>   </div>
    </h3>
</body>
</html>