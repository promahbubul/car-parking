/* eslint-disable react/prop-types */
import { Text, View } from "@react-pdf/renderer";
import styles from "../styles";

const TableData = ({ th, td, border }) => {
  return (
    <View style={[styles.tr, border && border]}>
      <Text style={styles.th}>{th}: </Text>
      <Text style={styles.td}>{td}</Text>
    </View>
  );
};
export default TableData;
