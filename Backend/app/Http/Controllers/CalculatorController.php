<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Calculator;
use Illuminate\View\View;
class CalculatorController extends Controller
{
    
    public function calculate(Calculator $calculator)
    {
       

        //selecting operator through getOperations function call from calculator model
        $operator = $calculator->getOperations($operator);

        // calculating final result through calculate function from calculator model
        $result = $calculator->calculate($operator, $operand1, $operant2);

       
       
    }
}
