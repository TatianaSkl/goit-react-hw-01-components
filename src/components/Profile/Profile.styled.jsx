import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: ${props => props.theme.spacing(100)};
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;

  box-shadow: ${props => props.theme.shadows.regular};
  border-radius: ${props => props.theme.spacing(4)};
`;

export const Description = styled.div`
  background: ${props => props.theme.colors.white};

  padding-top: ${props => props.theme.spacing(8)};
  padding-bottom: ${props => props.theme.spacing(8)};
`;

export const Avatar = styled.img`
  width: ${props => props.theme.spacing(38)};
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.theme.spacing(8)};
`;

export const UserName = styled.p`
  font-size: ${props => props.theme.fontSizes.large};
  text-align: center;
  font-weight: 700;
  margin-bottom: ${props => props.theme.spacing(4)};
`;

export const Tag = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  text-align: center;
  color: ${props => props.theme.colors.gray};
  margin-bottom: ${props => props.theme.spacing(4)};
`;

export const Location = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.gray};
  text-align: center;
`;

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.light};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};

  border-radius: ${props => props.theme.spacing(2)};
  box-shadow: ${props => props.theme.shadows.small};

  padding-top: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(10)};
  padding-bottom: ${props => props.theme.spacing(5)};
  padding-left: ${props => props.theme.spacing(10)};
`;

export const Label = styled.span`
  font-size: ${props => props.theme.spacing(4)};
  color: ${props => props.theme.colors.gray};

  display: block;
`;

export const Quantity = styled.span`
  font-size: ${props => props.theme.spacing(6)};

  display: block;
`;
