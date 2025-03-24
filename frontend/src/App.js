import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import MyComponent from "./components/MyComponent";
import ErrorFallback from "./components/ErrorFallback";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
        <MyComponent />
    </ErrorBoundary>
  );
}

export default App;
