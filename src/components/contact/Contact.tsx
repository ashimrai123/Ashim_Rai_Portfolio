"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "../ui/card";
import { Dot } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { toast, Toaster } from "react-hot-toast";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  // Remove phoneNumber from schema
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // State for button disabling
  const [buttonText, setButtonText] = useState("Send message"); // State for button text
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      // Remove phoneNumber from defaultValues
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form values:", values); // Debugging line

    // Disable the button and update button text
    setIsSubmitting(true);
    setButtonText("Sending...");

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset();
        setButtonText("Message Sent");
      } else {
        toast.error("Error sending message.");
        setButtonText("Send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error); // Debugging line
      toast.error("Error sending message.");
      setButtonText("Send message");
    } finally {
      // Re-enable the button and revert button text after 10 seconds
      setTimeout(() => {
        setIsSubmitting(false);
        setButtonText("Send message");
      }, 10000);
    }
  }

  return (
    <>
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4 font-semibold">
          <Dot />
          <p className="ml-2 text-lg">Contact Me</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-full md:w-1/2">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="First name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-full md:w-1/2">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@company.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Remove phoneNumber field */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Leave me a message..."
                      {...field}
                      className="resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button
                type="submit"
                className="w-1/2 text-md"
                disabled={isSubmitting}
              >
                {buttonText}
              </Button>
            </div>
          </form>
        </Form>
      </Card>
      <Toaster />
    </>
  );
};

export default Contact;
