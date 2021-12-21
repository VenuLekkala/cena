// in src/MyAppBar.js
import { AppBar } from 'react-admin';
import AppBar from '@material-ui/core/AppBar';
import MyUserMenu from './MyUserMenu';

const MyAppBar = (props) => <AppBar {...props} userMenu={MyUserMenu} />;