import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("UpperCase was Clicked"+ text);
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handleLoClick =()=>{
        // console.log("UpperCase was Clicked"+ text);
        let newText= text.toLowerCase();
        setText(newText)
    }
    const handleRemoveClick =()=>{
        let newText='';
        setText(newText)
    }
    const handleCopyClick =()=>{
       var text = document.getElementById("x23")
        text.select();
        navigator.clipboard.writeText(text.value);
    }      
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    // text="new text"; // Wrong way to change the text
    // setText("new text"); // Correct way to change the text
    return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white',
        color: props.mode==='dark'?'white':'#042743'}} id="x23" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleRemoveClick}>Remove Text</button>
        <button id="copy" className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy to Clipboard</button>
    </div>
    <div className="container my-3"  style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Summary Of Ur Text</h1>
        <p>{text.split(" ").length} Words & {text.length} Characters</p>
        <p>Para Will Be Read in {0.008 * text.split(" ").length} Minutes </p>
        <h3>Preview of Ur Work</h3>
        <p>{text.length>0?text:"Enter something in above textbox to preview it"}</p>
    </div>
    </>
  )     
}   
