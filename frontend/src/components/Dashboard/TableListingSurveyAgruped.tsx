import { useEffect, useState } from "react";
import { useLoading } from "../../context/LoadingContext";
import { GetListingSurveyAgruped } from "../../services/DashboardServices";
import { useAlert } from "../../context/AlertContext";
import { Pagination } from "../Pagination/Pagination";
import { DashboardSurveyAgrupedModel } from "../../models/DashboardModel";

export const TableListingSurveyAgruped = () => {
  const { showAlert } = useAlert();
  const { showLoading, hideLoading } = useLoading();
  const [surveyData, setSurveyData] = useState<DashboardSurveyAgrupedModel[]>(
    []
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    fetchNpsData();
  }, []);

  const fetchNpsData = async (page = 1) => {
    try {
      showLoading();
      setCurrentPage(page);

      const response = await GetListingSurveyAgruped({
        nu_limit: limit,
        nu_page: page,
      });
      const { data } = response.data;

      setSurveyData(data);
      setTotalPages(response.data.total_page);
    } catch (error: any) {
      if (error.response) {
        showAlert(
          error.response.data.message ?? "Erro interno servidor !",
          "error"
        );
      } else if (error.request) {
        showAlert(error.request ?? "Erro interno servidor !", "error");
      } else {
        showAlert(error.message ?? "Erro interno servidor !", "error");
      }
    } finally {
      hideLoading();
    }
  };

  return (
    <div className="relative rounded-b-lg overflow-x-auto shadow-md sm:rounded-lg">
      <table className="block-table w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-purple-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nome Produto
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Média Avaliação</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Acumulado Avaliação</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {surveyData.map((item, index) => (
            <tr
              className="bg-white border-b  border-gray-200 hover:bg-purple-100"
              key={index}
            >
              <th
                scope="row"
                className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap"
              >
                {item.nm_product}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap"
              >
                {item.avg_rating}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap"
              >
                {item.sum_rating}
              </th>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="block-card-table">
        {surveyData.map((item, index) => (
          <div
            className="grid grid-cols-2 gap-4 bg-gray-200 m-3 p-3 rounded-2xl"
            key={index}
          >
            <div>
              <div className="font-semibold text-purple-800">Produto</div>
              <div className="font-semibold text-purple-800">Média</div>
              <div className="font-semibold text-purple-800">Acumalado</div>
            </div>
            <div>
              <div className="text-gray-800 font-semibold">
                {item.nm_product}
              </div>
              <div className="font-semibold text-gray-500">
                {item.avg_rating}
              </div>
              <div className="text-gray-500 font-semibold">
                {item.sum_rating}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(n: any) => {
          fetchNpsData(n);
        }}
      />
    </div>
  );
};
