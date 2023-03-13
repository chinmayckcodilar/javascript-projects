

<?php
// $x=[18,15,20,9,32];

$n=readline("Enter the number of array elements:");

for($i=0;$i<$n;$i++){

    $s=$i+1;
    $x[$i]=readline("Enter element ".$s. ":\n");
}

foreach($x as $e){
    if($e >17){
        echo "Age is $e Eligible to vote.\n";
    }
    else{
        echo "Age is $e Not Eligible to vote.\n";
    }
}


$x=readline("Enter the number of elements to print:"."\n");
;
while($x<10){
    echo $x."\n";
    $x++;
}

$x=readline("This is a do while loop so one execution in inevitable \n Enter the number of elements to print :"."\n");

do{
    echo $x."\n";
    $x++;
}while($x<1);

for($x=0;$x<5;$x++){
    echo $x."\n";
}



?>