<?php
abstract class Employee {
    protected $name;
    protected $id;
    protected $salary;
    
    public function __construct($name, $id, $salary) {
        $this->name = $name;
        $this->id = $id;
        $this->salary = $salary;
    }
    
    abstract public function calculatePay();
}

interface EmployeeInterface {
    public function getJobTitle();
}

class Programmer extends Employee implements EmployeeInterface {
    private $jobTitle = "Associate Software Developer";
    
    public function calculatePay() {
        return $this->salary / 12;
    }
    
    public function getJobTitle() {
        return $this->jobTitle;
    }
}

// Create a new programmer and call its methods
$programmer = new Programmer("Chinmay C K", 497, 120000);
echo $programmer->getJobTitle(); 
echo "<br>";
echo $programmer->calculatePay(); 
?>
