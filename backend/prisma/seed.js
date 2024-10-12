// seed.js
import prisma from '../src/config/prismaConfig.js';

async function main() {
  // Validator Data
  const validators = [
    { profileId: '001', userName: 'NULL HOI 1', email: 'null.hoi1@example.com', password: 'password123', department: 'NULL', designation: 'HOI' },
    { profileId: '010', userName: 'COMPS Supervisor', email: 'comps.supervisor@example.com', password: 'password123', department: 'COMPS', designation: 'Supervisor' },
    { profileId: '011', userName: 'COMPS HOD', email: 'comps.hod@example.com', password: 'password123', department: 'COMPS', designation: 'HOD' },
    { profileId: '020', userName: 'IT Supervisor', email: 'it.supervisor@example.com', password: 'password123', department: 'IT', designation: 'Supervisor' },
    { profileId: '021', userName: 'IT HOD', email: 'it.hod@example.com', password: 'password123', department: 'IT', designation: 'HOD' },
    { profileId: '030', userName: 'MECH Supervisor', email: 'mech.supervisor@example.com', password: 'password123', department: 'MECH', designation: 'Supervisor' },
    { profileId: '031', userName: 'MECH HOD', email: 'mech.hod@example.com', password: 'password123', department: 'MECH', designation: 'HOD' },
    { profileId: '040', userName: 'AIDS Supervisor', email: 'aids.supervisor@example.com', password: 'password123', department: 'AIDS', designation: 'Supervisor' },
    { profileId: '041', userName: 'AIDS HOD', email: 'aids.hod@example.com', password: 'password123', department: 'AIDS', designation: 'HOD' },
    { profileId: '050', userName: 'EXTC Supervisor', email: 'extc.supervisor@example.com', password: 'password123', department: 'EXTC', designation: 'Supervisor' },
    { profileId: '051', userName: 'EXTC HOD', email: 'extc.hod@example.com', password: 'password123', department: 'EXTC', designation: 'HOD' },
    { profileId: '060', userName: 'ETRX Supervisor', email: 'etrx.supervisor@example.com', password: 'password123', department: 'ETRX', designation: 'Supervisor' },
    { profileId: '061', userName: 'ETRX HOD', email: 'etrx.hod@example.com', password: 'password123', department: 'ETRX', designation: 'HOD' },
    { profileId: '070', userName: 'RAI Supervisor', email: 'rai.supervisor@example.com', password: 'password123', department: 'RAI', designation: 'Supervisor' },
    { profileId: '071', userName: 'RAI HOD', email: 'rai.hod@example.com', password: 'password123', department: 'RAI', designation: 'HOD' },
  ];

  // Insert Validators
  for (const validator of validators) {
    await prisma.validator.create({
      data: validator,
    });
  }
  console.log('Validators inserted successfully');

  // Applicant Data
  const applicants = [
    { profileId: '1', userName: 'John Doe', email: 'john.doe@example.com', password: 'password123', department: 'COMPS', designation: 'Student' },
    { profileId: '2', userName: 'Jane Smith', email: 'jane.smith@example.com', password: 'password123', department: 'COMPS', designation: 'Faculty'},
    { profileId: '3', userName: 'Bob Brown', email: 'bob.brown@example.com', password: 'password123', department: 'MECH', designation: 'Student' },
    { profileId: '4', userName: 'Narkotics', email: 'narko@example.com', password: 'password123', department: 'MECH', designation: 'Faculty' },
  ];

  // Insert Applicants
  for (const applicant of applicants) {
    await prisma.applicant.create({
      data: applicant,
    });
  }
  console.log('Applicants inserted successfully');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
