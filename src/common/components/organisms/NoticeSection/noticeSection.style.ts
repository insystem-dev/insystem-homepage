import styled, { css } from 'styled-components';

export const NoticeSectionWrapper = styled.section`
    .container {
        position: relative;
        margin-bottom: 70px;

        .row {
            overflow: hidden;
            display: flex;
            box-shadow: 0px 4px 20px 0px rgba(0,0,0,.15);

            .row-title {
                width: 190px;
                min-width: 190px;
                height: 200px;
                padding: 30px 35px;
                color: #fff;
                font-size: 2.4rem;
                font-weight: 500;
                letter-spacing: -1px;
                background: linear-gradient(140deg, #6194F4, #4077DD);
            }
        }

        .notice-link {
            position: absolute;
            display: flex;
            width: 46px;
            height: 46px;
            top: 77px;
            right: -8px;
            color: #fff;
            font-size: 2.8rem;
            line-height: 46px;
            background: #6194F4;
            border-radius: 30px;
            justify-content: center;
            align-items: center;
            box-shadow: 0px 2px 10px 0px rgba(0,0,0,.15);
            transition: all 0.3s ease;
            -webkit-transition: all 0.3s ease;

            &:hover {
                width: 48px;
                height: 48px;
                top: 76px;
                right: -9px;
                font-size: 3rem;
                line-height: 48px;
                background: #4077DD;
            }
        }
    }
`;

export const NoticeSection_box = styled.div`
  ${(props) => {
    if (props.className == "row") {
      return css(
        {overflow: 'hidden'},
        {display: 'flex'},
        {boxShadow: '0px 4px 20px 0px rgba(0,0,0,.15)'},
      )
    } else if (props.className == "row-title") {
      return css(
        {position: 'relative'},
        {overflow: 'hidden'},
        {display: 'flex'},
        {boxShadow: '0px 4px 20px 0px rgba(0,0,0,.15)'},
        {width: '190px'},
        {height: '200px'},
        {padding: '30px 35px'},
        {color: '#fff'},
        {fontSize:'2.4rem'},
        {fontWeight: '500'},
        {letterSpacing: '-1px'},
        {background: 'linear-gradient(140deg, #6194F4, #4077DD)'},
      )
    }
  }};
`