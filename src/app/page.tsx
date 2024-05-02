"use client"
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster } from "@/components/ui/toaster";
import { ToastAction } from "@/components/ui/toast"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

const testSchema = z.object({
  username: z.string({ message: "Please enter a string" })
  .min(2, { message: "Please enter a string with at least 2 characters."})
  .max(30, { message: "Please enter a string with no more than 30 characters." }),
  email: z.string({message: "Please enter a valid email address."}).email({ message: 'Please enter a valid email address.' }),
})

export default function Home() {
  const form = useForm({
    resolver: zodResolver(testSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  const { toast } = useToast()

  function onSubmit(values: z.infer<typeof testSchema>) {
    console.log(values);
    toast({
      title: "Form Values",
      description: JSON.stringify(values),
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    })
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <CardHeader>
          <CardTitle>Demo Form</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Toaster />
    </main>
  );
}
