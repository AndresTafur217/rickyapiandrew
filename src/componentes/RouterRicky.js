import React from 'react'
import { Routes, Route, BrowserRouter  } from 'react-router-dom';
import RickyList from './RickyList';
import NotFound from './NotFound';
import RickyIndividual from './RickyIndividual';

export default function RouterRicky() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route exact path="*" element={<NotFound />} />
                <Route exact path='/index' element={<RickyList/>} />
                <Route exact path='/individual/:id' element={<RickyIndividual/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
