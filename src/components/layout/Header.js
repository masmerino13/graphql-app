import Link from 'next/link'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Router from 'next/router'
import NProgress from 'nprogress'
import User from '../User'

Router.onRouteChangeStart = () => {
    NProgress.start();
};

Router.onRouteChangeComplete = () => {
    NProgress.done();
};

Router.onRouteChangeError = () => {
    NProgress.done();
};

const TopBar = styled.div`
    background-color: #08034e;
    border-bottom: 2px solid #050235;
    display: flex;
    justify-content: space-between;
    .app-name {
        display: flex;
        align-items: center;
        padding: 0 10px;
        color: white;
        cursor: pointer;
    }
    .user-menu {
        button {
            color: white;
        }
    }
    .user-signin {
        color: white;
        font-size: 12px;
    }
`;

const Header = () => (
    <TopBar>
        <div className="app-name">
            <Link href="/">
                <Typography variant="h6" color="inherit">MEDICIA</Typography>
            </Link>
        </div>
        
            <User>
                {
                    ({data: { me }}) => (
                        me ? <div className="user-signin">
                                <Link href="/profile">
                                    <Button color="inherit">Bienvenid@, {me.name}</Button>
                                </Link>                                
                            </div> : (
                            <div className="user-menu">
                                <Link href="/signup">
                                    <Button color="inherit">Registrate</Button>
                                </Link>
                                <Link href="/login">
                                    <Button color="inherit">Ingresar</Button>
                                </Link>
                            </div>
                        )
                    )
                }
            </User>
            
        
    </TopBar>
)

export default Header;
