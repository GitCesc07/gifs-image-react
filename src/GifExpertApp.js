import React from "react";
import { useState } from "react";



const [categories, setCategories] = useState('Dragon Ball');


return (
  <>
    <h2>GifExpertApp</h2>

    <ul>
      {
        categories.map(category => (
          
        ))
      }
    </ul>
  </>
)