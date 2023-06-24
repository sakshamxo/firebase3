import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Auth from './firebase/Auth';

const App = () => {
  return (
    <div className='container' >
      
      <Link to="/auth" >Authentication</Link>
      <hr />
      <Routes>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
    </div>
  )
}

export default App