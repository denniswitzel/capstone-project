import React from 'react'
import styled from 'styled-components'

export default {
    title: 'Design/Colors',
    parameters: {
      controls: { hideNoControlsWarning: true },
    },
  }
  
  export const PrimaryColors = () => {
    return (
      <>
        <Row>
          <ColorExample name="green" hex="#4BDB80" />
          <ColorExample name="grey" hex="#8E9091" />
        </Row>
        </>
    )
  }

  export const SecondaryColors = () => {
    return (
      <>
        <Row>
          <ColorExample name="turquoise" hex="#4BDBA4" />
          <ColorExample name="lightgrey" hex="#F4F4F4" />
          <ColorExample name="white" hex="#FFFFFF" />
        </Row>
        </>
    )
  }
  
  function ColorExample({ name, hex }) {
    return (
      <CenterColumn>
        <ColorBox name={name} />
      <p><span style={{fontWeight: 700}}>{name.toUpperCase()}</span>  –  {hex}</p>
      </CenterColumn>
    )
  }
  
  
  const CenterColumn = styled.section`
    display: flex;
    flex-direction: column;
    
    p {
      margin-top: 20px; 
      margin-bottom: 40px; 
      color: #8E9091;
    }
  `
  
  const Row = styled.section`
    width: calc(100vw - 1rem);
    padding: 3rem 4rem 0 3rem;
  `
  
  const StyledIconExample = styled(CenterColumn)`
    svg {
      width: 50px;
      height: 50px;
    }
  `
  
  const ColorBox = styled.div`
    border-radius: 0 0 20px 20px;
    height: 200px;
    background-color: ${(props) => 'var(--' + props.name + ')'};
    border: ${(props) => props.name === 'lightgrey' ? '1px solid #8E9091' : 'none'};
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  `