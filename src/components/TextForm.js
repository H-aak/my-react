import React, {useState} from 'react'


export default function TextForm(props) {

  // For speak and stop button 
  // const speak = ()=>{
  //   let msg = new SpeechSynthesisUtterance(text);
  //   window.speechSynthesis.speak(msg);
  //   const toogle = document.getElementById('toggle');
  //   if (toogle.textContent === 'Speak'){
  //     toogle.innerHTML = 'Stop'
  //   }
  //   else {
  //     toogle.innerHTML = 'Speak'
  //     if (toogle.innerHTML = 'Speak'){
  //       window.speechSynthesis.cancel()
  //     }
  //   }
  // }

  // For remove ExtraSpaces 
  const handleExtraSpace = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(' '));
    props.showAlert("Extra spaces has been removed", "success");
  }

  // For stop speak 
  // const cancelSpeech = ()=>{
  //   speechSynthesis.cancel();
  // }

  // For copy text 
  const handleCopy = ()=>{
    var text = document.getElementById("myText");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to clipboard", "success")
  }

  const handleUpClick =()=> {
    // console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success")
  }
  const handleLoClick =()=> {
    // console.log("Uppercase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success")
  }
  const handleClearText =()=> {
    // console.log("Uppercase was clicked" + text)
    let newText = '';
    setText(newText);
    props.showAlert("All text has been clear", "success")
  }
  const handleOnChange =(event)=> {
    // console.log("On Change")
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  // text = "New text" wrong way to change state 
  // setText("New text"); correct way to change state
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myText" rows="7"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Covert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Covert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove ExtraSpaces</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
        {/* <button className="btn btn-warning mx-1" type='submit' onClick={speak} id='toggle'>Speak</button> */}
        {/* <button className="btn btn-danger mx-1" type='submit' onClick={cancelSpeech}>Stop</button> */}
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.length>0?text.split(" ").filter((a)=>{return a!=''}).length:"0"} word and {text.length} characters</p>
      <p>{0.008* (text.length>0?text.split(" ").filter((a)=>{return a!=''}).length:"0")} require to read this text</p>
      <h2>Preview</h2>
      <p>{text.length>0?text: "Write something in textbox for preview"}</p>
    </div>
    </>
  )
}
