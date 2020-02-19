import React from 'react';

class Register extends React.Component {
  clickHandler() {
    console.log("User is registering");
    console.log(this);
    const regex = "/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/gm";
    for(const user of this.props.users) {
      if(this.refs.firstname.value === user.firstname &&
        this.refs.lastname.value === user.lastname &&
        this.refs.username.value === user.username &&
        this.refs.email.value === user.email &&
        this.refs.password.value === regex &&
        this.refs.password.value === user.password) {
        this.props.RegisterUser();
    }
  }
}
  render() {
    return <div>
      <input ref="firstname" type="text"/>
      <input ref="lastname" type="text" />
      <input ref="username" type="text"/>
      <input ref="email" type="text"/>
      <input ref="password" type="password"/>
      <input ref="comfirmpassword" type="password"/>
      <input type="button" value="Create Account" onClick={() => this.clickHandler()} />
    </div>;
  }
}

export default Register;