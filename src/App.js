import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from './Pages/Start';
import GlobalStyle from './Components/GlobalStyle';

export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Start/>}/>
            </Routes>
        </BrowserRouter>      
    )

}