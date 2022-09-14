import React from "react";
import ReactPDF from "@react-pdf/renderer";
import MyDocument from "./helpers/generate-pdf.js";
import generateQR from "./helpers/generate-qrcode.js";
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const certificate = {
  signature: "long-signature",
  firstname: "John",
  lastname: "Doe",
  birthdate: "2022-09-15",
  epiNo: "EPI_211221",
  updatedAt: "2021-09-15",
  createdAt: "2021-09-15",
  dosageIndicators: [
    {
      dosageNumber: 1,
      vaccineName: "pfizer",
      manufacture: "pfizer",
      type: "type",
      batchNumber: "LL89qw",
      vaccinationSite: "Bwaila",
      vaccinationDate: "2021-09-15",
      expirationDate: "2021-09-15",
    },
    {
      dosageNumber: 2,
      vaccineName: "pfizer",
      manufacture: "pfizer",
      type: "type",
      batchNumber: "LL89qw",
      vaccinationSite: "Bwaila",
      vaccinationDate: "2021-09-15",
      expirationDate: "2021-09-15",
    },
  ],
};

generateQR(certificate.signature).then((imageUri) => {
  ReactPDF.render(
    <MyDocument imageUri={imageUri} certificate={certificate} />,
    `${__dirname}/${certificate.firstname} ${certificate.lastname}.pdf`
  );
});
