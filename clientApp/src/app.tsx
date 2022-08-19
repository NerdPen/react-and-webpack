import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Foo from './pages/foo';
import Bar from './pages/bar';
import NotFound from './pages/notFound';

const App: React.FC<unknown> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<Foo />} />
                    <Route path='bar' element={<Bar />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
export default App;
