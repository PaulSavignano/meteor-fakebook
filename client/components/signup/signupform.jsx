Signupform = React.createClass({
  render() {
    return(
      <div className="row">
        <div className="signup">
          <h1>Sign Up</h1>
          <p className="text-muted">
            It's Free and always will be.
          </p>
        </div>
        <form>
          <div className="col-sm-9">
            <div className="row">
              <div className="col-sm-6 form-group">
                <input name="first_nane" placeholder="First Name" type="text" ref="first_nane" className="form-control"/>
              </div>
              <div className="col-sm-6 form-group">
                <input placeholder="Last Name" type="text" ref="last_name" name="last_name" className="form-control"/>
              </div>
            </div>
            <div className="form-group">
              <input placeholder=" Email or mobile number" type="text" ref="email" className="form-control"/>
            </div>
            <div className="form-group">
              <input placeholder="password" type="password" ref="password" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-md btn-success">Sign up</button>
          </div>
        </form>
      </div>
    )
  }
});
