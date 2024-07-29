import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./products/products";
import Recommended from "./Recomended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import './index.css'
//my data base
import products from "./db/data";
import Card from "./compounets/Card";
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  //-----------input filter-------------
  const [qurey, setQurey] = useState("");

  const handleInputChange = (event) => {
    setQurey(event.target.value);
  };
  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(qurey.toLocaleLowerCase())!== 
  -1
  );
  //----------Radio-Input----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  //----------Buttons-Filter----------------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };
  function filteredData(products, selected, qurey) {
    let filteredproducts = products;

    if (qurey) {
      filteredproducts = filteredItems;
    }

    if (selected) {
      filteredproducts = filteredproducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredproducts.map(({img,title,star,reviews,prevPrice,newPrice})=>(
      <Card key={Math.random()}
      img={img}
      title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      
      />
    ))
  }

 const result= filteredData(products,selectedCategory,qurey)

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav qurey={qurey} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick} />
      <Products result={result}/>
    </>
  );
}

export default App;
