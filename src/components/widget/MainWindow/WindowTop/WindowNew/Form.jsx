import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import "styles/windowMain/WindowNew.css";

const Form = () => {
  return (
    <Grid item xs={12} style={{ marginTop: 30 }}>
      <form onSubmit={() => console.log("hello")}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TextField fullWidth label="Ваше имя" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Ваш e-mail" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Качество сборки, компактность, вес, дизайн"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Недостатки" variant="outlined" />
          </Grid>
          <Grid item xs={12} style={{ marginBottom: 15 }}>
            <TextField
              fullWidth
              multiline
              label="Коментарий"
              variant="outlined"
            />
          </Grid>
          <Grid items xs={12}>
            <div className="form_window__metka">
              <a href="#">#Все отзывы</a>
              <a href="#">#Акция 2 + 1 </a>
            </div>
          </Grid>
          <Grid items xs={12} sm={10} style={{ marginBottom: 10 }}>
            <div className="form-window__photo">
              <div className="image_input">
                <input type="file" accept="image/*" id="imageInput" />
                <label htmlFor="imageInput" className="image-button">
                  <img
                    style={{ marginRight: 10 }}
                    src="http://marsip01.tech01.net.in/mpv/img/addphoto.svg"
                    alt="Добавить фото"
                  />
                  Добавить фото
                </label>
                <img src="" className="image_preview" />
              </div>
            </div>
          </Grid>
          <Grid container xs={12} sm={2} justify="flex-end">
            <Button
              style={{ width: "100%" }}
              type="submit"
              variant="contained"
              color="primary"
            >
              Опубликовать
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default Form;
