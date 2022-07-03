<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Calculator;
use App\Http\Controllers\CalculatorController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Routing for post method. Here I have used only post method for api call
Route::post('/calculator', [CalculatorController::class, 'calculate']);