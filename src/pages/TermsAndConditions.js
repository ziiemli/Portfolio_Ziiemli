import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RedirectTopPage from '../components/RedirectTopPage';

const TermsAndConditions = () => {
    return (
        <div>
            <Helmet>
                <title>Ziiemli - TermsAndConditions</title>
                <meta name="description" content="Terms and Conditions" />
                <link rel="canonical" href="/TermsAndConditions" />
            </Helmet>
            <Header />
            <main className="legalNotice">
                <h1>Terms and Conditions</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </main>
            <RedirectTopPage />
            <Footer />
        </div>
    );
};

export default TermsAndConditions;