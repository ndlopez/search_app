import React, { useState } from "react";
import Scroll from "./Scroll";
import SearchList from "./SearchList";

function Search({details}){
    const [searchField,setSearchField] = useState("");
    const [searchShow, setSearchShow] = useState(false);

    const filteredPersons = details.filter(
        person => {
            return(
                person
                .name
                .toLowerCase()
                .includes(searchField.toLowerCase()) ||
                person
                .email
                .toLowerCase()
                .includes(searchField.toLowerCase())
            );
        }
    );

    const handleChange = e => {
        setSearchField(e.target.value);
        if(e.target.value === ""){
            setSearchShow(false);
        }else{setSearchShow(true);}
    };

    function searchList(){
        if(searchShow){
            return(
            <Scroll>
                <SearchList filteredPersons={filteredPersons} />
            </Scroll>);
        }
    }
    //@51: <SearchList filteredPersons={filteredPersons}/>
    return(
        <section>
            <div className="container">
                <h2>Search for a course</h2>
            </div>
            <div className="container">
                <input 
                type="search" 
                placeholder="Search by Name or Email" 
                onChange={handleChange}/>
            </div>
            {searchList()}
        </section>
    );
}
//based on:
//https://medium.com/geekculture/create-a-simple-search-component-in-react-js-using-react-hooks-710c1dfe8b58
export default Search;