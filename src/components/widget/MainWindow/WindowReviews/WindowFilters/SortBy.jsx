import React, { Fragment, useState, useEffect } from "react";
import { Select, withStyles, InputBase, MenuItem } from "@material-ui/core";

const SortByInput = withStyles(() => ({
  input: {
    borderBottom: "none",
  },
}))(InputBase);

const SortBy = () => {
  const [sort, setSort] = useState("");

  useEffect(() => {
    setSort("Сортировать по дате");
  }, []);

  const onSelectChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <Fragment>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sort}
        onChange={onSelectChange}
        input={<SortByInput />}
      >
        <MenuItem value={"Сортировать по дате"}>Сортировать по дате</MenuItem>
        <MenuItem value={"Сортировать по оценке"}>
          Сортировать по оценке
        </MenuItem>
        <MenuItem value={"Сортировать по лайкам"}>
          Сортировать по лайкам
        </MenuItem>
        <MenuItem style={{ color: "red" }} value={"Сбросить фильтры"}>
          Сбросить фильтры
        </MenuItem>
      </Select>
    </Fragment>
  );
};

export default SortBy;
