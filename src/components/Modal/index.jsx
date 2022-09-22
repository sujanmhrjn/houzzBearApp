import React from 'react';
import './modal.scss';
const Modal = ({data,action}) => {
console.log(data)
    return(
    <div className='modal'>
        <div className='modal__overlay' role="button" onClick={action}></div>
        <div className='modal__content'>
            <div className='modal__left'>
                <img src={data.image_url}/>
            </div>
            <div className='modal__right'>  
            <div className="modal__close" role="button" onClick={action}> x </div>
              <h3 className='title'>{data.name}</h3>
              <h4 className='sub-title'>{data.tagline}</h4>
              <div className='description'>
                  {data.description}
              </div>
              {/* /.description */}
              <div className='list'>
                  <div className="list-title">Food Pairings</div>
                  <div className='list-body'>
                      {data.food_pairing.map((food,i)=>{
                          const comma = i < data.food_pairing.length - 1?', ':''
                          return <span>{food}{comma}</span>
                      })}
                  </div>
              </div>
              {/* /.list */}
              <div className='list'>
                  <div className="list-title">Ingredients</div>
                  <table className=''>
                      <tbody>
                          {Object.keys(data.ingredients).map((ingredient)=>{
                            const ingDetails = data.ingredients[ingredient];
                            return(
                                <tr key={ingredient}>
                                    <td width="80"><strong>{ingredient}</strong></td>
                                    <td>
                                        {(typeof ingDetails === 'object') && ingDetails.map(detail=>{
                                            return <div>{detail.name}: {detail.amount.value} {detail.amount.unit}</div>
                                        })}
                                        {(typeof ingDetails === 'string') && ingDetails}
                                    </td>
                                </tr>
                            )
                          })}
                         
                      </tbody>
                  </table>
              </div>
              {/* /.list */}
            </div>
        </div>
    </div>)
}

export default React.memo(Modal);