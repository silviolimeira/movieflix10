import { ReactComponent as AuthImage } from 'assets/images/auth.svg';
import './styles.css';

const Banner = () => (
  <div className="admin-banner">
    <h1>Avalie Filmes</h1>
    <p>
      Diga o que você achou do seu <br />
      filme favorito
    </p>
    <AuthImage />
  </div>
);

export default Banner;
