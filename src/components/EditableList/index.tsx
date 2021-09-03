import React, { useEffect, useState } from "react";
//Material-UI
import { Grid, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
//Interface
import { FilterKey } from "../../types/interfaces";

interface Props {
  district: string[];
  handleFilter: (event: object, value: FilterKey | FilterKey[]) => void;
}
function EditableList(props: Props) {
  const { district, handleFilter } = props;
  let data = [
    { region: "New Terriroties", location: "Tsing Yi" },
    { region: "New Terriroties", location: "Tai Po" },
    { region: "Kowloon", location: "Mongkok" },
  ];
  return (
    <Autocomplete
      multiple
      options={data}
      onChange={handleFilter}
      groupBy={(option) => option.region}
      getOptionLabel={(option) => option.location}
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
