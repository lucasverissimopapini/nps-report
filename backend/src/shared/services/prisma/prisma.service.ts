/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { OnModuleDestroy } from '@nestjs/common/interfaces';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private static instance: PrismaService;

  private constructor() {
    super();
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  static getInstance(): PrismaService {
    if (!PrismaService.instance) {
      PrismaService.instance = new PrismaService();
    }
    return PrismaService.instance;
  }

  errorMsg(code: string) {
    return {
      P2000: (meta) =>
        `O dado fornecido é muito longo. O comprimento máximo permitido é ${meta.max_length} e o comprimento fornecido foi ${meta.field_length}`,
      P2002: (meta) =>
        `O dado enviado deve ser único e exclusivo e já existe um registro com esses valores.`,
      P2003: (meta) => `Houve um erro ao vincular dados no banco de dados.`,
      P2004: (meta) => `Houve uma falha de restrição no banco de dados.`,
      P2005: (meta) =>
        `O dado enviado para salvar no banco de dados é inválido para o tipo do campo`,
      P2006: (meta) => `O dado fornecido não é válido`,
      P2007: (meta) => `Erro de validação de dados no banco de dados.`,
      P2008: (meta) => `Falha ao analisar a consulta.`,
      P2009: (meta) => `Falha ao validar a consulta.`,
      P2010: (meta) => `Falha na consulta no banco de dados.`,
      P2011: (meta) =>
        `Campo nulo enviado onde não é permitido no banco de dados.`,
      P2012: (meta) =>
        `Dado obrigatório não enviado para salvar no banco de dados.`,
      P2013: (meta) =>
        `Dado relacionado ao campo enviado não foi recebido no banco de dados.`,
      P2014: (meta) =>
        `Alteração inválida no banco de dados por causa de relacionamento de dados no banco.`,
      P2015: (meta) =>
        `Não foi possível encontrar um registro relacionado no banco de dados.`,
      P2016: (meta) => `Erro de interpretação da consulta ao banco de dados.`,
      P2017: (meta) =>
        `Os registros relacionados ao dado no banco de dados não foram encontrados.`,
      P2018: (meta) =>
        `Os registros conectados necessários não foram encontrados.`,
      P2019: (meta) => `Erro de entrada.`,
      P2020: (meta) => `Dado fora do intervalo para o tipo do dado.`,
      P2021: (meta) =>
        `A tabela ${meta.table} não existe no banco de dados atual.`,
      P2022: (meta) =>
        `A coluna ${meta.column} não existe no banco de dados atual.`,
      P2023: (meta) => `Dados de coluna inconsistentes.`,
      P2024: (meta) => `Tempo limite de busca excedido.`,
      P2025: (meta) =>
        `Uma operação falhou porque depende de um ou mais registros que foram necessários, mas não foram encontrados.`,
      P2026: (meta) =>
        `O provedor de banco de dados atual não oferece suporte a um recurso usado pela consulta.`,
      P2027: (meta) =>
        `Ocorreram vários erros no banco de dados durante a execução da consulta.`,
      P2028: (meta) =>
        `Houve erro ao realizar uma transação no banco de dados.`,
      P2030: (meta) => `Não é possível encontrar um índice no banco de dados.`,
      P2031: (meta) =>
        `O Prisma precisa realizar transações, o que exige que seu servidor MongoDB seja executado como um conjunto de réplicas.`,
      P2033: (meta) =>
        `Um número usado na consulta não cabe em um número inteiro.`,
      P2034: (meta) =>
        `A transação falhou devido a um conflito de gravação ou impasse. Tente novamente a transação`,
    }[code];
  }
}
