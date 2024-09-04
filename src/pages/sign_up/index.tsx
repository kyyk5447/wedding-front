import { SignUp } from '@/components/SignUp';
import type { NextPage } from 'next';
import Head from 'next/head'

const Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>{`新規登録`}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="application-name" content="Wedding Gateway" />
                <meta name="apple-mobile-web-app-title" content="Wedding Gateway" />
                <meta property="og:type" content={'website'} />
                <meta property="og:title" content={'Wedding Gateway｜結婚式招待サービス'} />
                <meta property="og:locale" content="ja_JP" />
                <meta name="twitter:card" content="summary" />
            </Head>
            <SignUp />
        </>
    );
};

export default Page;
