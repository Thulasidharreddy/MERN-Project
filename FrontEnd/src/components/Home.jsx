import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    const userData = location.state?.user;
    console.log(userData);
    return (
      <div>
        {userData && (
          <div>
            <h2>Welcome to Home Page! <h1>{userData.first_name}</h1></h2>
            <p>Name:{userData.first_name} {userData.last_name}</p>
            <p>Email: {userData.email}</p>
          </div>
        )}
      </div>
    )
  }

  export default Home;