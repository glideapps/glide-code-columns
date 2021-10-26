import * as glide from "../glide";
import { url } from "../urls";

// TODO support more from https://api.qrserver.com/v1/create-qr-code/

const run: glide.Column = async (dataValue, sizeValue) => {
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

export default glide.column({
    name: "QR Code",
    category: "Image",
    description: "Generate QR codes",
    about: `
      Uses [goQR.me](https://goqr.me/api/)'s QR code generation API.
    `,
    video: "https://www.youtube.com/watch?v=142TGhaTMtI",
    author: "David Siegel <david@glideapps.com>",
    params: {
        content: {
            displayName: "Content",
            type: "primitive",
        },
        size: {
            displayName: "Size",
            type: "number",
        },
    },
    example: { content: "https://glideapps.com", size: 250 },
    result: { type: "image-uri" },
    run,
    icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2H2V16H16V2ZM14 14H4V4H14V14Z" fill="currentColor"/>
      <path d="M31 42H29V46H46V44H31V42Z" fill="currentColor"/>
      <path d="M12 6H6V12H12V6Z" fill="currentColor"/>
      <path d="M2 46H16V32H2V46ZM4 34H14V44H4V34Z" fill="currentColor"/>
      <path d="M12 36H6V42H12V36Z" fill="currentColor"/>
      <path d="M32 2V16H46V2H32ZM44 14H34V4H44V14Z" fill="currentColor"/>
      <path d="M42 6H36V12H42V6Z" fill="currentColor"/>
      <path d="M46 18H42V22H46V18Z" fill="currentColor"/>
      <path d="M6 26H2V30H6V26Z" fill="currentColor"/>
      <path d="M23 18H15V20H25V16V14H27V10H25H23H21V6H23V8H30V2H28V6H25V2H24H20H19V12H23V14H19V16H23V18Z" fill="currentColor"/>
      <path d="M5 24H9H11H12V26H8V28H12V30H20V28H14V26V22H11V19H9V22H7V18H2V20H5V24Z" fill="currentColor"/>
      <path d="M24 42V37H20V33H18V39H22V42H18V44H22V46H27V44H24V42Z" fill="currentColor"/>
      <path d="M34 22H30V17H28V24H38V22H36V20H39V18H36H34H32V20H34V22Z" fill="currentColor"/>
      <path d="M32 40H35V42H39V40V38V35H35V38H32V35H30V38H28V30H26V28H24V22H17V26H19V24H22V28V32H26V38V40H28H30H32Z" fill="currentColor"/>
      <path d="M44 27H41H39H34V31H32V27H30V33H36V29H39V32H41V29H44V35H41V41H46V39H43V37H46V29V27V24H44V27Z" fill="currentColor"/>
      </svg>
      `,
});
