import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';
import React from 'react';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';
// Import HashRouter, Route, and Link from 'react-router-dom'

const App =()=>{
     var pageSize = 8;
  const [progress,setprogress]=useState(0);

return (
<div>
  
       <LoadingBar
        color='#f11946'
      height={3}
       progress={progress} 
        /> 



             <Router>  
             <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsBook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                    </button>
                             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                             <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                           
                        </ul>
                    </div>
                </div>
            </nav> 
	
          		<Routes>
            
                   <Route exact path="/" element={<News setprogress={setprogress}key="general" pageSize={pageSize} country="in" category="general"/>}/>
                   <Route exact path="/business" element={<News setprogress={setprogress} key="business" pageSize={pageSize} country="in" category="business"/>}/> 
           
                   <Route exact path="/entertainment" element={<News setprogress={setprogress} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/> 
                   <Route exact path="/general" element={<News setprogress={setprogress}  key="general" pageSize={pageSize} country="in" category="general"/>}/> 
                   <Route exact path="/health" element={<News setprogress={setprogress} key="health" pageSize={pageSize} country="in" category="health"/>}/> 
                   <Route exact path="/science" element={<News setprogress={setprogress}key="science" pageSize={pageSize} country="in" category="science"/>}/> 
                   <Route exact path="/sports" element={<News  setprogress={setprogress} key="sports" pageSize={pageSize} country="in" category="sports"/>}/> 
                   <Route exact path="/technology" element={<News  setprogress={setprogress} key="technology" pageSize={pageSize} country="in" category="technology"/>}/> 
                </Routes>
        
           
          
          
    </Router> 
 



      </div>
    ) 

  
} 
export default App;