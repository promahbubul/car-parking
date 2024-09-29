import { Font, StyleSheet } from "@react-pdf/renderer";
import gowunBatang from "../../assets/fonts/GowunBatang-Regular.ttf";
import gowunBatangBold from "../../assets/fonts/GowunBatang-Bold.ttf";

Font.register({
  family: "GowunBatang",
  fonts: [
    {
      src: gowunBatang, // Regular font
      fontWeight: 400,
    },
    {
      src: gowunBatangBold, // Bold font
      fontWeight: 700,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  section: {
    //   fontFamily: "arial",
    margin: 10,
    // padding: 10,
    flexGrow: 1,
    border: "1.2px solid #00cdb8",
    borderRadius: 5,
  },
  companyInfo: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: "#00cdb8",

    color: "white",
    padding: 10,
    fontSize: "20px",
    textAlign: "center",
    fontFamily: "GowunBatang",
    fontWeight: 700,
  },
  headingTitle: {
    borderBottom: "1px solid white",
    paddingBottom: "5px",
    marginBottom: "5px",

    fontWeight: 700,
  },
  parkingInformation: {
    marginTop: "20px",
    marginHorizontal: 10,
  },
  tr: {
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px dotted #00cdb8",
    fontSize: "10px",
    alignItems: "center",
    borderLeft: "1px dotted #00cdb8",
    borderRight: "1px dotted #00cdb8",
  },
  th: {
    padding: "5px",
    width: "30%",
    fontFamily: "GowunBatang",
    fontWeight: 700,
  },
  td: {
    width: "70%",
    borderLeft: "1px dotted #00cdb8",

    padding: "5px",
    fontFamily: "GowunBatang",
    fontWeight: 400,
  },
  qrCodeImage: {
    padding: 5,
    width: 80,
    height: 80,
    border: "0.7px solid #00cdb8",
  },
  topSection: {
    flex: 3,
  },
  qrSection: {
    margin: "auto",
    flex: 1,
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
