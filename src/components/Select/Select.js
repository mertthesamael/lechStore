import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useState } from "react";
import "./select.scss";
const Select = ({ placeholder, list }) => {
  const [placeHolder, setPlaceHolder] = useState(placeholder);

  const onSelected = (e) => {
    setPlaceHolder(e.target.innerText);
  };

  return (
    <Box className={"select"} margin="1rem 1rem 1rem 0">
      <Menu>
        <MenuButton
          fontSize="20px"
          borderColor="#737373"
          color="#C31433"
          as={Button}
        >
          {placeHolder}
        </MenuButton>
        <MenuList>
          {list?.map((item) => (
            <MenuItem color="#C31433" fontSize="20px" onClick={onSelected}>
              {item}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Select;
