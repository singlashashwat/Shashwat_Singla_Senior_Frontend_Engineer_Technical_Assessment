import React, { useEffect, useState } from "react";
//Material-UI
import { Grid } from "@material-ui/core";
import Papa from 'papaparse';
import {readFileSync} from 'fs';

function DoctorListPage() {
    const [cvsData,setCsvData] = useState('')
 
    // const loadData =()=>{
    //     var csvFilePath = require("../../doctors.csv");
    //     Papa.parse(csvFilePath, {
    //       header: true,
    //       download: true,
    //       skipEmptyLines: true,
    //       complete: function(results) {
    //         console.log("res",results)
    //       }
    //     });
    // }
    // const fetchCsv=()=> {
    //     return fetch('./doctors.csv').then(function (response:any) {
    //         let reader = response.body.getReader();
    //         let decoder = new TextDecoder('utf-8');

    //         return reader.read().then(function (result:any) {
    //             return decoder.decode(result.value);
    //         });
    //     });
    // }

    const loadData = async()=>{
        let csvData = require("./doctors.csv");
        Papa.parse(csvData, {
            complete: function(results) {
                        console.log("res",results)
                      }
        });
    }

// useEffect(()=>{

//     loadData()
// },[])

  return (
    <React.Fragment>
      <Grid>"Sdfgdf"</Grid>
    </React.Fragment>
  );
}
export default DoctorListPage;


