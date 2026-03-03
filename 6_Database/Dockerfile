FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASe=samt3d

COPY ./SAMT3D-db.sql /docker-entrypoint-initdb.d/
COPY ./SQL-comandi.sql /docker-entrypoint-initdb.d/

EXPOSE 3306
