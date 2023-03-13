<?php  
$x=10;
if($x>=18){
    echo"Age is $x and is eliglible to vote";
}

else{
    echo"Age is $x and is not eliglible to vote" ."\n";

}

$x=18;
$y=true;

if($x>=18){
    if($y=true){
        echo"Has voter ID and age is $x  is eligible to vote.";
    }

    else{
        echo"Age is $x and has no voter ID so not eligible to vote.";
    }
}

else{
    echo"Age is $x so not eligible to vote "."\n";
}


$x=[18,15,20,9,32];

foreach($x as $e){
    if($e >17){
        echo "Age is $e Eligible to vote.\n";
    }
    else{
        echo "Age is $e Not Eligible to vote.\n";
    }
}

$x=0;
while($x<10){
    echo $x."\n";
    $x++;
}

do{
    echo $x."\n";
}while($x<0);

for($x=0;$x<5;$x++){
    echo $x."\n";
}

switch($x){
    case 1:echo "x is one"."\n";
    break;
    case 3:echo "x is three"."\n";
    break;
    case 5:echo "x is five"."\n";
    break;

    default: echo "$x is not in the case";
}


?>