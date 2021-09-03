import React, { useEffect, useState } from "react";
//Material-UI
import { Grid, Divider, Typography } from "@material-ui/core";
import { Doctor } from "../../types/interfaces";

interface Props {
  data: Doctor;
}

function DoctorData(props: Props) {
  const { data } = props;
  console.log(data);
  return (
    <React.Fragment>
      <Divider />
      <Typography>{data?.Name}</Typography>
    </React.Fragment>
  );
}
export default DoctorData;
