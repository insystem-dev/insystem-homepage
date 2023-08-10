import styled, { css } from 'styled-components';
import { Button_props } from '.';

export const AskSection_btn_style = styled.button<Button_props>`
  display: flex;
  margin-left: auto; 
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  font-size: 1.8rem;
  cursor: pointer;
  color: ${(props) =>
    { if (props.color == "white") {
        return props.theme.colors.white
    }
     else {
        return props.color
     }
    }
  };
  border: ${(props) =>
    { if (props.color == "white") {
      return "1px solid " + props.color
    } else {
      "1px solid " + props.theme.colors.secondary
    }
    }
  };
  border-radius: 43px;
  background: ${(props) => {
      if (props.background == "transparent") {
        return "none"
      }
      else {
        return props.color
      }
    }
  };
`

export const BusinessBtn_style = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 20px;

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 1.8rem;
    text-align: center;
    line-height: 50px;
    background: #6194F4;
    border-radius: 25px;
    transition: all 0.3s ease;

    &:hover {
      font-weight: 600;
      background: #4077DD;
      box-shadow: 0 4px 10px 0 rgb(0, 0, 0, .15);
      transition: all 0.3s ease;
    }
  }
`;

export const inquiryBtn_style = styled.button<Button_props>`
  width: 190px;
  height: 50px;
  font-size: 1.8rem;
  border-radius: 60px;
  color: ${(props) => {
    if (props.color == "blue") {
      return props.theme.colors.headingTitle
    } else {
      return props.theme.colors.white
    }
  }};
  background: ${(props) => {
    if (props.background == "blue") {
      return props.theme.colors.aboutBg
    } else {
      return props.theme.colors.none
    }
  }};
  border: ${(props) =>
    { console.log(props);
      if (props.border == "white") {
      return "1px solid " + props.theme.colors.headingTitle
    } else {
      return props.theme.colors.none
    }
    }
  };
`;

// const ButtonStyle = styled.button<Button_props>`
//   display: inline-flex;
//   min-height: 50px;
//   min-width: 48px;
//   font-size: 1.6rem;
//   font-weight: 500;
//   text-decoration: none;
//   text-transform: capitalize;
//   border-radius: 40px;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.3s ease;
//   cursor: pointer;
//   color: 'white',
//   fontSize: '1.8rem',
//   background: 'none',

//   &+ button {
//     margin-left: 10px;
//   }

//   &.outlined {
//     min-width: 150px;
//     background: none;
//     border: 1px solid white;

//     &:hover {
//       background: white;
//       color: #6194F4;
//       font-weight: 600;
//     }
//   }

//   &.filled {
//     color: #fff;
//     background: #6194F4;
//     border: none;

//     &:hover {
//       background: #4077DD;
//       font-weight: 600;
//     }
//   }

//   &.lined {
//     color: #6194F4;
//     background: none;
//     border: 1px solid #6194F4;

//     &:hover {
//       font-weight: 600;
//       background: #F3F3F3;
//     }
//   }

//   &.edit-primary {
//     min-width: 60px;
//     min-height: 30px;
//     color: #fff;
//     font-size: 1.4rem;
//     background: #6194F4;
//     border-radius: 2px;
//     border: none;

//     a {
//       color: #fff;
//       font-size: 1.4rem;
//     }

//     &:hover {
//       background: #4077DD;
//     }
//   }

//   &.edit-minor {
//     min-width: 60px;
//     min-height: 30px;
//     color: #fff;
//     font-size: 1.4rem;
//     background: #5A5A5A;
//     border-radius: 2px;
//     border: none;

//     &:hover {
//       background: #424242;
//     }
//   }

//   &.edit-inactive {
//     min-width: 60px;
//     min-height: 30px;
//     color: #ddd;
//     font-size: 1.4rem;
//     background: none;
//     border-radius: 2px;
//     border: 1px solid #ddd;
//     cursor: auto;
//   }

//   a {
//     display: flex;
//     width: 100%;
//     height: 100%;
//     justify-content: center;
//     align-items: center; 
//   }

//   &:focus {
//     outline: none;
//   }
// `;
