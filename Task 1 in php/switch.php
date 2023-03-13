<?php
$k=true;
while($k==true){
    $x=readline('Enter a number and check your luck:');

switch($x){
    case 1:echo "One is a lucky number"."\n";
    break;
    case 3:echo "Three is a lucky number"."\n";
    break;
    case 5:echo "Five is a lucky number"."\n";
    break;

    default: echo "Sorry $x is not a lucky number\nTry again\n";
    
}


if($x==1){
    break;
    $k=false;
    echo $x;
}
}
?>