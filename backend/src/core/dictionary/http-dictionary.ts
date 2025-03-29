export const dicionaryCode = {
  INVALID_DATA: {
    code: 4001001,
    message: 'Dados incorretos fornecidos.',
    suggestion:
      'Certifique-se de que os dados fornecidos estão no formato correto e atendem aos critérios esperados.',
  },
  INVALID_PARAMETER: {
    code: 4001002,
    message: 'Parâmetro enviado está errado.',
    suggestion:
      'Verifique se todos os parâmetros necessários foram enviados corretamente.',
  },
  AUTHENTICATION_FAILED: {
    code: 4011003,
    message: 'Falha na autenticação.',
    suggestion:
      'As credenciais fornecidas são inválidas ou o token mal formatado.',
  },
  PERMISSION_DENIED: {
    code: 4031004,
    message: 'Permissão negada.',
    suggestion:
      'O usuário não possui as permissões necessárias para executar esta operação. Verifique as permissões do usuário.',
  },
  RESOURCE_NOT_FOUND: {
    code: 4041005,
    message: 'Recurso não encontrado.',
    suggestion: 'Verifique se a URL está correta e se o recurso existe.',
  },
  METHOD_NOT_ALLOWED: {
    code: 4051006,
    message: 'Método não permitido.',
    suggestion:
      'Certifique-se de que o método HTTP utilizado é permitido para este endpoint.',
  },
  UNSUPPORTED_DATA_FORMAT: {
    code: 4151007,
    message: 'Formato de dados não suportado.',
    suggestion:
      'Verifique se o formato dos dados enviados é suportado pela API.',
  },
  RESPONSE_TIMEOUT: {
    code: 4081008,
    message: 'Tempo de resposta excedido.',
    suggestion:
      'Tente novamente mais tarde ou otimize sua solicitação para reduzir o tempo de processamento.',
  },
  MALFORMED_REQUEST: {
    code: 4001009,
    message: 'Solicitação mal formada.',
    suggestion: 'Verifique a sintaxe da solicitação e corrija quaisquer erros.',
  },
  DATA_CONFLICT: {
    code: 4091010,
    message: 'Conflito de dados.',
    suggestion: 'Os dados fornecidos já existem. Tente usar dados diferentes.',
  },
  RATE_LIMIT_EXCEEDED: {
    code: 4291011,
    message: 'Limite de taxa excedido.',
    suggestion: 'Aguarde um momento antes de fazer novas solicitações.',
  },
  INTERNAL_SERVER_ERROR: {
    code: 5001012,
    message: 'Erro interno do servidor.',
    suggestion:
      'Tente novamente mais tarde. Se o problema persistir, entre em contato com o suporte.',
  },
  SERVICE_UNAVAILABLE: {
    code: 5031013,
    message: 'Serviço indisponível.',
    suggestion:
      'Tente novamente mais tarde. O serviço pode estar em manutenção.',
  },
  SERVICE_DEPENDENCY_FAILED: {
    code: 4241014,
    message: 'Dependência de serviço falhou.',
    suggestion:
      'Verifique o status dos serviços dependentes e tente novamente.',
  },
  MISSING_DATA: {
    code: 4001015,
    message: 'Dados ausentes.',
    suggestion: 'Verifique se todos os dados obrigatórios foram fornecidos.',
  },
  REQUEST_SIZE_EXCEEDED: {
    code: 4131016,
    message: 'Tamanho da solicitação excede o limite.',
    suggestion: 'Reduza o tamanho da solicitação e tente novamente.',
  },
  UNSUPPORTED_MEDIA_TYPE: {
    code: 4151017,
    message: 'Tipo de mídia não suportado.',
    suggestion: 'Verifique se o tipo de mídia enviado é suportado pela API.',
  },
  TOKEN_EXPIRED: {
    code: 4011018,
    message: 'Token de autenticação expirado.',
    suggestion: 'Reautentique-se e obtenha um novo token.',
  },
  SESSION_EXPIRED: {
    code: 4011019,
    message: 'Sessão expirada.',
    suggestion: 'Faça login novamente para continuar.',
  },
  DATA_VALIDATION_ERROR: {
    code: 4221020,
    message: 'Erro de validação de dados.',
    suggestion:
      'Verifique os dados fornecidos e corrija quaisquer erros de validação.',
  },
  INVALID_RESOURCE_REFERENCE: {
    code: 4001021,
    message: 'Referência de recurso inválida.',
    suggestion: 'Verifique se a referência ao recurso é válida e existente.',
  },
  OPERATION_NOT_ALLOWED: {
    code: 4031022,
    message: 'Operação não permitida.',
    suggestion: 'Verifique as políticas de permissão para esta operação.',
  },
  UNSUPPORTED_RESPONSE_FORMAT: {
    code: 4061023,
    message: 'Formato de resposta não suportado.',
    suggestion: 'Solicite um formato de resposta suportado pela API.',
  },
  DUPLICATE_REQUEST: {
    code: 4091024,
    message: 'Solicitação duplicada.',
    suggestion: 'Evite enviar a mesma solicitação múltiplas vezes.',
  },
  SESSION_NOT_FOUND: {
    code: 4041025,
    message: 'Sessão não encontrada.',
    suggestion: 'Verifique se a sessão está ativa e válida.',
  },
  RESOURCE_DEPRECATED: {
    code: 4101026,
    message: 'Recurso obsoleto.',
    suggestion: 'Utilize um recurso atualizado ou equivalente.',
  },
  RESOURCE_DEPENDENCY_FAILED: {
    code: 4241027,
    message: 'Dependência de recurso falhou.',
    suggestion:
      'Verifique a integridade e disponibilidade dos recursos dependentes.',
  },
  DATA_TRANSFORMATION_ERROR: {
    code: 4221028,
    message: 'Erro de transformação de dados.',
    suggestion: 'Verifique a consistência e formato dos dados fornecidos.',
  },
  RESOURCE_TEMPORARILY_UNAVAILABLE: {
    code: 5031029,
    message: 'Recurso temporariamente indisponível.',
    suggestion:
      'Tente novamente mais tarde. O recurso pode estar em manutenção.',
  },
  DATA_PARSING_ERROR: {
    code: 4001030,
    message: 'Erro de parsing de dados.',
    suggestion: 'Verifique a estrutura e formato dos dados enviados.',
  },
  EXTERNAL_SERVICE_COMMUNICATION_FAILED: {
    code: 5021031,
    message: 'Falha na comunicação com serviço externo.',
    suggestion:
      'Verifique a conectividade com serviços externos e tente novamente.',
  },
  OAUTH_AUTHENTICATION_ERROR: {
    code: 4011032,
    message: 'Erro de autenticação OAuth.',
    suggestion: 'Verifique as credenciais OAuth e tente novamente.',
  },
  ACCESS_TOKEN_REVOKED: {
    code: 4011033,
    message: 'Token de acesso revogado.',
    suggestion: 'Obtenha um novo token de acesso e tente novamente.',
  },
  INSUFFICIENT_AUTHORIZATION: {
    code: 4031034,
    message: 'Autorização insuficiente.',
    suggestion: 'Verifique as permissões do usuário e tente novamente.',
  },
  DATA_SERIALIZATION_ERROR: {
    code: 4221035,
    message: 'Erro de serialização de dados.',
    suggestion:
      'Verifique se os dados estão no formato correto para serialização.',
  },
  REQUEST_TOO_LARGE: {
    code: 4131036,
    message: 'Solicitação muito grande.',
    suggestion: 'Divida a solicitação em partes menores e tente novamente.',
  },
  RESOURCE_NOT_AVAILABLE_IN_TEST_ENVIRONMENT: {
    code: 4031037,
    message: 'Recurso não disponível em ambiente de teste.',
    suggestion: 'Tente acessar o recurso em um ambiente de produção.',
  },
  STORAGE_LIMIT_EXCEEDED: {
    code: 5071038,
    message: 'Limite de armazenamento excedido.',
    suggestion: 'Libere espaço ou solicite aumento do limite de armazenamento.',
  },
  SYSTEM_CONFIGURATION_ERROR: {
    code: 5001039,
    message: 'Erro de configuração de sistema.',
    suggestion:
      'Verifique as configurações do sistema e corrija quaisquer erros.',
  },
  SERVICE_TEMPORARILY_DISABLED: {
    code: 5031040,
    message: 'Serviço temporariamente desativado.',
    suggestion:
      'Tente novamente mais tarde. O serviço pode estar em manutenção.',
  },
  RESOURCE_PERMANENTLY_MOVED: {
    code: 3011041,
    message: 'Recurso movido permanentemente.',
    suggestion: 'Atualize a URL para o novo endereço do recurso.',
  },
  GATEWAY_TIMEOUT: {
    code: 5041042,
    message: 'Gateway Timeout.',
    suggestion:
      'Tente novamente mais tarde. Verifique a integridade dos gateways de rede.',
  },
  PROXY_ERROR: {
    code: 5021043,
    message: 'Erro de proxy.',
    suggestion:
      'Verifique as configurações do proxy e a conectividade de rede.',
  },
  RESOURCE_LOCKED: {
    code: 4231044,
    message: 'Recurso bloqueado.',
    suggestion: 'Entre em contato com o suporte para desbloquear o recurso.',
  },
  REQUEST_LIMIT_EXCEEDED: {
    code: 4291045,
    message: 'Limite de requisições excedido.',
    suggestion: 'Aguarde um momento antes de fazer novas solicitações.',
  },
  VERSION_COMPATIBILITY_ERROR: {
    code: 4091046,
    message: 'Erro de compatibilidade de versão.',
    suggestion: 'Verifique se está utilizando a versão correta da API.',
  },
  SERVICE_INITIALIZATION_FAILED: {
    code: 5001047,
    message: 'Falha na inicialização do serviço.',
    suggestion:
      'Verifique as configurações e dependências do serviço e tente novamente.',
  },
  SUCCESS_OK: {
    code: 2001048,
    message: 'Sucesso na operação.',
    suggestion: 'Requisição foi feita com sucesso.',
  },
  SUCCESS_CREATE: {
    code: 2011048,
    message: 'Sucesso na operação.',
    suggestion: 'Requisição foi feita com sucesso.',
  },
  DATA_NO_CONTENT: {
    code: 2041049,
    message: 'Dados não encontrado',
    suggestion:
      'Os dados não foram encontrado verifique os parametros que está enviando se existe no banco de dados',
  },
};
