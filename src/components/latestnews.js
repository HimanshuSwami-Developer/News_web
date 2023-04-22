import React from 'react'

const LatestNews=(props)=> {
    
        let { title,newsUrl } = props;
        return (
            
            <>
                {/* style={{ width: '18rem' }} */}
                
                {/* <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '87%', zIndex: 1 }}>
                //                         latest News
                //                     </span> */}
                 <div className='card my-1' id='latestnews'>
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'87%' , zIndex:1}}>
                            Latest 
                            <span className="visually-hidden">unread messages</span>
                        </span>
                      <a href={newsUrl} target="_blank" id='latestlink' rel="noreferrer"> {title}...
           </a>
           </div>     
                  
           </>
            
        )
    
}
export default LatestNews