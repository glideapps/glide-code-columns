import { Column } from "../glide.next";

const EchoColumn = () => (
  <Column
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
  >
    {async (message) => {
      if (message.value === undefined) {
        return undefined;
      }
      return `echo ${message.value}`;
    }}
  </Column>
);

export default EchoColumn;
