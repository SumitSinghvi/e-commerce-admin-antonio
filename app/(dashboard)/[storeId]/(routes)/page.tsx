import prismadb from "@/lib/prismadb"

interface DashboardPageInterface {
  params: {storeId: string}
}
const DashboardPage: React.FC<DashboardPageInterface> = async ({params}) => {
  const store = await prismadb.store.findFirst({
    where: { id: params.storeId}
  });

  // console.log("hi",store)
  
  return (
    <div>
      this is dashboard page
      : {store?.name}
    </div>
  )
}

export default DashboardPage
