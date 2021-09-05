//Material-UI
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
//Interface
import { FilterKey } from "../../types/interfaces";

interface Props {
  district: FilterKey[];
  handleFilter: (event: object, value: FilterKey[]) => void;
}
function EditableList(props: Props) {
  const { district, handleFilter } = props;

  return (
    <Autocomplete
      multiple
      options={district}
      onChange={handleFilter}
      groupBy={(option) => option.region}
      getOptionLabel={(option) => option.location}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="District" />
      )}
    />
  );
}
export default EditableList;
