import PromotionStepper from "../../components/promotionStepper/PromotionStepper";

export default function Promotions() {
  return (
    <div>
        <div className="">
            <h1 className=" py-6 md:py-10 text-xl font-bold text-gray-700 text-center">Developer</h1>
            <PromotionStepper currentStep={3}/>
        </div>
        <div>
            <h1 className="py-6 md:py-10 text-xl font-bold text-gray-700 text-center">Bootcamp</h1>
            <div className="mx-auto w-12 h-12 bg-teal-500 text-white rounded-full flex justify-center items-center">1</div>
        </div>
    </div>
  )
}
