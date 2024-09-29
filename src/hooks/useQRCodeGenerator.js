import { useState, useEffect } from "react";

function useQRCode(text, size) {
  const [qrCodeImage, setQRCodeImage] = useState(null);

  useEffect(() => {
    const generatedQRCode = generateQRCode(text, size);
    setQRCodeImage(generatedQRCode);
  }, [text, size]);

  return qrCodeImage;
}

function generateQRCode(text, size) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Generate the QR code using a QR code library (e.g., jsQR)
  // Replace this with your preferred QR code library
  const qr = new QRCode(document.getElementById("qrcode"), {
    text: text,
    width: canvas.width,
    height: canvas.height,
  });

  // Draw the QR code on the canvas
  qr.draw();

  // Convert the canvas to a data URL
  const qrCodeImage = canvas.toDataURL();

  return qrCodeImage;
}
