import React from 'react';
import './index.css';
export default class Signup extends React.Component {
    render() {
        return (
            <div class="signup">
                
                <div class="card" style={{ width: '75%', height:'80%',margin: '0 auto', marginTop: '10px' }}>

                    <div class="card-body"style={{backgroundColor:'grey',border:'1px solid black'}}>
                           
                            <div class="Form" style={{ fontSize: '30px'}}>
                                <h1>Signup Form</h1><br/>
                                <label for="text" required>Your Name:
                                <input type="name" placeholder="" />
                                </label>
                                <br />
                                <br />
                                <label  required>Phone Number:

                                <input type="number" placeholder="" />
                                </label>
                                <br />
                                <br />
                                <label required>Email address:
                                <input type="email" placeholder="" />
                                </label>
                                <br />
                                <br />
                                <label required>Password:<input type="password" placeholder="" />
                                </label>
                                <br />
                                <br />
                                <label required>Confirm Password:
                                <input type="password" placeholder="" />
                                </label>
                                <br />
                                <br />
                                <button class="btn btn-primary" type="submit" style={{width:'300px'}}>
                                    Submit
                                 </button>
                            </div>
                        </div>
                    </div>
                </div>
               
        );
    }
}