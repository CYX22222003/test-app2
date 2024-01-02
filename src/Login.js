import React from "react";
import { useState, useContext } from "react";
import { AuthoContext } from "./App";

export default function Login(){
    const {AuthState, setState} = useContext(AuthoContext);
    const [pwd, setPwd] = useState("");
    const [user, setUser] = useState("");


    function HandleLogin(){
        if(user === "test" && pwd === "test123#"){
            setState(true);}
        else{
            setPwd("");
            setUser("");
            alert("wrong password or username");
        }
    }
    return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center">Login</h3>

            <form onSubmit={() => HandleLogin(user, pwd)}>
              <div className="mb-3">
                <label for="email" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Enter username" 
                    value={user}
                    onChange={(e)=>{
                        setUser(e.target.value);
                    }}
                />
              </div>

              <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" 
                    value={pwd}
                    onChange={ (e) => {
                        setPwd(e.target.value);
                    }}
                />
              </div>

              <div className="d-grid">
              <br /><br  />
                <input type="submit" name="submit" /> <br /><br />
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
    </div>);
}