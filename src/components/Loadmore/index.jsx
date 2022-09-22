import React from 'react';
import './loadmore.scss';
import LoadingIcon from '../../assets/icons/icon-loading.gif';
const Loadmore = ({loading, action}) => {
    return (
        <div className='c-loadmore'>
            <button onClick={()=>action()}>
                {!loading && 
                    <span>
                        Load More 
                        <svg width="14" height="8" viewBox="0 0 16 10"  xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7969 1.5C15.7969 1.63542 15.7448 1.75521 15.6406 1.85938L8.35938 9.14062C8.25521 9.24479 8.13542 9.29688 8 9.29688C7.86458 9.29688 7.74479 9.24479 7.64062 9.14062L0.359375 1.85938C0.255208 1.75521 0.203125 1.63542 0.203125 1.5C0.203125 1.36458 0.255208 1.24479 0.359375 1.14062L1.14062 0.359375C1.24479 0.255208 1.36458 0.203125 1.5 0.203125C1.63542 0.203125 1.75521 0.255208 1.85938 0.359375L8 6.5L14.1406 0.359375C14.2448 0.255208 14.3646 0.203125 14.5 0.203125C14.6354 0.203125 14.7552 0.255208 14.8594 0.359375L15.6406 1.14062C15.7448 1.24479 15.7969 1.36458 15.7969 1.5Z" fill="#000"/>
                        </svg>
                    </span>
                }
                {
                    loading &&
                    <span>
                        <img src={LoadingIcon} className="loading"/>
                    </span>
                }
  
            </button>
        </div>
    )
}
export default Loadmore;