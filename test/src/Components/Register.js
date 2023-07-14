const Register = () => {
    return ( 
        <>
        <div class="container" style={{width:"fit-content"}}>
        <div class="row">
            <div class="col">
                <div class="card" style={{backgroundColor:"#9eeaf9"}}>
                    <div class="card-body"> 
                      <h5 class="card-title">Register</h5>
                      <form>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div class="form-group form-check">
                          <label class="form-check-label" for="exampleCheck1">Registered User? <a href="login.html">Click Here</a></label>
                        </div>
                        <button type="submit" class="btn btn-light"><a href="index.html">Create Account</a></button>
                      </form>
                    </div>
                  </div>
            </div>
        </div>
    </div>
    </>
     );
}
 
export default Register;