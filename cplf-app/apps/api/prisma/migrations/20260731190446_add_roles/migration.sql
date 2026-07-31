-- CreateTable
CREATE TABLE "GuruMapelKelas" (
    "id" TEXT NOT NULL,
    "guruId" TEXT NOT NULL,
    "mapelId" TEXT NOT NULL,
    "kelasId" TEXT NOT NULL,

    CONSTRAINT "GuruMapelKelas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tema" (
    "id" TEXT NOT NULL,
    "mapelId" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "urutan" INTEGER NOT NULL,
    "semester" INTEGER NOT NULL,
    "tingkat" TEXT NOT NULL,
    "kodeModulCplf" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "deskripsi" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tema_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GuruMapelKelas_guruId_mapelId_kelasId_key" ON "GuruMapelKelas"("guruId", "mapelId", "kelasId");

-- CreateIndex
CREATE UNIQUE INDEX "Tema_kodeModulCplf_key" ON "Tema"("kodeModulCplf");

-- CreateIndex
CREATE UNIQUE INDEX "Tema_slug_key" ON "Tema"("slug");

-- AddForeignKey
ALTER TABLE "Kelas" ADD CONSTRAINT "Kelas_waliKelasId_fkey" FOREIGN KEY ("waliKelasId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuruMapelKelas" ADD CONSTRAINT "GuruMapelKelas_guruId_fkey" FOREIGN KEY ("guruId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuruMapelKelas" ADD CONSTRAINT "GuruMapelKelas_mapelId_fkey" FOREIGN KEY ("mapelId") REFERENCES "Mapel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuruMapelKelas" ADD CONSTRAINT "GuruMapelKelas_kelasId_fkey" FOREIGN KEY ("kelasId") REFERENCES "Kelas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tema" ADD CONSTRAINT "Tema_mapelId_fkey" FOREIGN KEY ("mapelId") REFERENCES "Mapel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
