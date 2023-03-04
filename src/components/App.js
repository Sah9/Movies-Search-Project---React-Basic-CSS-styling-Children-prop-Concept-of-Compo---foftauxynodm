import React, { useState } from "react";
import "../styles/App.css";
import { movies } from "../utils/movieList";

const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [results, setResult] = useState(null);

    function handleClick(e) {
        e.preventDefault();
        setResult(movies.filter(({title})=>title.toLowerCase()== inputValue.toLowerCase()))
    }

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    return (
        <div id="main">
            <form id="form">
                <input
                    type="text"
                    onChange={handleChange}
                    value={inputValue}
                    id="movie-input"
                ></input>
                <button id="button" onClick={handleClick}>
                    Search
                </button>
            </form>
            <div id="result">
                {results &&
                    results.map((movie,id) => (
                        <div className="movie" key={id}>{movie.title}</div>
                    ))}
            </div>
        </div>
    );
};

export default App;
