"use client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { div } from "motion/react-client";
import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";
import { GrGoogle } from "react-icons/gr";

export default function SignUpPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="pb-8">
      <Card className="border mx-auto w-125 py-10 mt-5">
     <div className="text-center">
          <FiBookOpen className="mx-auto h-12 w-12 text-indigo-600 dark:text-indigo-400" />
          <h2 className="mt-6 text-3xl font-extrabold text-slate-900 dark:text-zinc-50">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400">
            Sign in to your StudyNook account
          </p>
        </div>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
   
        <TextField
          isRequired
          name="email"
          type="email"
           
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Email address" className='rounded-md' />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          className='rounded-md'
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder=" password" className='rounded-md'/>
         
          <FieldError />
        </TextField>

      <div className="text-center">
         <Button className='w-full rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600'>
        SignIn
       </Button>
      </div>

     
      <div className="text-center"><Button  variant="outline" className='w-full flex justify-center py-2 px-4 border border-slate-200 dark:border-zinc-800 text-sm font-medium rounded-md text-slate-700 dark:text-zinc-300 bg-white dark:bg-zinc-950 hover:bg-slate-100 dark:hover:bg-zinc-800' ><GrGoogle></GrGoogle>Continue with Google</Button>
</div>
 <div className="text-center mt-4">
          <Link href="/register" className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline text-sm">
            Don't have an account? Register
          </Link>
        </div>
      </Form>
    </Card>
    </div>
  );
}