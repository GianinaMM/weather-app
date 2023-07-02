import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import classes from "./App.module.scss";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("Suceava");

  return (
    <div className={`${classes.App}`}>
      <Header setValue={setValue}></Header>
      <Main value={value}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
