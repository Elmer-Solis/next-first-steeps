import type { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Elmer',
    description: 'about page',
    keywords: ['meta', 'About']
};


export default function AboutPage() {
    return (
        <span className="text-7xl" >About Page</span>
    )
}
