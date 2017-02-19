#!/usr/bin/env bash
docker exec postgres-starter /bin/bash -c "psql -U postgres links < schema.sql"
docker exec postgres-starter /bin/bash -c "psql -U postgres links < seed.sql"
export NODE_ENV="development"
