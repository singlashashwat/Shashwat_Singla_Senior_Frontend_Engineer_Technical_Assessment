import React, { useEffect, useState } from "react";
//Material-UI
import { Grid } from "@material-ui/core";
import { csv } from "d3";
// @ts-ignore
import csvFilePath from "./doctors.csv";
import EditableList from "../../components/EditableList";

function DoctorListPage() {
  const [cvsData, setCsvData] = useState("");

  useEffect(() => {
    csv(csvFilePath).then((data) => {
      console.log(data);
      let region = [];
      for (var i = 0; i < data.length; i++) {
        if (region.indexOf(data[i].Region) < 0) {
          region.push(data[i].Region);
        }
      }
      // console.log("regio", region);
      let locList: any = [];
      // data.forEach(function (loc) {
      //   if (loc.Region === val && locList.indexOf(loc.Location) < 0) {
      //     let res = self.convert(loc);
      //     locList.push(res.Location);
      //   }
      // });
    });
    // loadData()
  }, []);

  return (
    <React.Fragment>
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item md={4} sm={12} xs={12}>
          <EditableList />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <EditableList />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <EditableList />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default DoctorListPage;
