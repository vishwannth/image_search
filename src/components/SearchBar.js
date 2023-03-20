import './search.css';
import { useState } from "react";

function SearchBar({ onSubmit }){
    const [term,setTerm]=useState('');

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        onSubmit(term);
    };

    const handlechange =(event)=>{
        setTerm(event.target.value);
    };
    return(
        <div className='search_bar'>
        <form onSubmit={handleFormSubmit}>
        <label>Enter the topic</label>
        <input value={term} onChange={handlechange} placeholder="Enter the image to be selected"/>
        </form>
        </div>
    );
}

export default SearchBar;