import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Search = () => {

    const [data, setData] = useState("people")
    const [selectedId, setSelectedId] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${data}/${selectedId}`);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Luke API</h1>
                <select onChange={e => setData(e.target.value)} className="form-select" >
                    <option selected>Open this select menu</option>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                    <option value="starships">starships</option>
                </select>
                <div class="form-floating">
                    <input type="number" onChange={e => setSelectedId(e.target.value)} className="form-control" id="floatingInput" placeholder="ID" />
                    <label >ID:</label>
                </div>
                <button onClick={handleSubmit} className="btn btn-primary">Search</button>
            </form>
        </div>
    )
}

export default Search