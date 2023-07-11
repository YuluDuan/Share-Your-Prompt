
// create a context obj  => pass the inital state
const AuthContext = React.createContext({
    isLoggedIn: false
});

//AuthContext is not a component but it is a object that contains components
export default AuthContext;