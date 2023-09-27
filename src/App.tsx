import InputBox from './components/InputBox';
import InputWrapper from './components/InputWrapper';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Wrapper>
      <InputWrapper>
        <InputBox type="text" />
        <InputBox type="password" />
      </InputWrapper>
    </Wrapper>
  );
}

export default App;
