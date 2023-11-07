import { Row, Col, Typography, Button, Card, Image } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Header = () => {
  return (
    <>
      <Row
        justify="center"
        align="middle"
        style={{
          padding: "80px 20px",
     
        //   background: "red",
        }}
      >
        <Col xs={24} md={12} lg={16} style={{marginInline:"auto"}}>
          <Title level={1} style={{ marginBottom: 16, fontWeight: "bold" }}>
            <span style={{ position: "relative" }}>Write once,</span>
            <br />
            <span style={{ color: "red.400" }}>use everywhere!</span>
          </Title>
          <Paragraph color="gray.500">
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them, and even sync them in the cloud so
            you can use them anywhere. All that is free!
          </Paragraph>
          <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
            <Col span={24} md={12}>
              <Button
                type="primary"
                size="large"
                block
                style={{ backgroundColor: "#1890ff" }}
              >
                Get started
              </Button>
            </Col>

            <Col span={24} md={12}>
              <Button
                size="large"
                block
                icon={
                  <PlayCircleOutlined
                    style={{ fontSize: 18, color: "gray.300" }}
                  />
                }
              >
                How It Works
              </Button>
            </Col>
          </Row>
        </Col>

        <Col xs={24} md={12} lg={8} style={{marginInline:"auto"}}>
          <Card
            style={{
              borderRadius: "0 0 8px 8px", // Adjust the top radius as needed
              overflow: "hidden",
              margin: "16px",
            }}
          >
            <Image
              alt="Hero Image"
              src="https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={400}
              preview={false}
            />
            <Button
              icon={
                <PlayCircleOutlined
                  style={{ fontSize: 48, color: "white", cursor: "pointer" }}
                />
              }
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                border: "none",
                backgroundColor: "transparent",
              }}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Header;
