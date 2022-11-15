import { useCallback } from 'react';
import { inputCnstStore } from '../../../state/client/store';
import { debounce } from '../../Modal/utils';
import { SearchBarWrapper } from './style';

export function SearchBar() {
  const { inputCnst, setInputCnst } = inputCnstStore();

  const onChageInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    debounce(setInputCnst(e.target.value), 500);
  }, [inputCnst]);

  return (
    <form>
      <SearchBarWrapper>
        <div>
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input id="search" type="text" name="search" placeholder="Serach..." onChange={onChageInput} />
      </SearchBarWrapper>
    </form>
  );
}
