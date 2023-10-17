import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')

  const idInt = Number(id)

  return prisma.blog.findFirst({
    where: {
      id: idInt
    }
  })

  
})
