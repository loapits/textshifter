import React from 'react'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Input } from './components/input/Input';
import style from './style/index.module.scss'
import { Navigation } from './components/navigation/Navigation';

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