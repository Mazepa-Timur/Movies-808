import styled from 'styled-components';

const StyledCounter = styled.div`
  .darkTheme {
    --user-color: ${(props) => props.color || '#1889C8'};
  }
  .lightTheme {
    --user-color: ${(props) => props.color || '#1889C8'};
  }
`;

const StyleCustom = (props) => {
  return <StyledCounter color={props.color}>{props.children}</StyledCounter>;
};

export default StyleCustom;
