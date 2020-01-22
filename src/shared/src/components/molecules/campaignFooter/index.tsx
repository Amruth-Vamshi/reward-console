import * as React from "react";
import { Button } from "antd";
import "./foo.css";

interface iProps {
  nextButtonText?: String;
  loading?: any;
  saveDraftText?: String;
  saveDraftButtonClass?: any;
  nextButtonClass?: any;
  saveDraft?: any;
  goToPage2?: any;
}

const CampaignFooter = ({
  nextButtonText,
  loading,
  saveDraftText,
  saveDraftButtonClass,
  nextButtonClass,
  saveDraft,
  goToPage2
}: iProps) => {
  return (
    <div className="">
      <Button
        loading={loading}
        className={nextButtonClass}
        onClick={goToPage2}
        type="primary"
      >
        {nextButtonText}
      </Button>
      {saveDraftText && (
        <Button
          className={saveDraftButtonClass}
          onClick={saveDraft}
          type="link"
        >
          {saveDraftText}
        </Button>
      )}
    </div>
  );
};

export default CampaignFooter;
