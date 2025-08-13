import './App.css'
import Header from "./component/Header.tsx";
import Footer from "./component/Footer.tsx";
import Main from "./component/Main.tsx";
import {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import {SWContext} from "./utils/sw-context.ts";

const App = () => {
    const [mainHero, setMainHero] = useState("luke");

    return (
        <SWContext.Provider value={{mainHero, setMainHero}}>
            <BrowserRouter>
                <Header/>
                <Main/>
                <Footer/>
            </BrowserRouter>
        </SWContext.Provider>
    );
};

export default App;