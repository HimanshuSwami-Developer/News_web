import React from 'react'

const Ads = (props) => {
    let {imgUrl,url} = props;
    return (

        <div className='card'>

           <a href={url}> <img src={imgUrl} width="250px" /></a>
        </div>
    )

}

export default Ads
//shoe
// https://www.amazon.in/ASIAN-Gravity-01-Running-Phylon-Casual/dp/B09SX2J9Y1/ref=sr_1_2_sspa?keywords=shoes+for+men&qid=1670654525&sprefix=shoew%2Caps%2C548&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1
// watch
// https://www.amazon.in/stores/page/1FBB6F0D-B22D-4238-8563-CDDC6BBFB0F0/?_encoding=UTF8&store_ref=SB_A0810080RPI4RKIV3CUD&pd_rd_plhdr=t&aaxitk=ead4b1a7f2023ff5ddf10b7a9abf3829&hsa_cr_id=1903632800702&lp_asins=B0B5LVS732%2CB0B6BLTGTT%2CB0B2X35B1K&lp_slot=desktop-arbies&lp_page_asin=B07G9GJRF6&pd_rd_i=ad2&ref_=sbx_be_dp_arbies_mblsd_ls&pd_rd_w=o3b37&content-id=amzn1.sym.bbdfebcd-8c3e-4973-953b-597ad2950224&pf_rd_p=bbdfebcd-8c3e-4973-953b-597ad2950224&pf_rd_r=P4RWYBV8TCWS2NZ1A3XR&pd_rd_wg=GjuU0&pd_rd_r=d759b262-ffd5-4ed9-8564-6626382dc0f4



//   {/* <div className="col">
//                     <div className="containbox">
//                         <div className="" id='latest'>
//                             <center><h3>Latest News</h3></center>
//                             {/* !this.state.loading &&  */}
//                                 {/* {articles.map((element) => {
//                                     return <div className='col' key={element.url}>
//                                         <LatestNews title={element.title ? element.title.slice(0, 40) : ""} newsUrl={element.url} />
//                                        <br /></div>
//                                 })}
                            
//                         </div>

//                     </div> */} 
                    
//                     {/* </div> */}
               