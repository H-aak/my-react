import React, {useState} from 'react';

export default function TextForm2(props) {
    const handlefindChange = (event) => {
        findWord(event.target.value);
    }
    const handleReplaceChange = (event) => {
        console.log(replaceWord(event.target.value));
    }
    const handleReplaceClick = ()=> {
        let newText = text.replaceAll(fWord,rWord);
        setText(newText);
    }
    const handleOnChange =(event)=> {
        // console.log("On Change")
        setText(event.target.value);
      }

    const [text, setText] = useState('');
    const[fWord, findWord] = useState("");
    const[rWord, replaceWord] = useState("");
    return(
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="7"></textarea>
            <h3 className="my-1">Search Word</h3>
            <textarea className="form-control" value={fWord} onChange={handlefindChange} id="myText" rows="4"></textarea>
            <h3 className="my-1">Replace Word</h3>
            <textarea className="form-control" value={rWord} onChange={handleReplaceChange} id="myText" rows="4"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleReplaceClick}>Replace</button>
        </div>
        </>
    )
  }