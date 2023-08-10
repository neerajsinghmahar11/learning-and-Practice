<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>form cv</title>
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


       
   
?>

<style>
    h1{ text-align:center;
        background-color: #FFCC00;
        width:200px;
        margin-left:42%;
        padding:10px;
        border-radius:10px;
        font-size:3em;
        
    }
    html{
        background-color:#262626;

    }
    .f{ margin-left :10%;
        padding-left:400px;
        padding-right:400px;
        width:200px;
        text-align:center;
        background-color: #FFCC00;
        border-radius:10px;
        color:#262626;
        font-size:20px;
    }
    input{
        font-weight:10px;
    }
</style>
</head>
<body>
<h1>RESUME </h1>
<form action="resume.php" method="post">
       <div class="f">
name : <input type="text" name="uname"><span class="erCls">* <?php echo $ne; ?> </span><br><br>
        email : <input type="email" name="email"><span class="erCls">* <?php echo $ee;?></span><br><br>
        Phone : <input type="text" name="phn"><span class="erCls">* <?php echo $phe;?></span><br><br>
        DOB : <input type="date" name="dob"><span class="erCls">* <?php echo $de;?></span><br><br>
        address: <br>
        <textarea name="add" id="add" cols="20" rows="3" placeholder="Enter Your address here...."></textarea><br><br>
        bio: <br>
        <textarea name="bio" id="bio" cols="30" rows="5" placeholder="Enter Your BIO here...."></textarea><br><br>

        <input type="submit" value="Submit">
        <input type="reset" value="clear all">
</div>
    </form>
     

</body>
</html>