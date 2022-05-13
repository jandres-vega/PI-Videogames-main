import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createGame } from '../redux/actions/actions';

export const useForm = (initialForm, validation) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors(validation(form));
  };
  const handleSelectGenres = (e) => {
    if (form.genres.includes(e.target.value)) {
      alert('no pueden repetir generos');
    } else {
      setForm({
        ...form,
        genres: [...form.genres, e.target.value],
      });
    }
  };
  const handleSelectPlatforms = (e) => {
    if (form.platforms.includes(e.target.value)) {
      alert('no pueden repetir platforms');
    } else {
      setForm({
        ...form,
        platforms: [...form.platforms, e.target.value],
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(form));
    if (Object.keys(errors).length === 0) {
      dispatch(createGame(form));
      alert('game created');
      setForm({
        name: '',
        released: '',
        background_image: '',
        rating: '',
        description: '',
        genres: [],
        platforms: [],
      });
    } else {
      alert('Not created Game');
    }
  };
  return {
    errors,
    form,
    handleChange,
    handleSelectGenres,
    handleSelectPlatforms,
    handleSubmit,
  };
};
