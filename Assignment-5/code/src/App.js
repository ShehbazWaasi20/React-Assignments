import React from 'react';
import Firstview from './Firstview'
import Postview from './Lastpage'
import { BrowserRouter,Route ,Routes } from 'react-router-dom';

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
           <Routes>
              <Route path="*" element={<Firstview/>}/>
              <Route path="./Postview.js" element={<Postview/>}/>
           </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
