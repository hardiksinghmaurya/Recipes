import { useContext, useEffect, useState } from "react"
import Header from "./Components/Header"
import Card from "./Components/Card"
import { DotPulse } from '@uiball/loaders'
import "./App.css"




export default function App() {

  const [recipe, setRecipe] = useState([])

  const [loader, setLoader] = useState(true)



  async function search(searchItem) {
    try {
      const call = await fetch(`
       https://api.edamam.com/api/recipes/v2?type=public&q=${searchItem}&app_id=${import.meta.env.VITE_API_ID}&app_key=${import.meta.env.VITE_APP_KEY}
  `)
      const result = await call.json()
      setRecipe(result.hits)
      setLoader(false)
    }
    catch (e) {
      console.log("something went worng", e)
    }
  }
  useEffect(() => {
    search()
    setLoader(false)

  }, [])



  return (
    <>
      {
        loader &&
        <div className="loader position-absolute top-50 start-50 z-1">
          {<DotPulse
            size={70}
            speed={1.3}
            color="white"
          />}
        </div>
      }

      <Header search={search} setLoader={setLoader} />

      <Card recipe={recipe} />
      
      </>
      )
}


