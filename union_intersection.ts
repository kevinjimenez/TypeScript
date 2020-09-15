// UNION
// puede ser la union de 2 tipos con el caracter "|"
// ex: strng | number | etc....
// UNION DE CAMPOS COMUNES
interface ave {
    vuelo(): void;
    huevos(): void;
}

interface pescado {
    nadar(): void;
    huevos(): void;
}

declare function obtenerMascotaPequena(): ave | pescado;

// let pet = obtenerMascotaPequena.nadar(); // => solo metodos comunes

// UNION DE DISCRIMINACION
type NetworkLoadingState = {
    state: "loading";
};

type NetworkFailedState = {
    state: "failed";
    code: number;
};

type NetworkSuccessState = {
    state: "success";
    response: {
        title: string;
        duration: number;
        summary: string;
    };
};

// Create a type which represents only one of the above types
// but you aren't sure which it is yet.
type NetworkState =
    | NetworkLoadingState
    | NetworkFailedState
    | NetworkSuccessState;

function networkStatus(state: NetworkState): string {
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
            return `Error ${state.code} downloading`;
        case "success":
            return `Downloaded ${state.response.title} - ${state.response.summary}`;
    }
}

// INTERSECCION DE TIPOS
interface ErrorHandling {
    success: boolean;
    error?: { message: string };
  }
  
  interface ArtworksData {
    artworks: { title: string }[];
  }
  
  interface ArtistsData {
    artists: { name: string }[];
  }
  
  // These interfaces are composed to have
  // consistent error handling, and their own data.
  
  type ArtworksResponse = ArtworksData & ErrorHandling;
  type ArtistsResponse = ArtistsData & ErrorHandling;
  
  const handleArtistsResponse = (response: ArtistsResponse) => {
    if (response.error) {
      console.error(response.error.message);
      return;
    }
  
    console.log(response.artists);
  };