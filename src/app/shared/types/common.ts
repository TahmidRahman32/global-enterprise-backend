// import { UserRole } from "@prisma/client";

import { userRole } from "@prisma/client";

// import { userRole } from "@prisma/client";

export type IJWTPayload = {
   email: string;
   role: userRole;
};
