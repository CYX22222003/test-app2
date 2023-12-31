import React from "react";
import { useState, useEffect } from "react";


export default function GetTest(){
    // Assuming this code is within a React component or function
    // Fetching data from Flask backend
    const [display, setDisplay] = useState(false);
    const [info, setInfo] = useState("");
    const [objlst, setObjxs] = useState(null);

    const handleDelete = (id) => {
        setObjxs(objlst.filter(ele => ele.id !== id));
        console.log(id + ": delete button is not activated");
        fetch('https://cyxun.pythonanywhere.com/delete_blog', {
            mode : 'no-cors',
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'X-Content-Type-Options' : 'nosniff'
            },
            body: JSON.stringify({"test data" : "test body", "id" : id})
        }).then(() => {
            console.log("POST Request sent");
        }).catch(error => {
            // Handle errors
            alert(error);
            console.log('There was a problem with the fetch operation:', error);
        });
        return null;
    }

    const handleEdit = () => {
        alert("edit button is not activated");
    }

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
            console.log(ele.author);
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
                    <th>Author</th>
                    <th>Body</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {objlst.map(ele => {
                  return(
                  <tr>
                    <td>{ele.title}</td>
                    <td>{ele.author}</td>
                    <td>{ele.body}</td>
                    <td><button onClick={() => handleDelete(ele.id)}>Delete</button>    <button onClick={handleEdit}>Edit</button></td>
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