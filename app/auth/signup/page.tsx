'use client'
import { Formik } from "formik";
import { useContext } from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import LoadingIcon from "@/assets/icons/loading";
import { AuthContext } from "@/context/authContext";
import { registerSchema } from "@/schema/auth";
import { Input } from "@/components/ui/input";
import LogoIcon from "@/assets/icons/logo";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { useSearchParams } from "next/navigation";

export default function SignupPage() {
  const { signUp, loading } = useContext(AuthContext);
  const URLSearchParams = useSearchParams()
  const callbackURL = URLSearchParams.get("callbackURL") || ""

  return (

      <div className="flex md:w-[55%] h-screen w-full max-w-lg mx-auto items-center justify-center">
        <div className="sm:w-[400px] md:mx-0 mx-auto w-full p-6">
          <div className="flex flex-col justify-center gap-6 md:p-[5%]">
            <div className="flex flex-col items-center gap-4">
              <div className="px-4 py-2 rounded-lg shadow-[0px_2px_5px_0px_#20202020] border border-gray-500/[0.2] w-fit">
                <LogoIcon className="w-[14px] h-[28px]"  />
              </div>
              <h1 className="font-semibold text-[32px] text-dark-500">Create Account</h1>
              
              <p className="opacity-70 text-center">Enter your details to create an account</p>
            </div>
            <Formik
              initialValues={{ email: "", name: "", password: "" }}
              validationSchema={registerSchema}
              onSubmit={(values, { setSubmitting }) => {
                signUp(values.name, values.email, values.password, callbackURL || "/account/dashboard");
                setSubmitting(false);
              }}
            >
              {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
                  <Field>     
                    <FieldLabel htmlFor="username">Username</FieldLabel>
                    <Input
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      type="text"
                      id="username"
                      placeholder="User name"
                    />
                    <FieldError>{touched.name ? errors.name : ""}</FieldError>
                  </Field>
                  <Field>     
                    <FieldLabel htmlFor="email">Email Address</FieldLabel>
                    <Input
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      type="email"
                      id="email"
                      placeholder="Email Address"
                    />
                    <FieldError>{touched.email ? errors.email : ""}</FieldError>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      type="password"
                      id="password"
                      placeholder="Password"
                    />
                    <FieldError>{touched.password ? errors.password : ""}</FieldError>
                  </Field>
                  
                  <Button type="submit" className="w-full mt-4 py-[12px]">
                    {isSubmitting || loading ? <LoadingIcon color="white" className="animate-spin w-[20px]" /> : "Register"}
                  </Button>
                </form>

              )}
            </Formik>

            
            <div className="grid grid-cols-2 justify-center font-medium mt-4">
              <Link href="/auth/forgot-password" className="px-4 text-right hover:text-primary text-[12px] border-r border-gray-500/[0.6]">
                Forgot password?
              </Link>
              <Link href="/auth/login" className="px-4 text-start hover:text-primary text-[12px]">
                Continue to Sign in
              </Link>
            </div>
            
            <Link href="/" className="text-center mt-4 text-[12px] opacity-70">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
  );
}

