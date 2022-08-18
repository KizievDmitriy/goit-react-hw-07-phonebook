import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contactSlice';

import { FilterTitle, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  
    return (
      <>
        <FilterLabel>
          <FilterTitle>Find contacts by name</FilterTitle>
          <FilterInput
            type="text"
            value={filter}
            onChange={e => dispatch(changeFilter(e.target.value))}
            placeholder="Enter Name"
          />
        </FilterLabel>
      </>
    );
}
