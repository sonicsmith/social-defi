import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";

const SearchBox = () => {
  return (
    <Stack spacing={4}>
      <InputGroup bg={"gray.100"}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color={"gray.300"} />
        </InputLeftElement>
        <Input type="text" placeholder="Search" />
      </InputGroup>
    </Stack>
  );
};

export default SearchBox;
