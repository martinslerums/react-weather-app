import "./App.css";
import Search from "./components/search/Search";

function App() {

  const handleOnSearchChange = (searchData: {value: string, label: string}) => {
    console.log("searchData : ", searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
