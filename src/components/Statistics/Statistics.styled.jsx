import styled from '@emotion/styled';

export const Box = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
  background: ${props => props.theme.colors.white};
`;

export const StatisticTitle = styled.h3`
  font-size: ${props => props.theme.spacing(8)};
  font-weight: 700;
  color: ${props => props.theme.colors.dark};
  margin-bottom: 30px;
  text-align: center;
`;

export const StatisticsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;
