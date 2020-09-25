import React from 'react'
const Viewer = props =>{
    return(
        <React.Fragment>
            {

                props.book.map((item, index)=>{
                return(
                    <div className='block_img' key={index+2}>
                        <img className='img_test' src={require(`../../img/${item}.png`)} alt={`text_image_${index}`} key={index}/><br key={index+1}/>
                    </div>
                    )
            })}
        </React.Fragment>
    )
}

export default Viewer