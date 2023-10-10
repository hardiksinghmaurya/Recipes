import {useState} from "react"
import "./Header.css"

export default function Header({search,setLoader}){
    const [searchRecipe, setSearchRecipe] = useState("")

    return(
        
        <div className="header">
        <img src="/reclogo.png" alt="Recipe Info" />
        <div className=" m-5 search-icon ">
        <input type="text" placeholder="search for recipes" value={searchRecipe} onChange={(output)=>(setSearchRecipe(output.target.value),search(searchRecipe))}className=" me-4 border border-0 shadow-none border-bottom border-danger  fs-4 fw-medium  bg-transparent"  />
        <button onClick={()=>(search(searchRecipe),setLoader(true))} className="p-1" > <ion-icon name="search-outline"></ion-icon></button>
        </div>
        </div>
    )
    
}