import React from "react";
import Main from "../../components/Main";
import MovieItem from "./MovieItem";

function Movie() {
    return (
        <Main>
            <div className="Movie">{MovieItem}</div>
        </Main>
    );
}

export default Movie;
