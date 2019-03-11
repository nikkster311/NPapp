import React, { Component } from 'react';
import './App.css';
import Visits from './visits';
import { NPimage, NPimageList } from './images/NPimages';
import ParkInfo from './parkInfo';

//importAll imports the images from the images folder
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { return(images[item.replace('./', '')] = r(item)); });
  return images;
}
//all images are stored in a dictionary type array called 'images'
const images = importAll(require.context('./images', false, /\.(jpg|jpe?g|webp)$/));


class App extends Component {

// initMap = () => {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
// }

//the park name and park image changes based on what the user decides
  state = {
    park: [
      {parkName: this.parkName, parkImg: this.parkImg, showResults: false}
    ]};

//layout chnanges after first park is chosen from drop down
  onChangeStates = () => {
    this.setState({
      showResults: true
    });
  }

//when user picks from drop down, parkName state is changed and chooseImage is called
  nameChangedHandler = (event) => {
    this.setState({
      parkName: event.target.value
    }, () => {
      this.chooseImage();
    })
  };

// if you use 'this' in chooseImage or nameChangedHandler, must bind it below in render
//chooseImage changes parkImg state
  chooseImage = () => {
    var thisParkImg = {}
    if (this.state.parkName !== this.state.parkImg) {
      for (var key in NPimageList) {
        if (key === this.state.parkName) {
          thisParkImg = images[NPimageList[key]]
          //below was my second attempt followed by my first attempt at getting something that img src would run
          // thisParkImg = ("{images['" + NPimageList[key] + "']}")
          // thisParkImg = ("{ require('" + NPimageList[key] + " ' ) }")
        }
      }
    };

    this.setState({
      parkImg: thisParkImg
    }, () => {
      this.onChangeStates();
    })
  };

  render() {
    return (
      <div>

        <div className={this.state.showResults ? "title" : "App"}>
          <h1>Where have I gone?</h1>
          <Visits
          parkName={this.state.parkName}
          change={this.nameChangedHandler.bind(this)} />
        </div>

        {this.state.showResults ? <NPimage
        parkImg={this.state.parkImg}
        parkName={this.state.parkName}/> : null}

        {this.state.showResults ? <ParkInfo
        parkName={this.state.parkName}/> : null}
      </div>
    );
  }
}

export default App;
