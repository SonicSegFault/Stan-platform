import MiniPageHeader from "../layout/MiniPageHeader"


const UnderConstruction = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('siteunderconstruction.jpg')" }}
    >
      <MiniPageHeader/>
    </div>
  )
}

export default UnderConstruction
