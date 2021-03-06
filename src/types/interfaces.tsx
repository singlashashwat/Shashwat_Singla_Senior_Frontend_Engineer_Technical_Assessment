export interface Doctor {
  "Service Type": string;
  Name: string;
  "Location ID": string;
  "Doctor ID": string;
  ChiName: string;
  Address1: string;
  Address2: string;
  Location: string;
  Region: string;
  ChiAddress1: string;
  ChiAddress2: string;
  ChiLocation: string;
  ChiRegion: string;
  Telephone1: string;
  Telephone2: string;
  "Day Seq 1": string;
  "Day Seq 1 time": string;
  "Day Seq 2": string;
  "Day Seq 2 time": string;
  "Day Seq 3": string;
  "Day Seq 3 time": string;
  "Day Seq 4": string;
  "Day Seq 4 time": string;
  "ChiDay Seq 1": string;
  "ChiDay Seq 1 time": string;
  "ChiDay Seq 2": string;
  "ChiDay Seq 2 time": string;
  "ChiDay Seq 3": string;
  "ChiDay Seq 3 time": string;
  "ChiDay Seq 4": string;
  "ChiDay Seq 4 time": string;
  Price: string;
  Partner: string;
  Medicine: string;
}

export interface FilterKey {
  region: string;
  location: string;
}
