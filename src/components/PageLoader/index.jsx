import React from 'react';
import GIF from '../../assets/loader.gif';
import './pageloader.scss'
const PageLoader = () => {
    return(
        <div className='page-loader'>
            <img src={GIF} alt="" />
        </div>
    )
}
export default PageLoader;