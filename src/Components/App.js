import { Fragment, Component } from 'react';
import { Header } from './Header/Header';
import { BlogList } from './BlogList/BlogList';



import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <BlogList />
    </Fragment>
  );
}

class SmartApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: 'Marina',
      isLoggedIn: false,
      
    };
    this.onLogIn = this.onLogIn.bind(this);
  }
onLogOut = () => this.setState({isLoggedIn: false});

onLogIn(){
  this.setState({isLoggedIn: true});
}

  render(){
    const { isLoggedIn, user } = this.state;
    return (
      <Fragment>
      <Header isLoggedIn = {isLoggedIn} onLogIn = {this.onLogIn} onLogOut = {this.onLogOut} name = {user} />
      <BlogList />
    </Fragment>
  );
  }
}

export { SmartApp, App };
