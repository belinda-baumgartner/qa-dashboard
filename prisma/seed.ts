import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  console.log("❌ Deleting all entries");

  const deleteRoles = prisma.role.deleteMany();
  const deleteTeamMembers = prisma.teamMember.deleteMany();

  const deleteProjects = prisma.project.deleteMany();
  const deleteAssignments = prisma.assignment.deleteMany();

  await prisma.$transaction([
    deleteAssignments,
    deleteProjects,
    deleteTeamMembers,
    deleteRoles,
  ]);

  console.log("🌱 Seeding database...");

  // 1. Roles
  await prisma.role.createMany({
    data: [
      { name: "Test Manager" },
      { name: "QA Engineer" },
      { name: "Test Automation Engineer" },
    ],
  });

  // Fetch role IDs
  const roles = await prisma.role.findMany();
  const getRoleId = (name: string) => roles.find((r) => r.name === name)?.id!;

  // 2. Projects
  await prisma.project.createMany({
    data: [
      {
        name: "CRM System Upgrade",
        clarityOrServiceId: "CL-1001",
        startDate: new Date("2025-01-01"),
        endDate: new Date("2025-12-31"),
      },
      {
        name: "Mobile App QA",
        clarityOrServiceId: "SRV-2001",
        startDate: new Date("2025-01-01"),
        endDate: new Date("2025-12-31"),
      },
    ],
  });

  // 3. Team Members with roles
  await prisma.teamMember.create({
    data: {
      personnelId: "P001",
      firstName: "Alice",
      lastName: "Weiss",
      email: "alice.weiss@example.com",
      annualPD: 220,
      roles: {
        connect: [{ id: getRoleId("Test Manager") }],
      },
    },
  });

  console.log("✅ Seeded roles, projects, and team members");
}

seed()
  .then(async () => {
    await prisma.$disconnect();
    console.log("🌱 Done.");
  })
  .catch(async (e) => {
    console.error("❌ Seed error:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
