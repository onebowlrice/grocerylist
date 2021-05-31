import { useState,useRef } from 'react';
import {Form,Button,Label,FormGroup, Input} from "reactstrap";
import { Link} from 'react-router-dom';
import './LogAndReg.css';

const SignUp = () => {
    const emailRef = useRef();
    const pwdRef = useRef();
    const pwdConfRef = useRef();
    const [loading,setLoading] = useState(false);

    const submitHandler = async(e) => {
      e.preventDefault();
      
    }
  
    return(
      <div className='FormDiv'>
        <h2>Регистрация</h2>
        <Form onSubmit={submitHandler}>
          <FormGroup id='email'>
            <Label>Email</Label>
            <Input type='email' ref={emailRef} required/>
          </FormGroup>
          <FormGroup id='pwd'>
            <Label>Пароль</Label>
            <Input type='password' ref={pwdRef} required/>
          </FormGroup>
          <FormGroup id='pwdConf'>
            <Label>Подтвердите пароль</Label>
            <Input type='password' ref={pwdConfRef} required/>
          </FormGroup>
          <Button className='regBtn' type='submit' disabled={loading}>Зарегистрироваться</Button>
        </Form>
        <div className='alrdyRegText'>Уже зарегистрированы? <Link to='/login'>Вход</Link></div>
      </div>
    )
  }
  export default SignUp;