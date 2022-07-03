<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/// calculator model

class Calculator extends Model
{
   
    //funtion for addition
    public function add(int $a, int $b): int
    {
        return $a + $b;
    }

    //funtion for Subtration
    public function subtract( int $a, int $b): int
    {
        return $a - $b;
    }

    //funtion for multiplication
    public function multiply(int $a, int $b): int
    {
        
        return $a * $b;
    }

    //funtion for division
    public function divide(int $a, int $b): int
    {
        return (int)($a / $b);
    }


    ///operator selection
    public function getOperations(string $operation)
    {
        if($operation=="Addition")return 1;
        if($operation=="Subtraction")return 2;
        if($operation=="Multiplication")return 3;
        if($operation=="Division")return 4;
    }

    //selecting required fuction according to operator
    public function calculate(int $operation, int $a, int $b): ?int
    {
        switch ($operation) {
            case 1:
                return $this->add($a, $b);
            case 2:
                return $this->subtract($a, $b);
            case 3:
                return $this->multiply($a, $b);
            case 4:
                return $this->divide($a, $b);
            default:
                return null;
        }
    }

    //use HasFactory;
}
