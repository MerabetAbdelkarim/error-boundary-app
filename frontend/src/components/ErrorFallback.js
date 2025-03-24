import React from "react";

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div style={{ color: "red", padding: "20px", border: "1px solid red" }}>
            <h2>Something went wrong!</h2>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Try Again</button>
        </div>
    );
}

export default ErrorFallback;
