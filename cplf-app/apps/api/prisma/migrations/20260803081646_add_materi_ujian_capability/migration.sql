/*
  Warnings:

  - Added the required column `urutanGlobal` to the `Tema` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MateriStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "SoalTipe" AS ENUM ('PILIHAN_GANDA', 'ESAI_SINGKAT', 'BENAR_SALAH');

-- CreateEnum
CREATE TYPE "SoalTingkat" AS ENUM ('MUDAH', 'SEDANG', 'SULIT');

-- CreateEnum
CREATE TYPE "UjianStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ONGOING', 'CLOSED');

-- CreateEnum
CREATE TYPE "SesiStatus" AS ENUM ('BELUM_MULAI', 'SEDANG_BERLANGSUNG', 'MENUNGGU_PROSES', 'SELESAI');

-- CreateEnum
CREATE TYPE "ProsesStatus" AS ENUM ('PENDING', 'PROCESSING', 'DONE', 'FAILED');

-- AlterTable
ALTER TABLE "Tema" ADD COLUMN     "aspekFormatifFokus" TEXT[],
ADD COLUMN     "capabilityCodes" TEXT[],
ADD COLUMN     "expCodes" TEXT[],
ADD COLUMN     "isProjectPertemuan" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "prjCodes" TEXT[],
ADD COLUMN     "unitSilabus" TEXT,
ADD COLUMN     "urutanGlobal" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Materi" (
    "id" TEXT NOT NULL,
    "temaId" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "contentJson" JSONB NOT NULL DEFAULT '{"blocks":[]}',
    "status" "MateriStatus" NOT NULL DEFAULT 'DRAFT',
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Materi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Soal" (
    "id" TEXT NOT NULL,
    "temaId" TEXT NOT NULL,
    "tipe" "SoalTipe" NOT NULL,
    "pertanyaan" TEXT NOT NULL,
    "pertanyaanJson" JSONB,
    "tingkatKesulitan" "SoalTingkat" NOT NULL DEFAULT 'SEDANG',
    "tags" TEXT[],
    "createdById" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Soal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PilihanJawaban" (
    "id" TEXT NOT NULL,
    "soalId" TEXT NOT NULL,
    "teks" TEXT NOT NULL,
    "isBenar" BOOLEAN NOT NULL DEFAULT false,
    "urutan" INTEGER NOT NULL,

    CONSTRAINT "PilihanJawaban_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ujian" (
    "id" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "temaId" TEXT NOT NULL,
    "kelasId" TEXT NOT NULL,
    "jumlahSoal" INTEGER NOT NULL,
    "durasiMenit" INTEGER NOT NULL,
    "waktuMulai" TIMESTAMP(3) NOT NULL,
    "waktuSelesai" TIMESTAMP(3) NOT NULL,
    "acakSoal" BOOLEAN NOT NULL DEFAULT true,
    "acakPilihan" BOOLEAN NOT NULL DEFAULT true,
    "wajibVerifikasiWajah" BOOLEAN NOT NULL DEFAULT false,
    "status" "UjianStatus" NOT NULL DEFAULT 'DRAFT',
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ujian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UjianSesi" (
    "id" TEXT NOT NULL,
    "ujianId" TEXT NOT NULL,
    "siswaId" TEXT NOT NULL,
    "status" "SesiStatus" NOT NULL DEFAULT 'BELUM_MULAI',
    "waktuMulai" TIMESTAMP(3),
    "waktuSubmit" TIMESTAMP(3),
    "nilaiAkhir" DOUBLE PRECISION,

    CONSTRAINT "UjianSesi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UjianSesiSoal" (
    "id" TEXT NOT NULL,
    "sesiId" TEXT NOT NULL,
    "soalId" TEXT NOT NULL,
    "urutanTampil" INTEGER NOT NULL,
    "pilihanUrutanJson" JSONB,

    CONSTRAINT "UjianSesiSoal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JawabanSiswa" (
    "id" TEXT NOT NULL,
    "sesiSoalId" TEXT NOT NULL,
    "jawabanTeks" TEXT,
    "pilihanJawabanId" TEXT,
    "isBenar" BOOLEAN,
    "skor" DOUBLE PRECISION,
    "statusProses" "ProsesStatus" NOT NULL DEFAULT 'PENDING',
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JawabanSiswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CapabilityDef" (
    "id" TEXT NOT NULL,
    "kode" TEXT NOT NULL,
    "tingkat" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "aspekTerkait" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CapabilityDef_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Materi_slug_key" ON "Materi"("slug");

-- CreateIndex
CREATE INDEX "UjianSesi_siswaId_idx" ON "UjianSesi"("siswaId");

-- CreateIndex
CREATE UNIQUE INDEX "UjianSesi_ujianId_siswaId_key" ON "UjianSesi"("ujianId", "siswaId");

-- CreateIndex
CREATE UNIQUE INDEX "JawabanSiswa_sesiSoalId_key" ON "JawabanSiswa"("sesiSoalId");

-- CreateIndex
CREATE UNIQUE INDEX "CapabilityDef_kode_key" ON "CapabilityDef"("kode");

-- AddForeignKey
ALTER TABLE "Materi" ADD CONSTRAINT "Materi_temaId_fkey" FOREIGN KEY ("temaId") REFERENCES "Tema"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materi" ADD CONSTRAINT "Materi_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Soal" ADD CONSTRAINT "Soal_temaId_fkey" FOREIGN KEY ("temaId") REFERENCES "Tema"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Soal" ADD CONSTRAINT "Soal_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PilihanJawaban" ADD CONSTRAINT "PilihanJawaban_soalId_fkey" FOREIGN KEY ("soalId") REFERENCES "Soal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ujian" ADD CONSTRAINT "Ujian_temaId_fkey" FOREIGN KEY ("temaId") REFERENCES "Tema"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ujian" ADD CONSTRAINT "Ujian_kelasId_fkey" FOREIGN KEY ("kelasId") REFERENCES "Kelas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ujian" ADD CONSTRAINT "Ujian_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UjianSesi" ADD CONSTRAINT "UjianSesi_ujianId_fkey" FOREIGN KEY ("ujianId") REFERENCES "Ujian"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UjianSesi" ADD CONSTRAINT "UjianSesi_siswaId_fkey" FOREIGN KEY ("siswaId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UjianSesiSoal" ADD CONSTRAINT "UjianSesiSoal_sesiId_fkey" FOREIGN KEY ("sesiId") REFERENCES "UjianSesi"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UjianSesiSoal" ADD CONSTRAINT "UjianSesiSoal_soalId_fkey" FOREIGN KEY ("soalId") REFERENCES "Soal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JawabanSiswa" ADD CONSTRAINT "JawabanSiswa_sesiSoalId_fkey" FOREIGN KEY ("sesiSoalId") REFERENCES "UjianSesiSoal"("id") ON DELETE CASCADE ON UPDATE CASCADE;
