import PropTypes from 'prop-types';
function UserGreeting(props){
    // if(props.isLoggedIn){
    //     return(props.userName)
    // }else{
    //     return('Please Login')
    // }


    // if(props.isLoggedIn){
    //     return(props.userName)
    // }return('Please Login')
    

    return (
        props.isLoggedIn ? 
        <h1 className="welcome-line">Welcome {props.userName}</h1> : 
        <h3 className="login-reminder">Please login</h3>
      )
      

    

}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    userName: PropTypes.string
  };

export default UserGreeting