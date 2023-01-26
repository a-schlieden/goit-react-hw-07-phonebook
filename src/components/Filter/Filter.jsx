import React from "react";
import style from './Filter.module.css';
import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../../redux/filter.slice"

export const Filter = () => {

  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter)
  const onFilterChange = (query) => {
    dispatch(setFilter(query))
  }
  return (
    <label>
      <input className={style.FilterFormInput}
        type="text"
        value={filter}
        onChange={(event) => onFilterChange(event.target.value)} />
    </label>
  );
};


