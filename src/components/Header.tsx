import { Avatar, Divider, Layout, Space, Typography } from "antd";
import { CSSProperties } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const { Header } = Layout;
const { Text } = Typography;

export const LoginHeader = () => {
  const headerStyle: CSSProperties = {
    color: "white",
    height: 80,
    paddingInline: 50,
    width: "100%",
    alignItems: "center",
  };

  return (
    <Layout>
      <Header style={headerStyle}>
        <Grid templateColumns={"repeat(8,1fr)"} style={{ marginTop: "10px" }}>
          <GridItem colSpan={2}>
            <Link to={"/"}>
              <Text style={{ color: "white", fontSize: "20px" }}>
                wanted-onboarding
              </Text>
            </Link>
          </GridItem>
          <GridItem colStart={6} colEnd={12}>
            <Space split={<Divider type="vertical" />}>
              <Link to={"/task1/login"}>
                <Typography.Link style={{ color: "white" }}>
                  Login
                </Typography.Link>
              </Link>
              <Link to={"/task2/mock-api"}>
                <Typography style={{ color: "white" }}>
                  Print mock-data
                </Typography>
              </Link>
              <Link to={"/future-tasks"}>
                <Typography style={{ color: "white" }}>
                  What I am going to learn
                </Typography>
              </Link>
              <Avatar
                src={
                  "https://image.jtbcplus.kr/data/contents/jam_photo/202306/10/5ebc5232-e43c-4f9c-83ae-66ff5679726a.jpg"
                }
              />
            </Space>
          </GridItem>
        </Grid>
      </Header>
    </Layout>
  );
};
