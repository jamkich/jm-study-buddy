import { SearchBarWrapper, StatusInfo, SearchWrapper, SearchResults, SearchResultsItem } from './SearchBar.styles';
import { useSearchBar } from 'hooks/useSearchBar';
import { Input } from 'components/atoms/Input/Input';

export const SearchBar = () => {
  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps, selectedItem, onClickActions, matchingStudents } =
    useSearchBar();

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>

      <SearchWrapper {...getComboboxProps()}>
        <Input {...getInputProps()} name="Search" id="Search" placeholder="Search" />
        <SearchResults isVisible={isOpen && matchingStudents.length} {...getMenuProps()} aria-label="results">
          {isOpen &&
            matchingStudents.map((item, index) => (
              <SearchResultsItem
                {...getItemProps({ item, index })}
                key={item.id}
                isHighlighted={highlightedIndex === index}
                selectedItem={selectedItem === item}
                onClick={() => onClickActions(item)}
              >
                {item.name}
              </SearchResultsItem>
            ))}
        </SearchResults>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
