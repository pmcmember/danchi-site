module.exports = {
    input: "./src/api", // "input" of aspida is "output" for openapi2aspida
    outputEachDir: true, // Generate $api.ts in each endpoint directory
    openapi: { inputFile: "https://shigeyuki-nakano.github.io/danchi-api/openapi/dist/v1/openapi.json" }
}