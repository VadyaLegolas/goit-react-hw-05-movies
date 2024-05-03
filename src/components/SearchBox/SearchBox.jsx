import { Wrapper, Input, Button } from "./SearchBox.styled";
import { HiSearch } from "react-icons/hi";

export const SearchBox = ({  onSubmit }) => {
  return (
 <> 
   <Wrapper onSubmit={onSubmit}>
    <Input type="text" placeholder="Поиск..." name="query" />
    <Button type="submit"><HiSearch size={'20px'} /></Button>
  </Wrapper>
 </>
   
  );
};
