import React from 'react'
import { Button } from '@aragon/ui'
import AppLayout from '../../components/AppLayout/AppLayout'
import styled from 'styled-components'
import Option from './Option'

const Content = styled.div`
  max-width: 600px;
  padding: 30px;
`

class Shasta extends React.Component {

  redirectToShasta() {
    window.location.href = "https://app.shasta.world/sign-in"
  }
  render() {
    return (
      <AppLayout title="Go to Shasta">
        <Content>
          <Option
            name="Shasta manager"
            text={`
              Click on the button below to acces the shasta managing of this organization. You may have to sign in again
            `}
          >
          </Option>
            <Button
              mode="secondary"
              onClick={this.redirectToShasta}
            >
              Go to Shasta
              </Button>
              </Content>
      </AppLayout>
        )
      }
    }
    
    export default Shasta
