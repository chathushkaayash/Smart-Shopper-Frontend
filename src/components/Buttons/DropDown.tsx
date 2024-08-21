import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  label?: string;
  value: string;
  values: string[];
  onClick: (value: string) => void;
}

const DropDown = ({ label, value, values, onClick }: Props) => {
  const isActivated = value !== values[0];

  return (
    <Stack w="full" spacing={3}>
      {label && <Text>{label}</Text>}
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<BsChevronDown />}
          textAlign={"left"}
          borderWidth={1}
          borderRadius={"full"}
          fontWeight={400}
          bg=""
          color={isActivated ? "primary" : ""}
          borderColor={isActivated ? "primary" : ""}
        >
          {value}
        </MenuButton>
        <MenuList>
          {values.map((i, index) => (
            <MenuItem
              key={index}
              onClick={() => onClick(i)}
              color={i === value ? "primary" : ""}
            >
              {i}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Stack>
  );
};

export default DropDown;
