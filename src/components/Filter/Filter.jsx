import { useDispatch } from 'react-redux';
import {
  ButtonWrapper,
  FilterWrapper,
  Form,
  Label,
  OptionsWrapper,
  Select,
} from './Filter.styled';
import { languages, levels, prices } from './filtersOptions';
import { useState } from 'react';
import { removeFilter, setFilter } from '../../redux/teachers/teachersSlice';
import { Button } from 'components/Button/Button';

export const Filter = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const dispatch = useDispatch();

  const handleSelectLanguage = event => {
    setSelectedLanguage(event.target.value);
    dispatch(setFilter({ ...getFilter(), language: event.target.value }));
  };

  const handleSelectLevel = event => {
    setSelectedLevel(event.target.value);
    dispatch(setFilter({ ...getFilter(), level: event.target.value }));
  };

  const handleSelectPrice = event => {
    setSelectedPrice(event.target.value);
    dispatch(setFilter({ ...getFilter(), price: event.target.value }));
  };

  const getFilter = () => {
    return {
      language: selectedLanguage,
      level: selectedLevel,
      price: selectedPrice,
    };
  };

  const reset = () => {
    setSelectedLanguage('English');
    setSelectedLevel('A1 Beginner');
    setSelectedPrice('25');
  };

  const handleRemoveFilter = () => {
    dispatch(removeFilter());
    reset();
  };

  return (
    <FilterWrapper>
      <Form>
        <OptionsWrapper>
          <Label htmlFor="language">Languages</Label>
          <Select
            id="language"
            name="language"
            value={selectedLanguage}
            onChange={handleSelectLanguage}
          >
            {languages.map((language, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            ))}
          </Select>
        </OptionsWrapper>

        <OptionsWrapper>
          <Label htmlFor="level">Level of knowledge</Label>
          <Select
            id="level"
            name="level"
            value={selectedLevel}
            onChange={handleSelectLevel}
          >
            {levels.map((level, index) => (
              <option key={index} value={level}>
                {level}
              </option>
            ))}
          </Select>
        </OptionsWrapper>

        <OptionsWrapper>
          <Label htmlFor="price">Price</Label>
          <Select
            id="price"
            name="price"
            value={selectedPrice}
            onChange={handleSelectPrice}
          >
            {prices.map((price, index) => (
              <option key={index} value={price}>
                {price}
              </option>
            ))}
          </Select>
        </OptionsWrapper>
        <ButtonWrapper>
          <Button
            padding={'10px 48px'}
            text={'Reset'}
            type={'button'}
            handleClick={handleRemoveFilter}
          />
        </ButtonWrapper>
      </Form>
    </FilterWrapper>
  );
};
