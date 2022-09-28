import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './Components/GlobalStyle';
// ---------- Páginas do projeto ---------- \\
import Start from './Pages/Start';
import Game from './Pages/Game';
// ---------------------------------------- \\


export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Start/>}/>
                <Route path="/game/:idDeck" element={<Game/>}/>
            </Routes>
        </BrowserRouter>      
    )

}