export interface DashboardSurveyAgrupedModel {
  id: string;
  nm_product: string;
  avg_rating: number;
  sum_rating: number;
}

export interface DashboardNpsGraphModel {
  nm_product: string;
  pct_promotor: number;
  pct_detrador: number;
  nu_nps: number;
}
