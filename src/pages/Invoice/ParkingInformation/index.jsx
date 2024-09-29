/* eslint-disable react/prop-types */
import { View } from "@react-pdf/renderer";
import styles from "../styles";
import TableData from "./TableData";

const ParkingInformation = ({ carName, carNumber, owner, phone, address }) => {
  
  return (
    <View style={styles.parkingInformation}>
      <TableData
        th={"Car Name"}
        td={carName}
        border={{ borderTop: "1px dotted #00cdb8" }}
      />
      <TableData th={"Car Number"} td={carNumber} />
      <TableData th={"Owner"} td={owner} />
      <TableData th={"Phone"} td={phone} />
      <TableData th={"Address"} td={address} />
    </View>
  );
};
export default ParkingInformation;
