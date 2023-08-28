import styled from "styled-components";

export const LoginSection = styled.section`
  display: flex;
  min-height: calc(100vh - 350px);
  padding: 70px 0;
  background: ${(props) => props.theme.colors.footerBg};
  align-items: center;
  justify-content: center;
`;

export const LoginForm = styled.form`
  display: flex;
  width: 500px;
  padding: 50px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadow.navigation};
  flex-direction: column;
  gap: 20px;

  button {
    margin-top: 20px;
  }
`;

export const LoginTit = styled.div`
  font-size: 2.8rem;
  font-weight: 600;
  margin-bottom: 20px;
`;
