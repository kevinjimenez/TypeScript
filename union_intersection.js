function networkStatus(state) {
    // Right now TypeScript does not know which of the three
    // potential types state could be.
    // Trying to access a property which isn't shared
    // across all types will raise an error
    // => error    state.code;
    // By switching on state, TypeScript can narrow the union
    // down in code flow analysis
    switch (state.state) {
        case "loading":
            return "Downloading...";
        case "failed":
            // The type must be NetworkFailedState here,
            // so accessing the `code` field is safe
            return "Error " + state.code + " downloading";
        case "success":
            return "Downloaded " + state.response.title + " - " + state.response.summary;
    }
}
var handleArtistsResponse = function (response) {
    if (response.error) {
        console.error(response.error.message);
        return;
    }
    console.log(response.artists);
};
