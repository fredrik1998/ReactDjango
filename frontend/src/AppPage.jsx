import React, { Fragment } from 'react'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import './App.css'
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
function AppPage() {
  return (
    <div className="App">
     <Header/>
     <main className='py-3'>
      <Container>
      <HomeScreen/>
      </Container>
     </main>
     <Footer/>
    </div>
  )
}

export default AppPage