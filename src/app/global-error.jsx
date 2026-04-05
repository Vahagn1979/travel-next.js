"use client";

export default function GlobalError({ error, reset }) {
    return (
        <html>
        <body>
        <h2>Global error occurred</h2>
        <button onClick={() => reset()}>Reload</button>
        </body>
        </html>
    );
}