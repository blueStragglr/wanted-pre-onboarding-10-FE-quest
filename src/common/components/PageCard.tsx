import styled from 'styled-components';
import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { bcColorGradient } from '../../style/cssStyle';
import Txt from './Txt';
import Spacing from './Spacing';
import colors from '../../style/colors';

interface PageCardProps {
  to: string;
  icon: string;
  pageName: string;
  description: string;
  bgColor?: CSSProperties['backgroundColor'];
}

const PageCard = ({
  to,
  icon,
  pageName,
  description,
  bgColor = colors.purple200,
}: PageCardProps) => {
  return (
    <BoxLink to={to} $bgColor={bgColor}>
      <IconBox>
        <Icon>{icon}</Icon>
      </IconBox>
      <Spacing direction="vertical" size={8} />
      <Txt typography="h3" color="black">
        {pageName}
      </Txt>
      <Spacing direction="vertical" size={4} />
      <Txt typography="p" color="#5d5d5d">
        {description}
      </Txt>
    </BoxLink>
  );
};

export default PageCard;

const BoxLink = styled(Link)<{ $bgColor: CSSProperties['color'] }>`
  display: flex;
  flex-direction: column;
  justify-content: start;

  padding: 24px;
  height: 200px;

  width: 360px;

  border-radius: 8px;
  ${bcColorGradient}
`;

const IconBox = styled.div`
  border-radius: 10px;
  background-color: white;
  border: 1px solid navajowhite;

  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Icon = styled.p`
  width: 24px;
  height: 24px;
  text-align: center;
`;
