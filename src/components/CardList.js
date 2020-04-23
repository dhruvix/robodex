import React from 'react';
import Card from './Card';

function CardList({robots, thing})
{   
    console.log("robots returned",robots.length);
    return(
        <div>
        {
            (robots.length !== 0)?
            (robots.map((a,i)=>{
                return(
                    <Card key = {i}
                        id = {robots[i].id} 
                        name = {robots[i].name} 
                        email = {robots[i].email} 
                     />
                ); 
            }))
            :
            (<h3>No robots with {thing}!</h3>)
        }
        </div>
    );
}

export default CardList;