import { color } from 'highcharts'
import React from 'react'
import './dashside.css';
export default function DashSide() {
    return (
        <div style={{
            position: 'fixed',
            bottom: '0',
            right: '38%',
            zIndex: '100',
            
        }}>
       
       <div style={{margin: 'auto', width: '120%'}}>
       <nav class="navbar navbar-expand-lg bg-primary"  style={{borderRadius: '50px'}}>
         
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                <li class="nav-item active v text-center" style={{margin: '0px 2px'}}>
                    <a class="nav-link" href="/">
                    <i style={{fontSize: '15px'}} class="fas fa-home"></i>
                    </a>
                    <p  className="" style={{color: 'white', fontSize: '9px'}}>Home</p>
                </li>
               
                <li class="nav-item active v text-center" style={{margin: '0px 2px'}}>
                    <a class="nav-link" href="/">
                    <i style={{fontSize: '15px'}} class="now-ui-icons location_map-big"></i>
                    </a>
                    <p style={{color: 'white', fontSize: '9px'}}>Tasks</p>
                </li>
                <li class="nav-item active v text-center" style={{margin: '0px 2px'}}>
                    <a class="nav-link" href="/">
                    <i style={{fontSize: '15px'}}  className="x" class="now-ui-icons users_single-02"></i>
                    </a>
                    <p style={{color: 'white', fontSize: '9px'}}>Profile</p>
                </li>
                <li class="nav-item active v text-center" style={{margin: '0px 2px'}}>
                    <a class="nav-link" href="/">
                    <i style={{fontSize: '15px'}} class="now-ui-icons ui-1_bell-53"></i>
                    </a>
                    <p style={{color: 'white', fontSize: '9px'}}>Notification</p>
                </li>
                <li class="nav-item active v text-center" style={{margin: '0px 2px'}}>
                    <a class="nav-link" href="/sling">
                    <i style={{fontSize: '18px'}} className="fas fa-rocket" ></i>
                    
                    </a>
                    <p style={{color: 'white', fontSize: '9px'}}>Sling</p>
                </li>
                
                <li class="nav-item v " style={{margin: '0px 20px'}}>
                    <a class="nav-link" href="/">
                    <img 
                style={{width:'37px', borderRadius: '50%'}}
                src="https://avatars0.githubusercontent.com/u/17266803?s=460&u=4c801c80490fbe466e6d6a1db2c9f3759c4981e9&v=4"
                alt="New images"
                 />
                    </a>
                </li>
                </ul>
            </div>
            </nav>
       </div>
            
        </div>
    )
}
