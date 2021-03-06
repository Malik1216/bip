import React , {Component} from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import axios from 'axios';
import https from 'https';






class Login extends Component {


  
  constructor(props) {
    super(props);

    
    var admin = sessionStorage.getItem("admin");
  
    if (admin==='1')
    {
      this.props.history.push("admin/dashboard");
     
    }
 
   

  } 

  login()
  {
    var uname  = document.getElementById("uname").value;
    var pass  = document.getElementById("pass").value;
    if (uname==='')
    {
      document.getElementById('uname-error').style.display = 'block';
    }
    else
    {
      document.getElementById('uname-error').style.display = 'none';
    }
    if (pass==='')
    {
      document.getElementById('pass-error').style.display = 'block';
    }
    else
    {
      document.getElementById('pass-error').style.display = 'none';
    }
    if ( uname!=='' && pass!=='')
    {
        document.getElementById("login_btn").innerHTML="Loading ... ";
        document.getElementById("login_btn").disabled = true;
       fetch('https://api-node-bl.mojodynamics.site/login?uname='+uname+'&pass='+pass+'' ,{
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        }
  
      } ).then(result => result.json())
       .then(data => {
          if (data.result==='true')
          {
           console.log( "Loging in" );
           document.getElementById("login_btn").innerHTML="Sign in";
           document.getElementById("login_btn").disabled = false;
           sessionStorage.setItem("admin" , 1 );
           
           window.location.href = "admin/dashboard";
          }
          else
          {
           
            document.getElementById("error").style.display = 'block';
                    setTimeout(function(){
                      document.getElementById("error").style.display = 'none';
                   }, 3000);
            document.getElementById("login_btn").innerHTML="Sign in";
            document.getElementById("login_btn").disabled = false;
          }
       });
   
    }
    
  }
  


     render() {
      return (
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h1 className="text-blueGray-500 text-lg font-bold">
                    Admin Sign in
                  </h1>
                </div>
               
                {/* <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("assets/img/github.svg").default}
                    />
                    Github
                  </button>
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("assets/img/google.svg").default}
                    />
                    Google
                  </button>
                </div> */}
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <div className="alert alert-success" id="error"  style={{color:"red" , padding:"10px", marginTop:"15px" , background:"white" , borderRadius:"5px" , display:"none" , marginLeft:"10px" , marginRight:"10px" }} >
                  <strong>Error!</strong> Invalid Username or Password.
                </div>
              </div>
              
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Username"
                      id="uname"
                    />
                  </div>
                  <p style={{color:"red" ,  marginTop : "-10px" , marginBottom : "10px" , display : "none" , fontSize : "12px" }} id ="uname-error" >This field is required</p>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                      
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      id="pass"
                    />
                      <p style={{color:"red" ,   marginBottom : "10px" , display : "none" , fontSize : "12px"  }} id ="pass-error" >This field is required</p>
                  </div>
                  <div>
                    {/* <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label> */}
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      id ="login_btn"
                      onClick={this.login.bind()}
                    >
                       <small>Sign In</small>
                      {/* <Link to="/admin/dashboard" className="text-blueGray-200">
                  <small>Sign In</small>
                </Link> */}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-blueGray-200">
                  <small>Create new account</small>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    
  );
}
}

export default Login;

