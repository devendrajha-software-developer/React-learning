import UserClass from './UserClass.js';

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is the about page.</p>
            <UserClass name={"Devendra Jha"} location={"Hyderabad, India"} />
        </div>
    );
}
export default About;