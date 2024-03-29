import Recommendation from '@/components/recommendation/Index'
import Head from 'next/head'

export default function RecommendPage() {
    return (
        <>
            <Head>
                <title>Recommendation | FastEDPills</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Recommendation />
        </>
    )
}
