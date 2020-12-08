
import React, { useState } from 'react';


const App = () =>{

    const [name, setlastName] = useState(({
        fname: "",
        lname: "",
        email: '',
        phone: '',
    }))
         const Eventjs = (event)=>{
             console.log(event.target.value)
             console.log(event.target.name)

            //  const value = event.target.value;
            //  const name = event.target.name;

             const{value, name} = event.target;
            
             setlastName((preValue) =>{
                 console.log(preValue);
                 return{
                     ...preValue,
                     [name]: value,
                  }


                //   if(name === "fname"){
                //     return{
                //         fname: value,
                //         lname: preValue.lname,
                //         email: preValue.email,
                //         phone: preValue.phone 
                //     };
                    

                //  } else if(name === "lname"){
                //      return{
                //          fname: preValue.fname,
                //          lname: value,
                         
                //         email: preValue.email,
                //         phone: preValue.phone 
                //      };
                //  }
                //  else if(name === "email"){
                //     return{
                //         fname: preValue.fname,
                //         lname: preValue.lname,
                        
                //         email: value,
                //         phone: preValue.phone 
                //     };
                // }
                // else if(name === "phone"){
                //     return{
                //         fname: preValue.fname,
                //         lname: preValue.lname,
                        
                //         email: preValue.email,
                //         phone: value 
                //     };
                // }
             })
         }
     const Submits = (event)=>{
         event.preventDefault();
         alert("Submited from");
     }
    return(

        <div>
            <form onSubmit={Submits}>
              <div>
              <h1>Hello {name.fname}  {name.lname}</h1>
              <p> {name.email} </p>
              <p> {name.phone} </p>
                <input 
                type="text"
                placeholder="ENTER YOUR NAME "
                name="fname"
                onChange={Eventjs}
                value={name.fname}
                />
                <br />
                <input 
                type="text"
                placeholder="ENTER YOUR last"
                name="lname"
                onChange={Eventjs}
                value={name.lname}
                />
                <br />
                <input 
                type="email"
                placeholder="ENTER YOUR Email"
                name="email"
                onChange={Eventjs}
                value={name.email}
                autoComplete="off"
                />
                <br />
                <input 
                type="phone"
                placeholder="ENTER YOUR Mobile Number"
                name="phone"
                onChange={Eventjs}
                value={name.phone}
                />
                <button onSubmit="Submit"> Submit </button>
              </div>
            </form>
        </div>
    )
    }

export default App;