import { Column, ColumnComponent } from "../glide.next";
import { url } from "../urls";

// TODO support more from https://api.qrserver.com/v1/create-qr-code/

const run: Column = async (dataValue, sizeValue) => {
  const { value: data } = dataValue;
  const { value: size = 500 } = sizeValue;

  if (data === undefined) {
    return undefined;
  }

  return url(`https://api.qrserver.com/v1/create-qr-code/`, {
    data,
    size: `${size}x${size}`,
    margin: 0,
  });
};

const QRCodeColumn = () => (
  <ColumnComponent
    name="QR Code"
    description="Generate QR codes with https://api.qrserver.com/v1/create-qr-code/"
    author="David Siegel <david@glideapps.com>"
    params={[
      {
        name: "content",
        displayName: "Content",
        type: "primitive",
      },
      {
        name: "size",
        displayName: "Size",
        type: "number",
      },
    ]}
    result={{ type: "image-uri" }}
    run={run}
  />
);

export default QRCodeColumn;
