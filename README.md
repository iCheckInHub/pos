# READ ME

## Supabase
Generate typescript
```
$ npx supabase link
$ npx supabase gen types typescript --project-id "jfwxzqpjrocrvhawzbnz" --schema public > types/supabase.ts
```

## Prisma
```
$ prisma migrate reset
$ npx prisma migrate dev --name init
```