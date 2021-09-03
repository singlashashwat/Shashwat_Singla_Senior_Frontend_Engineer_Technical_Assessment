import React, { useEffect, useState } from "react";
//Material-UI
import { Grid, Divider, Typography, makeStyles } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
//Interface
import { Doctor } from "../../types/interfaces";

const useStyles = makeStyles((theme) => ({
  address: {
    fontSize: "1.25rem",
  },
}));
interface Props {
  data: Doctor;
}

function DoctorData(props: Props) {
  const classes = useStyles();
  const { data } = props;
  console.log(data);
  return (
    <React.Fragment>
      <Divider />
      <Typography variant="h6" gutterBottom>
        {data?.Name}
      </Typography>
      <Typography className={classes.address}>
        <LocationOnIcon fontSize={"small"} />
        {data?.Address1 + "," + data?.Address2}
      </Typography>
      <Typography>{data?.Telephone1}</Typography>
    </React.Fragment>
  );
}
export default DoctorData;
