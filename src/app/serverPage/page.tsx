import { auth } from "auth";
import React from "react";

const page = async () => {
  const session = await auth();
  if (!session || !session.user) return <div className="text-red-500 p-5">You Need To Sign In</div>;
  return <div>This is a server Page and must be protected</div>;
};

export default page;
