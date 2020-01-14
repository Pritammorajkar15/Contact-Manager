import React from 'react';
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom'
import Register from './component/users/register'
import Login from './component/users/login'
import List from './component/contacts/list'
import Edit from './component/contacts/edit'
import Show from './component/contacts/show'
import New from './component/contacts/new'
import Home from './component/contacts/home'
import Logout from './component/users/logout'
import _ from 'lodash'
import './index.css'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav
 
} from 'reactstrap'
function App(props) {
  console.log("app",props.user)
  return (
<BrowserRouter>
    <div>
    {//(_.isEmpty(props.user))
    (!localStorage.token)
     ? <div>
      <Nav tabs>
    <Navbar color="dark" light expands="md" >
        <NavbarBrand href="/">contacts</NavbarBrand>
        <Nav className="ml-auto">
      <NavItem>
              <NavLink href="/users/register">Register</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/users/login">Login</NavLink>
            </NavItem> 
            </Nav>
            </Navbar> 
      </Nav>
            </div>:
            
            <div>
              <Nav tabs>
    <Navbar color="dark" light expands="md">
        <NavbarBrand href="/">contacts</NavbarBrand>
        <Nav className="ml-auto">
      <NavItem>
              <NavLink href="/contacts">Go To Our Contacts</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/users/logout">Logout</NavLink>
            </NavItem> 
            </Nav>
            </Navbar> 
      </Nav>
            </div>
            }

      {/* <Nav tabs>
    <Navbar color="dark" light >
        <NavbarBrand href="/">contacts</NavbarBrand>
        {(_.isEmpty(props.user)) ? <div><NavItem>
              <NavLink href="/users/register">Register</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/users/login">Login</NavLink>
            </NavItem> </div>:<div>
            <NavItem>
              <NavLink href="/users/logout">Logout</NavLink>
            </NavItem> 
              </div>}
        
            
      </Navbar> 
      </Nav> */}
      <br></br>
      {/* <Link to="/users/register">| Register</Link> */}
      {/* <Link to="/users/login">| Login</Link> */}
     
      {/* <Link to="/home">|home</Link> */}
      {/* <Link to="/contacts">| contacts</Link> */}
      
      <Switch>
        <Route path="/users/register" component={Register} exact={true}/>
        <Route path="/users/login" component={Login}/>
        <Route path="/users/logout" component={Logout}/>
        <Route path="/contacts" component={List} exact= {true}/>
        <Route path="/home" component={Home} exact= {true}/>
        <Route path="/contacts/new" component={New} exact={true}/>
        <Route path="/contacts/show/:id" component={Show} />
        <Route path="/contacts/edit/:id" component={Edit}/>

      </Switch>
     
    </div>
    </BrowserRouter>
  );
}

const mapStateToProps=(state)=>{
  console.log("mapstatetoprops",state)
  return{
   user:state.users
  }
}
export default connect(mapStateToProps)(App);
