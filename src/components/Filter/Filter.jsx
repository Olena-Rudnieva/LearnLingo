import {
  FilterWrapper,
  Form,
  Label,
  OptionsWrapper,
  Select,
} from './Filter.styled';
import { languages, levels, prices } from './filtersOptions';
import { useState } from 'react';

export const Filter = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('French');
  const [selectedLevel, setSelectedLevel] = useState('A1 Beginner');
  const [selectedPrice, setSelectedPrice] = useState(25);

  const handleSelectLanguage = event => {
    setSelectedLanguage(event.target.value);
  };

  const handleSelectLevel = event => {
    setSelectedLevel(event.target.value);
  };

  const handleSelectPrice = event => {
    setSelectedPrice(event.target.value);
  };

  return (
    <FilterWrapper>
      <Form>
        <OptionsWrapper>
          <Label for="language">Languages</Label>
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
          <Label for="level">Level of knowledge</Label>
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
          <Label for="price">Price</Label>
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
      </Form>
    </FilterWrapper>
  );
};
