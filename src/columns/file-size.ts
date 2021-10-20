import * as glide from "../glide";

import Humanize from "humanize-plus";

export default glide
  .columnNamed("File Size", "Number")
  .withDescription(
    `Formats the value like a 'human-readable' file size (i.e. '13 KB', '4.1 MB', '102 bytes', etc).`
  )
  .withAuthor("HubSpot", "https://github.com/HubSpot/humanize")
  .withStringResult()
  .withRequiredNumberParam("fileSize")
  .withExample({ fileSize: 1024 * 2000 })
  .run(({ fileSize }) => Humanize.fileSize(fileSize));
