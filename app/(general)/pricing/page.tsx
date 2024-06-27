import type { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Page Elmer',
    description: 'page',
    keywords: ['Meta', 'price']
};


const PricingPage = () => {
    return (
        <h1 className="text-5xl" >pricing</h1>
    )
}

export default PricingPage;



