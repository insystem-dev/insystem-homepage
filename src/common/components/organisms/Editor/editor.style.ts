import styled from 'styled-components';

const EditorWrapper = styled.div`
    background: #FAFAFD;

    .container {
        padding: 70px 0;

        .editor-wrap {
            padding: 50px;
            background: #fff;
            box-shadow: 0px 2px 10px 0px rgba(0,0,0,.1);

            .editor-header-divider {
                width: 40px;
                height: 4px;
                margin: 30px auto;
                background: #6194F4;
            }

            .input-wrap {
                max-width: 1000px;
                margin: 0 auto 30px;
            }

            .quill {
                max-width: 1000px;
                margin: 0 auto;

                .ql-editor {
                    height: 500px;
                }
            }

            .row {
                &.checkbox {
                    width: 1000px;
                    margin: 30px auto 0;
                }
                
                &.btn {
                    width: 390px;
                    margin: 30px auto 0;
                }
            }
        }
    }
`;

export default EditorWrapper;