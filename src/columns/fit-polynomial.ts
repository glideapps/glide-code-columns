import * as glide from "../glide";

// Max order of the polynomial to make.
// This should prevent it getting insanely slow.
const LIMIT = 50;

export default glide
    .columnNamed("Interpolate (Polynomial)")
    .withCategory("Number")
    .withDescription(`Given some example points, interpolate the value for an input. This uses a polynomial to exactly fit all the given example points.`)
    .withNumberResult()
    .withRequiredNumberParam("input", "Input")
    .withNumberArrayParam("fit_inputs", "Example Inputs")
    .withNumberArrayParam("fit_outputs", "Example Outputs")

    // linear
    .withTest({ fit_inputs: [0, 1], fit_outputs: [0, 10], input: 0.5}, 5)
    // quadratic
    .withTest({ fit_inputs: [2, 0, 5], fit_outputs: [3, -1, -6], input: 4}, -1)
    // something crazy
    .withTest({
        fit_inputs: [991, 899, 362, 414, 870, 321, 559, 548, 350, 190],
        fit_outputs: [649, 581, 204, 676, 286, 224, 454, 132, 576, 204],
        input: 500
    }, 2236.926853369928)

    .run(({ input, fit_inputs, fit_outputs }) => {
        if (fit_inputs === undefined || fit_outputs === undefined) {
            return undefined;
        }
        const n = fit_inputs.length;
        if (fit_outputs.length !== n) {
            return undefined;
        }
        if (n < 2 || n > LIMIT) {
            return undefined;
        }
        // Neville's Algorithm
        // http://practicalcryptography.com/miscellaneous/machine-learning/fitting-polynomial-set-points/
        const x = fit_inputs;
        const y = [...fit_outputs];
        for (let m = 1; m < n; m++) {
            for (let i = 0; i < n-m; i++) {
                y[i] = ( (input-x[i+m]) * y[i] + (x[i]-input) * y[i+1] ) / (x[i]-x[i+m]);
            }
        }
        return y[0];
    });
