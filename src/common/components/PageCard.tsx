import styled from 'styled-components';
import { CSSProperties } from 'react';
import theme from '../../style/theme';
import { Link } from 'react-router-dom';
import { bcColorGradient } from '../cssStyle';
import Txt from './Txt';

interface PageCardProps {
  to: string;
  pageName: string;
  description: string;
  bgColor?: CSSProperties['backgroundColor'];
}

const PageCard = ({
  to,
  pageName,
  description,
  bgColor = theme.colors.secondary,
}: PageCardProps) => {
  return (
    <BoxLink to={to} $bgColor={bgColor}>
      <IconBox>
        <Icon>🛠️</Icon>
      </IconBox>
      <Txt typography="h3" color="black">
        {pageName}
      </Txt>
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
  justify-content: center;
  row-gap: 4px;
  padding: 24px;
  height: 150px;

  width: 300px;

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
