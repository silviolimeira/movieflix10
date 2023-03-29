import { useContext, useEffect } from 'react';
import history from 'util/history';
import { Link } from 'react-router-dom';
import { getTokenData, isAuthenticated } from 'util/auth';
import { AuthContext } from 'AuthContext';
import './styles.css';
import { removeAuthData } from 'util/storage';

const NavBar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };
  return (
    <div className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="main-nav-logo-text">
        <Link to="/">
          <h4>MovieFlix</h4>
        </Link>
      </div>
      {authContextData.authenticated ? (
        <div className="main-nav-login-logout">
          <a href="#logout" onClick={handleLogoutClick}>
            SAIR
          </a>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavBar;
