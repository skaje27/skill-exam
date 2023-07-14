const Login = () => {
    return ( 
    <>
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-12"></div>
            <div class="col-md-4 col-sm-12">
                <div class="card" style={{backgroundColor:"#f1aeb5"}}>
                    <div class="card-body">
                      <h5 class="card-title">User Login</h5>
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
                                <label class="form-check-label" for="exampleCheck1">Not Registered? <a href="register.html">Click Here</a></label>
                            </div>
                            <button type="submit" class="btn" style={{backgroundColor:"#9eeaf9"}}><a href="index.html">Login</a></button>
                      </form>
                    </div>
                  </div>
            </div>
            <div class="col-md-4 col-sm-12"></div>
        </div>
    </div>
    </>
     );
}
 
export default Login;

