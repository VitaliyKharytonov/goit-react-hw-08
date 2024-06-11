import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const hendleChange = (e) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };
  return (
    <div className={css.container}>
      <label htmlFor="search">Find contacts by name</label>
      <input type="text" id="search" onChange={hendleChange} />
    </div>
  );
}
