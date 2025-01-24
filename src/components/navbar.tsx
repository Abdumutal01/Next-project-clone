"use client"

import { useRouter } from "next/navigation"

function Navbar() {
    const router = useRouter()
    return (
        <div className="navbar">

            <button onClick={() => router.push("/")}>
                Home
            </button>
            <button onClick={() => router.push("/about")}>
                About
            </button>
            <button onClick={() => router.push("/contact")}>
                Contact
            </button>
        </div>
    )
}

export default Navbar