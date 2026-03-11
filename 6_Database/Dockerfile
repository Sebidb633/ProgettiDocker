# Dockerfile db
FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD=root_password
ENV MYSQL_DATABASe=samt3d

COPY ./01_schema.sql /docker-entrypoint-initdb.d/
COPY ./02_data.sql /docker-entrypoint-initdb.d/

EXPOSE 3306
