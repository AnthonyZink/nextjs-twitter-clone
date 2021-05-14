import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../src/utils/auth";
const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.create({
        data: {
            email: "admin@admin.fr",
            password: await hashPassword("admin"),
            username: "Admin",
            twitterId: "Admin1",
        },
    });

    await prisma.tweet.create({
        data: {
            content: "Je suis un tweet du seed",
            userId: user.id,
        },
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
