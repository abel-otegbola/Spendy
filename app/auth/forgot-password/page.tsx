'use client'
import { Formik } from "formik";
import { useContext } from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import LoadingIcon from "@/assets/icons/loading";
import { AuthContext } from "@/context/authContext";
import { Input } from "@/components/ui/input";
import LogoIcon from "@/assets/icons/logo";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

export default function ForgotPassword() {
  const { forgotPassword, loading } = useContext(AuthContext);

  return (
      <div className="flex md:w-[60%] h-auto w-full max-w-lg mx-auto items-center justify-center">
        <div className="sm:w-[400px] md:mx-0 mx-auto w-full p-6">
          <div className="flex flex-col justify-center gap-6 md:p-[5%] md:py-[5%] py-[80px]">
            <div className="flex flex-col items-center text-center gap-4">
              <div className=" px-4 py-2 rounded-lg border border-gray-500/[0.2] w-fit">
                <LogoIcon className="w-[14px] h-[28px]"  />
              </div>
              
              <h1 className="font-semibold text-[32px] text-dark-500">Forgot Password</h1>
              <p className="text-gray-500 text-center">Enter your email address below to recover your password</p>
            </div>
            <Formik
              initialValues={{ email: "" }}
              enableReinitialize={true}
              onSubmit={(values, { setSubmitting }) => {
                forgotPassword(values.email);
                setSubmitting(false);
              }}
            >
              {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
                  <Field>
                    <FieldLabel htmlFor="email">Email Address</FieldLabel>
                    <Input
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Email Address"
                    />
                    <FieldError>{touched.email ? errors.email : ""}</FieldError>
                  </Field>
                  <Button type="submit" className="w-full py-[12px]">
                    {isSubmitting || loading ? <LoadingIcon color="white" className="animate-spin w-[20px]" /> : "Continue"}
                  </Button>
                </form>

              )}
            </Formik>
            
            <Link href="/" className="text-center mt-4 text-[12px] opacity-70">
              Back to Home
            </Link>

          </div>
        </div>
      </div>
  );
}

