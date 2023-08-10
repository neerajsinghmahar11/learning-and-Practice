<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>string</title>
    <style>
    
      h1{
        color:blue;
      }
      h2{
        color: tomato;
      }
    </style>
</head>
<body>
    
<h1 >lets check the code </h1>



<?php
  $N = "NEERAJ SOURAV DEEPANSHU DAKSH ABHIMANYU (SIR) ";
  echo  $N;
  echo "<br>";
  echo "<br>". "total lenth = ";
  echo strlen($N);

  echo "<br>";
  echo "<br>". " total veriable = ";
  echo str_word_count($N);
  echo "<br>";
  echo "<br>";

   echo strrev($N);
echo "<br>";


$y = 20;
echo var_dump($y);
            echo "<br>";
          

            ?>


 <h1>talking about  value "20"</h1>
 <br>
 <h2>is it an integer</h2>
 <?php




            echo var_dump(is_int($y));
            echo "<br>"; echo "<br>";
?>
            // echo var_dump(is_integer($y));
            // echo "<br>"; echo "<br>";
           <h2>is it a float</h2>
            <?php
            echo var_dump(is_float($y));
            echo "<br>"; echo "<br>";
?>
        <h2>is it a number</h2>
       
            <?php
            echo var_dump(is_numeric($y));
            echo "<br>"; echo "<br>";
            ?>
            <h2> is it an infinite value</h2>
            <?php
            echo var_dump(is_infinite($y));
            echo "<br>"; echo "<br>";
            
         
            // // is_integer();
            // is_float();
            // is_double();
            // is_numeric();
            // is_infinite();
            
            $z = 456.985;
            echo "<br>"; echo "<br>";
            echo "saprate the integer value $z"; 
          
            echo "<br>"; echo "<br>";
            $neeraj = (int)$z;
            echo $neeraj;

            echo "<br>"; echo "<br>";
            echo "value of pi";
            $p = pi();
            echo "<br>".$p;

            $arr = array(10.3,20.4,40.78,5.69,100.4,1.26,11.3,32.1,200,);

         
            
            echo "<br><br>";
            echo min($arr);
            echo "<br><br>";
            echo max($arr);
            
            echo "<br><br>";
            echo abs(-12345);

?>
</body>
</html>