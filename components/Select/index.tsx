import React, { FC } from 'react'
import Select from 'react-select'
import styled from 'styled-components';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

type Props = {
  width?: string;
};

const Wrapper = styled.div<{ width: string }>`
  width: 300px;
`;

const customStyles = {
  option: (styles, state) => ({
    ...styles,
    color: '#000',
    backgroundColor: state.isFocused || state.isSelected || state.isActivated ? '#F8FAFC;' : '#fff',
    padding: 20,
    ':active': {
      ...styles[':active'],
      backgroundColor:
        !state.isDisabled && (state.isSelected ? '#F8FAFC' : '#fff'),
    },

  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

const Component: FC<Props> = ({ width }) => (
  <Wrapper width={width}>
    <Select options={options} styles={customStyles} />
  </Wrapper>
)

export default Component;
