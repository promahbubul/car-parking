/* eslint-disable react/prop-types */
import { Image, View } from "@react-pdf/renderer";
import styles from "../styles";

const QRCodeSection = ({ img }) => {
  return (
    <View style={styles.qrSection}>
      <Image src={img} style={styles.qrCodeImage} />
    </View>
  );
};
export default QRCodeSection;
