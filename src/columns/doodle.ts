import * as glide from "../glide";

// TODO support more of https://doodleipsum.com/ API

const run: glide.Column = async (sizeValue, categoryValue, randomSeed) => {
    const { value: size = 600 } = sizeValue;
    const { value: seed = "1" } = randomSeed;
    let { value: category = "" } = categoryValue;
    if (category === "random") {
        category = "";
    }

    return `https://doodleipsum.com/${size}/${category}?n=${encodeURIComponent(seed)}`;
};

export default glide.column({
    name: "Doodle Ipsum",
    category: "Image",
    description: "Generate random illustrations from data",
    video: "https://www.youtube.com/watch?v=kvUU1N-B_Ok",
    about: `
      [Doodle Ipsum](https://doodleipsum.com) is the *lorem ipsum* of illustrations. Learn more at [doodleipsum.com](https://doodleipsum.com).
    `,
    author: "David Siegel <david@glideapps.com>",
    params: {
        size: {
            displayName: "Size",
            type: "number",
        },
        category: {
            displayName: "Category (random|flat|hand-drawn|outline|abstract|avatar)",
            type: "string",
        },
        random: {
            displayName: "Random Seed",
            type: "primitive",
        },
    },
    example: { size: 200, category: "avatar", random: 42 },
    result: { type: "image-uri" },
    run,
    icon: `
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M37 26C42.5228 26 47 21.5228 47 16C47 10.4772 42.5228 6 37 6C31.4772 6 27 10.4772 27 16C27 21.5228 31.4772 26 37 26Z" fill="currentColor"/>
        <path d="M27 27H11C10.4477 27 10 27.4477 10 28V44C10 44.5523 10.4477 45 11 45H27C27.5523 45 28 44.5523 28 44V28C28 27.4477 27.5523 27 27 27Z" fill="currentColor"/>
        <path d="M3.99981 21H21.9998C22.1768 21 22.3506 20.9529 22.5035 20.8638C22.6564 20.7746 22.7829 20.6464 22.87 20.4923C22.9572 20.3383 23.0019 20.1639 22.9995 19.9869C22.9972 19.8099 22.948 19.6367 22.8568 19.485L13.8568 4.48498C13.7612 4.34597 13.6333 4.23229 13.484 4.15375C13.3347 4.07522 13.1685 4.03418 12.9998 4.03418C12.8311 4.03418 12.6649 4.07522 12.5156 4.15375C12.3663 4.23229 12.2384 4.34597 12.1428 4.48498L3.14281 19.485C3.05166 19.6367 3.00241 19.8099 3.00009 19.9869C2.99777 20.1639 3.04246 20.3383 3.12961 20.4923C3.21675 20.6464 3.34323 20.7746 3.49611 20.8638C3.649 20.9529 3.82281 21 3.99981 21Z" fill="currentColor"/>
      </svg>
    `,
});
