#!/use/bin/env bash
# exit on error
set -e errexit

npm install
npm run build
npx prisma generate
npx prisma migrate deploy