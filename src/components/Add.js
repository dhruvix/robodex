import React, {useState} from 'react';

function Add({rerender}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function onEmailChange(event){
        setEmail(event.target.value);
    }
    
    function onNameChange(event){
        setName(event.target.value);
    }
  
    function addRobot(){
        if(name.length<=50){
          console.log(name,email);
        fetch('https://damp-depths-06693.herokuapp.com/add', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user === "added robot") {
                    console.log("user added");
                    rerender();
                }
                else{
                  console.log("robot not added");
                  alert(user);
                }
            })
        }
        else{
          alert("name too big!");
        }
    }

    return (
      <article className="br3 ba b--yellow mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 yellow">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 gold mh0">Add Robot</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy gold f6" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba b--yellow bg-transparent hover-bg-transparent hover-yellow w-100"
                  type="text"
                  onChange={onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy gold f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset b--yellow ba bg-transparent hover-bg-transparent hover-yellow w-100"
                  type="email"
                  onChange={onEmailChange}
                />
              </div>
            </fieldset>
            <div>
              <input
                onClick={addRobot}
                className="b ph3 pv2 input-reset ba b--yellow gold bg-transparent grow pointer f6 dib"
                type="submit"
                value="Add"
              />
            </div>
          </div>
        </main>
      </article>
    );
}

export default Add;
