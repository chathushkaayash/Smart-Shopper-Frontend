import useDebounce from "@/utils/useDebounce";
import {
  Center,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";

interface Props {
  value: string;
  setValue: (value: string) => void;
  width?: string;
}

const SearchBar = ({ value, setValue, width }: Props) => {
  const [SearchValue, setSearchValue] = useState("");

  const debouncedSearch = useDebounce(SearchValue);

  useEffect(() => {
    setValue(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <Center w={width || "full"}>
      <InputGroup borderColor={value !== "" ? "primary" : ""} w="80%">
        <InputLeftElement>
          <Icon as={IoSearchSharp} color="primary" />
        </InputLeftElement>
        <Input
          value={SearchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          placeholder="Search..."
          borderRadius="full"
          focusBorderColor="primary"
        />
      </InputGroup>
    </Center>
  );
};

export default SearchBar;
