import { Column, ColumnComponent } from "../glide.next";
import { url } from "../urls";

// TODO support more from https://www.ruggedtabletpc.com/barcode-generator

enum Symbology {
  UPC_A = "UPC_A",
}

const run: Column = async (dataValue, sizeValue) => {
  const { value: size = 600 } = sizeValue;
  const { value: content = "1" } = dataValue;

  return url(`https://mobiledemand-barcode.azurewebsites.net/barcode/image`, {
    content,
    size,
    symbology: Symbology.UPC_A,
    format: "png",
    text: true,
  });
};

const BarcodeColumn = () => (
  <ColumnComponent
    name="Barcode"
    description="Generate barcodes with https://www.ruggedtabletpc.com/barcode-generator"
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

export default BarcodeColumn;
