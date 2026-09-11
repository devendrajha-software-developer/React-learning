import react from 'react';

class UserClass extends react.Component {
    constructor(props) {
        super(props);
        
        this.state={
            userInfo:{
                name: "John Doe",
                location: "Hyderabad, India",
                company: "Google"
            }
        }

        // console.log("child constructor", props)
    }
    async componentDidMount() {
        const userData = await fetch('https://api.github.com/users/devendrajha-software-developer');
        const data = await userData.json();
        console.log( data);
        this.setState({
            userInfo: data
        })
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    render(){
        const { name, location,company } = this.state.userInfo;
        return(
            <div className="user-class-card">
                <h2>User Class Component</h2>
                <p>Name: {name}</p>
                <p>Location: {location}</p>
                <p>Company: {company}</p>
            </div>
        );  
    }
}


export default UserClass;