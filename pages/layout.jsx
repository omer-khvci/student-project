import Sidebar from "@/components/Sidebar";
  const getAllStudents = async() =>{
  const res = await fetch("http://localhost:3000/api/students");
  if(!res.ok){
    throw new Error("Failed to fetch students");
  }
  return res.json();
}

const Layout = ({ children }) => {
  const studentData = getAllStudents();
  console.log(studentData);
  return (
    <div className='flex flex-row'>
      <div className="basis-1/4">
        <Sidebar studentList = {studentData.data} />
      </div>
      <main className="p-5 basis-3/4">{children}</main>
      </div>
  );
};

export default Layout;
