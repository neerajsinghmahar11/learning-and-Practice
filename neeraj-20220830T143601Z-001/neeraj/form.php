<?php
    $name = $email = $pwd = $phn = $bio = $dob = "";  
    $emp=0;
    
    if($_SERVER['REQUEST_METHOD']=='POST'){
        if(empty($_POST['uname'])){
            $ne = "Name Required";
            $emp = 1;
        }
        if(empty($_POST['email'])){
            $ee = "email Required";
            $emp = 1;
        }
        if(empty($_POST['pwd'])){
            $pe = "password Required";
            $emp = 1;
        }
        
        if(empty($_POST['dob'])){
            $de = "DOB Required";
            $emp = 1;
        }
        if(empty($_POST['phn'])){
            $phe = "Phone number  Required";
            $emp = 1;
        }
    }


        // $sent = "Data Send Successfully";
        // $name = $_POST['uname'];
      
   
?> 


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>form in php</title>
    <style>
        body{
            background-color: #262626;
        }

        .erCls{
            color: #FFCC00 ;
        }
        h1{
            color : #FFCC00 ;
        }
        form{
            color :#FFCC00   ;
        }
    </style>
</head>
<body>
<h1>PHP FORM</h1>
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post">
        name : <input type="text" name="uname"><span class="erCls">* <?php echo $ne; ?> </span><br><br>
        email : <input type="email" name="email"><span class="erCls">* <?php echo $ee;?></span><br><br>
        Phone : <input type="text" name="phn"><span class="erCls">* <?php echo $phe;?></span><br><br>
        DOB : <input type="date" name="dob"><span class="erCls">* <?php echo $de;?></span><br><br>
        Password : <input type="password" name="pwd"><span class="erCls">* <?php echo $pe;?></span><br><br>
        bio: <br>
        <textarea name="bio" id="bio" cols="20" rows="5" placeholder="Enter Your BIO here...."></textarea><br><br>

        <input type="submit" value="Submit">
        <input type="reset" value="clear all">
    </form>

    <h2> 
    <?php
        $bio = $_POST['bio'];
            echo $sent;
            echo $bio;
        ?>
    </h2>
</body>
</html>