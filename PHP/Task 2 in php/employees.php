<?php
// Create an associative array of employees
$employees = array(
    array(
        "name" => "John",
        "age" => 30,
        "position" => "Manager"
    ),
    array(
        "name" => "Jane",
        "age" => 25,
        "position" => "Assistant Manager"
    ),
    array(
        "name" => "Bob",
        "age" => 40,
        "position" => "Salesperson"
    )
);

// Encode the array as a JSON string
$json_employees = json_encode($employees);

// Set the response content type to JSON
header('Content-Type: application/json');

// Output the JSON data
echo $json_employees;
?>
