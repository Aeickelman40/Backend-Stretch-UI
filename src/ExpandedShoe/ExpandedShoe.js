import React , { Component } from "react"

class ExpandedShoe extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(props) {
    //     const {movieDoneLoading} = this.props       
    //     const movieId = this.props.params.id
    //     const movieInfo = async () =>  { 
    //         let movieData = await getIndividualMovieData(movieId);
    //             this.setState({
    //                 movieData: movieData
    //             })  
    //             await movieDoneLoading();    
    //         }
    //         movieInfo();
        }

    render() {
        console.log(this.props)
        return (
            <h2>Hello</h2>
        )
    }
}

export default ExpandedShoe;
