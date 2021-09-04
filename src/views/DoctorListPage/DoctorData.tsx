import React, { useEffect, useState } from "react";
//Material-UI
import { Divider, Typography, makeStyles, Chip } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
//Interface
import { Doctor } from "../../types/interfaces";

const useStyles = makeStyles((theme) => ({
  name: {
    marginTop: "0.35em",
  },
  address: {
    fontSize: "1rem",
    color: "red",
  },
  text: {
    color: "#707188",
  },
  chip: {
    marginRight: "5px",
    marginBottom: "5px",
  },
}));
interface Props {
  data: Doctor;
}

function DoctorData(props: Props) {
  const classes = useStyles();
  const { data } = props;
  console.log(data);
  let service_type = data?.["Service Type"].split("/");
  return (
    <React.Fragment>
      <Divider />

      <Typography variant="h6" gutterBottom className={classes.name}>
        {data?.Name}
      </Typography>

      {service_type.length > 0 &&
        service_type.map((item, index) => (
          <Chip
            label={item}
            variant="outlined"
            className={classes.chip}
            key={index}
          />
        ))}

      <Typography gutterBottom>
        <LocationOnIcon className={classes.address} />
        {data?.Address1 + "," + data?.Address2}
      </Typography>

      <Typography variant="body2" gutterBottom className={classes.text}>
        {data?.Telephone1}
      </Typography>

      <Typography variant="body2" gutterBottom className={classes.text}>
        Member exclusive price:
      </Typography>
    </React.Fragment>
  );
}
export default DoctorData;
