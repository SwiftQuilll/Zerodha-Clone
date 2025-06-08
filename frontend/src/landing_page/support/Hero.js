import React from 'react'
function Hero() {
    return ( 
       <section className="container-fluid" id="supportHero">
        
      <div className=" p-3   " id="supportWrapper">
        <h3 className="fs-4 text-center">Support Portal</h3>
        <a href="">Track Tickets</a>
      </div>
      
       <div className=" row  p-3 mr-5" >
       <div className=" col-6 p-3 mr-5 " >
        <h1 className='fs-4'>Search for an answer or browse help topics to create a ticket</h1>
        <input className='mt-5 mb-3 p-4'  style={{height:"10%"}} placeholder='Eg. how do I activate F&O why my order is getting rejected ' />
        <br/>
        <a style={{ marginRight: "30px" }} href="">Track account opening</a>
        <a style={{ marginRight: "30px" }} href="">Track segment activation</a>
        <a style={{ marginRight: "15px" }} href="">Intraday margins</a><br/>
         <a style={{ marginTop: "15px", display: "inline-block" }} href="">Kite user manual</a>

        </div>

       <div className=" col-6  p-3" >
       <h1 className='fs-4'>Featured</h1>
       <ol>
        <li><a   href="">Current Takeovers and Delisting – June 2025</a></li>
        <li><a style={{ marginTop: "15px", display: "inline-block" }} className="mt-3" href="">Surveillance measure on scrips - June 2025</a></li>

       </ol>
    
 
</div>
      </div>

      </section>
     );
}

export default Hero;