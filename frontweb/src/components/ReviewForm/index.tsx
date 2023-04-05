import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Review } from 'types/review';
import { requestBackend } from 'util/requests';
import './styles.css';

type Props = {
  movieId: string;
  onInsertReview: (review: Review) => void;
};

type FormData = {
  movieId: number;
  text: string;
};

const ReviewForm = ({ movieId, onInsertReview }: Props) => {
  console.log(movieId);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);
    console.log(formData);

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      data: formData,
      withCredentials: true,
    };

    requestBackend(config)
      .then((response) => {
        setValue('text', '');
        onInsertReview(response.data);
        
        toast.info('SUCESSO AO SALVAR AVALIAÇÃO.');
      })
      .catch((error) => {
        console.log('Erro: ', error.message);
        toast.error('ERRO AO SALVAR AVALIAÇÃO!');
      });
  };

  return (
    <div className="container-fluid">
      <div className="review-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('text', {
              required: 'Campo Obrigatório',
            })}
            type="text"
            name="text"
            placeholder="Deixe sua avaliação aqui"
          />
          <div>{errors.text?.message}</div>
          <div className="review-form-button">
            <button className="btn btn-primary" type="submit">
              SALVAR AVALIAÇÃO
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
