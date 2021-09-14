import { useEffect, useState } from "react";
import { getData } from "./api/getData";
import "./App.css";
import BoxContainer from "./Components/BoxContainer/BoxContainer";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const [data, setdata] = useState([]);
  const [user, setUser] = useState('caarlosdamian')
  useEffect(() => {
    getData(user).then((res) => setdata(res));
  }, [user]);
  return (
    <div className="App">
      <SearchBar setUser={setUser} />
      <BoxContainer data={data}/>
    </div>
  );
}

export default App;
