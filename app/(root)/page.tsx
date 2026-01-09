import React from 'react'
import Hello from "@/Components/hello";

export default function Page() {
    throw new Error("This is a test error from page.tsx");
    return (
        <main>
        <div>Page</div>
       <Hello />
        </main>
    )
}
