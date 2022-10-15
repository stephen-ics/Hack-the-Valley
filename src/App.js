import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import { AnimatePresence } from 'framer-motion'
 
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Post from './pages/Post'
import Emergency from './pages/Emergency'
import Records from './pages/Records'
import Certifications from './pages/Certifications'
import Login from './pages/Login'

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
              <Route path="/post" exact element={<Post />} />
              <Route path="/emergency" exact element={<Emergency />} />
              <Route path="/records" exact element={<Records />} />
              <Route path="/certifications" exact element={<Certifications />} />
              <Route path="/login" exact element={<Login/>} />
            </Routes>
         </AnimatePresence>
       </Suspense>
     </BrowserRouter>
   </div>
 );
}
 
export default App;