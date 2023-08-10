'use client'

import styled, { css } from 'styled-components';
import AboutusBG from '../../../assets/image/agency/aboutus/about-background.png';
import CustomBG from '../../../assets/image/agency/main/main-about-img01.jpg';
import BlankBG from '../../../assets/image/agency/main/main-about-img02.png';
import SolutionBG from '../../../assets/image/agency/main/main-about-img03.jpg';
import PlatformBG from '../../../assets/image/agency/main/main-about-img04.jpg';
import { AboutSection_props } from './aboutSection';

export const AboutSectionWrapper = styled.section<AboutSection_props>`
    padding-top: 165px;
    padding-bottom: 365px;
    background-image: url(${ AboutusBG?.src });
    background-size: cover;

    .section-header-divider {
        width: 90px;
        height: 6px;
        margin: 30px 0;
        background: #6194F4;
    }

    .row {
        .feature__block {
            height: 370px;
            background-size: cover;
            box-shadow: 0px 2px 14px 0 rgba(0,0,0,.1);

            &.custom, &.solution {
                width: calc(100% - 430px);
            }

            &.blank, &.platform {
                width: 410px;
            }

            &.custom, &.solution, &.platform {
                cursor: pointer;

                .content__wrapper {
                    display: flex;
                    opacity: 0;
                    
                        
                    .content-divider {
                        width: 50px;
                        height: 4px;
                        margin: 20px 0;
                        background: #fff;
                    }
                }

                &:hover {
                    box-shadow: 0px 2px 20px 0 rgba(0,0,0,.4);

                    .content__wrapper {
                        opacity: 1;
                        background: rgba(0,0,0,.7);
                        transition: opacity 0.3s ease;

                        .flaticon-next {
                            color: #fff;
                            font-size: 2.6rem;
                            font-weight: bold;
                            text-align: right;
                        }
                    }
                }
            }

            &.custom {
                background-image: url(${CustomBG?.src});

                .content__wrapper {
                    justify-content: flex-end;
                }
            }

            &.blank {
                overflow: hidden;
                background: #0E2859;
                border-radius: 0 210px 0 0;

                .content__wrapper {
                    background-image: url(${BlankBG?.src});
                    background-size: cover;

                    .flaticon-next {
                        display: none;
                    }
                }
            }

            &.platform {
                overflow: hidden;
                background-image: url(${SolutionBG?.src});
                border-radius: 0 0 0 210px;

                .content__wrapper {
                    p, h2 {
                        text-align: right;
                    }

                    .content-divider {
                        margin-left: auto;
                    }
                }
            }

            &.solution {
                background-image: url(${PlatformBG?.src});
            }

            
        }
    }
`

export const AboutSectionBox = styled.div`
    ${(props) => {
        if (props.className == "row") {
            return css(
                {gap: '20px'},
                {display: 'flex'},
                {flexDirection: 'row'},
                {flexWrap: 'wrap'},
            )
        }
    }}
`