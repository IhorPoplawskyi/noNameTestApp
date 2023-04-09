import { FC, useState } from 'react'
import { Form, Button } from 'react-bootstrap'

import style from './Login.module.scss'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'

interface props {
  setToogle: (toogle: boolean) => void
}

export const Login: FC<props> = ({ setToogle }): JSX.Element => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
  const onChangePass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value)
  }

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      signInWithEmailAndPassword(auth, email, pass);
      navigate("/home")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form className={style.form}>
      <h4 className={style.textAlignCenter}>Trips&Tips</h4>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={onChangeEmail} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={pass} onChange={onChangePass} type="password" placeholder="Password" />
      </Form.Group>

      <Button onClick={handleSubmit} className={style.button} type="submit">
        Sign up
      </Button>

      <div className={style.registerText}>
        You don't have an account? 
        <span onClick={() => setToogle(true)} className={style.registerBtn}>Register</span>
      </div>
    </Form>
  )
}