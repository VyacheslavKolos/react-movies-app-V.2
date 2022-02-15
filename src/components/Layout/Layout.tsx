import React from 'react';
import { Outlet} from "react-router-dom";

import './Layout.css'
import {Header} from "../Header/Header";
import {PaginationMovies} from "./PaginationMovies/PaginationMovies";

const Layout = () => {

    return (
        <div>
            <div className={"layoutWrap"}>
                <div className={'header'}>
                    <Header/>
                </div>


                <div className={"main"}>
                    <Outlet/>


                </div>


            </div>
        </div>
    );
};

export {Layout};