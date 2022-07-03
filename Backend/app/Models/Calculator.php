<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/// calculator model

class Calculator extends Model
{
   
    //funtion for addition
    public function add(int $a, int $b)
    {
    
    }

    //funtion for Subtration
    public function subtract( int $a, int $b)
    {
      
    }

    //funtion for multiplication
    public function multiply(int $a, int $b)
    {
        
       
    }

    //funtion for division
    public function divide(int $a, int $b)
    {
       
    }


    ///operator selection
    public function getOperations(string $operation)
    {
       
    }

    //selecting required fuction according to operator
    public function calculate(int $operation, int $a, int $b)
    {
        
    }

    //use HasFactory;
}
