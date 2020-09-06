import React from 'react'
import UserContext from './Context'

function getCookie(name) {
  const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  console.log(cookieValue);
}


class ContextContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: null,
      user: null
    }
  }

  logIn = (user) => {
    this.setState({
      loggedIn: true,
      user
    })
  }

  logOut = () => {
    document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    this.setState({
      loggedIn: false,
      user: null
    })
  }

  componentDidMount() {
    const token = getCookie('x-auth-token');

    console.log('da');

  }

  render() {
    const {
      loggedIn,
      user
    } = this.state

    return (
      <UserContext.Provider
        value={{
          loggedIn,
          user,
          logIn: this.logIn,
          logOut: this.logOut
        }}>

        {this.props.children}

      </UserContext.Provider>
    )
  }
}

export default ContextContainer