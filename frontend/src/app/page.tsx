export default function HomePage() {
  return (
    <div className="overflow-hidden bg-white py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className=" lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="title-home mt-3 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                A Melhor plataforma de pesquisa de produtos
              </p>
              <p className="description-home mt-6 text-lg/8 text-gray-600">
                NPS é uma ferramenta utilizada para medir a satisfação dos
                clientes com os produtos e serviços, ajudando as empresas a
                entender melhor as necessidades dos usuários e a melhorar a
                experiência do cliente.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold description-home text-gray-900">
                    <svg
                      className="absolute top-1 left-1 size-5 text-indigo-600 lucide lucide-check-check-icon lucide-check-check"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 7 17l-5-5" />
                      <path d="m22 10-7.5 7.5L13 16" />
                    </svg>
                    Facilidade:
                  </dt>
                  <dd className="inline description-home">
                    {" "}
                    Nossa plataforma é fácil de usar e acessar, tornando simples
                    para os usuários responderem às pesquisas e para as empresas
                    coletarem e analisarem os dados.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold description-home text-gray-900">
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
                      className="lucide lucide-chart-no-axes-combined-icon  absolute top-1 left-1 size-5 text-indigo-600 lucide-chart-no-axes-combined"
                    >
                      <path d="M12 16v5" />
                      <path d="M16 14v7" />
                      <path d="M20 10v11" />
                      <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
                      <path d="M4 18v3" />
                      <path d="M8 14v7" />
                    </svg>
                    Análise:
                  </dt>
                  <dd className="inline description-home">
                    {" "}
                    A análise dos dados coletados pela NPS Survey ajuda as
                    empresas a entender melhor as necessidades dos usuários e a
                    melhorar a experiência do cliente, permitindo que elas tomem
                    decisões informadas e melhorem a satisfação dos clientes.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <img
            src="/assets/img/fast-img-lg.png"
            alt="Product screenshot"
            className="fast-img-home max-w-none rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
