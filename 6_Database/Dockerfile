# Dockerfile db
FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD=root_password
ENV MYSQL_DATABASe=samt3d

COPY ./SAMT3D-schema.sql /docker-entrypoint-initdb.d/
COPY ./SQL-Comandi.sql /docker-entrypoint-initdb.d/

EXPOSE 3306
