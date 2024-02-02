## Get started

Para começar a usar o repositório, siga as instruções abaixo:

1. Clone o repositório
2. Certifique-se de ter o `docker` instalado e em execução na máquina.
3. Realize as configurações das variaveis de ambiente conforme desejar,
para isso copie o arquivo `.env.example` e renomeio para `.env`.
4. Execute o seguinte comando:
```bash
docker compose up -d
```

## Env file

Existem 2 modos de executar o projeto, ambos podem ser configurados pelo
parametro `MODE` no arquivo `.env`.

```env
# Usado para ambiente de desenvolvimento.
MODE=development

# Usado para ambiente de produção.
MODE=production
```