import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
type Props = {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string | null;
};
const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const label = sortOrders.find((order) => order.value === selectedSortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by:{label?.label || "Relevance"}
      </MenuButton>

      <MenuList>
        {sortOrders.map((order) => {
          return (
            <MenuItem
              key={order.value}
              value={order.value}
              onClick={() => onSelectSortOrder(order.value)}
            >
              {order.label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
