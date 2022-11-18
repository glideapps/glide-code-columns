import * as glide from "../glide";

const run: glide.Column = (k1, v1, k2, v2, k3, v3) => {
    const obj: any = {};

    if (k1.value !== undefined) {
        obj[k1.value.toString()] = v1.value;
    }

    if (k2.value !== undefined) {
        obj[k2.value.toString()] = v2.value;
    }

    if (k3.value !== undefined) {
        obj[k3.value.toString()] = v3.value;
    }

    return JSON.stringify(obj);
};

export default glide.column({
    name: "Make JSON Object",
    category: "Code",
    released: "direct",
    description: "Returns a JSON Object String",
    author: "Ian Leatherbury <ian@glideapps.com>",    
    params: {
        k1: {
            displayName: "k1",
            type: "string",
        },
        v1: {
            displayName: "v1",
            type: "primitive",
        },
        k2: {
            displayName: "k2",
            type: "string",
        },
        v2: {
            displayName: "v2",
            type: "primitive",
        },
        k3: {
            displayName: "k3",
            type: "string",
        },
        v3: {
            displayName: "v3",
            type: "primitive",
        },
    },
    example: {
        k1: `no-code`,
        v1: 5,
    },
    result: { type: "primitive" },
    run,
    tests: [
        { params: {}, expectedResult: "{}" },
        {
            params: { k1: "foo", v1: "bar" },
            expectedResult: `{"foo":"bar"}`,
        },
    ],
    icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M34.4381 11.774C34.1931 11.474 33.9761 11.205 33.7931 10.968C33.6822 10.8233 33.5338 10.7117 33.3641 10.6452C33.1943 10.5787 33.0096 10.5599 32.8299 10.5908C32.6502 10.6217 32.4824 10.7011 32.3446 10.8205C32.2068 10.9398 32.1043 11.0946 32.0481 11.268C31.4977 12.9485 30.6607 14.521 29.5741 15.916C29.6381 11.944 28.8511 4.93503 23.0951 1.16003C22.944 1.06079 22.7688 1.00435 22.5882 0.996737C22.4076 0.989122 22.2283 1.03061 22.0693 1.11679C21.9104 1.20296 21.7779 1.3306 21.6857 1.48613C21.5936 1.64166 21.5453 1.81926 21.5461 2.00003C21.5461 5.27603 19.7911 8.76703 16.7401 11.575C13.7881 14.293 6.92906 21.476 7.00006 29.433C7.05006 34.973 9.87106 42.633 17.0271 45.674C17.1341 42.197 18.6511 39.728 20.1351 37.348C21.5451 35.084 22.8781 32.948 23.0001 29.959C23.0077 29.7673 23.0703 29.5819 23.1805 29.4248C23.2906 29.2677 23.4436 29.1456 23.6213 29.073C23.7989 29.0005 23.9936 28.9806 24.1823 29.0157C24.3709 29.0508 24.5454 29.1395 24.6851 29.271C28.7181 33.071 30.8791 38.701 30.9851 45.571C36.1181 43.382 40.3221 38.611 40.9421 30.85C41.7431 20.771 36.8091 14.694 34.4381 11.774Z" fill="currentColor"/>
    </svg>
    `,
});
