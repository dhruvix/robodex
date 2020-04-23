import React, {useState} from 'react';

function Delete({rerender}) {

    const [id, setId] = useState('');

    function onIdChange(event){
        setId(event.target.value);
    }

    function deleteRobot(){
        console.log(id);
        if(id.length>0){
          fetch('https://damp-depths-06693.herokuapp.com/delete', {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id:id
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user) {
                    console.log("user deleted");
                    rerender();
                }
                else{
                  alert("could not delete robot");
                }
            })
        }
        else{
          alert("enter the ID of the robot you wish to delete");
        }
    }
  
    return (
      <article className="br3 ba b--yellow mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 yellow">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 gold mh0">Delete Robot</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy gold f6" htmlFor="name">no. of the robot you want to delete</label>
                <input
                  className="pa2 input-reset ba b--yellow bg-transparent hover-bg-transparent hover-yellow w-100"
                  type="text"
                  onChange={onIdChange}
                />
              </div>
            </fieldset>
            <div>
              <input
                onClick={deleteRobot}
                className="b ph3 pv2 input-reset ba b--yellow gold bg-transparent grow pointer f6 dib"
                type="submit"
                value="Delete"
              />
            </div>
          </div>
        </main>
      </article>
    );
}

export default Delete;
