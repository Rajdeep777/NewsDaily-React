import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{
            display: 'flex',
            justifContent: 'flex-end',
            position: 'absolute',
            right: 0
          }
          }>
            <span className="badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <img src={!imageUrl ? "https://images.hindustantimes.com/tech/img/2022/05/14/1600x900/DSC_1757_1647521024857_1652518295413.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className='card-title'>{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-myted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem