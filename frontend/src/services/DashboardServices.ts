import { ParamsGetSurvayModel } from "../models/SurveyModels";
import axiosInstance from "../utils/axios";

/**
 * Busca todas as avaliacoes.
 *
 * @param {ParamsGetSurvayModel} params nu_limit e nu_page
 */
export const GetListingSurvey = async (params: ParamsGetSurvayModel) => {
  try {
    const response = await axiosInstance.get("/survey", {
      params,
    });

    return response;
  } catch (error) {
    console.error("Erro ao buscar avaliações: ", error);
    throw error;
  }
};

/**
 * Busca todas as avaliacoes agrupadas por produto, com os valores de
 * nota media e soma de nota.
 *
 * @param {ParamsGetSurvayModel} params nu_limit e nu_page
 */
export const GetListingSurveyAgruped = async (params: ParamsGetSurvayModel) => {
  try {
    const response = await axiosInstance.get("/survey/agruped", {
      params,
    });

    return response;
  } catch (error) {
    console.error("Erro ao buscar avaliações agrupadas: ", error);
    throw error;
  }
};

/**
 * Busca as avaliacoes para gerar o NPS (Net Promoter Score) por
 * produto.
 *
 * @returns {Promise<AxiosResponse>} - Retorna as avaliacoes.
 */
export const GetDataNps = async () => {
  try {
    const response = await axiosInstance.get("/dashboard/nps");

    return response;
  } catch (error) {
    console.error("Erro ao buscar avaliações agrupadas: ", error);
    throw error;
  }
};
