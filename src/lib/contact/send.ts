import axios from "axios";

export const sendMessage = async (values: any, toast: any) => {
  try {
    const response = await axios.post(
      "https://resend-juhamikael-production.up.railway.app/api/send-message/dev",
      { data: values }
    );

    if (response.status === 200) {
      toast({
        title: "Success",
        description: "Message sent",
        duration: 5000,
        variant: "success",
      });
    }

    if (response.status === 429) {
      toast({
        title: "Too many requests",
        description: "Please try again later or contact me on Discord.",
        duration: 5000,
        variant: "destructive",
      });
      throw new Error("Rate limit exceeded");
    }

    if (response.status !== 200) {
      toast({
        title: "Request failed.",
        description: "Please try again later.",
        duration: 5000,
        variant: "destructive",
      });
      throw new Error("Request failed");
    }

    return response.data;
  } catch (err: any) {
    if (err.response && err.response.status !== 429) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Please try again later.",
        duration: 5000,
        variant: "destructive",
      });
    }

    throw err;
  }
};
