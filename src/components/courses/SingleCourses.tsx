import React, { useState } from "react";
import { Card, Image, Typography, Space, Row, Col } from "antd";
import {
  HeartOutlined,
  HeartFilled,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { ICourse } from "../../type/course";

const { Text, Title } = Typography;

const SingleCourses = ({ course }: { course: ICourse }) => {
  const [liked, setLiked] = useState(false);
  console.log(course, "course");

  return (
    <Col
      style={{
        display: "flex",
        justifyContent: "center",
        marginInline: "auto",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "380px",
          borderRadius: "8px",
          border: "1px solid black",
          boxShadow: "6px 6px 0 black",
        }}
        cover={
          <Image
            alt="Blog Image"
            src="https://images.pexels.com/photos/2967810/pexels-photo-2967810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            preview={false}
          />
        }
      >
        <Space direction="vertical" size={0} style={{ width: "100%" }}>
          <Text
            style={{
              backgroundColor: "black",
              display: "inline-block",
              padding: "2px 4px",
              color: "white",
            }}
          >
            React
          </Text>
          <Title
            level={3}
            style={{
              color: "black",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: "1.5rem",
            }}
          >
            <Text> React v18.0 </Text>
            <Space onClick={() => setLiked(!liked)}>
              {liked ? (
                <HeartFilled
                  style={{ marginLeft: "20px", color: "red", fontSize: "1rem" }}
                />
              ) : (
                <HeartOutlined
                  style={{ marginLeft: "20px", fontSize: "1rem" }}
                />
              )}
            </Space>
          </Title>
          <Text
            style={{
              color: "gray.500",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: "1rem",
            }}
          >
            In this post, we will give an overview of what is new in React 18,
            and what it means for the future.
          </Text>
        </Space>
        <Row
          justify="space-between"
          style={{
            width: "100%",
            borderTop: "1px solid black",
            marginTop: "1rem",
          }}
        >
          <Col
            xs={24}
            style={{
              padding: "1rem",
              cursor: "pointer",
            }}
          >
            <Space>
              <Text style={{ fontSize: "1rem", fontWeight: "semibold" }}>
                View more
              </Text>
              <ArrowRightOutlined />
            </Space>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default SingleCourses;
