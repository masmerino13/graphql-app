import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import lStorage from 'localStorage'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { AUTH_TOKEN, AUTH_USER } from '../constants'
import UserInfo from './containers/UserInfo'
import {CURRENT_USER_QUERY} from './User'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Login extends Component {
  state = {
    login: lStorage.getItem(AUTH_TOKEN) ? true : false,
    email: '',
    password: '',
    name: ''
  }

  onHandleChange = e => {
    const { name, value } = e.target;

    this.setState({[name]: value});
  }

  _confirm = async ({login}) => {
    this._saveUserData(login);
  }

  _saveUserData = ({token, user}) => {
    this.setState({login: true});
  }

  render() {
    const { login, email, password, name } = this.state;
    const { classes } = this.props;
    const LOGIN_MUTATION = gql`
      mutation LOGIN_MUTATION($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          token,
          user {
            id
            name
            email
          }
        }
      }
    `;

    return  (
      <div>
        {
          login ? <div>Welcome</div> : <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockIcon />
              </Avatar>
              <form className={classes.form}>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Correo electronico</InputLabel>
                  <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.onHandleChange} />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Contraseña</InputLabel>
                  <Input name="password" type="password" id="password" autoComplete="current-password" onChange={this.onHandleChange} />
                </FormControl>
                <Mutation
                  mutation={LOGIN_MUTATION}
                  variables={{email, password}}
                  onCompleted={data => this._confirm(data)}
                  refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
                    {
                      signin => (
                        <Button
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                          onClick={signin}
                        >
                          Iniciar sesion
                        </Button>
                      )
                    }
                </Mutation>
              </form>
            </Paper>
          </main>
        }
      </div>
      )
  }
}

export default withStyles(styles)(Login);
