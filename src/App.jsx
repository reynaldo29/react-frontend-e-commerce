// import{BrowserRouter as Router,Route,Routes} from "react-router-dom"

// import {Pay} from "./components/Pay"
// import {Success} from "./components/Success"
import React from 'react'
import Home from "./pages/Home"

const App = () => {
  return (
    <Home/>
  )
}

export default App

/* function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pay" element={<Pay />}>
          
        </Route>

        <Route path="/success" element={ <Success />}>
         
        </Route>
        </Routes>
    </Router> 
  );
}

export default App; */
