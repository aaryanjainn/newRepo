function NewsLetter()
{
    return (
        <>
            <div className="newsletter" style={{marginTop:"280px"}}>
                <div className="text-center" style={{width:"100%", margin:"0 auto"}}>
                    <h1 className="col-md-12 col-12 p-0">NEWSLETTER</h1>
                    <h5 className="m-0">GET LATEST TRENDS</h5>
                    <h5 className="m-0">NO SPAM. ONLY UNIQUE TRENDS</h5>
                    
                    <br></br>
                    
                    <input type="text" className="col-md-12 col-12" placeholder="Enter your email"></input>
                    <input type="submit" className="col-12 mt-3"></input>
                </div>
            </div>
        </>
    )
}

export default NewsLetter
