import React from 'react';

function Searchbox({onsearchchange}){
    return(
        <div className = 'tc pa2'>
        <input 
            className = 'pa2 ba b--gold bg-light-yellow' 
            type = 'search' 
            placeholder = 'search robots:' 
            onChange = {onsearchchange}
        />
        </div>
    );
}

export default Searchbox;