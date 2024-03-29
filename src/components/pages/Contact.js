import React from 'react';
import { Button, Form, Input} from "antd";
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!"
  }
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={["user", "name"]}
      label="Name"
      rules={[
        {
          required: true
        }
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={["user", "email"]}
      label="Email"
      rules={[
        {
          type: "email",
          required: "true"
        }
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      name={["user", "message"]}
      label="Message"
      rules={[
        {
          required: "true"
        }
      ]}
    >
      <Input.TextArea />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    
    </div>
  );
}
