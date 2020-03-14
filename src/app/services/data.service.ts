import { Injectable } from '@angular/core';
import axios from 'axios';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataDate = '';
  Auditors = [];
  AllServices = [];
  FinalMGTReport = [];
  FinalFOIReport = [];
  FinalMGTZeroReport = [];
  FinalFOIZeroReport = [];
  reportData = [
    {
      name: 'Central',
      data: [],
      theMGT: [],
      theFOI: [],
      members: [],
      theFOIHours: [],
      theMGTHours: [],
      receivedHours: [],
      deliveredHours: [],
      theFOIRecHours: [],
      theMGTRecHours: [],
      theFOIZeroHours: [],
      theMGTZeroHours: []
    },
    {
      name: 'DelawareValley',
      data: [],
      theMGT: [],
      theFOI: [],
      members: [],
      theFOIHours: [],
      theMGTHours: [],
      receivedHours: [],
      deliveredHours: [],
      theFOIRecHours: [],
      theMGTRecHours: [],
      theFOIZeroHours: [],
      theMGTZeroHours: []
    },
    {
      name: 'Eastern',
      data: [],
      theMGT: [],
      theFOI: [],
      members: [],
      theFOIHours: [],
      theMGTHours: [],
      receivedHours: [],
      deliveredHours: [],
      theFOIRecHours: [],
      theMGTRecHours: [],
      theFOIZeroHours: [],
      theMGTZeroHours: []
    },
    {
      name: 'Europe',
      data: [],
      theMGT: [],
      theFOI: [],
      members: [],
      theFOIHours: [],
      theMGTHours: [],
      receivedHours: [],
      deliveredHours: [],
      theFOIRecHours: [],
      theMGTRecHours: [],
      theFOIZeroHours: [],
      theMGTZeroHours: []
    },
    {
      name: 'Mid-Altantic',
      data: [],
      theMGT: [],
      theFOI: [],
      members: [],
      theFOIHours: [],
      theMGTHours: [],
      receivedHours: [],
      deliveredHours: [],
      theFOIRecHours: [],
      theMGTRecHours: [],
      theFOIZeroHours: [],
      theMGTZeroHours: []
    },
    {
      name: 'Seventh',
      data: [],
      theMGT: [],
      theFOI: [],
      members: [],
      theFOIHours: [],
      theMGTHours: [],
      receivedHours: [],
      deliveredHours: [],
      theFOIRecHours: [],
      theMGTRecHours: [],
      theFOIZeroHours: [],
      theMGTZeroHours: []
    },
    {
      name: 'Southern',
      data: [],
      theMGT: [],
      theFOI: [],
      members: [],
      theFOIHours: [],
      theMGTHours: [],
      receivedHours: [],
      deliveredHours: [],
      theFOIRecHours: [],
      theMGTRecHours: [],
      theFOIZeroHours: [],
      theMGTZeroHours: []
    },
    {
      name: 'SouthWest',
      data: [],
      theMGT: [],
      theFOI: [],
      members: [],
      theFOIHours: [],
      theMGTHours: [],
      receivedHours: [],
      deliveredHours: [],
      theFOIRecHours: [],
      theMGTRecHours: [],
      theFOIZeroHours: [],
      theMGTZeroHours: []
    },
    {
      name: 'Western',
      data: [],
      theMGT: [],
      theFOI: [],
      members: [],
      theFOIHours: [],
      theMGTHours: [],
      receivedHours: [],
      deliveredHours: [],
      theFOIRecHours: [],
      theMGTRecHours: [],
      theFOIZeroHours: [],
      theMGTZeroHours: []
    }
  ];

  constructor(private Utils: UtilityService) {
    this.dataDate = this.Utils.getDate();

    // this.init();
    // this.createDataArray();
  }

  init() {
    this.createDataArray();
  }

  createDataArray = () => {
    axios
        .get(this.Utils.Users)
        .then(res => {
          this.Auditors = Object.values(res.data);
          // this.Auditors = Object.keys(res).map(key => res[key]);
        })
        .then(data => {
          axios
              .get(this.Utils.Services)
              .then(res => {
                const temp = Object.values(res.data);
                // const temp = Object.keys(res).map(key => res[key]);
                // let temp2 = temp.filter(
                //     item => new Date(item.entryDate).getFullYear() === mySelectedYear
                // );
                this.AllServices = temp;
                return temp;
              })
              .then(res => {
                console.log('just before create regional data');
                console.log(this.AllServices);
                console.log(res);
                this.createRegionaldata();
              });
        });
  };

  createRegionaldata = () => {
    for (let i = 0; i < this.reportData.length; i++) {
      let tempData;
      if (this.reportData[i].name === 'Seventh') {
        tempData = this.AllServices.filter(item => item.region === '7TH');
      } else if (this.reportData[i].name === 'SouthWest') {
        tempData = this.AllServices.filter(item => item.region === 'South West');
      } else if (this.reportData[i].name === 'DelawareValley') {
        tempData = this.AllServices.filter(item => item.region === 'Delaware Valley');
      } else if (this.reportData[i].name === 'MidAltantic') {
        tempData = this.AllServices.filter(item => item.region === 'Mid-Altantic');
      } else {
        tempData = this.AllServices.filter(item => item.region === this.reportData[i].name);
      }
      this.reportData[i].data = tempData;
    }

    for (let i = 0; i < this.reportData.length; i++) {
      let tempData;
      if (this.reportData[i].name === 'Seventh') {
        tempData = this.Auditors.filter(item => item.REGION === '7TH');
      } else if (this.reportData[i].name === 'SouthWest') {
        tempData = this.Auditors.filter(item => item.REGION === 'South West');
      } else if (this.reportData[i].name === 'DelawareValley') {
        tempData = this.Auditors.filter(item => item.REGION === 'Delaware Valley');
      } else if (this.reportData[i].name === 'MidAltantic') {
        tempData = this.Auditors.filter(item => item.REGION === 'Mid-Altantic');
      } else {
        tempData = this.Auditors.filter(item => item.REGION === this.reportData[i].name);
      }
      this.reportData[i].members = tempData;
    }

    for (let k = 0; k < this.reportData.length; k++) {
      for (let l = 0; l < this.reportData[k].data.length; l++) {
        if (this.reportData[k].data[l].serviceType === 'provided') {
          const pData = this.reportData[k].data[l];
          this.reportData[k].deliveredHours.push(pData);
        }
        if (this.reportData[k].data[l].serviceType === 'received') {
          const rData = this.reportData[k].data[l];
          this.reportData[k].receivedHours.push(rData);
        }
      }
    }

    for (let i = 0; i < this.reportData.length; i++) {
      for (let j = 0; j < this.reportData[i].members.length; j++) {
        if (this.reportData[i].members[j].MEMBERTYPE === 'MGT') {
          const tempMGT = this.reportData[i].members[j];
          this.reportData[i].theMGT.push(tempMGT);
        } else if (this.reportData[i].members[j].MEMBERTYPE === 'FOI') {
          const tempFOI = this.reportData[i].members[j];
          this.reportData[i].theFOI.push(tempFOI);
        }
      }
    }

    // Hours Delivered
    for (let i = 0; i < this.reportData.length; i++) {
      for (let j = 0; j < this.reportData[i].theFOI.length; j++) {
        let tempArray = [];
        const foiDelHours = this.reportData[i].deliveredHours.filter(
            item => item.natid === this.reportData[i].theFOI[j].NATID
        );
        if (foiDelHours.length > 0) {
          tempArray = {
            name:
                'Bro. ' +
                this.reportData[i].theFOI[j].FNAME +
                ' ' +
                this.reportData[i].theFOI[j].LNAME,
            region: this.reportData[i].name,
            city: this.reportData[i].theFOI[j].CITY,
            bookOne: foiDelHours
                .map(item => parseFloat(item.bookOneHours))
                .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0),
            illness: foiDelHours
                .map(item => parseFloat(item.illinessHours))
                .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0),
            other: foiDelHours
                .map(item => parseFloat(item.otherBookHours))
                .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0),
            selfm: foiDelHours
                .map(item => parseFloat(item.selfAnalysisHours))
                .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0),
            stright: foiDelHours
                .map(item => parseFloat(item.straightWireHours))
                .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0),
            superh: foiDelHours
                .map(item => parseFloat(item.supervisingHours))
                .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0)
          };
          tempArray.grandTotal =
              tempArray.bookOne +
              tempArray.illness +
              tempArray.other +
              tempArray.selfm +
              tempArray.stright +
              tempArray.superh;
        } else {
          tempArray = {
            name:
                'Bro. ' +
                this.reportData[i].theFOI[j].FNAME +
                ' ' +
                this.reportData[i].theFOI[j].LNAME,
            region: this.reportData[i].name,
            city: this.reportData[i].theFOI[j].CITY,
            bookOne: 0,
            illness: 0,
            other: 0,
            selfm: 0,
            stright: 0,
            superh: 0
          };
          tempArray.grandTotal =
              tempArray.bookOne +
              tempArray.illness +
              tempArray.other +
              tempArray.selfm +
              tempArray.stright +
              tempArray.superh;
        }
        if (tempArray.grandTotal === 0) {
          this.reportData[i].theFOIZeroHours.push(tempArray);
        } else {
          this.reportData[i].theFOIHours.push(tempArray);
        }
      }

      for (let j = 0; j < this.reportData[i].theMGT.length; j++) {
        let tempArray = [];
        const mgtDelHours = this.reportData[i].deliveredHours.filter(
            item => item.natid === this.reportData[i].theMGT[j].NATID
        );
        if (mgtDelHours.length > 0) {
          tempArray = {
            name:
                'Sis. ' +
                this.reportData[i].theMGT[j].FNAME +
                ' ' +
                this.reportData[i].theMGT[j].LNAME,
            region: this.reportData[i].name,
            city: this.reportData[i].theMGT[j].CITY,
            bookOne: mgtDelHours
                .map(item => parseFloat(item.bookOneHours))
                .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0),
            illness: mgtDelHours
                .map(item => parseFloat(item.illinessHours))
                .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0),
            other: mgtDelHours
                .map(item => parseFloat(item.otherBookHours))
                .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0),
            selfm: mgtDelHours
                .map(item => parseFloat(item.selfAnalysisHours))
                .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0),
            stright: mgtDelHours
                .map(item => parseFloat(item.straightWireHours))
                .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0),
            superh: mgtDelHours
                .map(item => parseFloat(item.supervisingHours))
                .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0)
          };
          tempArray.grandTotal =
              tempArray.bookOne +
              tempArray.illness +
              tempArray.other +
              tempArray.selfm +
              tempArray.stright +
              tempArray.superh;
        } else {
          tempArray = {
            name:
                'Sis. ' +
                this.reportData[i].theMGT[j].FNAME +
                ' ' +
                this.reportData[i].theMGT[j].LNAME,
            region: this.reportData[i].name,
            city: this.reportData[i].theMGT[j].CITY,
            bookOne: 0,
            illness: 0,
            other: 0,
            selfm: 0,
            stright: 0,
            superh: 0
          };
          tempArray.grandTotal =
              tempArray.bookOne +
              tempArray.illness +
              tempArray.other +
              tempArray.selfm +
              tempArray.stright +
              tempArray.superh;
        }
        if (tempArray.grandTotal === 0) {
          this.reportData[i].theMGTZeroHours.push(tempArray);
        } else {
          this.reportData[i].theMGTHours.push(tempArray);
        }
      }
    }
    // console.log(reportData);

    // Received Hours
    for (let i = 0; i < this.reportData.length; i++) {
      for (let j = 0; j < this.reportData[i].theFOI.length; j++) {
        let tempArray = [];
        const foiRecHours = this.reportData[i].receivedHours.filter(
            item => item.natid === this.reportData[i].theFOI[j].NATID
        );
        if (foiRecHours.length > 0) {
          tempArray = {
            name:
                'Bro. ' +
                this.reportData[i].theFOI[j].FNAME +
                ' ' +
                this.reportData[i].theFOI[j].LNAME,
            region: this.reportData[i].name,
            city: this.reportData[i].theFOI[j].CITY,
            bookOne: foiRecHours
                .map(item => parseFloat(item.bookOneHours))
                .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0),
            illness: foiRecHours
                .map(item => parseFloat(item.illinessHours))
                .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0),
            other: foiRecHours
                .map(item => parseFloat(item.otherBookHours))
                .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0),
            selfm: foiRecHours
                .map(item => parseFloat(item.selfAnalysisHours))
                .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0),
            stright: foiRecHours
                .map(item => parseFloat(item.straightWireHours))
                .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0),
            superh: foiRecHours
                .map(item => parseFloat(item.supervisingHours))
                .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0)
          };
          tempArray.grandTotalRec =
              tempArray.bookOne +
              tempArray.illness +
              tempArray.other +
              tempArray.selfm +
              tempArray.stright +
              tempArray.superh;
        } else {
          tempArray = {
            name:
                'Bro. ' +
                this.reportData[i].theFOI[j].FNAME +
                ' ' +
                this.reportData[i].theFOI[j].LNAME,
            region: this.reportData[i].name,
            city: this.reportData[i].theFOI[j].CITY,
            bookOne: 0,
            illness: 0,
            other: 0,
            selfm: 0,
            stright: 0,
            superh: 0
          };
          tempArray.grandTotalRec =
              tempArray.bookOne +
              tempArray.illness +
              tempArray.other +
              tempArray.selfm +
              tempArray.stright +
              tempArray.superh;
        }
        if (tempArray.grandTotalRec >= 0.5) {
          this.reportData[i].theFOIRecHours.push(tempArray);
        }
      }

      for (let j = 0; j < this.reportData[i].theMGT.length; j++) {
        let tempArray = [];
        const mgtRecHours = this.reportData[i].receivedHours.filter(
            item => item.natid === this.reportData[i].theMGT[j].NATID
        );
        if (mgtRecHours.length > 0) {
          tempArray = {
            name:
                'Sis. ' +
                this.reportData[i].theMGT[j].FNAME +
                ' ' +
                this.reportData[i].theMGT[j].LNAME,
            region: this.reportData[i].name,
            city: this.reportData[i].theMGT[j].CITY,
            bookOne: mgtRecHours
                .map(item => parseFloat(item.bookOneHours))
                .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0),
            illness: mgtRecHours
                .map(item => parseFloat(item.illinessHours))
                .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0),
            other: mgtRecHours
                .map(item => parseFloat(item.otherBookHours))
                .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0),
            selfm: mgtRecHours
                .map(item => parseFloat(item.selfAnalysisHours))
                .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0),
            stright: mgtRecHours
                .map(item => parseFloat(item.straightWireHours))
                .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0),
            superh: mgtRecHours
                .map(item => parseFloat(item.supervisingHours))
                .reduce((accumulator, currentValue) => {
                  return accumulator + currentValue;
                }, 0)
          };
          tempArray.grandTotalRec =
              tempArray.bookOne +
              tempArray.illness +
              tempArray.other +
              tempArray.selfm +
              tempArray.stright +
              tempArray.superh;
        } else {
          tempArray = {
            name:
                'Sis. ' +
                this.reportData[i].theMGT[j].FNAME +
                ' ' +
                this.reportData[i].theMGT[j].LNAME,
            region: this.reportData[i].name,
            city: this.reportData[i].theMGT[j].CITY,
            bookOne: 0,
            illness: 0,
            other: 0,
            selfm: 0,
            stright: 0,
            superh: 0
          };
          tempArray.grandTotalRec =
              tempArray.bookOne +
              tempArray.illness +
              tempArray.other +
              tempArray.selfm +
              tempArray.stright +
              tempArray.superh;
        }
        if (tempArray.grandTotalRec >= 0.5) {
          this.reportData[i].theMGTRecHours.push(tempArray);
        }
      }
    }
    console.log(this.reportData);

    for (let i = 0; i < this.reportData.length; i++) {
      let tempArray = [];
      for (let j = 0; j < this.reportData[i].theFOI.length; j++) {
        if (this.reportData[i].theFOIHours[j].grandTotal > 0) {
          tempArray = {
            region: this.reportData[i].theFOIHours[j].region,
            city: this.reportData[i].theFOIHours[j].city,
            auditor: this.reportData[i].theFOIHours[j].name,
            delivered: this.reportData[i].theFOIHours[j].grandTotal
          };
          this.FinalFOIReport.push(tempArray);
        } else {
          console.log("zero region foi");
        }
      }
    }

    for (let i = 0; i < this.reportData.length; i++) {
      let tempArray = [];
      for (let j = 0; j < this.reportData[i].theMGT.length; j++) {
        if (this.reportData[i].theMGTHours[j].grandTotal > 0) {
          tempArray = {
            region: this.reportData[i].theMGTHours[j].region,
            city: this.reportData[i].theMGTHours[j].city,
            auditor: this.reportData[i].theMGTHours[j].name,
            delivered: this.reportData[i].theMGTHours[j].grandTotal
          };
          this.FinalMGTReport.push(tempArray);
        }
      }
    }

    this.DataSort(this.FinalFOIReport);
    this.DataSort(this.FinalMGTReport);
    // mgtItems = this.FinalMGTReport.map(this.createListItems);
    console.log(this.FinalFOIReport);
    console.log(this.FinalMGTReport);
  };

  DataSort = tempArray => {
    const sortAry = tempArray.sort(this.compareGrandTotal);
    const printData = sortAry.sort((a, b) =>
        a.region > b.region
            ? 1
            : a.region === b.region
            ? a.city > b.city
                ? 1
                : -1
            : -1
    );
    console.log(printData);
  };

  compareGrandTotal = (a, b) => {
    return parseFloat(b.delivered) - parseFloat(a.delivered);
    // return parseFloat(b.grandTotal) - parseFloat(a.grandTotal);
  };

  // createListItems = item => {
  //   return (
  //       <li key = {item.auditor} >
  //           Name: {item.auditor} - Region: {item.region} - City: {item.city} - Total
  //   Hours: {item.delivered}
  //   </li>
  // );
  // };

}
