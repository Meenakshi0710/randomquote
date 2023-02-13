import React, { useEffect, useState } from 'react'
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";

const QuoteBox = () => {
    
 const [quote, setQuote] = useState();
 const [author, setaAuthor] = useState();
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e825c71d59mshc175fc326a87350p198f73jsnff9c0b62b6cd',
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    };

    const fetchQuote = async () => {
        await fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	.then(response =>{
       
        
        
        console.log(response)
        
        setQuote(response.content)
        setaAuthor(response.originator.name);
        
      })
	.catch(err => console.error(err));
    
    }
    const handleClick = async () =>{
      const color = randomColor();
        await fetchQuote();
        document.body.style.backgroundColor = color;
        document.getElementById("new-quote").style.backgroundColor= color;
        document.getElementById("text").style.color= color;
        document.getElementById("tweet-quote").style.color= color;
        document.getElementById("facebook-quote").style.color= color;
    }
const randomNum = () =>{
  const num = Math.floor(Math.random() * 256);
  return num;
}
    const randomColor = () =>{
      const color = `rgb(${randomNum()},${randomNum()},${randomNum()})`
      console.log(color);
      return color;
    }
    useEffect(() => {
      const color = randomColor();
      fetchQuote()
      document.body.style.backgroundColor = color;
        document.getElementById("new-quote").style.backgroundColor= color;
        document.getElementById("text").style.color= color;
        document.getElementById("tweet-quote").style.color= color;
        document.getElementById("facebook-quote").style.color= color;
   
      
    }, [])
    
  return (
    <>
    <div className = "container d-flex justify-content-center align-items-center header">
      <div className="card">
  <div className="card-header">
    Quote
  </div>
  <div className="card-body" id='quote-box'>
    <blockquote className="blockquote">
      <p id='text'>{quote}</p>
      <footer className="blockquote-footer" id='author'> <cite title="Source Title">{author}</cite></footer>
    </blockquote>
    
      <a style = {{fontSize:"30px"}} className="float-start"
  href="https://twitter.com/intent/tweet" id='tweet-quote' target="_blank"><FaTwitterSquare/></a>
     
      <a style = {{fontSize:"30px"}} href="https://www.facebook.com/sharer/sharer.php?u=example.org" id='facebook-quote' target="_blank" className= "card-link float-start">
  <FaFacebookSquare/>
</a>
      
      <button type="button" className="btn  float-end text-white" id='new-quote' onClick={handleClick}>New Quote</button>
      
      


    
 </div>
</div>
</div>
    </>
  )
}

export default QuoteBox