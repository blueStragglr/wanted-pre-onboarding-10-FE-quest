import styled from 'styled-components';
import colors from '../style/colors';

const Name = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

interface UserCardProps {
  name: string;
}

const UserCard = ({ name }: UserCardProps) => {
  return (
    <Card>
      <Name>{name}</Name>
    </Card>
  );
};

export default UserCard;

const Card = styled.div`
  width: 200px;
  height: 100px;
  background-color: ${colors.purple100};
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;
