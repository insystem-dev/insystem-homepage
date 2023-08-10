import styled from 'styled-components';
import AboutusBG from '../../../assets/image/agency/aboutus/about-background.png';

export const AboutPageWrapper = styled.section`
    background-image: url(${AboutusBG?.src});
    background-size: calc(50vw);
    background-position: 0 0;
    background-repeat: no-repeat;

    .about-top {
        padding: 126px 0;

        .section-header {
            color: #313131;
            font-size: 4.4rem;
            font-weight: 500;
            line-height: 5.6rem;
            letter-spacing: -1.5px;

            span {
                color: #6093F4;
                font-weight: 600;
            }
        }

        .section-header-divider {
            width: 90px;
            height: 6px;
            margin: 30px 0 40px;
            background-color: #6093F4;
        }

        p {
            margin-bottom: 0;
            font-size: 2rem;
            letter-spacing: -1px;
        }

        .row {
            display: flex;
            margin-top: 60px;
            flex-direction: column;
            align-items: flex-end;
            gap: 20px;
        }
    }

    .about-source {
        padding: 100px 0;
        background: #F2F3F7;

        .row {
            display: flex;
            margin: 0 auto;
            gap: 20px;
            justify-content: center;

            .list__block-tit {
                font-size: 2.8rem;
                font-weight: 500;
                font-family: 'Roboto';
                letter-spacing: 0;
            }

            .list__block-label {
                margin: 3px 0 28px;
                color: #6093F4;
                font-size: 2.2rem;
                font-weight: 500;
                font-family: 'Roboto';
                letter-spacing: 0;
            }

            .list__block-cont {
                padding: 0 20px;
                color: #404040;
                font-size: 1.8rem;
                text-align: center;
                letter-spacing: -1px;
            }
        }
    }

    .about-history {
        display: flex;
        margin: 100px 0;
        flex-direction: row;
        
        .section-header {
            width: 190px;

            p {
                color: #6194F4;
                font-size: 2.8rem;
                letter-spacing: -1.5px;
            }

            .section-header-divider {
                width: 40px;
                height: 6px;
                margin-top: 20px;
                background: #6194F4;
            }
        }

        .section-content {
            width: calc(100% - 190px);
            max-width: 1050px;
            margin: 100px 0;

            img {
                width: 100%;
                height: 100%;
                transform: translateZ(0);
                backface-visibility: hidden;
            }
        }
    }

    .about-certificate {
        display: flex;
        margin: 100px 0;

        .section-header {
            width: 190px;

            p {
                color: #6194F4;
                font-size: 2.8rem;
                letter-spacing: -1.5px;
            }

            .section-header-divider {
                width: 40px;
                height: 6px;
                margin-top: 20px;
                background: #6194F4;
            }
        }

        .section-content {
            display: flex;
            flex-direction: column;

            ul {
                height: 270px;

                &+ ul {
                    margin-top: 30px;
                }

                &.list-certificate {
                    height: 250px;
                    margin-bottom: 50px;
                }

                li {
                    float: left;
                    width: 190px;

                    &+ li {
                        margin-left: 20px;
                    }
                }
            }
        }
    }
`;

export const AboutPageBox = styled.div`
`
