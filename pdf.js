import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

import moment from "moment";
import getDosages from "./helpers";

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    alignItems: "center",
    alignContent: "center",
    fontFamily: "Oswald",
    position: "relative",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  logo: {
    height: "100px",
  },
  logoContainer: {
    marginTop: "10px",
  },
  title: {
    fontSize: 18,
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 12,
  },
  content: {
    fontSize: 12,
    color: "#2f2e2e",
    marginLeft: "4px",
    marginRight: "7px",
  },
  demoGraphicContent: {
    fontSize: 16,
    color: "#2f2e2e",
    marginLeft: "5px",
  },
  label: {
    fontSize: 10,
    color: "#817f7f",
  },
  headerSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    marginTop: 20,
  },
  card: {
    padding: 0,
    borderColor: "#808080",
    borderStyle: "solid",
    borderWidth: 1,
    margin: 2,
  },

  cardHeader: {
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    marginBottom: 5,
    padding: 10,
    borderColor: "#808080",
    color: "#444444",
  },

  doseContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
  },
  cardContent: {
    padding: 10,
  },
  pageContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    paddingBottom: "30px",
    marginBottom: "5px",
  },

  footerText: {
    fontSize: 6,
    color: "#808080",
  },
  headerText: {
    fontSize: 6,
    color: "#808080",
    margin: "10px",
  },
  headerRef: {
    // alignSelf: "flex-start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "10px 10px 0px 10px",
    width: "100%",
  },

  waterMark: {
    position: "absolute",
    width: "80%",
    top: "150px",
    opacity: 0.05,
  },

  cardContentAttr: {
    display: "flex",
    flexDirection: "row",
  },

  cardContentAttrRow: {
    marginLeft: "5px",
  },

  cardHeaderSubtext: {
    fontSize: 8,
    color: "#817f7f",
  },

  logoText: {
    fontSize: 30,
  },
  cardContentAttrDetail: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    alignContent: "center",
    justifyContent: "center",
    marginLeft: "5px",
  },
  boosterHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderBottom: "1px solid #808080",
    paddingHorizontal: "165px",
    backgroundColor: "rgba(27, 105, 43, 0.16)",
    color: "rgba(8, 33, 8, 1)",
  },
  boosterHeaderTitle: {
    fontSize: 18,
  },
  boosterDescription: {
    fontSize: 10,
    color: "#817f7f",
    textTransform: "capitalize",
  },
  boosterContent: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #808080",
    padding: "5px",
    paddingHorizontal: "20px",
    borderRadius: "1px",
  },
  boosterDetail: {
    fontSize: 12,
    fontWeight: "light",
    justifyContent: "center",
    alignItems: "center",
  },

  noShotsInfo: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  noShotText: {
    fontSize: "10",
    fontWeight: "bold",
    color: "#044e83",
  },
  main: {
    display: "flex",
    flexDirection: "column",
  },
  footerContainer: {
    display: "flex",
    position: "absolute",
    bottom: 0,
    borderTopStyle: "solid",
    borderTopWidth: 1,
    width: "500px",
    borderTopColor: "#808080",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "5px",
  },
});

const logoImage =
  "https://covid19.health.gov.mw/static/media/Logo.48715b7d.png";

// Create Document Component
const CertificateDocument = ({ imageUri, certificate }) => {
  const { boosterShots, dosages } = getDosages(certificate.dosageIndicators);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image src={logoImage} style={styles.waterMark} />
        <View style={styles.headerRef}>
          <Text style={styles.headerText}>
            REF:{`${certificate.epiNo}-${certificate.createdAt}`}
          </Text>
          <Text style={styles.headerText}>
            CREATED AT:{`${certificate.createdAt}`}
          </Text>
        </View>
        <View style={styles.pageContent}>
          <View style={styles.logoContainer}>
            <Image src={logoImage} style={styles.logo} />
          </View>
          <Text style={styles.logoText}>Malawi Government</Text>
          <View style={styles.headerSection}>
            <Text style={styles.title}>COVID19</Text>
            <Text style={styles.subTitle}>VACCINATION CERTIFICATE</Text>
            <Text style={styles.label}>Name:</Text>
            <Text
              style={styles.demoGraphicContent}
            >{`${certificate.firstname} ${certificate.lastname}`}</Text>
            <Text style={styles.label}>Date Of Birth:</Text>
            <Text style={styles.demoGraphicContent}>
              {certificate.birthdate}
            </Text>
          </View>
          <View style={styles.main}>
            <View style={styles.doseContainer}>
              {dosages.map((dosage) => (
                <View style={styles.card} key={dosage.dosageNumber}>
                  <View style={styles.cardHeader}>
                    <Text>{`DOSE ${dosage.dosageNumber}`}</Text>
                    <Text style={styles.cardHeaderSubtext}>
                      {`VACCINATION DATE: ${moment(
                        dosage.vaccinationDate
                      ).format("DD-MM-YYYY")}`}
                    </Text>
                  </View>
                  <View style={styles.cardContent}>
                    <View style={styles.cardContentAttr}>
                      <View style={styles.cardContentAttrDetail}>
                        <Text style={styles.label}>Name:</Text>
                        <Text style={styles.content}>{dosage.vaccineName}</Text>
                      </View>
                      <View style={styles.cardContentAttrDetail}>
                        <Text style={styles.label}>Type:</Text>
                        <Text style={styles.content}>
                          {dosage.type || "N/A"}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.cardContentAttr}>
                      <View style={styles.cardContentAttrDetail}>
                        <Text style={styles.label}>Batch:</Text>
                        <Text style={styles.content}>
                          {dosage.batchNumber || " ---"}
                        </Text>
                      </View>
                      <View style={styles.cardContentAttrDetail}>
                        <Text style={styles.label}>Site:</Text>
                        <Text style={styles.content}>
                          {dosage.vaccinationSite || "---"}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.cardContentAttr}>
                      <View style={styles.cardContentAttrDetail}>
                        <Text style={styles.label}>Batch Expiration Date:</Text>
                        <Text style={styles.content}>
                          {dosage.expirationDate || " ---"}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View>
            {boosterShots.length > 0
              ? boosterShots.map((booster, index) => {
                  return (
                    <View style={styles.card} key={index}>
                      <View style={styles.boosterHeader}>
                        <Text style={styles.boosterHeaderTitle}>
                          Booster Dose
                        </Text>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                          <Text
                            style={[
                              styles.cardHeaderSubtext,
                              { marginRight: "4px" },
                            ]}
                          >
                            {`SITE: ${booster.vaccinationSite}`}
                          </Text>
                          <Text style={styles.cardHeaderSubtext}>
                            {`DATE: ${moment(booster.vaccinationDate).format(
                              "DD-MM-YYYY"
                            )}`}
                          </Text>
                        </View>
                      </View>
                      <View style={[styles.cardContent, { padding: 0 }]}>
                        <View style={styles.boosterContent} key={index}>
                          <Text style={styles.label}>Name:</Text>
                          <Text style={styles.content}>
                            {booster.vaccineName}
                          </Text>
                          <Text style={styles.label}>Type:</Text>
                          <Text style={styles.content}>{booster.type} </Text>
                          <Text style={styles.label}>Batch Number:</Text>
                          <Text style={styles.content}>
                            {booster.batchNumber}
                          </Text>
                          <Text style={styles.label}>Expiration:</Text>
                          <Text style={styles.content}>
                            {booster.expirationDate}
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                })
              : null}
          </View>
          <Image
            src={{ uri: imageUri, method: "GET", headers: {}, body: "" }}
            style={styles.logo}
            // style={{styles.logo, marginTop: "10px" }}
          />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            www.covid19.health.mw | Digital Health Division, Department of
            Planning and Policy Development, Ministry of Health - Malawi
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default CertificateDocument;
