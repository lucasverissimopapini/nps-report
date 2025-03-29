export interface SurveyModel {
  id?: string;
  nm_product: string;
  nu_rating: number;
  ds_comment?: string;
  dt_create?: string;
}

export interface ParamsGetSurvayModel {
  nu_limit: number;
  nu_page: number;
}
