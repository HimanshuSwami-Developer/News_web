import React from 'react'

const Newsitem=(props)=> {
    
        let { title, description, imgUrl, newsUrl, author, date,source } = props;
        return (
            <div>
                {/* style={{ width: '18rem' }} */}
                <div className="card" >
                    <img src={imgUrl} className="card-img-top"  alt="..." />
                    <div className="card-body">
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'87%' , zIndex:1}}>
                            {source}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

        )
    
}
export default Newsitem