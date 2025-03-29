"use client";

import ChartsBarNps from "../../components/Dashboard/ChartsBarNps";
import { TableListingSurvey } from "../../components/Dashboard/TableListingSurvey";
import { TableListingSurveyAgruped } from "../../components/Dashboard/TableListingSurveyAgruped";

const DashboardPage = () => {
  return (
    <div className="overflow-hidden bg-white py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto my-2 justify-center flex lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <p className="title-home mt-3 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Dashboard NPS
          </p>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl sm:col-span-1">
            <h2 className="text-xl mb-2 font-bold text-purple-800">
              Pesquisas Registradas
            </h2>
            <TableListingSurvey />
          </div>
          <div className="rounded-2xl sm:col-span-1">
            <h2 className="text-xl mb-2 font-bold text-purple-800">
              Pesquisas Agrupada
            </h2>
            <TableListingSurveyAgruped />
          </div>
        </div>
        <div className="text-gray-800 p-6 rounded-2xl shadow-lg mt-4">
          <h2 className="text-xl mb-2 font-bold text-purple-800">NPS</h2>
          <ChartsBarNps />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
