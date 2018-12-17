import styled from 'styled-components';

export const StyledNav = styled.nav `
  padding: 10px
  font-size: 17px;
  height: 38px;
  border-radius: 2px;
  
`;

export const AppColor = styled.div`
  background: #001f3f;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
`;

export const AppContainer = styled.div`
  font-family: monospace;
  text-align: center;
  color: white;
`;

export const DepContainer = styled.div`
  text-align: left;
  background: #002c59;
  height: 100%;
  margin: 10px;
  width: 800px;
  padding: 10px;
  color: #ECDB54;
  border-radius: 2px;
`;

export const CartContainer = styled.div`
  float: left;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
`;