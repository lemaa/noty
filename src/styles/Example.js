import { animated } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
 
 
.main-section { 
 
    height: 100%;
    display: inline-flex;
 
  }
`;

const ContainerM = styled(animated.div)`
  position: relative;
  padding: 0px;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
  margin: 5px;
`;

const Item = styled(animated.div)`
  width: 50px;
  height: 30px;
  background: white;
  border-radius: 5px;
  will-change: transform, opacity;
`;

export { Global, ContainerM, Item };
