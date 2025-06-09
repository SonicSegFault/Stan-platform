import Sidebar from "../components/Sidebar"

const DashBoard = () => {
    return (
        <>
            <div>
                <Sidebar />
            </div>
            <div className="min-h-screen bg-cover bg-center"
                style={{ backgroundImage: "url('dashboardunderconstruction.png')" }}
            />

        </>
    )
}

export default DashBoard

