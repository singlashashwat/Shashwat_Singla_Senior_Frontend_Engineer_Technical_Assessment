import React, { useEffect, useState } from "react";
//Material-UI
import { Grid, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

function EditableList() {
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
  ];
  return (
    <Autocomplete
      multiple
      id="tags-standard"
      options={top100Films}
    //   getOptionLabel={(option) => option.title}
      defaultValue={[top100Films[13]]}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Multiple values"
          placeholder="Favorites"
        />
      )}
    />
  );
}
export default EditableList;
