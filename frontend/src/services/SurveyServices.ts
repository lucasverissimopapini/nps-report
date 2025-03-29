import { SurveyModel } from "../models/SurveyModels";
import axios from "../utils/axios";

/**
 * Registra uma nova pesquisa
 * 
 * @param survey objeto com informacoes da pesquisa
 * @returns objeto com informacoes da pesquisa registrada
 * @throws Erro se a requisicao falhar
 */
export const RegisterSurvey = async (survey: SurveyModel) => {
  try {
    const response = await axios.post("/survey", survey);

    return response;
  } catch (error) {
    console.error("Erro ao registrar pesquisa: ", error);
    throw error;
  }
};
