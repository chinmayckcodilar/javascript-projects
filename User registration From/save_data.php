<?php


$data = file_get_contents('data.json');
$registrations = json_decode($data, true);
$name=$_FILES['photo']['name'];
$temp_file=$_FILES['photo']['tmp_name'];

if($_POST!=null){

    $registration = array(
        'name' => $_POST['name'],
        'email' => $_POST['email'],
        'mobile' => $_POST['mobile'],
        'photo' => $_FILES['photo']['name']
    );
    array_push($registrations, $registration);
    
    
    $data = json_encode($registrations);
    move_uploaded_file($temp_file, "uploads/".$name);

    file_put_contents('data.json', $data);
    
    echo 'Registration successful';

}

else{
    echo 'Registration Unsuccessful';
}


?>
