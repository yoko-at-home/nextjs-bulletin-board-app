import { Button } from "@mantine/core";
import { useRouter } from "next/router";

export const FormContact = () => {
  const router = useRouter();

  const handleRegisterUser = async (event: any) => {
    event.preventDefault();
    const res = await fetch("/api/send", {
      body: JSON.stringify({
        subject: "お問い合わせありがとうございます",
        to: "yoko_iwasakijp@yahoo.co.jp",
        text:
          "以下の内容でお問い合わせを受け付けました。\n折り返しご連絡させていただきます。\n\n" +
          "お名前: " +
          event.target.fullname.value +
          " 様\n" +
          "\nメールアドレス: " +
          event.target.email.value +
          "\n\nお問い合わせ内容:\n" +
          event.target.message.value,
        email: event.target.email.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    router.push({
      pathname: "/success",
      query: result,
    });
  };

  return (
    <div className="container mx-auto p-20">
      <form onSubmit={handleRegisterUser}>
        <div className="mb-3 flex flex-col">
          <label htmlFor="email">Name</label>
          <input
            id="fullname"
            name="fullname"
            type="text"
            className="mt-1 w-full p-3 focus:outline-lime-500"
            placeholder="surname + given name"
            autoComplete="name"
            required
            minLength={3}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1 w-full p-3 focus:outline-lime-500"
            placeholder="name@example.com"
            autoComplete="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message">How can I help you?</label>
          <textarea
            id="message"
            name="message"
            className="mt-1 w-full p-3 focus:outline-lime-500"
            rows={3}
            placeholder=""
            required
          ></textarea>
        </div>
        <div className="flex justify-center mt-10">
          <Button
            variant="outline"
            color="gray"
            size="lg"
            uppercase
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
