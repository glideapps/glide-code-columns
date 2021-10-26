import * as glide from "../glide";

export default glide
  .columnNamed("Text Offset")
  .withCategory("Text")
  .withDescription(`Gets the zero-based offset of the zero-based N-th occurence of needle in haystack`)
  .withNumberResult()
  .withRequiredStringParam("haystack")
  .withRequiredStringParam("needle")
  .withNumberParam("nth")
  // Simple 1 entry test
  .withTest({ haystack: "there is one @ here", needle: "@" }, 13)
  .withTest({ haystack: "there is one @ here", needle: "@", nth: 0 }, 13)
  .withTest({ haystack: "there is one @ here", needle: "@", nth: 1 }, undefined)
  .withTest({ haystack: "there is one @ here", needle: "@", nth: 2 }, undefined)
  .withTest({ haystack: "there is one @ here", needle: "@", nth: -1 }, 13)
  .withTest({ haystack: "there is one @ here", needle: "@", nth: -2 }, undefined)
  // No entry test
  .withTest({ haystack: "But none here", needle: "@" }, undefined)
  .withTest({ haystack: "But none here", needle: "@", nth: -2 }, undefined)
  .withTest({ haystack: "But none here", needle: "@", nth: -1 }, undefined)
  .withTest({ haystack: "But none here", needle: "@", nth: 0 }, undefined)
  .withTest({ haystack: "But none here", needle: "@", nth: 1 }, undefined)
  .withTest({ haystack: "But none here", needle: "@", nth: 2 }, undefined)
  // Two entry test
  .withTest({ haystack: "there are two @ here in @ and there", needle: "@", nth: -3 }, undefined)
  .withTest({ haystack: "there are two @ here in @ and there", needle: "@", nth: -2 }, 14)
  .withTest({ haystack: "there are two @ here in @ and there", needle: "@", nth: -1 }, 24)
  .withTest({ haystack: "there are two @ here in @ and there", needle: "@", nth: 0 }, 14)
  .withTest({ haystack: "there are two @ here in @ and there", needle: "@", nth: 1 }, 24)
  .withTest({ haystack: "there are two @ here in @ and there", needle: "@", nth: 2 }, undefined)
  .withTest({ haystack: "there are two @ here in @ and there", needle: "@", nth: 3 }, undefined)
  // Two entry in the middle
  .withTest({ haystack: "@ but there's one in the front @ and middle", needle: "@", nth: -3 }, undefined)
  .withTest({ haystack: "@ but there's one in the front @ and middle", needle: "@", nth: -2 }, 0)
  .withTest({ haystack: "@ but there's one in the front @ and middle", needle: "@", nth: -1 }, 31)
  .withTest({ haystack: "@ but there's one in the front @ and middle", needle: "@", nth: 0 }, 0)
  .withTest({ haystack: "@ but there's one in the front @ and middle", needle: "@", nth: 1 }, 31)
  .withTest({ haystack: "@ but there's one in the front @ and middle", needle: "@", nth: 2 }, undefined)
  .withTest({ haystack: "@ but there's one in the front @ and middle", needle: "@", nth: 3 }, undefined)
  // Three, front and back
  .withTest({ haystack: "@ and we want @ the second @", needle: "@" }, 0)
  .withTest({ haystack: "@ and we want @ the second @", needle: "@", nth: 1 }, 14)
  .withTest({ haystack: "@ and we want @ the second @", needle: "@", nth: 2 }, 27)
  .withTest({ haystack: "@ and we want @ the second @", needle: "@", nth: -1 }, 27)
  .withTest({ haystack: "@ and we want @ the second @", needle: "@", nth: -2 }, 14)
  .withTest({ haystack: "@ and we want @ the second @", needle: "@", nth: -3 }, 0)
  .withTest({ haystack: "@ and we want @ the second @", needle: "@", nth: -4 }, undefined)
  // Longer numbers
  .withTest({ haystack: "and == we can do == long == numbers ==", needle: "==" }, 4)
  .withTest({ haystack: "and == we can do == long == numbers ==", needle: "==", nth: 1 }, 17)
  .withTest({ haystack: "and == we can do == long == numbers ==", needle: "==", nth: 2 }, 25)
  .run(({ needle, haystack, nth }) => {
    let runs = Math.floor(nth ?? 0), foundIndex = -1;

    if (runs < 0) {
      runs = -runs;
      foundIndex = haystack.length;
      for (let i = 0; i < runs; i++) {
        haystack = haystack.substring(0, foundIndex);
        foundIndex = haystack.lastIndexOf(needle);
        if (foundIndex < 0) break;
      }
    } else {
      runs++;
      let accumIndex = 0;

      for (let i = 0; i < runs; i++) {
        haystack = haystack.substring(foundIndex + 1);
        foundIndex = haystack.indexOf(needle);
        if (foundIndex < 0) {
          accumIndex = -1;
          break;
        }
        accumIndex += i === 0 ? foundIndex : foundIndex + 1;
      }
      foundIndex = accumIndex;
    }
    return foundIndex < 0 ? undefined : foundIndex;
  });
