import React from 'react';
import {Link} from "react-router-dom";

import './Header.css'
import {DropDownGenres} from "./DropDownGenres/DropDownGenres";
import Search from "./Search/Search";

const Header = () => {


    return (
        <div className={'headerWrap'}>
            <div className={"header_items"}>
                <Link to={'/'}>
                    <div className={'imageAndSiteName'}>
                        <img
                            src="https://img.icons8.com/cotton/100/000000/3d-glasses.png"
                            alt="MovieImg"/>
                        <p><span className={'The'}>The</span><span className={'Movies'}>Movies</span></p>
                    </div>
                </Link>


                <div className={'SearchAndDropDown'}>
                    <div className={'search'}>
                        <Search/>
                    </div>
                    <DropDownGenres/>
                </div>


                <div className={'profile'}>
                    <img src="https://img.icons8.com/cotton/64/000000/gender-neutral-user--v3.png" alt={'user'}/>
                    <p>Vyacheslav</p>
                </div>
            </div>
        </div>
    );
};

export {Header};