import { Column, ColumnComponent } from "../glide.next";
import { url } from "../urls";

// TODO support more from https://www.ruggedtabletpc.com/barcode-generator

enum Symbology {
  UPC_A = "UPC_A",
}

const run: Column = async (dataValue, sizeValue) => {
  const { value: content } = dataValue;
  const { value: size = 500 } = sizeValue;

  if (content === undefined) {
    return undefined;
  }

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
    params={{
      content: {
        displayName: "Content",
        type: "primitive",
      },
      size: {
        displayName: "Size",
        type: "number",
      },
    }}
    example={{ content: 12345678910, size: 250 }}
    result={{ type: "image-uri" }}
    run={run}
  />
);

export default BarcodeColumn;
