<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Calculator;
use Illuminate\View\View;
class CalculatorController extends Controller
{
    // public function index(Calculator $calculator)
    // {
    //     return[
    //         'operations' => $calculator->getOperations(),
    //     ];
    // }


    public function calculate(Calculator $calculator)
    {
        // post/request data
        $a  = request('number1');
        $b = request('number2');
        $operator = request('operation');

        //selecting operator through getOperations function call from calculator model
        $operator = (int)$calculator->getOperations($operator);

        // calculating final result through calculate function from calculator model
        $result = $calculator->calculate($operator, $a, $b);

        // returning the final result
        return [
            'result' => $result
        ];
       
    }
}
