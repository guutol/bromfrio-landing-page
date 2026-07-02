import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import "bootstrap/js/src/collapse";
// import "bootstrap/js/src/dropdown";
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import WhatsAppFloat from './Components/WhatsAppFloat'
import ScrollToTop from './Components/ScrollToTop'


const App = () => {
  return (
    <>
		<ScrollToTop />
		<Navbar />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/services" component={Services} />
			<Route exact path="/about" component={About} />
			<Route exact path="/contact" component={Contact} />
			<Redirect to="/" />
		</Switch>
		<Footer />
		<WhatsAppFloat />
    </>
  )
}

export default App
