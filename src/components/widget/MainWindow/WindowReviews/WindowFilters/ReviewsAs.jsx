import React, { Fragment, useState, useEffect } from "react";
import { Select, withStyles, InputBase, MenuItem } from "@material-ui/core";

const RevAsInput = withStyles(() => ({
  input: {
    borderBottom: "none",
  },
}))(InputBase);

const ReviewsAs = () => {
  const [rev, setRev] = useState("");

  useEffect(() => {
    setRev("all");
  }, []);

  const onSelectChange = (e) => {
    setRev(e.target.value);
  };

  return (
    <Fragment>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={rev}
        onChange={onSelectChange}
        input={<RevAsInput />}
      >
        <MenuItem value={"all"}>Все отзывы</MenuItem>
        <MenuItem value={"Только с фото"}>Только с фото</MenuItem>
        <MenuItem style={{ color: "lightgrey" }} value={"Только с видео"}>
          Только с видео
        </MenuItem>
        <MenuItem value={"Только с аудиоотзывом"}>
          Только с аудиоотзывом
        </MenuItem>
        <MenuItem style={{ color: "red" }} value={"Сбросить фильтры"}>
          Сбросить фильтры
        </MenuItem>
      </Select>
    </Fragment>
  );
};

export default ReviewsAs;
