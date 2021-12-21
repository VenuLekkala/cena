import react, { Component } from 'react';
import Tabs from './Tabs';
import UserMenu from './NavBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

class App extends Component {
  name = 'venu'
  render() {
    return(
    <div className='App' >
    <UserMenu>
    </UserMenu>
    <p >
    <Toolbar>
		<IconButton
			edge="start"
			style={{
			marginRight:20,
			}}
			color="inherit"
			aria-label="menu"
		/>

		<Typography
			variant="h4"
			style={{
			flexGrow: 1,
			}}
		>
			ESPP
		</Typography>
        
		</Toolbar>
      <div className="TabItems" style={
    {
     border: '2px solid Blue'
    }
  }>
              <Tabs/>
      </div>
      </p>
    </div>
    );
  }
}

export default App;
