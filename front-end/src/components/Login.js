import React from "react";
import { layout, tailLayout } from "../unit";
import { Input, Button, Form } from "antd";
import qs from 'querystring'
import { useMount } from '@umijs/hooks'

export default function Login({ onSubmit }) {

  useMount(() => {
    const { 'shared-code': sharedCode  } = qs.parse(window.location.search.replace('?',''))
    if(sharedCode) onSubmit({ sharedCode })
  })

  return (
    <Form {...layout} onFinish={onSubmit}>
      <Form.Item label="密码" name="password">
        <Input type="password" />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
}
