import React from 'react';
import Link from 'next/link'
import {MainLayout} from "../../components/MainLayout";
import st from './404.module.scss'

const Page_404 = () => {
    return (
        <MainLayout title='404'>
            <h1 className={st.error}>Page 404</h1>
            <p>Go <Link href='/'><a className={st.link}>back</a></Link></p>
        </MainLayout>
    );
};

export default Page_404;
