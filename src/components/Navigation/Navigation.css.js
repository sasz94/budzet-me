import styled from 'styled-components'



import Wrapper from '../Wrapper'


export const Container = styled.div`
background-cpolor: ${({ theme }) => theme.colors.gray.light}
display: flex;
padding: ${({ theme }) => theme.spacing.sm}px 0;
justify-content: space-between;

`

// zmodyfikowany element wrapper z navigation ( zmieniony )
export const NavigationWrapper = styled(Wrapper)`
    display: flex;
    justify-content: space-between;
`


export const List = styled.ul`
    display: flex;
    
`