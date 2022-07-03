import './calculationCss.css';
import { Form, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function Calculation() {
    // using state to change value when necessary
  
    //setting the error message to show the exceptions
    if (number2 == 0 && operation == "Division") {
        Error_message = "Divider Must not zero"
    } else {
        Error_message = ""
    }

    var operation_name = operation;  //operation name to show in html field

    //function to hit api
    const calculate = () => {

        
        const body = {
            //this is container of data set which will sent via api
        };
        
        const config = {
            headers: {

                //this headers contains types security etc for api
            }
        }

        axios.post('https://linkstaffsimplecalculator.herokuapp.com/api/calculator', body, config)
            .then((res) => {
              //  res is the respose of api hit
            })
            .catch((err) => { console.log(err) })




    }






    return (
        <div className="container">
            <div className='error_text'>
                {/* //this division show the error exeption */}
                {Error_message}
            </div>

            <div className="input-group mb-3">
                {/* input field with twooperator and one operand */}
            </div>
            
            <div className="col d-flex justify-content-center">
                <Card style={{ width: '18rem' }}>
                   {/* Field to show result */}
                </Card>

            </div>



        </div>




    )
}

export default Calculation;