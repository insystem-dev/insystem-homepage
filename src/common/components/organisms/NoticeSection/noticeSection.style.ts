import styled from "styled-components";

export const NoticeSection = styled.section`
  position: relative;
  display: flex;
  width: 1240px;
  margin-bottom: 70px;
  box-shadow: ${(props) => props.theme.shadow.navigation};

  .container {
    position: relative;
    margin-bottom: 70px;

    .row {
      overflow: hidden;
      display: flex;
      box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);

      .row-title {
        width: 190px;
        min-width: 190px;
        height: 200px;
        padding: 30px 35px;
        color: #fff;
        font-size: 2.4rem;
        font-weight: 500;
        letter-spacing: -1px;
        background: linear-gradient(140deg, #6194f4, #4077dd);
      }
    }
  }
`;

export const NoticeBox = styled.div`
  overflow: hidden;
  display: grid;
  width: 100%;
  grid-template-columns: 190px 210px 210px 210px 210px 210px;
  grid-template-rows: 220px;
`;

export const NoticeTitBox = styled.div`
  padding: 30px 35px;
  color: ${(props) => props.theme.colors.white};
  font-size: 2.8rem;
  font-weight: 600;
  letter-spacing: -0.05rem;
  background: ${(props) => props.theme.gradient.askBoxBg};
`;
