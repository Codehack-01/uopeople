import { Route, Routes } from 'react-router-dom';
import React from 'react';
import RootLayout from './_root/RootLayout';
import {Home, Courses, Story, Payments, Achievements, Services, Admission, UsefulLinks, Campus} from './_root/pages'


const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route index element={<Home />}/>
          <Route path="/Courses" element={<Courses/>}/>
          <Route path="/Story" element={<Story/>}/>
          <Route path="/Payments" element={<Payments/>}/>
          <Route path="/Achievements" element={<Achievements/>}/>
          <Route path="/Services" element={<Services/>}/>
          <Route path="/Admission" element={<Admission/>}/>
          <Route path="/UsefulLinks," element={<UsefulLinks/>}/>
          <Route path="/Campus" element={<Campus/>}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App