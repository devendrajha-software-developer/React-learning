import react from 'react';

class UserClass extends react.Component {
    constructor(props) {
        super(props);
        console.log("UserClass constructor called", props)
    }

    render(){
        const { name, location } = this.props;
        return(
            <div className="user-class-card">
                <h2>User Class Component</h2>
                <p>Name: {name}</p>
                <p>Location: {location}</p>
            </div>
        );  
    }
}


export default UserClass;