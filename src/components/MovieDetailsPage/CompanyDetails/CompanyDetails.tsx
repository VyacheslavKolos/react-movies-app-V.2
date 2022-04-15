import React, {FC} from 'react';

import {urls} from "../../../constants";
import './CompanyDetails.css'

interface ICompany {
    name: string;
    logo_path: string
}

const CompanyDetails: FC<{ company: ICompany }> = ({company}) => {
    return (
        <div className={'company'}>
            {company.name}
            {company.logo_path && <img src={urls.image + company.logo_path} alt="name"/>}
            <div className={'company-separator'}></div>
        </div>
    );
};

export {CompanyDetails};