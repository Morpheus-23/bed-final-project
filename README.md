# BED Final Project


planetscale:
pscale auth login
pscale connect bed-final main --port 3309

prisma seed:
npx prisma db push && npx prisma db seed