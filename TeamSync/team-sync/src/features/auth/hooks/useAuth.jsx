import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginEmployee , registerEmployee } from "../state/auth/authAction";

export let useAuth = ()=>{
    let dispatch = useDispatch()
    let navigate = useNavigate()
     const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onRegisterSubmit = (data) => {
    console.log(data);
    dispatch(registerEmployee(data));
    navigate('/')
  };

  const onLoginSubmit = (data) => {
    dispatch(loginEmployee(data))
    navigate('/home')
  };

  return{
    register,
    handleSubmit,
    watch,
    errors,
    onRegisterSubmit,
    onLoginSubmit,
    navigate
  }
}