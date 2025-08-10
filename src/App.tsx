import './App.css'
import Header from "./component/Header.tsx";
import Footer from "./component/Footer.tsx";
import Main from "./component/Main.tsx";
// import {useState} from "react";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    // const [page, setPage] = useState("Home");

    return (
        <BrowserRouter>
            <Header />
            <Main />
            <Footer/>
        </BrowserRouter>
    );
};

export default App;