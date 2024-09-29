/* eslint-disable react/prop-types */
import { Text, View } from "@react-pdf/renderer";
import styles from "../styles";

const CompanyInformation = ({ sn }) => {
  return (
    <View style={styles.companyInfo}>
      <Text style={styles.headingTitle}>Car Parking</Text>
      <Text>#ID: {sn}</Text>
    </View>
  );
};
export default CompanyInformation;
