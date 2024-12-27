import prisma from '../src/config/prismaConfig.js';

async function main() {
  // Common password for all users
  const commonPassword = "securePassword123";

  // Applicant and Validator data
  const institutes = ["KJSCE", "KJSIM"];
  const departments = ["COMPS", "IT", "MECH", "AIDS", "EXTC", "ETRX", "RAI"];

  // Create VC (single, no department or institute)
  console.log("Seeding VC...");
  await prisma.validator.create({
    data: {
      userName: "Validator_VC",
      email: "vc@example.com",
      password: commonPassword,
      designation: "VC",
    },
  });

  for (const institute of institutes) {
    // Create HOI for each institute
    console.log(`Seeding HOI for ${institute}...`);
    const hoiEmail = `hoi.${institute.toLowerCase()}@example.com`;

    await prisma.applicant.create({
      data: {
        userName: `HOI_${institute}`,
        email: hoiEmail,
        password: commonPassword,
        institute,
        designation: "HOI",
      },
    });

    await prisma.validator.create({
      data: {
        userName: `Validator_HOI_${institute}`,
        email: hoiEmail, // Shared email with Applicant
        password: commonPassword,
        institute,
        designation: "HOI",
      },
    });

    // Create Accounts for each institute
    console.log(`Seeding Accounts for ${institute}...`);
    await prisma.validator.create({
      data: {
        userName: `Validator_Accounts_${institute}`,
        email: `accounts.${institute.toLowerCase()}@example.com`,
        password: commonPassword,
        institute,
        designation: "ACCOUNTS",
      },
    });

    for (const department of departments) {
      // Create HOD for each department of each institute
      console.log(`Seeding HOD for ${department} in ${institute}...`);
      const hodEmail = `hod.${department.toLowerCase()}.${institute.toLowerCase()}@example.com`;

      await prisma.applicant.create({
        data: {
          userName: `HOD_${department}_${institute}`,
          email: hodEmail,
          password: commonPassword,
          institute,
          department,
          designation: "HOD",
        },
      });

      await prisma.validator.create({
        data: {
          userName: `Validator_HOD_${department}_${institute}`,
          email: hodEmail, // Shared email with Applicant
          password: commonPassword,
          institute,
          department,
          designation: "HOD",
        },
      });

      // Create Faculty for each department of each institute
      console.log(`Seeding Faculty for ${department} in ${institute}...`);
      const facultyEmail = `faculty.${department.toLowerCase()}.${institute.toLowerCase()}@example.com`;

      await prisma.applicant.create({
        data: {
          userName: `Faculty_${department}_${institute}`,
          email: facultyEmail,
          password: commonPassword,
          institute,
          department,
          designation: "FACULTY",
        },
      });
    }
  }

  console.log("Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
