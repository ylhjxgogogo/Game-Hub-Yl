import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import useGameQueryStore from "../store/strore";
import { useNavigate } from "react-router-dom";
const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();
  const handleClick = () => {
    if (ref.current) {
      ref.current.value = "";
    }
    setSearchText("");
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={10}
          variant="filled"
          placeholder="Search games..."
        />
        <InputRightElement width="4.5rem">
          <Button
            h="1.75rem"
            size="sm"
            onClick={handleClick}
            children={<MdCancel />}
          ></Button>
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
