import React from 'react'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import style from './style/index.module.scss'
import Navigation from './components/navigation/Navigation-Container';
import Input from './components/input/InputContainer';

export const App = () => {
  return (
    <div className={style.container}>
      <Header />
      <Input />
      <Navigation />
      <Footer />
    </div>
  );
}