import React, { Component } from 'react';
import Weather  from './components/Weather';
import Forme from './components/Forme';
import {Jumbotron } from 'reactstrap';
import './App.css';


const API_Key = "def31284facd0066e1e2df408386c821";

class App extends Component {

    state = {
        temper :'',
        city:'',
        country:'',
        humidity:'',
        description:'',
        error:''
    }


  getWeather = async (e)=>{
      e.preventDefault()
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`);
      const data =await api.json();
      console.log(data);
      if (city && country) {
          this.setState({
              temper :data.main.temp,
              city:data.name,
              country:data.sys.country  ,
              humidity:data.main.humidity,
              description:data.weather[0].description,
              error:''

          })}
      else {
              this.setState({
                  temper :'',
                  city:'',
                  country:'',
                  humidity:'',
                  description:'',
                  error:'Please enter Data'

              })
          }


  }
	

  render(){
      return (
      <div className="App">
          <Jumbotron fluid>
          <Forme getWeather = {this.getWeather}/>
          <Weather
          temper ={this.state.temper}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error= {this.state.error}

          />
    </Jumbotron>
      </div>
    );
  }
}


export default App;
