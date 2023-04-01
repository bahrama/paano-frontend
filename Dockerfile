FROM alialikhahasl/paano-front

LABEL Description = "paano front image"

RUN apt-get update

ENTRYPOINT ["/home/node/entrypoint.sh"]