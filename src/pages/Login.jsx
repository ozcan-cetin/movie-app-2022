import React from 'react'

const Login = () => {
  return (
    <div className='row'>
        <form className="col-10 col-md-5 col-lg-4 mx-auto mt-5">
                <div className="mb-3">
                  <label for="" className="form-label">Email</label>
                  <input type="email" className="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="" autoFocus/>
                </div>
                <div className="mb-3">
                  <label for="" className="form-label">Password</label>
                  <input type="password" className="form-control" name="" id="" placeholder=""/>
                </div>
                <button type="submit" className='btn btn-primary form-control'>Login</button>
        </form>
    </div>
  )
}

export default Login