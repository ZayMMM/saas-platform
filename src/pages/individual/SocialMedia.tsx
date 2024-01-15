import { Card, ListGroup } from "react-bootstrap";
import SocialMediaItem from "./SocialMediaItem";
import AllImage from "../../assets/images/social-media/all.svg";
import FacebookImage from "../../assets/images/social-media/facebook.svg";
import TwitterImage from "../../assets/images/social-media/twitter.svg";
import BlogImage from "../../assets/images/social-media/blog.svg";
import ForumImage from "../../assets/images/social-media/forturm.svg";
import NewsImage from "../../assets/images/social-media/news.svg";
import VideoImage from "../../assets/images/social-media/video.svg";
import PhotoImage from "../../assets/images/social-media/photo.svg";
import React from "react";
import CustomDatePicker from "../../components/Date/CustomDatePicker";
import ExportButton from "../../components/Button/ExportButton";

interface SocialMediaProps {
  title: string;
  showYearPicker?: boolean;
  showExport?: boolean;
  selectedDate?: Date;
  onDateChange?: (date: any) => void;
}

const SocialMedia: React.FC<SocialMediaProps> = ({
  showYearPicker = false,
  showExport = false,
  selectedDate,
  onDateChange,
  title,
}) => {
  return (
    <>
      <Card className="dashboard-card">
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between w-100">
            <p className="chartTitle mb-0">{title}</p>
            <div className="d-flex gap-2 align-items-center">
              {showYearPicker && (
                <CustomDatePicker
                  hideAddon={false}
                  dateFormat="yyyy"
                  timeCaption="time"
                  value={selectedDate}
                  showYearPicker={true}
                  onChange={(date) => {
                    if (onDateChange) {
                      onDateChange(date);
                    }
                  }}
                />
              )}
              <ExportButton />
            </div>
          </div>
          <ListGroup horizontal className="social-media-list mt-4">
            <ListGroup.Item className="w-100 p-1 active">
              <SocialMediaItem
                image={AllImage}
                altText="All"
                label="All"
                count="12345"
              />
            </ListGroup.Item>
            <ListGroup.Item className="w-100 p-1">
              <SocialMediaItem
                image={FacebookImage}
                altText="Facebook"
                label="Facebook"
                count="12345"
              />
            </ListGroup.Item>

            <ListGroup.Item className="w-100 p-1">
              <SocialMediaItem
                image={TwitterImage}
                altText="Twitter"
                label="Twitter"
                count="12345"
              />
            </ListGroup.Item>
            <ListGroup.Item className="w-100 p-1">
              <SocialMediaItem
                image={BlogImage}
                altText="Blog"
                label="Blog"
                count="12345"
              />
            </ListGroup.Item>
            <ListGroup.Item className="w-100 p-1">
              <SocialMediaItem
                image={ForumImage}
                altText="Forums"
                label="Forums"
                count="12345"
              />
            </ListGroup.Item>

            <ListGroup.Item className="w-100 p-1">
              <SocialMediaItem
                image={NewsImage}
                altText="News"
                label="News"
                count="12345"
              />
            </ListGroup.Item>
            <ListGroup.Item className="w-100 p-1">
              <SocialMediaItem
                image={VideoImage}
                altText="Video"
                label="Video"
                count="12345"
              />
            </ListGroup.Item>
            <ListGroup.Item className="w-100 p-1">
              <SocialMediaItem
                image={PhotoImage}
                altText="Photo"
                label="Photo"
                count="12345"
              />
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default SocialMedia;