-- CreateTable
CREATE TABLE "tb_survey" (
    "id" UUID NOT NULL,
    "nm_product" VARCHAR(500) NOT NULL,
    "nu_rating" INTEGER NOT NULL DEFAULT 0,
    "ds_comment" TEXT,
    "dt_create" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tb_survey_pkey" PRIMARY KEY ("id")
);
