import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    padding: 60px 0;
    background: #FAFAFD;

        .container {
            display: flex;

            .col {
                button {
                    padding: 0 0 2px;
                    color: #686868;
                    font-size: 1.7rem;
                    font-weight: 600;
                    border: none;
                    border-bottom: 1px solid #fafafd;
                    background: none;
                    cursor: pointer;
                    transition: all 0.3s ease;

                    &:hover {
                        color: #000;
                        border-bottom: 1px solid #000;
                        transition: all 0.3s ease;
                    }

                    &+ button {
                        margin-left: 30px;
                    }
                }
            }
        }
`;

export const FooterBox = styled.div`
  margin-right: 50px;
  .col {
    max-width: 400px;
    height: auto;
    min-height: 400px;
    background-color: #ffffff
    .colOne {
      margin-right: 80px;
    }
  }
  
  button {
    padding: 0 0 2px;
    color: #686868;
    font-size: 1.7rem;
    font-weight: 600;
    border: none;
    border-bottom: 1px solid #fafafd;
    background: none;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      color: #000;
      border-bottom: 1px solid #000;
      transition: all 0.3s ease;
    }
    &+ button {
      margin-left: 30px;
    }
  }

  .row {
    gap: 20px;
  }
`

export const List = styled.ul`
    display: flex;
    max-width: 960px;
    margin-top: 14px;
    flex-wrap: wrap;
    gap: 5px 15px;
`;

export const ListItem = styled.li`
    color: #686868;
    font-size: 1.5rem;

    &+ li {
        display: flex;
        align-items: center;

        &::before {
            content: '';
            display: block;
            width: 1px;
            height: 12px;
            margin-right: 15px;
            background: #686868;
        }
    }
`;