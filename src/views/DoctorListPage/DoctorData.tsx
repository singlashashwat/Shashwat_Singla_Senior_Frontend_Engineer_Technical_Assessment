import React from "react";
//Material-UI
import { Divider, Typography, makeStyles, Chip } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
//Interface
import { Doctor } from "../../types/interfaces";

const useStyles = makeStyles(() => ({
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
  time: {
    color: "#707188",
    marginTop: "0.35em",
  },
}));
interface Props {
  data: Doctor;
}

function DoctorData(props: Props) {
  const classes = useStyles();
  const { data } = props;
  let service_type = data?.["Service Type"].split("/");
  let price = data?.Price.split(",");
  let medicine = data?.Medicine.split(",");
  let day_seq_1 = data?.["Day Seq 1"].split(new RegExp("[,/&]", "g"));
  let day_seq_1_time = data?.["Day Seq 1 time"];
  let day_seq_2 = data?.["Day Seq 2"].split(new RegExp("[,/&]", "g"));
  let day_seq_2_time = data?.["Day Seq 2 time"];
  let day_seq_3 = data?.["Day Seq 3"].split(new RegExp("[,/&]", "g"));
  let day_seq_3_time = data?.["Day Seq 3 time"];
  let day_seq_4 = data?.["Day Seq 4"].split(new RegExp("[,/&]", "g"));
  let day_seq_4_time = data?.["Day Seq 4 time"];
  let weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let getloop1 =
    data?.["Day Seq 1"].indexOf("-") > 0
      ? weekdays.indexOf(data?.["Day Seq 1"].split("-")[1]?.trim()) + 1
      : 0;
  let getloop2 =
    data?.["Day Seq 2"].indexOf("-") > 0
      ? weekdays.indexOf(data?.["Day Seq 2"].split("-")[1]?.trim()) + 1
      : 0;
  let getloop3 =
    data?.["Day Seq 3"].indexOf("-") > 0
      ? weekdays.indexOf(data?.["Day Seq 3"].split("-")[1]?.trim()) + 1
      : 0;
  let getloop4 =
    data?.["Day Seq 4"].indexOf("-") > 0
      ? weekdays.indexOf(data?.["Day Seq 4"].split("-")[1]?.trim()) + 1
      : 0;
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

      {service_type.length > 0 &&
        service_type.map((item, i) => (
          <Typography variant="body2" className={classes.text}>
            {item}: ${price[i]}
            {!medicine[i] || medicine[i] === "NA"
              ? "(not inclusive medicine)"
              : "(inclusive " + medicine[i] + " Days of " + item + " medicine)"}
          </Typography>
        ))}

      <Typography variant="body2" gutterBottom className={classes.time}>
        {getloop1 > 0
          ? weekdays
              .slice(0, getloop1)
              .map(
                (item, i) => (i > 0 ? ", " : "") + item + ": " + day_seq_1_time
              )
          : day_seq_1.map(
              (item, i) => (i > 0 ? ", " : "") + item + ": " + day_seq_1_time
            )}
        {getloop2 > 0
          ? weekdays
              .slice(0, getloop2)
              .map((item) => ", " + item + ": " + day_seq_2_time)
          : day_seq_2_time
          ? day_seq_2?.map((item) => ", " + item + ": " + day_seq_2_time)
          : ""}
        {getloop3 > 0
          ? weekdays
              .slice(0, getloop3)
              .map((item) => ", " + item + ": " + day_seq_3_time)
          : day_seq_3_time
          ? day_seq_3?.map((item) => ", " + item + ": " + day_seq_3_time)
          : ""}
        {getloop4 > 0
          ? weekdays
              .slice(0, getloop4)
              .map((item) => ", " + item + ": " + day_seq_4_time)
          : day_seq_4_time
          ? day_seq_4?.map((item) => ", " + item + ": " + day_seq_4_time)
          : ""}
      </Typography>
    </React.Fragment>
  );
}
export default DoctorData;
