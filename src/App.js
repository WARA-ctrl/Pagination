import "./App.css";
import { useEffect, useState } from "react";
import MenuData from "./data/MenuData";
import FoodComponent from "./component/FoodComonent";
function App() {
  const [FoodData, setFoodData] = useState(MenuData);
  const [dataInPage, setDAtaInPage] = useState([]);
  const [page, setPage] = useState(0);

  const pagination = () => {
    const foodPerPage = 3;
    const pages = Math.ceil(MenuData.length / foodPerPage);

    const newFood = Array.from({ length: pages }, (data, index) => {
      const start = index * foodPerPage;
      return MenuData.slice(start, start + foodPerPage);
    });
    return newFood;
  };

  const handlePage = (index) => {
    setPage(index);
  };

  useEffect(() => {
    const paginate = pagination();
    setDAtaInPage(paginate);
    setFoodData(paginate[page]);
  }, [page]);

  return (
    <div className="App">
      <h1>FoodCard | Pagination</h1>
      <div className="container">
        {FoodData.map((data, index) => {
          return <FoodComponent {...data} key={index} />;
        })}
      </div>
      <div className="pagination-container">
        {dataInPage.map((data, index) => {
          return (
            <button
              className={`page-btn ${index === page ? "active-btn" : null}`}
              key={index}
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
