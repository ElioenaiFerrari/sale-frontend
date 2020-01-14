import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    padding:0;
    outline:0;
    margin:0;
    box-sizing:border-box;
    font-size: 16px;
    font-family: 'Roboto', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    --webkit-font-smoothing: antialiased !important;

    body{
        background: #eee;
    }
`;
