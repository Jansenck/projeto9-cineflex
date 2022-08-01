import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from "react";

import Movie from "./Movie";
import Home from "./Home";
import Sessions from "./Sessions";
import Ticket from "./Ticket";

import "./../css/reset.css";
import "./../css/style.css";

export default function App(){

    const [ticket, setTicket] = useState([]);

    return(
        <BrowserRouter>
            <header>            
                <p>CINEFLEX</p>
            </header>
            <Routes>
                <Route path="/" element={<Home/>} ></Route>
                <Route path="/movie/:movieId" element={<Movie ticket={ticket} setTicket={setTicket} />} ></Route>
                <Route path="/session/:sessionId" element={<Sessions ticket={ticket} setTicket={setTicket} />} ></Route>
                <Route path="/ticket" element={<Ticket ticket={ticket} />} ></Route>
            </Routes>
        </BrowserRouter>
    );
}