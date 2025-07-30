import {Component} from "react";

type State = {
    isLoaded: boolean;
    name: string;
    gender: string;
    birth_year: number | undefined;
    homeworld: string;
}

class AboutMe extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            isLoaded: false,
            name: '',
            gender: "",
            birth_year: undefined,
            homeworld: ""
        }
    }

    async componentDidMount() {
        const id = Math.trunc(Math.random() * 70 + 1);
        try {
            const firstResponse = await fetch(`https://sw-info-api.herokuapp.com/v1/peoples/${id}`);
            if (!firstResponse.ok) {
                throw "Bad Request";
            }
            const firstResponseData = await firstResponse.json();
            const homeworldId = firstResponseData.homeworld;

            const secondResponse = await fetch(`https://sw-info-api.herokuapp.com/v1/planets/${homeworldId}`);
            if (!secondResponse.ok) {
                throw "Bad Request";
            }
            const secondResponseData = await secondResponse.json();

            this.setState({
                isLoaded: true,
                name: firstResponseData.name,
                gender: firstResponseData.gender,
                birth_year: firstResponseData.birth_year,
                homeworld: secondResponseData.name
            });
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <>
                {!this.state.isLoaded ? (<p>Loading...</p>) : (
                    <div className={"personal-data"}>
                        <p>Name: {this.state.name}</p>
                        <p>Gender: {this.state.gender}</p>
                        <p>Birth year: {this.state.birth_year}</p>
                        <p>Homeworld: {this.state.homeworld}</p>
                    </div>
                )}
            </>
        );
    }
}

export default AboutMe;