

import "./Card.css"






export default function Card({ recipe }) {
  return (
    <>
      {
        recipe?.length > 0
          ?
          (
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="d-flex justify-content-center flex-wrap">
                    {recipe.map((allrecipe, key) =>
                      <div className="card m-5" style={{ width: "20rem" }} key={key}>
                        <img src={allrecipe.recipe.image} className="card-img-top" alt={allrecipe.recipe.label} />
                        <div className="card-body fs-5 ">
                          <p className="card-text text-uppercase">{allrecipe.recipe.label}</p>
                          <p className="card-text text-uppercase">dish type: <span>{allrecipe.recipe.dishType}</span></p>
                            <p className="">Ingredients: <br /> <span> {allrecipe.recipe.ingredientLines}  </span></p>
                            <p className="">Cuisine: <span> {allrecipe.recipe.cuisineType}</span> </p>
                            <p className="">Total Calories: <span>{Math.round(allrecipe.recipe.calories)}</span></p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

          )
          :
          ""
      }
    </>
  )
}