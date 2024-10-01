import { Page, View, Document, PDFViewer } from "@react-pdf/renderer";
import { useLoaderData, useNavigate } from "react-router-dom";
import styles from "./styles";
import QRCode from "qrcode";
import { useEffect, useState } from "react";
import ParkingInformation from "./ParkingInformation";
import QRCodeSection from "./QRcodeSection";
import CompanyInformation from "./CompanyInformation";

const Invoice = () => {
  const { data } = useLoaderData();
  const navigate = useNavigate();
  const [qrImage, setQrImage] = useState("");

  // const data1 = { name: "Akib", email: "akib@gmail.com" };

  // Handle Back
  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    var opts = {
      errorCorrectionLevel: "H",
      type: "image/jpeg",
      quality: 0.3,
      margin: 1,
      color: {
        dark: "#00cdb8",
        // light: "#00ff00",
      },
    };
    QRCode.toDataURL(
      `https://pro-car-parking.vercel.app/check-invoice/${data?._id}`,
      opts,
      function (err, url) {
        if (err) return console.error(err);
        setQrImage(url);
      }
    );
  }, []);
  return (
    <div className="h-full">
      <div className="mb-5">
        <button onClick={handleBack} className="btn btn-md btn-accent">
          Back
        </button>
      </div>
      <PDFViewer height={"100%"} className="h-[calc(100%-68px)] w-full">
        <Document
          author={"Car Parking"}
          subject={`${data?.sn}`}
          title={`${data?.carName} - #ID: ${data?.sn}`}
          language="English"
          producer="Mahbubul Alam"
          creator={"Mahbubul Alam"}
          keywords="Car Parking System"
        >
          <Page size="A6" style={styles.page}>
            <View style={styles.section}>
              {/* Information Section */}
              <View style={styles.topSection}>
                {/* Company Info */}
                <CompanyInformation sn={data?.sn} />
                {/* Parking Info */}
                <ParkingInformation {...data} />
              </View>
              {/* QR Code Section */}
              <QRCodeSection img={qrImage} />
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};
export default Invoice;
