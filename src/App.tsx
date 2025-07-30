import './App.css'
import Header from "./component/Header.tsx";
import Footer from "./component/Footer.tsx";
import Main from "./component/Main.tsx";
import {Component} from "react";

type State = {
    page: string;
}

class App extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            page: "Home"
        };
    }

    changePage = (page: string) => {
        this.setState({page});
    };

    render() {

        return (
            <>
                <Header changePage={this.changePage} />
                <Main page={this.state.page} />
                <Footer/>
            </>
        )
    }
}

export default App