FROM php:8.3-apache

# Configuração do timezone
ENV DEBIAN_FRONTEND=noninteractive
RUN echo "tzdata tzdata/Areas select Etc" | debconf-set-selections \
    && echo "tzdata tzdata/Zones/Etc select UTC" | debconf-set-selections

# Instalação de dependências
RUN apt-get update && apt-get install -y \
    software-properties-common \
    libzip-dev \
    unzip

# Habilita o módulo de reescrita do Apache
RUN a2enmod rewrite

# Instalação do Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Limpeza para reduzir o tamanho da imagem
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Copia os arquivos para o diretório de trabalho
COPY app /var/www/html/

# Configurações adicionais conforme necessário
RUN chmod -R 775 /var/www/html
RUN chown -R www-data:www-data /var/www/html
RUN sed -i 's!/var/www/html!/var/www/html/backend/public!g' /etc/apache2/sites-available/000-default.conf

# Define o diretório de trabalho
WORKDIR /var/www/html

# Exponha a porta 80 para o Apache
EXPOSE 80

# Comando padrão para iniciar o Apache
CMD ["apache2-foreground"]
