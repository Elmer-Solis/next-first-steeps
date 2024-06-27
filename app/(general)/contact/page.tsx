import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Elmer',
    description: 'contact',
    keywords: ['meta', 'contact']
};

const ContactPage = () => {
    return (
        <h2 className="text-4xl">ContactPage</h2>
    )
}

export default ContactPage