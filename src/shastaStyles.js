import styled from "styled-components"
import {
    theme,
    Text,
    SafeLink,
    Button,
    TextInput,
    IconCheck,
    IconCross,
  } from '@aragon/ui'

  const ShastaButton = styled(Button)`
  && {

    background-image: none;
    background-color: #9c3779;
    &:after {
        background-image: none;
        background-color: #9c3779;
    }
    &:disabled {
        color: #FFFFFF;
        background-color: #E6E6E6;
    }
  }
  
  `
const OpenOrgButton = styled(Button)`

&& {
    background: transparent;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(230, 230, 230);
    border-image: initial;
}

`


  export {ShastaButton, OpenOrgButton}