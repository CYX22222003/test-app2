import React from "react";
import { useState } from "react";

export default function POSTinput(){
    //fetch from backend server
    const [index, setIndex] = useState(1);
    const [title, setTitle] = useState("");
    const [blogbody, setBody] = useState("");
    const [author, setAuthor] = useState("");

    const [texttype, setType] = useState("diary");
    const [bloglist, setBlogList] = useState([]);
    const [loading, setLoading] = useState(null);
    
    const handleSubmit = e => {
        e.preventDefault();
        setLoading((
            <div class="spinner-border text-warning"></div>
        ))
        setIndex(index + 1);
        
        setBlogList([...bloglist, {title : title, id : index, body : blogbody}]);

        const obj_sent = {title : title, id : index, body : blogbody, author : author};
        console.log(JSON.stringify(obj_sent));
        fetch('https://cyxun.pythonanywhere.com/react_post', {
            mode: 'no-cors',
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj_sent)
        }).then(() => {
            setLoading("successfully uploaded");
            setBody("");
            setTitle("");
            setAuthor("")
            console.log("new page added");
        }).catch(error => {
            // Handle errors
            setLoading("there is a problem with the fetch operation.");
            console.log('There was a problem with the fetch operation:', error);
        });
    }


    return (
        <div className="container">
        <br />
        <form onSubmit={handleSubmit}>
            <label for="demo">Title: </label>
            <span className="input-group-lg"></span>
            <input type="text" 
                className="form-control"
                value={title} 
                onChange = {(e) => {
                    setTitle(e.target.value);
                    
                } 
            }/>
            
            <br />
            <label for="demo">Author: </label>
            <span className="input-group-lg"></span>
            <input type="text" 
                className="form-control"
                value={author} 
                onChange = {(e) => {
                    setAuthor(e.target.value);
                } 
            }/>

            <br />
            <label for="demo">Content: </label>
            <textarea type="text" 
                value={blogbody}
                onChange={(e) => {setBody(e.target.value);}}
                className="form-control"
            />
            <br />
            
            <label>Type: </label>
            <select className="form-select" onChange={e => setType(e.target.value)}>
                <option value="diary">diary</option>
                <option value="blog">blog</option>
                <option value="others">others</option>
            </select>
            
            <br /><br  />

            <input type="submit" name="submit" /> <br /><br />
            <div className="container text-success">{loading}</div>
        </form>
        </div>
        );

    console.log(bloglist);
}