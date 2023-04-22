import React  from 'react'
const Videoads = (props) => {
    let {url} = props;
    return (

        <div className='card'> 
            <video width="300px" height="250px"  autoPlay muted>
            <source src={url} type="video/mp4"/>
            </video>
        </div>
    )

}
export default Videoads