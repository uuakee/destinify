# Use uma imagem base leve do Nginx para servir os arquivos estáticos
FROM nginx:alpine

# Copie os arquivos de build para o diretório padrão do Nginx
COPY ./dist /usr/share/nginx/html

# Copie um arquivo customizado de configuração do Nginx, se necessário
# COPY ./nginx.conf /etc/nginx/nginx.conf

# Exponha a porta 80
EXPOSE 80

# Inicie o Nginx quando o container for iniciado
CMD ["nginx", "-g", "daemon off;"]
