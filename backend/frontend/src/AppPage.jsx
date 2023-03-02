import React, { Fragment } from 'react'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import './App.css'
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import { AnimatePresence } from 'framer-motion';
function AppPage() {
  return (
    <AnimatePresence mode='wait'>
    <div className="App">
     <main className='py-3'>
      <Container>
      <HomeScreen/>
      </Container>
     </main>
     <Footer/>
    </div>
    </AnimatePresence>
  )
}

export default AppPage