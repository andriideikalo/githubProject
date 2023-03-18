import styled from 'styled-components';

export const ListLinc = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  list-style: none;
`;
export const ItemLinc = styled.li`
  cursor: pointer;
  padding: 8px;
  :hover {
    color: orange;
  }
`;
export const Linc = styled.a`
  color: black;
  text-decoration: none;
  :hover {
    color: orange;
  }
`;
