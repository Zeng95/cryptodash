import styled from 'styled-components'
import { subtleBoxShadow, greenBoxShadow, lightBlueBackground } from './Styles'

export const Tile = styled.div`
  padding: 10px;
  ${subtleBoxShadow}
  ${lightBlueBackground}
`

export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`
