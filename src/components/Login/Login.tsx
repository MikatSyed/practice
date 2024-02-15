"use client";
import { Button, Col, Row } from "antd";
import loginImage from "../../assets/Tablet login-bro.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { authSchema } from "@/schemas/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";



type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
 

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
   
    try {
    
    } catch (err: any) {
     
    }
  };

 
  return (
  <>

    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh"
      }}
    >
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px"
          }}
        >
          First login your account
        </h1>
        <div>
          <Form submitHandler={onSubmit} resolver={yupResolver(authSchema)}>
            <div>
              <FormInput name="email" type="email" size="large" label="Email" />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
              />
            </div>
            <button  type="submit"  className="btn1">
              Login
            </button>
          </Form>
        </div>
        <div
            style={{
              marginTop: "15px",
              textAlign: "center"
            }}
          >
          
              <p>Do not have an account?  <Link href="/registration">Register here</Link> </p>
           
          </div>
      </Col>

      <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 16 }} lg={{ span: 10 }}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>
    
    </Row>
    
  </>
  );
};

export default LoginPage;
