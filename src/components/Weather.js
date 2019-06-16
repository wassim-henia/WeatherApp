import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

const Weather = (props)=> {
        return (
            <div>
                 
      <Card>
        <CardBody>
                {
                    props.city && <p>City : City {props.city}</p>
                }
                {
                    props.country && <p>Country : {props.country}</p>
                }
                {
                    props.temper && <p>Temperature : {props.temper}</p>
                }
                {
                    props.humidity && <p>Humidity : {props.humidity}</p>
                }
                {
                    props.description && <p>Description : {props.description}</p>
                }
                {
                    props.error && <p>Error : {props.error}</p>
                }
        </CardBody>
      </Card>
  
               
            </div>
        );
    }
export default Weather ;
