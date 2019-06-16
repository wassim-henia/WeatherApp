import React from 'react';
import { Container } from 'reactstrap';
import {Jumbotron } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input ,Button} from 'reactstrap';
const Forme =(props)=> {
        return (
            <div>
            <Jumbotron fluid>
            <form onSubmit={props.getWeather}>
                    <Container fluid>      
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">City</InputGroupAddon>
                        <Input type="text" name="city" placeholder="City....." />
                     </InputGroup>
                     <br />
                     <InputGroup>
                        <InputGroupAddon addonType="prepend">Country</InputGroupAddon>
                        <Input type="text" name="country" placeholder="Country....." />
                     </InputGroup>
                     <br />
                            <Button>Get Weather</Button>
                    
                    </Container>
                
            </form>
            </Jumbotron>
            </div>

            
        );
    }
export default Forme ;
