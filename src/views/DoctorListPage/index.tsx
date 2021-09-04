import React, { useEffect, useState } from "react";
//Material-UI
import { Grid, makeStyles } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
//CSV
import { csv, DSVRowArray } from "d3";
//OtherComponents
import EditableList from "../../components/EditableList";
import DoctorData from "./DoctorData";
//Interface
import { Doctor, FilterKey } from "../../types/interfaces";
// @ts-ignore
import csvFilePath from "./doctors.csv";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "50px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
  },
  filter: {
    marginBottom: "30px",
  },
  pagination: {
    marginTop: "30px",
  },
}));

let cvsData: DSVRowArray<string>;
function DoctorListPage() {
  const classes = useStyles();
  const [showData, setShowData] = useState<DSVRowArray<string>>();
  const [pageData, setPageData] = useState<any>([]);
  const [district, setDistrict] = useState<FilterKey[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    csv(csvFilePath).then((data) => {
      cvsData = data;
      setShowData(data);
      setPageData(data?.slice(0, 10));
      let region: any = [];
      let districtlist: any = [];
      for (var i = 0; i < data.length; i++) {
        const found: any = districtlist.some((el: any) =>
          el.region === "New Terriroties"
            ? "New Territories"
            : data[i].Region &&
              el.location.toLowerCase() ===
                data[i].Location!.trim().toLowerCase()
        );
        if (!found) {
          region.push(data[i].Region);
          let districtData = {
            region:
              data[i].Region === "New Terriroties"
                ? "New Territories"
                : data[i].Region,
            location: data[i].Location!.trim(),
          };
          districtlist.push(districtData);
        }
      }
      districtlist.sort((a: any, b: any) => (a.region > b.region ? 1 : -1));
      setDistrict(districtlist);
    });
  }, []);

  const handleChangePage = (event: object, value: number) => {
    setPage(value);
    setPageData(showData?.slice((value - 1) * 10, (value - 1) * 10 + 10));
  };

  async function handleFilter(event: object, value: any) {
    let data: any = [];
    if (value && value?.length > 0) {
      data = await cvsData.filter((csitem: any) =>
        value.map((item: any) => item.location).includes(csitem.Location)
      );
    } else {
      data = cvsData;
    }
    setPage(1);
    setShowData(data);
    setPageData(data?.slice(0, 10));
  }

  return (
    <React.Fragment>
      <Grid className={classes.container}>
        <Grid item md={4} sm={12} xs={12} className={classes.filter}>
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

        <Grid container justifyContent="center" className={classes.pagination}>
          <Pagination
            count={
              showData
                ? showData?.length % 10 !== 0
                  ? Math.floor(showData?.length / 10) + 1
                  : showData?.length / 10
                : 0
            }
            page={page}
            onChange={handleChangePage}
            color="primary"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default DoctorListPage;
