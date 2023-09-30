import PageCard from '../common/components/PageCard';
import colors from '../style/colors';
import Spacing from '../common/components/Spacing';

const Home = () => {
  return (
    <>
      <PageCard
        pageName="Login Page"
        to="/login"
        description="사전과제 로그인 입력창입니다."
        bgColor={colors.blue200}
        icon="🔐"
      />
      <Spacing direction={'horizontal'} size={48} />
      <PageCard
        pageName="Request Page"
        icon="🌐"
        to="/request"
        description="사전과제 요청 테스트 페이지입니다."
        bgColor={colors.purple200}
      />
    </>
  );
};

export default Home;
