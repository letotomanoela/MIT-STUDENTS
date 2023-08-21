import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const protect = async (req, res, next) => {
  const tabs = req.headers.cookie.split(";");
  const token = tabs[0].split("=")[1];
  const type = tabs[1].split("=")[1];
  if (token && type === "Bearer") {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if(decoded.type === 'admin') return  res.status(401).json({ success: false, message: "Not Authorized" });
      req.user = await prisma.user.findUnique({
        select: {
          id: true,
        },
        where: {
          id: decoded.id,
        },
      });
      next();
    } catch (error) {
      res.status(401).json({ success: false, message: "Not Authorized" });
    }
  } else {
    res.status(401).json({ message: "Not Authorized" });
  }

  if (!token) {
    res.status(401);
  }
};

export { protect };
