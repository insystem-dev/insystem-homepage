import styled from 'styled-components';
import {
    width,
    height,
    color,
    space,
    border,
    boxShadow,
    borderRadius
} from 'styled-system';

const NavMenuWrapper = styled.ul`
display: flex;
width: 640px;
height: 70px;
align-items: center;

> li {
    display: flex;
    width: 160px;
    height: 70px;
    align-items: center;
    justify-content: center;

    &.active {
        a {
            color: #6194F4;
            font-weight: bold;
        }
    }
    
    &:hover {
        a {
            color: #6194F4;
            font-weight: bold;
            border-bottom: 3px solid #6194F4;
        }
    }

    > a {
        display: inline-block;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 70px;
    }
}
`

const DeptMenuWrapper = styled.ul`
> li {
    display: flex;
    width: 160px;
    height: 50px;
    align-items: center;
    justify-content: center;

    &.active {
        a {
            color: #fff;
            font-weight: bold;
            background: #6194F4;
        }
    }

    &:hover {
        a {
            color: #fff;
            font-weight: bold;
            background: #4077DD;
        }
    }

    > a {
        display: inline-block;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 50px;
    }
}
`

NavMenuWrapper.displayName = 'NavMenuWrapper';
DeptMenuWrapper.displayName = 'DeptMenuWrapper';

export { NavMenuWrapper, DeptMenuWrapper };