import styled from 'styled-components';
import colors from '../style/colors';

export const Spinner = styled.div`
  border: 8px solid ${colors.purple100};
  border-top: 8px solid ${colors.purple900};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
