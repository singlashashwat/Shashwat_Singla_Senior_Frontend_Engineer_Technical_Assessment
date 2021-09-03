import React, { useEffect, useState } from "react";
//Material-UI
import { Grid, makeStyles } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { csv, DSVRowArray } from "d3";
import EditableList from "../../components/EditableList";
import DoctorData from "./DoctorData";
// @ts-ignore
import csvFilePath from "./doctors.csv";
import { Doctor, FilterKey } from "../../types/interfaces";

const useStyles = makeStyles((theme) => ({}));
function DoctorListPage() {
  const classes = useStyles();
  const [cvsData, setCsvData] = useState<any>();
  const [pageData, setPageData] = useState<any>([]);
  const [district, setDistrict] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    csv(csvFilePath).then((data) => {
      setCsvData(data);
      setPageData(data?.slice(0, 10));
      let region: any = [];
      for (var i = 0; i < data.length; i++) {
        if (region.indexOf(data[i].Region) < 0) {
          region.push(data[i].Region);
        }
      }
      setDistrict(region);
      console.log("regio", region);
      let locList: any = [];
      // data.forEach(function (loc) {
      //   if (loc.Region === val && locList.indexOf(loc.Location) < 0) {
      //     let res = self.convert(loc);
      //     locList.push(res.Location);
      //   }
      // });
    });
  }, []);

  const handleChangePage = (event: any, value: number) => {
    setPage(value);
    setPageData(cvsData?.slice((value - 1) * 10, (value - 1) * 10 + 10));
  };

  const handleFilter = (event: object, value: FilterKey | FilterKey[]) => {
    console.log("value", value);
  };

  return (
    <React.Fragment>
      <Grid item md={4} sm={12} xs={12}>
        <EditableList district={district} handleFilter={handleFilter} />
      </Grid>
      <Grid container spacing={4}>
        {pageData.length > 0 &&
          pageData.map((data: Doctor, index: number) => (
            <Grid item key={index} md={6} sm={12} xs={12}>
              <DoctorData data={data} />
            </Grid>
          ))}
      </Grid>

      <Grid container justifyContent="center">
        <Pagination
          count={
            cvsData?.length % 10 !== 0
              ? Math.floor(cvsData?.length / 10) + 1
              : cvsData?.length / 10
          }
          page={page}
          onChange={handleChangePage}
          color="primary"
        />
      </Grid>
    </React.Fragment>
  );
}
export default DoctorListPage;
