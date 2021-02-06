import React from 'react'

function Footer(){
    return(
        <div className="footer mb-1 position-sticky bottom-0">
            <footer className="bg-dark text-center text-lg-start mb-0">
                
                <div className="container p-2 pb-0">
                    <form action="">
                    
                    <div className="row">
                        
                        <div className="col-auto mb-1 mb-md-0">
                        <p className="pt-2 text-white"><strong>Sign up for our newsletter</strong></p>
                        </div>
                        <div className="col-md-5 col-5 mb-1 mb-md-0">
                  
                        <div className="form-outline mb-2">
                            <input type="email" id="form5Example2" className="form-control" />
                            <label className="form-label text-white" for="form5Example2">Email address</label>
                        </div>
                        </div>
                
                        <div className="col-auto mb-2 mb-md-0">
                        
                        <button type="submit" className="btn btn-primary mb-2">Subscribe</button>
                        </div>
                      
                    </div>
                    
                    </form>
                </div>
                <div className="text-center p-2 text-white">
                    © 2020 Copyright: SSForum
                    <a className="text-white" href="https://mdbootstrap.com/">SSForum.com</a>
                </div>
                
            </footer>
        </div>
    )
}

export default Footer