import { Card, CardContent, Typography } from "@mui/material";
import UploadImage from "../components/UploadImage";
import Sidebar from "../components/Sidebar";

const NoticeCard = () => {
  return (
    <div className="flex gap-8 p-6">
      <Sidebar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {["notice1", "notice2", "notice3", "notice4"].map((slot) => (
          <Card key={slot} className="p-4 shadow-lg rounded-xl">
            <CardContent className="flex flex-col items-center">
              <Typography variant="h5" className="font-semibold mb-2">
                Upload {slot}
              </Typography>
              <UploadImage noticeSlot={slot} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NoticeCard;
