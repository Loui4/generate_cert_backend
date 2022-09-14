var QRCode = require("qrcode");

const generateQR = async (signature) => {
  try {
    return await QRCode.toDataURL(
      `https://covid19.health.gov.mw/covax/validate-certificate?sg=${signature}`
    );
  } catch (err) {
    console.error(err);
  }
};

export default generateQR;
