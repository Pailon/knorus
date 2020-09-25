import React, {Component} from 'react';
import './App.css'
import Viewer from './components/Viewer/Viewer'
import NavBar from './components/Navbar/Navbar'
import Footer from "./components/Footer/Footer";



export default class QuizList extends Component {

  constructor() {
    super();

    this.state = {
      arr_image:['text_1','text_2']
    }
  }



  render() {
    return(
        <React.Fragment>
        <NavBar/>
          <Viewer
              book={this.state.arr_image}
          />
          <Footer/>
        </React.Fragment>

    )
  }
}

