"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { sendMessage } from "@/lib/contact/send";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { contactSchema } from "@/lib/schemas/contact";

type FormValues = z.infer<typeof contactSchema>;

const ContactForm = ({}) => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(contactSchema as any),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    if (Object.values(values).some((value) => value === "")) {
      toast({
        title: "Couldn't send the message.",
        description: "Please fill all the fields.",
        duration: 5000,
        variant: "destructive",
      });
    }
    if (Object.values(values).every((value) => value !== "")) {
      sendMessage(values, toast)
        .then((res) => {
          if (res) {
            form.reset();
          }
        })
        .catch((err) => {
          toast({
            title: "Something went wrong.",
            description: "Please try again later.",
            duration: 5000,
            variant: "destructive",
          });
        });
    }
  }
  return (
    <div className="flex justify-center mt-20 ">
      <div className="flex flex-col gap-y-8 w-full md:w-2/3">
        <h1 className="text-4xl font-bold ">Contact</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 justify-stretch">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-xl"
                        placeholder="Your name"
                        {...field}
                      />
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
                      <Input
                        className="rounded-xl"
                        placeholder="your_email@email.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-xl"
                        placeholder="Please enter a subject"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-40 rounded-xl"
                      placeholder="Please enter a message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="rounded-xl w-full uppercase font-bold hover:text-card-foreground"
              onClick={() => {
                onSubmit(form.getValues());
              }}
              type="submit"
            >
              Send Message
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
