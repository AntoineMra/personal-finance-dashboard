FROM postgres
ENV POSTGRES_PASSWORD docker
ENV POSTGRES_DB seo
COPY seo.sql /docker-entrypoint-initdb.d/
