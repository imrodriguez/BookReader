import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;

    canvas {
        filter: ${props => props.invert ? 'invert(100%)' : 'none'};
    }
`

export const Options = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;

    button {
        background: none;
        border: none;
        font-size: 1.5em;
    }
`