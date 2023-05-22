import styled from '@emotion/styled';
import { getRandomHexColor } from 'service/RandomColor';

export const StatisticBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${props => getRandomHexColor()};
  box-shadow: ${props => props.theme.shadows.small};

  padding-top: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(10)};
  padding-bottom: ${props => props.theme.spacing(5)};
  padding-left: ${props => props.theme.spacing(10)};
`;

export const StatisticText = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.spacing(8)};
`;

export const StatisticCounter = styled.span`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.white};
`;
