import './App.css';
import Nav from './Nav.js';
import Home from './Home.js';
import About from './About.js';
import Profiles from './Profiles.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {

  const User= {
    
    profiles:[
    {
        firstName: "J'Dinkalage",
        lastName: "Morgoon",
        college: "University of South Flerida",
        profileImage: "https://pbs.twimg.com/profile_images/2891783331/ba97d353192d85eedcd6a263aea91af1.jpeg"
    },
    {
        firstName: "Ozamataz",
        lastName: "Buckshank",
        college: "The Ohio State University",
        profileImage: "https://static.wikia.nocookie.net/keyandpeele/images/d/d2/Ozamataz_buckshank.jpg/revision/latest?cb=20140507084649"
    },
    {
        firstName: "Torque",
        lastName: "Lewith",
        college: "Nevada State... Penitentiary",
        profileImage: "https://pbs.twimg.com/profile_images/3032005403/60141b4452a7841408844f70c12ac3a3_400x400.jpeg"
    }
  ],

  articles: [
    { 
      title: "Winning at Life!",
      article: "There are many ways to do so...but the best is just try, try, try again!"
    },
    { 
      title: "Telling the Truth",
      article: "It is not when it is dangerous to tell the truth that its advocates are hardest to find, but when it is boring." 
    },
    { 
      title: "Winning at Life!",
      article: "There are many ways to do so...but the best is just try, try, try again!"
    }
  ]
  }

  return (
<Router>
  <div>
    <Nav/>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/profiles">Profiles</Link></li>
    </ul>

    <hr/>

    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/profiles" component={Profiles}/>

  </div>
  </Router>


  )
}

export default App;
