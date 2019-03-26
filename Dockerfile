FROM mhart/alpine-node:11.12 as node

FROM ethanlee/whales-2.4.1
WORKDIR /app
ENV GEM_PATH=/gems
ENV BUNDLE_PATH=/gems
ENV GEM_HOME=/gems
COPY . .
RUN bundle install
RUN apk add yarn --update-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community/ --allow-untrusted
COPY --from=node /usr/bin/node /usr/bin/
COPY --from=node /usr/lib/node_modules/npm /usr/lib/node_modules/npm
RUN ln -f -s /usr/lib/node_modules/npm/bin/npm-cli.js /usr/bin/npm
COPY --from=node /usr/lib/libgcc* /usr/lib/libstdc* /usr/lib/
CMD ["bundle", "exec", "rails", "server"]
