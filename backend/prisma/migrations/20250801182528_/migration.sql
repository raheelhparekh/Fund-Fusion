-- CreateEnum
CREATE TYPE "Institute" AS ENUM ('KJSIDS', 'SKSC', 'KJSCE', 'SIRC', 'KJSIM', 'SSA', 'KJSCEd', 'DLIS', 'MSSMPA');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('REJECTED', 'ACCEPTED', 'PENDING');

-- CreateEnum
CREATE TYPE "Designation" AS ENUM ('HOD', 'HOI', 'VC', 'ACCOUNTS', 'FACULTY', 'STUDENT');

-- CreateTable
CREATE TABLE "User" (
    "profileId" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "institute" "Institute",
    "department" TEXT,
    "designation" "Designation" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("profileId")
);

-- CreateTable
CREATE TABLE "Application" (
    "applicationId" TEXT NOT NULL,
    "applicantId" TEXT NOT NULL,
    "institute" "Institute" NOT NULL,
    "department" TEXT NOT NULL,
    "applicantName" TEXT NOT NULL,
    "applicationType" TEXT NOT NULL,
    "formData" JSONB NOT NULL,
    "formName" TEXT NOT NULL,
    "resubmission" BOOLEAN NOT NULL DEFAULT false,
    "facultyValidation" "ApplicationStatus",
    "hodValidation" "ApplicationStatus",
    "hoiValidation" "ApplicationStatus",
    "vcValidation" "ApplicationStatus",
    "accountsValidation" "ApplicationStatus",
    "rejectionFeedback" TEXT,
    "totalExpense" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "proofOfTravel" BYTEA,
    "proofOfAccommodation" BYTEA,
    "proofOfAttendance" BYTEA,
    "expenseProof0" BYTEA,
    "expenseProof1" BYTEA,
    "expenseProof2" BYTEA,
    "expenseProof3" BYTEA,
    "expenseProof4" BYTEA,
    "expenseProof5" BYTEA,
    "expenseProof6" BYTEA,
    "expenseProof7" BYTEA,
    "expenseProof8" BYTEA,
    "expenseProof9" BYTEA,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("applicationId")
);

-- CreateTable
CREATE TABLE "_ToValidateApplications" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "Application_applicantId_idx" ON "Application"("applicantId");

-- CreateIndex
CREATE INDEX "Application_createdAt_idx" ON "Application"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "_ToValidateApplications_AB_unique" ON "_ToValidateApplications"("A", "B");

-- CreateIndex
CREATE INDEX "_ToValidateApplications_B_index" ON "_ToValidateApplications"("B");
