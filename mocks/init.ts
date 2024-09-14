if (process.env.NODE_ENV === "development") {
  import("./node")
    .then((module) => {
      module?.server?.listen();
    })
    .catch((error) => {
      console.error("Failed to import mock server:", error);
    });
}


