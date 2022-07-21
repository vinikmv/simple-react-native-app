import styled, { css } from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.dark};
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: ${RFPercentage(17)}px;
    background-color: ${theme.colors.secondary};
  `}
`;
