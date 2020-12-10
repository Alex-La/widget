import React from "react";
import { Grid } from "@material-ui/core";

const Info = () => {
  return (
    <Grid item xs={12}>
      <div className="review-info">
        <div className="info-block">
          <h4>Достоинства</h4>
          <p>Качество сборки, компактность, вес, дизайн</p>
        </div>
        <div className="info-block">
          <h4>Недостатки</h4>
          <p>Отсутствуют стандартные разъемы: HDMI, USB</p>
        </div>
        <div className="info-block">
          <h4>Комментарий</h4>
          <p>
            Это мой первый компьютер семейства Mac. Поскольку сам работаю в
            сфере ИТ, и всю жизнь работал на Windows, решил для себя попробовать
            что-то новое, поизучать операционную систему MacOS. Поначалу было
            непривычно, пришлось привыкать. Через какое-то время начал понимать,
            что в MacOS работать одно удовольствие.
          </p>
        </div>
      </div>
    </Grid>
  );
};

export default Info;
