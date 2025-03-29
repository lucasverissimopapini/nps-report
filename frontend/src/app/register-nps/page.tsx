"use client";
import { useState } from "react";
import axios from "../../utils/axios";
import { useAlert } from "../../context/AlertContext";
import { useLoading } from "../../context/LoadingContext";
import { useRouter } from "next/navigation";
import { RegisterSurvey } from "../../services/SurveyServices";

export default function RegisterNpsPage() {
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState("");
  const [product, setProduct] = useState("");
  const { showAlert } = useAlert();
  const { showLoading, hideLoading } = useLoading();
  const router = useRouter();

  const save = async () => {
    try {
      showLoading();
      if (!product) {
        return showAlert(
          "O nome do produto é obrigatório, por favor informe !",
          "warn"
        );
      } else if (!stars) {
        return showAlert(
          "Avaliação é obrigatória, por favor informar !",
          "warn"
        );
      }

      await RegisterSurvey({
        nm_product: product,
        nu_rating: stars,
        ds_comment: comment ?? undefined,
      });

      showAlert("Pesquisa salva com sucesso !", "success");

      router.push("/");
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
    <div className="overflow-hidden bg-white py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className=" lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="title-home mt-3 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Cadastro de Pesquisa
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="product-name"
              className="block font-bold text-purple-800"
            >
              Nome do produto*
            </label>
            <input
              type="text"
              id="product-name"
              name="product-name"
              placeholder="Insira o nome do produto ou serviço."
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="block w-full px-5 py-3 text-base text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="rating" className="block font-bold text-purple-800">
              Avaliar*
            </label>
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className="flex cursor-pointer items-center justify-center w-10 h-10 text-2xl transition duration-150 ease-in-out rounded-full hover:bg-yellow-500 hover:text-white"
                  onClick={() => setStars(star)}
                >
                  <span className="sr-only">Avaliar {star}</span>
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill={stars >= star ? "orange" : "currentColor"}
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
          <div>
            <label
              htmlFor="comment"
              className="block font-bold text-purple-800"
            >
              Comentário
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Insira um comentário sobre o produto ou serviço. (Opcional)"
              className="block w-full px-5 py-3 text-base text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div className="flex items-center justify-between space-x-2 mt-4">
            <button
              type="button"
              className="flex items-center font-bold w-full justify-center h-10 text-white bg-purple-700 rounded-full hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => {
                setStars(0);
                setComment("");
                setProduct("");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-eraser-icon lucide-eraser mr-5"
              >
                <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" />
                <path d="M22 21H7" />
                <path d="m5 11 9 9" />
              </svg>
              Limpar
            </button>
            <button
              type="button"
              onClick={save}
              className="flex font-bold items-center justify-center w-full h-10 text-white bg-green-600 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-save-icon lucide-save mr-5"
              >
                <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
                <path d="M7 3v4a1 1 0 0 0 1 1h7" />
              </svg>
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
