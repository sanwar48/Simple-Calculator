import './calculationCss.css';
import { Form, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function Calculation() {
    // using state to change value when necessary
    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [operation, setOperation] = useState("Select an operation");
    const [result, setResult] = useState("");
    var Error_message = "";
    //setting the error message to show the exceptions
    if (number2 == 0 && operation == "Division") {
        Error_message = "Divider Must not zero"
    } else {
        Error_message = ""
    }

    var operation_name = operation;  //operation name to show in html field

    //function to hit api
    const calculate = () => {

        console.log(number1, number2, operation);
        let item = { number1, number2, operation };

        const body = {
            number1: number1,
            number2: number2,
            operation: operation
        };
        console.log(body)
        const config = {
            headers: {

                "Content-Type": "application/json",
               
                "Accept": "*/*"
            }
        }

        axios.post('https://linkstaffsimplecalculator.herokuapp.com/api/calculator', body, config)
            .then((res) => {
                //result = res.data.result;
                setResult(res.data.result);
                console.log(res.data)
            })
            .catch((err) => { console.log(err) })




    }






    return (
        <div className="container">
            <div className='error_text'>
                {Error_message}
            </div>

            <div className="input-group mb-3">
                <input type="number" value={number1} onChange={(e) => setNumber1(e.target.value)} placeholder="Enter an integer" className="form-control" aria-label="Username"></input>
                {/* <span class="input-group-text">@</span> */}
                <span>
                    <Form.Select aria-label="Default select example" value={operation} onChange={(e) => setOperation(e.target.value)}>
                        <option>Oparations</option>
                        <option value="Addition">&#128125;</option>
                        <option value="Subtraction">&#x1F480;</option>
                        <option value="Multipication">&#x1F47B;</option>
                        <option value="Division">&#x1F631;</option>
                    </Form.Select>
                </span>
                <input type="number" value={number2} onChange={(e) => setNumber2(e.target.value)} placeholder="Enter an integer" className="form-control" aria-label="Server"></input>

            </div>
            <div className='test'>
                <Button onClick={calculate}>=</Button>
            </div>
            <div className="col d-flex justify-content-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Body >
                        <Card.Title>Result</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                        <Card.Text>
                            {operation_name}
                        </Card.Text>
                        {result}
                    </Card.Body>
                </Card>

            </div>



        </div>




    )
}

export default Calculation;