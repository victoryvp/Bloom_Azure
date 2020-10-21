import React, { useState, useEffect } from 'react';

function Home() {
    
    
    return (
        <div className="auth-wrapper">

            <div className="auth-content subscribe">
                <div className="card" style={{background: "transparent", boxShadow: "none"}}>
                    <div className="row no-gutters justify-content-center">
						<div className="col-md-4 col-lg-6 ">
							<a href="parent/sign-in">
							<div className="theme-bg align-items-center justify-content-center loginouterdiv">
								<div className="loginusericon">
									<img src="assets/images/parent/parenticon.jpg" alt="lock images" className="img-fluid"/>
								</div>
								<div className="loginusertxt">Parent Login</div>
							</div>
							</a>
                        </div>
					</div>
                </div>
            </div>
        </div>
      );
}

export default Home;