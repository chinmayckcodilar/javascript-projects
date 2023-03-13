<?php  
$x=readline("Enter the persons age:");
if($x>=18){
    echo"\nAge is $x and is eliglible to vote";
}

else{
    echo"\nAge is $x and is not eliglible to vote" ."\n";

}

$x=readline("\nEnter the persons age:");
$y=readline("\nEnter 1 if voter ID is present else 0:");

if($x>17){
    echo $x;
    if($y==true){
        echo"\nHas voter ID and age is $x  is eligible to vote.";
    }

    else{
 
       echo"\nAge is $x and has no voter ID so not eligible to vote.";
 
    }

}

else
{
    echo"\nAge is $x so not eligible to vote "."\n";
}

?>