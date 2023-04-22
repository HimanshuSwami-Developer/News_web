import React, { useEffect } from 'react'
import Newsitem from './newsitem'
import Spinner from './spinner'
import Ads from './add'
import U from './U.jpg'
import cock from './cockads.gif'
import video from './videoads.gif'
import PropTypes from 'prop-types'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import LatestNews from './latestnews'

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (str) => {
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
        return capitalized;
    }
    const update = async () => {
        // setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=80cbc6dde90041c2926106a6576c41e9&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata)
        setArticles(parsedata.articles)
        setTotalResults(parsedata.totalResults)
        setLoading(false)
    }
    useEffect(() => {
        update();
        document.title = capitalizeFirstLetter(props.category);
        // eslint-disable-next-line 
    }, [])


    // const preClick = async () => {
    //     setPage(page - 1)
    //     update()
    // }

    // const nextClick = async () => {
    //     setPage(page + 1)
    //     update();

    // }

    const fetchMoreData = async () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=80cbc6dde90041c2926106a6576c41e9&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedata = await data.json();
        // console.log(parsedata)
        setArticles(articles.concat(parsedata.articles))
        setTotalResults(parsedata.totalResults)
    }


    // const getlatestdata = async()=>{
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-BingApis-SDK': 'true',
    //             'X-RapidAPI-Key': '2e5237db0cmsh10549cdaca008c7p18743fjsn649f8c8a2a80',
    //             'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    //         }
    //     };

    //    const url=fetch('https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw', options)
    //    let data = await fetch(url);
    //    let parsedata = await data.json();
    //    console.log(parsedata);

    // }

    return (
        <>
            <h2 className='text-center' style={{ marginTop: '75px' }}>Zee News Top - Headlines</h2>
            <div className='container'>
                <div className='row'>
                    <div className="col-2 bg-light" id='latestbox'>
                        <div className="containbox">
                            <div className="" id='latest'>
                                <center><h3>Latest News</h3></center>
                                {/* !this.state.loading &&  */}
                                                 {/* // eslint-disable-next-line */}
                                
                                <ul class="list-inline">
                                             <li>
                                 {articles.map((element) => {
                                     return <div className='col' key={element.url}>
                                        <LatestNews title={element.title ? element.title.slice(0, 40) : ""} newsUrl={element.url} />
                                       <br /><hr/></div>
                                })}
                               
                            </li>
                            </ul>
                            </div>
                        </div>

                    </div>
                    <div className="col " id='newscontent'>
                        
                        {loading && <Spinner />}
                        <InfiniteScroll
                            dataLength={articles.length}
                            next={fetchMoreData}
                            hasMore={articles.length !== totalResults}
                            loader={<Spinner />}>
                            <div className="container my-5" >
                                <div className="row my-5"> 
                        {/* !this.state.loading &&*/}
                        {articles.map((element) => {
                                        return <div className="col-md-4" key={element.url}>
                                            <Newsitem title={element.title ? element.title.slice(0, 40) : ""} date={element.publishedAt} source={element.source.name} author={element.author ? element.author : "Unknown"} imgUrl={element.urlToImage} newsUrl={element.url} description={element.description ? element.description.slice(0, 88) : ""} />

                                        </div>
                                    })}
                                </div>
                            </div>
                        </InfiniteScroll> 

                    </div>
                    <div className="col-2" id='adsSection'>
                    <div className='row '>
                            <Ads imgUrl={video} url="https://www.amazon.in/stores/page/1FBB6F0D-B22D-4238-8563-CDDC6BBFB0F0/?_encoding=UTF8&store_ref=SB_A0810080RPI4RKIV3CUD&pd_rd_plhdr=t&aaxitk=ead4b1a7f2023ff5ddf10b7a9abf3829&hsa_cr_id=1903632800702&lp_asins=B0B5LVS732%2CB0B6BLTGTT%2CB0B2X35B1K&lp_slot=desktop-arbies&lp_page_asin=B07G9GJRF6&pd_rd_i=ad2&ref_=sbx_be_dp_arbies_mblsd_ls&pd_rd_w=o3b37&content-id=amzn1.sym.bbdfebcd-8c3e-4973-953b-597ad2950224&pf_rd_p=bbdfebcd-8c3e-4973-953b-597ad2950224&pf_rd_r=P4RWYBV8TCWS2NZ1A3XR&pd_rd_wg=GjuU0&pd_rd_r=d759b262-ffd5-4ed9-8564-6626382dc0f4"></Ads>
                        </div>
                        <br />
                        <div className='row'>
                            <Ads imgUrl={U} url="https://www.amazon.in/ASIAN-Gravity-01-Running-Phylon-Casual/dp/B09SX2J9Y1/ref=sr_1_2_sspa?keywords=shoes+for+men&qid=1670654525&sprefix=shoew%2Caps%2C548&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"></Ads>
                        </div>
                        <br/>
                        <div className='row'>
                            <Ads imgUrl={cock} url="https://www.amazon.in/ASIAN-Gravity-01-Running-Phylon-Casual/dp/B09SX2J9Y1/ref=sr_1_2_sspa?keywords=shoes+for+men&qid=1670654525&sprefix=shoew%2Caps%2C548&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"></Ads>
                        </div><br /><hr/>

                    </div>

                </div>
            </div>


            {/* <div className="container d-flex justify-content-around">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.preClick}> &larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / props.pageSize)} className="btn btn-dark" onClick={this.nextClick}>Next &rarr;</button>
                </div> */}
        </>
    )

}

News.defaultProps = {
    country: 'in',
    pageSize: 5,
    category: "general"
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News