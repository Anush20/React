import React from 'react';

export default class Login extends React.Component {
    render() {
        return (
        
                
                <div class="card" style={{ width: '40%',height:'450%', margin: 'auto', marginTop: '40px',backgroundColor:'grey',border:'1px solid black'}}>

                       <h1 style={{marginTop:'20px'}}>Login</h1>
                        <div class="form" style={{ width: '100px', margin: 'auto'}}>
                               <label style={{marginTop:'20px'}} >Email address:
                               <input type="email" />
                               </label>
                              <br/>
                              <br/>
                              <label style={{marginTop:'20px'}}>Password:
                               <input type="password"/>
                               </label>
            
                       
                        <button class="btn btn-primary" style={{with:'200px'}}>Login</button>
                     </div>   
          </div>
        );
    }
}