import CountrySlider from "../../components/Coutries/CountrySlider"; 
const Dashboard: React.FC = () => {
    return( 
        <>
            <div className="dashboard-container max-w-3xl mx-auto p-4">
                <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>
                <CountrySlider />
            </div>
        </>
    )
}
export default Dashboard;