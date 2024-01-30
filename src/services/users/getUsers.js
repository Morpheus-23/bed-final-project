import { PrismaClient } from "@prisma/client";

const getUsers = async (username, email) => {
  console.log("getusers query:", username, email);

  const prisma = new PrismaClient();
  const users = await prisma.user.findMany({
    where: {
      username,
      email,
    },
  });

  console.log("users", users);

  return users;
};

export default getUsers;
