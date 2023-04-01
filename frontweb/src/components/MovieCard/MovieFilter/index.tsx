import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Genre } from 'types/genre';
import { requestBackend } from 'util/requests';
import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import { AxiosRequestConfig } from 'axios';
import Select from 'react-select';
import './styles.css';

export type MovieFilterData = {
  genre: Genre | null;
};

type Props = {
  onSubmitFilter: (data: MovieFilterData) => void;
};

const MovieFilter = ({ onSubmitFilter }: Props) => {
  const { register, handleSubmit, setValue, getValues, control } =
    useForm<MovieFilterData>();

  const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

  const onSubmit = (formData: MovieFilterData) => {
    onSubmitFilter(formData);
  };

  const handleFormClear = () => {
    setValue('genre', null);
  };

  const handleChangeGenre = (value: Genre) => {
    setValue('genre', value);
    const obj: MovieFilterData = {
      genre: getValues('genre'),
    };
    onSubmitFilter(obj);
  };

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/genres',
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      console.log('Genres: ', response.data);
      setSelectGenres(response.data);
    });
  }, []);

  /*
  const onSubmit = (formData: GenreFilterData) => {
    onSubmitFilter(formData);
  };

  const handleFormClear = () => {
    setValue('name', '');
  };

  useEffect(() => {
    requestBackend({ url: '/genres' }).then((response) => {
      console.log('Genres: ', response.data);
      setSelectGenres(response.data.content);
    });
  }, []);

  form onSubmit={handleSubmit(onSubmit)}
*/

  return (
    <div className="product-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="product-filter-form">
        <div className="product-filter-bottom-container">
          <div className="product-filter-genre-container">
            <Controller
              name="genre"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={selectGenres}
                  isClearable
                  placeholder="Gênero"
                  classNamePrefix="product-filter-select"
                  onChange={(value) => handleChangeGenre(value as Genre)}
                  getOptionLabel={(genre: Genre) => genre.name}
                  getOptionValue={(genre: Genre) => String(genre.id)}
                />
              )}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MovieFilter;
