import UserClass from './UserClass.js';
import {Component} from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        //console.log("Parent Constructor");
    }
    componentDidMount() {
        //console.log("Parent Component Did Mount");
    }
    render() {
        return (
            <div>
                <h1>About Page</h1>
                <p>This is the about page.</p>
                <UserClass name={"Devendra Jha"} location={"Hyderabad, India"} />
            </div>
        );
    }
}
export default About;