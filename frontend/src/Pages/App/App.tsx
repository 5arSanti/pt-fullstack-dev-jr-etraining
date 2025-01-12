//Dependencies
import React, { ReactNode } from "react";
import { HashRouter, useLocation } from "react-router-dom";

// CSS
import './App.css';
import "./styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Context
import { AppProvider } from "../../Context/index.tsx";

// Components
import { ToastContainer } from "react-toastify";


// Utils
import { scrollToValue } from "../../utils/scrollToValue.ts";
import { LoadingCard } from "../components/LoadingCard/index.tsx";
import { AppRoutes } from "../Routes/index.tsx";
import { Header } from "../components/Header/index.tsx";
import { SecondFooter } from "../components/Footer/index.tsx";

const Wrapper = ({ children } : { children: ReactNode}) => {
    const location = useLocation();
    
    React.useLayoutEffect(() => {
        scrollToValue();
    }, [location.pathname]);

    return children;
}

const App = () => {
    return (
        <AppProvider>
            <HashRouter>
                <Wrapper>
                    <Header/>      
                    <LoadingCard/>

                    <AppRoutes/>
                    
                    <SecondFooter/>

                    <ToastContainer/>
                </Wrapper>
            </HashRouter>
        </AppProvider>
    );
}

export default App;

