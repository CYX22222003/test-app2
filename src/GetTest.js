import React from "react";
import { useState, useEffect } from "react";


export default function GetTest(){
    // Assuming this code is within a React component or function
    // Fetching data from Flask backend
    const [display, setDisplay] = useState(false);
    const [info, setInfo] = useState("");
    const [objlst, setObjxs] = useState(null);
    useEffect( () => {
    fetch('https://cyxun.pythonanywhere.com/blog_sender') //try to fetch from a remote server
    .then(response => {
        return response.json();
    })
    .then(data => {
        // Handle the data received from the Flask backend
        
        console.log('Data from Flask backend:', data.data);
        data.data.map((ele) => {
            console.log(ele.title + ": " + ele.body);
        })

        setDisplay(true);
        setInfo(JSON.stringify(data.data));
        setObjxs(data.data);
    })
    .catch(error => {
        // Handle errors
        console.log('There was a problem with the fetch operation:', error);
    })
}, []);

    return display 
    ? (
        <div className="container-fluid text-center bg-light">
            <p className="bg-light text-center text-dark">Display Data from a Remote Server in a Table</p><br />
            <table class="table table-striped bg-light table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                </thead>
                <tbody>
                {objlst.map(ele => {
                  return(
                  <tr>
                    <td>{ele.title}</td>
                    <td>{ele.body}</td>
                  </tr>)
                })}
                </tbody>
            </table>
        </div> 
      )
    : (
        <div className="container-fluid text-center bg-light">
            data not sent   <div class="spinner-border text-warning"></div>
        </div>
    );
}