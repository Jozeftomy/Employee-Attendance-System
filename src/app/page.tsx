"use client"

import { useRouter } from 'next/navigation'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

export default function Home() {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)

    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent px-4">
      <div className="w-full max-w-[575px] rounded-[24px] border border-[#00000033] bg-white backdrop-blur-[25px] p-[40px] flex flex-col gap-[36px] shadow-lg">
        <div className="w-full flex flex-col gap-[4px] items-center">
          <div className="font-manrope font-bold text-[30px] leading-[100%] tracking-[0%] text-[#444444]">
            LOGIN
          </div>
          <p className="opacity-50 font-manrope font-medium text-[14px] leading-[100%] tracking-[0%] text-center text-[#444444] whitespace-nowrap">
            Employee Attendance Management System
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-[8px]">
                  <FormLabel className="font-manrope font-bold text-[16px] text-[#444444]">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className="w-full opacity-40 border-b-[0.6px] border-[#20202033] px-[10px] py-[12px]"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-[8px]">
                  <FormLabel className="font-manrope font-bold text-[16px] text-[#444444]">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="w-full opacity-40 border-b-[0.6px] border-[#20202033] px-[10px] py-[12px]"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              className="w-full h-[50px] bg-[#465DFE] rounded-[10px] gap-[10px] px-[28px] py-[14px] hover:cursor-pointer"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
