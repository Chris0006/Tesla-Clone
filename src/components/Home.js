import React from 'react'
import styled from 'styled-components'
import Section from './Section'


function Home() {
  return (
    <Container>
        <Section 
            title="Model S"
            description="Online Order for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section
            title="Model Y"
            description="Online Order for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        
        <Section
            title="Model 3"
            description="Online Order for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        
        />

        <Section
            title="Model X"
            description="Online Order for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        
        />

        <Section
            title="Lowerst Cost Solar Panels"
            description="Money-back guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn Now"
        
        />

        <Section
            title="Solar for New Roofs"
            description="Money-back guarantee"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
        
        />

        <Section
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftBtnText="Order Now"
        />

    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;  
 `