import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import { AnimatePresence } from 'framer-motion'
 
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Discussion from './pages/Discussion'
import Records from './pages/Records'
import Certifications from './pages/Certifications'


function App() {
 return (
   <div className="App">
     <BrowserRouter>
       <Suspense fallback={<div>Page Loading...</div>}>
         <Navbar />
         <AnimatePresence
          mode='wait'>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/discussion" exact element={<Discussion />} />
              <Route path="/records" exact element={<Records />} />
              <Route path="/certifications" exact element={<Certifications />} />
            </Routes>
         </AnimatePresence>
       </Suspense>
     </BrowserRouter>
   </div>
 );
}
 
export default App;