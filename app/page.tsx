import React from 'react'
import Hello from "@/Components/hello";

export default function Page() {
    console.log("Hello RootLayout");
    return (
        <main>
        <div>Page</div>
       <Hello />
        </main>
    )
}
