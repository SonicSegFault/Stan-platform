import { Card, CardContent, CardMedia } from "@mui/material";
import Reveal from "../theme/Reveal";
import ImageReveal from "../theme/ImageReveal";

const Section0 = () => {
  return (
    <>
      <div className="mt-8 flex flex-col items-center justify-center space-x-4">
        <img src="/stanlogo.png" className="h-10" />
        <Reveal color="gray-500">
          <p className="text-xl text-gray-500 mt-2 font-roboto">
            विज्ञान शिक्षक समाज नेपाल
          </p>
        </Reveal>
        <Reveal  color="gray-500">
          <h1 className="text-3xl font-bold text-gray-600">
            Representing over +30,000 school-level science teachers across Nepal
          </h1>
        </Reveal>
      </div>

      <div className="px-10 mt-10 hidden sm:grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center max-w-[1280px] mx-auto">
        <Card
          sx={{ maxWidth: 300 }}
          className="transition-transform duration-500 transform hover:scale-110 hover:shadow-xl h-full"
        >
          <ImageReveal>
            <CardMedia sx={{ height: 140 }} image="" />
          </ImageReveal>
          <CardContent className="flex flex-col h-full">
            <Reveal  color="gray-500">
              <h1 className="font-bold text-2xl text-gray-600">
                Connecting science with the community
              </h1>
            </Reveal>
            <Reveal  color="gray-500">
              <p className="mt-2 text-gray-500 flex-grow">
                Connecting science with the community to enhance practical
                learning experiences.
              </p>
            </Reveal>
          </CardContent>
        </Card>

        <Card
          sx={{ maxWidth: 300 }}
          className="transition-transform duration-500 transform hover:scale-110 hover:shadow-xl h-full"
        >
          <ImageReveal>
            <CardMedia sx={{ height: 140 }} image="" />
          </ImageReveal>
          <CardContent className="flex flex-col h-full">
            <Reveal  color="gray-500">
              <h1 className="font-bold text-2xl text-gray-600">
                Promoting scientific thinking and skill development
              </h1>
            </Reveal>
            <Reveal  color="gray-500">
              <p className="mt-2 text-gray-500 flex-grow">
                Promoting scientific thinking and skill development to foster
                innovation.
              </p>
            </Reveal>
          </CardContent>
        </Card>

        <Card
          sx={{ maxWidth: 300 }}
          className="transition-transform duration-500 transform hover:scale-110 hover:shadow-xl h-full"
        >
          <ImageReveal>
            <CardMedia
              sx={{ height: 140 }}
              image=""
              className="object-contain"
            />
          </ImageReveal>
          <CardContent className="flex flex-col h-full">
            <Reveal  color="gray-500">
              <h1 className="font-bold text-2xl text-gray-600">
                Encouraging research-oriented practical teaching
              </h1>
            </Reveal>
            <Reveal  color="gray-500">
              <p className="mt-2 text-gray-500 flex-grow">
                Encouraging research-oriented practical teaching to advance
                academic excellence.
              </p>
            </Reveal>
          </CardContent>
        </Card>

        <Card
          sx={{ maxWidth: 300 }}
          className="transition-transform duration-500 transform hover:scale-110 hover:shadow-xl h-full"
        >
          <ImageReveal>
            <CardMedia
              sx={{ height: 140 }}
              image=""
              className="object-contain"
            />
          </ImageReveal>
          <CardContent className="flex flex-col h-full">
            <Reveal  color="gray-500">
              <h1 className="font-bold text-2xl text-gray-600">
                Establishing science centers and cities.
              </h1>
            </Reveal>
            <Reveal  color="gray-500">
              <p className="mt-2 text-gray-500 flex-grow">
                Establishing science centers and cities to create hubs of
                innovation and learning.
              </p>
            </Reveal>
          </CardContent>
        </Card>
      </div>

      <div className="sm:hidden xs:flex mt-10 gap-8 place-items-center">
      <Card
          sx={{ maxWidth: 300 }}
          className="transition-transform duration-500 transform hover:scale-110 hover:shadow-xl h-full"
        >
          <ImageReveal>
            <CardMedia sx={{ height: 140 }} image="" />
          </ImageReveal>
          <CardContent className="flex flex-col h-full">
            <Reveal  color="gray-500">
              <h1 className="font-bold text-2xl text-gray-600">
                Connecting science with the community
              </h1>
            </Reveal>
            <Reveal  color="gray-500">
              <p className="mt-2 text-gray-500 flex-grow">
                Connecting science with the community to enhance practical
                learning experiences.
              </p>
            </Reveal>
          </CardContent>
        </Card>

        <Card
          sx={{ maxWidth: 300 }}
          className="transition-transform duration-500 transform hover:scale-110 hover:shadow-xl h-full"
        >
          <ImageReveal>
            <CardMedia sx={{ height: 140 }} image="" />
          </ImageReveal>
          <CardContent className="flex flex-col h-full">
            <Reveal  color="gray-500">
              <h1 className="font-bold text-2xl text-gray-600">
                Promoting scientific thinking and skill development
              </h1>
            </Reveal>
            <Reveal  color="gray-500">
              <p className="mt-2 text-gray-500 flex-grow">
                Promoting scientific thinking and skill development to foster
                innovation.
              </p>
            </Reveal>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Section0;
