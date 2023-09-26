import * as glide from "../glide";

const run: glide.Column = (
    k1,
    v1,
    k2,
    v2,
    k3,
    v3,
    k4,
    v4,
    k5,
    v5,
    k6,
    v6,
    k7,
    v7,
    k8,
    v8,
    k9,
    v9,
    k10,
    v10,
    k11,
    v11,
    k12,
    v12
) => {
    const obj: any = {};

    if (k1?.value !== undefined) {
        obj[k1.value.toString()] = v1?.value;
    }

    if (k2?.value !== undefined) {
        obj[k2.value.toString()] = v2?.value;
    }

    if (k3?.value !== undefined) {
        obj[k3.value.toString()] = v3?.value;
    }

    if (k4?.value !== undefined) {
        obj[k4.value.toString()] = v4?.value;
    }

    if (k5?.value !== undefined) {
        obj[k5.value.toString()] = v5?.value;
    }

    if (k6?.value !== undefined) {
        obj[k6.value.toString()] = v6?.value;
    }

    if (k7?.value !== undefined) {
        obj[k7.value.toString()] = v7?.value;
    }

    if (k8?.value !== undefined) {
        obj[k8.value.toString()] = v8?.value;
    }

    if (k9?.value !== undefined) {
        obj[k9.value.toString()] = v9?.value;
    }

    if (k10?.value !== undefined) {
        obj[k10.value.toString()] = v10?.value;
    }

    if (k11?.value !== undefined) {
        obj[k11.value.toString()] = v11?.value;
    }
    if (k12?.value !== undefined) {
        obj[k12.value.toString()] = v12?.value;
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
        k4: {
            displayName: "k4",
            type: "string",
        },
        v4: {
            displayName: "v4",
            type: "primitive",
        },
        k5: {
            displayName: "k5",
            type: "string",
        },
        v5: {
            displayName: "v5",
            type: "primitive",
        },
        k6: {
            displayName: "k6",
            type: "string",
        },
        v6: {
            displayName: "v6",
            type: "primitive",
        },
        k7: {
            displayName: "k7",
            type: "string",
        },
        v7: {
            displayName: "v7",
            type: "primitive",
        },
        k8: {
            displayName: "k8",
            type: "string",
        },
        v8: {
            displayName: "v8",
            type: "primitive",
        },
        k9: {
            displayName: "k9",
            type: "string",
        },
        v9: {
            displayName: "v9",
            type: "primitive",
        },
        k10: {
            displayName: "k10",
            type: "string",
        },
        v10: {
            displayName: "v10",
            type: "primitive",
        },
        k11: {
            displayName: "k11",
            type: "string",
        },
        v11: {
            displayName: "v11",
            type: "primitive",
        },
        k12: {
            displayName: "k12",
            type: "string",
        },
        v12: {
            displayName: "v12",
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
            params: { k1: "key1", v1: "val1" },
            expectedResult: `{"key1":"val1"}`,
        },
        {
            params: { k2: "key2", v2: "val2" },
            expectedResult: `{"key2":"val2"}`,
        },
        {
            params: { k3: "key3", v3: "val3" },
            expectedResult: `{"key3":"val3"}`,
        },
        {
            params: { k4: "key4", v4: "val4" },
            expectedResult: `{"key4":"val4"}`,
        },
        {
            params: { k5: "key5", v5: "val5" },
            expectedResult: `{"key5":"val5"}`,
        },
        {
            params: { k6: "key6", v6: "val6" },
            expectedResult: `{"key6":"val6"}`,
        },
        {
            params: { k7: "key7", v7: "val7" },
            expectedResult: `{"key7":"val7"}`,
        },
        {
            params: { k8: "key8", v8: "val8" },
            expectedResult: `{"key8":"val8"}`,
        },
        {
            params: { k9: "key9", v9: "val9" },
            expectedResult: `{"key9":"val9"}`,
        },
        {
            params: { k10: "key10", v10: "val10" },
            expectedResult: `{"key10":"val10"}`,
        },
        {
            params: { k11: "key11", v11: "val11" },
            expectedResult: `{"key11":"val11"}`,
        },
        {
            params: { k12: "key12", v12: "val12" },
            expectedResult: `{"key12":"val12"}`,
        }
    ],
    icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M34.4381 11.774C34.1931 11.474 33.9761 11.205 33.7931 10.968C33.6822 10.8233 33.5338 10.7117 33.3641 10.6452C33.1943 10.5787 33.0096 10.5599 32.8299 10.5908C32.6502 10.6217 32.4824 10.7011 32.3446 10.8205C32.2068 10.9398 32.1043 11.0946 32.0481 11.268C31.4977 12.9485 30.6607 14.521 29.5741 15.916C29.6381 11.944 28.8511 4.93503 23.0951 1.16003C22.944 1.06079 22.7688 1.00435 22.5882 0.996737C22.4076 0.989122 22.2283 1.03061 22.0693 1.11679C21.9104 1.20296 21.7779 1.3306 21.6857 1.48613C21.5936 1.64166 21.5453 1.81926 21.5461 2.00003C21.5461 5.27603 19.7911 8.76703 16.7401 11.575C13.7881 14.293 6.92906 21.476 7.00006 29.433C7.05006 34.973 9.87106 42.633 17.0271 45.674C17.1341 42.197 18.6511 39.728 20.1351 37.348C21.5451 35.084 22.8781 32.948 23.0001 29.959C23.0077 29.7673 23.0703 29.5819 23.1805 29.4248C23.2906 29.2677 23.4436 29.1456 23.6213 29.073C23.7989 29.0005 23.9936 28.9806 24.1823 29.0157C24.3709 29.0508 24.5454 29.1395 24.6851 29.271C28.7181 33.071 30.8791 38.701 30.9851 45.571C36.1181 43.382 40.3221 38.611 40.9421 30.85C41.7431 20.771 36.8091 14.694 34.4381 11.774Z" fill="currentColor"/>
    </svg>
    `,
});
