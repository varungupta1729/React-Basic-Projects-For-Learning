import React , {useEffect, useState} from "react";
import "./style.css"
import Spinner from "../Spinner/Spinner";
export default function LoadMoreData(){
   const[loading , setLoading] = useState(false);
   const[products , setProducts] = useState([]);
   const[count , setCount] = useState(1);

  async function fetchData(){
    setLoading(true);
    const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${
        count === 0 ? 0 : count * 20
      }`);
      const data = await response.json();
      setLoading(false);
      setProducts((prev)=>[...prev , ...data.products]);
     
      console.log(data);

  } 
   useEffect(()=>{fetchData() }, [count]);

   function handleClick(){
    setCount(count+1);
   }

    return <div className="full-container">
    <div className="flex" >
        <h1>Infinite Scroll</h1>
    </div>
    <div className="load-more-container">
    
    {  products.map((item)=>(
            <div className="items">
                <img key={item.id} src={item.thumbnail}/>
                <p>{item.title}</p>
            </div>
         ))
        
            
        
    }</div> 

    
       <div className="flex button">
       {
       loading ? (<Spinner/>) : ( 
        <button onClick={handleClick}>More</button>)

       }
    </div>
    
   
    </div>
}