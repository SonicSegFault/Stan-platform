import ImageReveal from "../theme/ImageReveal";

type ProgramCardProps = {
    img: string;
    title: string;
    subtext: string;
};

const ProgramCard = ({ img, title, subtext }: ProgramCardProps) => {
    return (
        <ImageReveal>
            <div className="p-4 bg-white shadow-lg rounded-lg">
                <img src={img} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="text-gray-600">{subtext}</p>
            </div>
        </ImageReveal>
    );
};

export default ProgramCard;
