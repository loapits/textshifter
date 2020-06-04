import React from 'react'
import { Footer } from './components/footer/Footer'
import  './style/index.scss'
import Navigation from './components/navigation/Navigation-Container';
import Input from './components/input/InputContainer';
import HeaderContainer from './components/header/Header-Container';
import { connect } from 'react-redux';


export class App extends React.Component{
  
  render() {
    console.log(this.props);
    return (
      <div className='darktheme'>
        <HeaderContainer />
        <Input />
        <Navigation />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return{
  }
}


export default connect(mapStateToProps)(App)