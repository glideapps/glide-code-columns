import * as glide from "../glide";
import sha256 from "crypto-js/sha256"
import HexEncoding from "crypto-js/enc-hex";

export default glide
  .columnNamed("SHA256 Hash")
  .withCategory("Cryptography")
  .withDescription(`The SHA256 column takes a string value and returns the 256 length string hash.`)
  .withAbout(`The SHA256 column provides the ability to return a 256 length hash of any input according to the SHA256 algorithm`)
  .withStringResult()
  .withRequiredStringParam("input")
  .withTest({ input: "Hello!" }, "334d016f755cd6dc58c53a86e183882f8ec14f52fb05345887c8a5edd42c87b7")
  .withTest({ input: "This message shall be encoded :)" }, "7bf414a8b9742ae0c685f7a5a0c383f7a82ff89ad010000c5dbad79be1ff6118")

  .run(({ input }) => sha256(input).toString(HexEncoding));
