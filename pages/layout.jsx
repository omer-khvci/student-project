import Sidebar from "@/components/Sidebar"


const Layout = ({ children }) => {



  return <>

      <div className="basis-1/4 bg-orange-500">
        <Sidebar />
      </div>
      <main className="p-5 basis-3/4">
    {children}
    </main>
  </>
}

export default Layout