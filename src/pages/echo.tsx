import * as glide from "../glide.next";

export default glide.column(async (message) => {
  if (message.value === undefined) {
    return undefined;
  }
  return `echo ${message.value}`;
});
