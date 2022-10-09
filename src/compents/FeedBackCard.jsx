import { quotes } from "../assets"

const FeedBackCard = ({content, name, title, img, animation}) => {
  return (
    <div 
      className={`flex flex-col justify-between  px-10 py-12 rounded-[20px] max-w-[370px] mr-0 sm:mr-5 md:mr-10 my-5 feedback-card`}
    >
      <img src={quotes} alt="quotes" className="w-[42px] h-[27px] object-contain"/>
      <p className="text-white font-poppins text-[18px] leading-[32px] max-w-[290px] mt-10">
        {content}
      </p>
      <div className="flex mt-6">
        <img src={img} alt={img} className="w-[48px] h-[48px]"/>
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins text-white text-[20px] leading-[32px] font-semibold">{name}</h4>
          <p className="font-poppins text-dimWhite text-[16px] leading-[24px] font-normal">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedBackCard