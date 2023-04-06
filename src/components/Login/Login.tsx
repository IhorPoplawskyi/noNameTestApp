import { FC } from 'react'
import { Form, Button } from 'react-bootstrap'

import style from './Login.module.scss'

export const Login: FC = (): JSX.Element => {
  return (
    <Form className={style.form}>
      <h4 className={style.textAlignCenter}>Trips&Tips</h4>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button className={style.button} type="submit">
        Sign up
      </Button>

      <div className={style.registerText}>You don't have an account? <span className={style.registerBtn}>Register</span></div>
    </Form>
  )
}