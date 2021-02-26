FROM basaltinc/knapsack-docker:v1.1.0
# RUN adduser -D myuser
# USER myuser
WORKDIR /app
COPY . .
# EXPOSE 80
# EXPOSE 8080
ARG PORT=3999
EXPOSE $PORT
# ENV KNAPSACK_PORT=$PORT
ENV KS_LOG_LEVEL=verbose
RUN echo "PORT: $PORT" && yarn --prefer-offline --frozen-lockfile && yarn build
CMD echo 'Using Dockerfile CMD' && yarn ks:serve
