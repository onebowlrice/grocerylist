import { useState,useRef} from 'react';
import {Form,Button,Label,FormGroup,Input} from "reactstrap";
import {Link} from 'react-router-dom';
import './LogAndReg.css';

const LogIn = () => {
    const emailRef = useRef();
    const pwdRef = useRef();
    const [loading,setLoading] = useState(false);
  
    const submitHandler = async(e) => {
      e.preventDefault();
    }
  
    return(
      <div className='FormDiv'>
        <h2>Вход</h2>
        <Form onSubmit={submitHandler}>
          <FormGroup>
            <Label>Email</Label>
            <Input type='email' ref={emailRef} required/>
          </FormGroup>
          <FormGroup>
            <Label>Пароль</Label>
            <Input  type='password' ref={pwdRef} required/>
          </FormGroup>        
          <Button className='regBtn' type='submit' disabled={loading}>Войти</Button>
        </Form>
        <div className='alrdyRegText'>Еще не регистрировались? <Link to='/signup'>Зарегистрироваться</Link></div>
      </div>
    )
}
export default LogIn;