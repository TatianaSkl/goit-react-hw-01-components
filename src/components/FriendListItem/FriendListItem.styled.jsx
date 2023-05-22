import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;

  padding: 10px 20px 10px 20px;
  overflow: hidden;
  border-radius: 10px;

  box-shadow: ${props => props.theme.shadows.medium};
  cursor: pointer;

  transition-property: transform, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};

  background-color: ${props => props.theme.colors.white};

  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.small};
  }
`;

const bgColorIsOnline = props => {
  const { status, theme } = props;
  switch (status) {
    case true:
      return theme.colors.green;
    case false:
      return theme.colors.red;
    default:
      return theme.colors.gray;
  }
};

export const Status = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 20px;
  box-shadow: ${props => props.theme.shadows.small};
  background: ${bgColorIsOnline};
`;

export const Avatar = styled.img`
  width: 60px;
  border-radius: 10%;
  margin-right: 20px;
  box-shadow: ${props => props.theme.shadows.regular};
`;

export const Name = styled.p`
  color: ${props => props.theme.colors.dark};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.large};
  letter-spacing: ${props => props.theme.spacing(0.25)};
`;
