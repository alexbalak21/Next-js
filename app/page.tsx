import Link from "next/link"

export default function Home() {
    return (
        <main>
            <h1>Home</h1>
            <Link href="/services">Services</Link> <br />
            <Link href="/products">Products</Link> <br />
            <Link href="/users">Users</Link> <br />
        </main>
    )
}
