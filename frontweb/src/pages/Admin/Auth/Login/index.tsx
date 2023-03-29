import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { getTokenData } from 'util/auth';
import { requestBackendLogin } from 'util/requests';
import { AuthContext } from 'AuthContext';
import { saveAuthData } from 'util/storage';
import './styles.css';

type CredentialsDTO = {
  username: string;
  password: string;
};

type LocationState = {
  from: string;
};

const Login = () => {
  const location = useLocation<LocationState>();

  const { from } = location.state || { from: { pathname: '/home' } };

  const history = useHistory();

  const [hasError, setHasError] = useState(false);

  const { setAuthContextData } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CredentialsDTO>();

  const onSubmit = (credentialsDTO: CredentialsDTO) => {
    requestBackendLogin(credentialsDTO)
      .then((response) => {
        console.log('credentialsDTO: ', credentialsDTO);
        console.log('response.data: ', response.data);
        saveAuthData(response.data);
        setHasError(false);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        });
        console.log('before history replace');
        history.replace(from);
      })
      .catch((error) => {
        setHasError(true);
        console.log('ERRO', error);
      });
  };

  return (
    <div className="admin-login">
      <div className="admin-login-form">
        <div className="admin-login-title">
          <h1>LOGIN</h1>
        </div>
        {hasError && (
          <div className="admin-login-form-alert alert alert-danger">
            Erro ao tentar efetuar o login
          </div>
        )}
        <form
          className="admin-login-form-body"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="admin-login-form-fields">
            <input
              {...register('username', {
                required: 'Campo obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email inválido',
                },
              })}
              type="text"
              className={`form-control base-input ${
                errors.username ? 'is-invalid' : ''
              }`}
              placeholder="Email"
              name="username"
            />
            <div className="invalid-feedback d-block">
              {errors.username?.message}
            </div>
            <input
              {...register('password', {
                required: 'Campo obrigatório',
              })}
              type="password"
              className={`form-control base-input ${
                errors.password ? 'is-invalid' : ''
              }`}
              placeholder="Password"
              name="password"
            />
            <div className="invalid-feedback d-block">
              {errors.password?.message}
            </div>
          </div>
          <div className="admin-login-form-button">
            <button className="btn btn-primary ">FAZER LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
function setHasError(arg0: boolean) {
  throw new Error('Function not implemented.');
}

function setAuthContextData(arg0: { authenticated: boolean; tokenData: any }) {
  throw new Error('Function not implemented.');
}
