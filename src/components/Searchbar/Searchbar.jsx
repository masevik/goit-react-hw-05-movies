import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormIcon,
  SearchFormInput,
} from './Searchbar.styled';
import { Box } from 'components/Box';

export const Searchbar = ({ valueQuery, onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = event => {
    const { value } = event.target;
    setQuery(value);
  };

  const reset = () => {
    setQuery('');
  };

  const onHandleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
    reset();
  };

  return (
    <Box
      backgroundColor="#3f51b5"
      padding="0px 16px 12px"
      margin="0 auto"
      width="100%"
    >
      <SearchForm onSubmit={onHandleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>
            <SearchFormIcon />
          </SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          name="query"
          value={query}
          onChange={onChange}
        />
      </SearchForm>
    </Box>
  );
};

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };
