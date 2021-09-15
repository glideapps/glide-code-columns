import { Column, ColumnComponent } from "../glide.next";

const run: Column = async (message) => {
  if (message.value === undefined) {
    return undefined;
  }
  return `echo ${message.value}`;
};

const EchoColumn = () => (
  <ColumnComponent
    name="Echo Column"
    description="Echo what you send it"
    author="David Siegel <david@glideapps.com>"
    params={[
      {
        name: "message",
        displayName: "Message",
        type: "primitive",
      },
    ]}
    result={{ type: "string" }}
    run={run}
  />
);

export default EchoColumn;
