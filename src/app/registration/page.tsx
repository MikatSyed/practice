"use client";
import { Button, Col, Row, message } from "antd";
import signupLogo from "../../assets/Sign up-amico.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";

import {
  useRegistrationMutation,
  
} from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { useState } from "react";
import { adminSchema } from "@/schemas/admin";


const RegisterPage = () => {
  const {push} = useRouter()
  const [registration] = useRegistrationMutation();

  // const departments:IDepartment[]= data?.departments;

  const onSubmit = async (values: any) => {
    const obj = { ...values };
    obj.role = "user";
    obj.profileImg = "demo url"
    try {
      const res = await registration(obj).unwrap();
      toast(res?.message, {
        icon: <span style={{ color: "green" }}>✔</span>,
        style: {
          borderRadius: "10px",
          background: "#FFBF00",
          color: "#fff",
        },
      });
      push("/login")
    } catch (err: any) {
      toast(err?.data, {
        icon: <span style={{ color: "white" }}>❌</span>,
        style: {
          borderRadius: "10px",
          background: "red",
          color: "#fff",
        },
      });
    }
  };
 
  return (
   <>
    <Toaster position="top-right" reverseOrder={false} />
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 16 }} lg={{ span: 10 }}>
          <Image src={signupLogo} width={500} height={500} alt="login image" />
        </Col>
        <Col xs={20} sm={12} md={8} lg={8}>
          <h1 style={{ margin: "15px 0px" }}>First Signup</h1>
          <div>
            <Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
              <div>
                <FormInput type="text" name="name" size="large" label="Name" />
              </div>
              <div >
               <div  style={{
                margin: "5px 0px",
              }}>
               <FormInput
                  type="email"
                  name="email"
                  size="large"
                  label="Email address"
                />
               </div>
               <div style={{
                margin: "5px 0px",
              }}>
               <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="User Password"
                />
               </div>

              <div style={{
                margin: "5px 0px",
              }}>
              <FormInput
                  type="number"
                  name="contactNo"
                  size="large"
                  label="Contact No."
                />
              </div>
               <div style={{
                margin: "5px 0px",
              }}>
               <FormInput
                  type="text"
                  name="address"
                  size="large"
                  label="Address"
                />
               </div>
                <div style={{ margin: "10px 0" }}>
                  <input
                    accept="image/*"
                    multiple
                    type="file"
                    name="avatar"
                    // onChange={createproductImagesChange}
                  />
                  
                </div>
               
              </div>
              <Button htmlType="submit">Registration</Button>
            </Form>
          </div>
          <div style={{ marginTop: "15px", textAlign: "center" }}>
            <Link href="/login">
              <p>Already have an account? Login Now</p>
            </Link>
          </div>
        </Col>
      </Row>
   </>
  );
};

export default RegisterPage;
