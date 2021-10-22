import * as glide from "../glide";

import validator from "email-validator";

export default glide
  .columnNamed("Email Validator")
  .withCategory("Text")
  .withDescription(`Indicates whether text is an email.`)
  .withBooleanResult()
  .withStringParam("email")
  .withTest({ email: `hello@world.co` }, true)
  .run(({ email }) => email !== undefined && validator.validate(email));
