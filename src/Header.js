import { useRef } from "react";
import classes from "./Header.module.scss";

const Header = ({ setValue }) => {
  const inputRef = useRef();

  const inputValue = () => {
    const value = inputRef.current.value;
    setValue(value);
    console.log(value);
  };

  return (
    <div className={`${classes.searchBar}`}>
      <input
        type="sumbit"
        id="search"
        placeholder="Search your location"
        className={`${classes.input}`}
        ref={inputRef}
      ></input>
      <label htmlFor="search"></label>
      <button
        onClick={inputValue}
        type="submit"
        className={`${classes.button}`}
      >
        Get weather forecast
      </button>
    </div>
  );
};

export default Header;
