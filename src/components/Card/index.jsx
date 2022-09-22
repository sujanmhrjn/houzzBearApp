
import React from 'react';
import './card.scss';
const Card = (props) => {
    const {data, action, isSelected} = props;
    const {image_url, name, tagline, description, ingredients} = data;
    const shortDesc = description.length > 150?description.substring(0,150)+'...': description;
    
    return(
        <div className={`c-card ${isSelected?'selected':''}`} role="button" onClick={()=>action(data)}>
            <div className="card__image">
                <img src={image_url} alt={name}/>
                <div className='card__tooltip'>
                    <strong>Ingredients: </strong>
          
                    {Object.keys(ingredients).map((ingredient,i)=>{
                  
                        return <span key={'ing'+i}>{ingredient} {i < Object.keys(ingredients).length -1?', ':''}</span>
                    })}
             
                </div>
            </div>
            {/* /.card__image */}
            <div className="card__body">
                {name && <div className="card-title">{name}</div>}
                {tagline && <div className="card-title__sub">{tagline}</div>}
                {description && <div className='card-description'>{shortDesc}</div>}
            </div>
            {/* /.card__body */}
        </div>
        // ./c-card ends
    )
}

export default React.memo(Card);