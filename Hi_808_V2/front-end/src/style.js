import styled from 'styled-components';

const StyledCounter = styled.div`
  .darkTheme {
    --user-color: ${props => props.color};
  }
  .lightTheme {
    --user-color: ${props => props.color};
  }
`;
const StyleCustom = (props) => {
  return <StyledCounter color={props.color}>{props.children}</StyledCounter>;
};

export default StyleCustom;
