import React, { FC, useState } from 'react'
import { Form, Button } from 'react-bootstrap'

import { ref, uploadBytesResumable, getDownloadURL, UploadTaskSnapshot } from "firebase/storage";
import style from '../Login/Login.module.scss'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, storage, db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';

export const Register: FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [file, setFile] = useState<File>();
  const [error, setError] = useState<UploadTaskSnapshot>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await createUserWithEmailAndPassword(auth, email, pass)

      const storageRef = ref(storage, email);
      const uploadTask = uploadBytesResumable(storageRef, file!);

      uploadTask.on('state_changed',
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (error) => {
        alert(error);
      },
        () => {
          console.log('abobus')
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(response.user, {
              photoURL: downloadURL
            })
            await setDoc(doc(db, 'users', response.user.uid), {
              uid: response.user.uid,
              email,
              photoUrl: downloadURL,
            })
          });
        },
      );
    } catch (error) {
      console.log(error)
    }
  }

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
  const onChangePass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value)
  }
  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files![0])
  }

  return (
    <Form className={style.form}>
      <h4 className={style.textAlignCenter}>Trips&Tips</h4>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control required value={email} onChange={onChangeEmail} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required value={pass} onChange={onChangePass} type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group>
        <Form.Control type='file' onChange={onChangeFile} />
      </Form.Group>

      <Button onClick={(e: any) => handleSubmit(e)} className={style.button} type="submit">
        Sign up
      </Button>
    </Form>
  )
}