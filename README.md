##

## Simple Introduction
This project is about a basic calculator which offer a user to operate four operations. They are Addition, Subtraction, Division and Multiplication.

Used Technology : laravel 8 (For Backend)
                  React.js (For Frontend)
## url https://sanwar-emocal.herokuapp.com/

##
## Backend Api Description
##
## Backend Api url is https://linkstaffsimplecalculator.herokuapp.com/api/calculator

Through Postman you can test api

## Method : POST

## Input format

{
    "number1":"-10",
    "number2":"-2",
    "operation":"Subtraction"
}

## Output:
{
    "result": -8
}
Format: Json

##

##
My server side is developed by Laravel 8 web api
and client side is developed by React.js

In the controller server side web api received data as Json data type format (including number1, number2 and operation)

Two operands are stored in two variable as string and the operation is cast integer to select desired operation

After that final calculate function is called and result is returned as Json data type

##


## Frontend Description

## Three input fields (operand1=>real number, operand2=>real number, operator=>{Addition, Subtraction, Division, Multiplication} )

## Two Components 
	1.one is header that hold the band name
	2. another is the calculation form that send the two number and operator
	


## Input request form Json object




