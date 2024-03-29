"use client";

import Button from "@/ui/components/general/Button";
import Input from "@/ui/components/general/Input";
import RightArrowIcon from "@/ui/icons/RightArrowIcon";
import dynamic from "next/dynamic";
import Link from "next/link";
const ScrollRevealContainer = dynamic(
  () => import("@/ui/components/general/ScrollRevealContainer"),
  {
    ssr: false,
  }
);

export default function SingUp() {
  return (
    <ScrollRevealContainer
      id="sign-in"
      distance="0px"
      className="flex w-full h-screen min-h-[592px] py-4 justify-center items-center"
    >
      <section className="w-full max-w-md  px-6 pt-6 pb-12 mx-4 md:mx-0 bg-bg-brand-section rounded-2xl">
        <Link href="/" className="flex items-center text-text-brand-primary">
          <RightArrowIcon
            width={15}
            height={15}
            stroke="#ffffff"
            className="rotate-180 mr-2"
          ></RightArrowIcon>{" "}
          Back to Untitled UI
        </Link>
        <h2 className="text-5xl my-8 text-text-brand-primary text-center font-semibold">
          Sign Up <br />
        </h2>
        <form
          action=""
          className="flex flex-col w-full justify-center space-y-4"
        >
          <Input
            placeholder="First Name"
            tooltip="Enter your first name"
            className="w-full"
          ></Input>
          <Input
            placeholder="Last Name"
            tooltip="Enter your last name"
            className="w-full"
          ></Input>
          <Input
            placeholder="Email"
            tooltip="Enter your email"
            className="w-full"
          ></Input>
          <Input
            placeholder="Password"
            tooltip="Enter your password"
            className="w-full"
          ></Input>
          <Button
            text="Sign Up"
            type="primary"
            actionType="function"
            onClick={() => {}}
            className="h-fit w-full"
          ></Button>
        </form>
        <p className="text-text-brand-primary mt-6">
          {"Already a member?"}
          <Link href={"/login"}>
            {" "}
            <u>Log In</u>
          </Link>
        </p>
      </section>
    </ScrollRevealContainer>
  );
}
